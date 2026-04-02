import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { Mic, MicOff, Loader2 } from 'lucide-react';

// Initialize the Gemini API client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export function LiveVoiceWidget() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const sessionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  
  // Audio playback queue
  const audioQueueRef = useRef<Float32Array[]>([]);
  const isPlayingRef = useRef(false);
  const nextPlayTimeRef = useRef(0);

  // Cleanup function
  const cleanup = () => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }
    if (sourceRef.current) {
      sourceRef.current.disconnect();
      sourceRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    setIsConnected(false);
    setIsConnecting(false);
    setIsSpeaking(false);
    audioQueueRef.current = [];
    isPlayingRef.current = false;
  };

  useEffect(() => {
    return cleanup;
  }, []);

  const playNextAudio = () => {
    if (!audioContextRef.current || audioQueueRef.current.length === 0) {
      isPlayingRef.current = false;
      setIsSpeaking(false);
      return;
    }

    isPlayingRef.current = true;
    setIsSpeaking(true);
    const audioData = audioQueueRef.current.shift()!;
    
    const audioBuffer = audioContextRef.current.createBuffer(1, audioData.length, 24000);
    audioBuffer.getChannelData(0).set(audioData);
    
    const source = audioContextRef.current.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContextRef.current.destination);
    
    const currentTime = audioContextRef.current.currentTime;
    const startTime = Math.max(currentTime, nextPlayTimeRef.current);
    
    source.start(startTime);
    nextPlayTimeRef.current = startTime + audioBuffer.duration;
    
    source.onended = () => {
      if (audioQueueRef.current.length === 0) {
        isPlayingRef.current = false;
        setIsSpeaking(false);
      } else {
        playNextAudio();
      }
    };
  };

  const base64ToFloat32Array = (base64: string) => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const int16Array = new Int16Array(bytes.buffer);
    const float32Array = new Float32Array(int16Array.length);
    for (let i = 0; i < int16Array.length; i++) {
      float32Array[i] = int16Array[i] / 32768.0;
    }
    return float32Array;
  };

  const float32ArrayToBase64 = (float32Array: Float32Array) => {
    const int16Array = new Int16Array(float32Array.length);
    for (let i = 0; i < float32Array.length; i++) {
      const s = Math.max(-1, Math.min(1, float32Array[i]));
      int16Array[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
    }
    const bytes = new Uint8Array(int16Array.buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  const toggleConnection = async () => {
    if (isConnected || isConnecting) {
      cleanup();
      return;
    }

    setIsConnecting(true);
    setError(null);

    try {
      // 1. Request Microphone Access
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          sampleRate: 16000,
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
        } 
      });
      mediaStreamRef.current = stream;

      // 2. Setup Audio Context
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      audioContextRef.current = audioCtx;
      
      // 3. Connect to Gemini Live API
      const sessionPromise = ai.live.connect({
        model: "gemini-2.5-flash-native-audio-preview-12-2025",
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Zephyr" } },
          },
          systemInstruction: "Eres el asistente experto de la tienda INK & IRON TCG. Eres directo, conoces todas las cartas de Magic, Pokémon y Yu-Gi-Oh. Hablas con un tono ligeramente rudo pero muy servicial, como un veterano de los torneos. Responde de forma concisa.",
        },
        callbacks: {
          onopen: () => {
            setIsConnected(true);
            setIsConnecting(false);
            
            // Setup microphone processing
            const source = audioCtx.createMediaStreamSource(stream);
            sourceRef.current = source;
            
            // Use ScriptProcessorNode for raw PCM access (deprecated but reliable for this specific need without AudioWorklet complexity in a single file)
            const processor = audioCtx.createScriptProcessor(4096, 1, 1);
            processorRef.current = processor;
            
            processor.onaudioprocess = (e) => {
              if (!sessionRef.current) return;
              const inputData = e.inputBuffer.getChannelData(0);
              const base64Audio = float32ArrayToBase64(inputData);
              
              sessionPromise.then((session) => {
                session.sendRealtimeInput({
                  audio: { data: base64Audio, mimeType: 'audio/pcm;rate=16000' }
                });
              }).catch(console.error);
            };

            source.connect(processor);
            processor.connect(audioCtx.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            if (message.serverContent?.interrupted) {
              audioQueueRef.current = [];
              isPlayingRef.current = false;
              setIsSpeaking(false);
              nextPlayTimeRef.current = 0;
            }

            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio) {
              const audioData = base64ToFloat32Array(base64Audio);
              audioQueueRef.current.push(audioData);
              if (!isPlayingRef.current) {
                playNextAudio();
              }
            }
          },
          onclose: () => {
            cleanup();
          },
          onerror: (err) => {
            console.error("Live API Error:", err);
            setError("Error de conexión");
            cleanup();
          }
        }
      });

      sessionRef.current = await sessionPromise;

    } catch (err) {
      console.error("Setup Error:", err);
      setError("No se pudo acceder al micrófono");
      cleanup();
    }
  };

  return (
    <div 
      id="ai-voice-widget"
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2"
    >
      {error && (
        <div className="bg-paper border-[2px] border-ink px-3 py-1 font-mono text-xs text-blood shadow-hard mb-2">
          {error}
        </div>
      )}
      
      {isConnected && (
        <div className="bg-paper border-[3px] border-ink px-4 py-2 shadow-hard flex items-center gap-3 mb-2">
          <div className={`w-3 h-3 rounded-full ${isSpeaking ? 'bg-blood animate-pulse' : 'bg-green-500'}`}></div>
          <span className="font-display text-xl text-ink">
            {isSpeaking ? 'HABLANDO...' : 'ESCUCHANDO...'}
          </span>
        </div>
      )}

      <button
        onClick={toggleConnection}
        disabled={isConnecting}
        aria-label="Asistente de Voz"
        className={`
          w-[68px] h-[68px] flex items-center justify-center
          border-[3px] border-ink transition-all duration-200
          ${isConnected ? 'bg-ink text-paper shadow-[5px_5px_0_#CC0000] translate-x-[-2px] translate-y-[-2px]' : 'bg-paper text-ink shadow-[5px_5px_0_#0A0A0A] hover:shadow-[7px_7px_0_#CC0000] hover:-translate-y-1 hover:-translate-x-1'}
        `}
      >
        {isConnecting ? (
          <Loader2 className="w-8 h-8 animate-spin" />
        ) : isConnected ? (
          <Mic className="w-8 h-8 text-blood" />
        ) : (
          <MicOff className="w-8 h-8" />
        )}
      </button>
    </div>
  );
}
