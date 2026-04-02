import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChapterBadge } from '../ui/ChapterBadge';
import { InkButton } from '../ui/InkButton';
import { SpeechBubble } from '../ui/SpeechBubble';

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const title1 = useRef<HTMLHeadingElement>(null);
  const title2 = useRef<HTMLHeadingElement>(null);
  const title3 = useRef<HTMLHeadingElement>(null);
  const speedLines = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Reset initial states
    gsap.set([title1.current, title2.current, title3.current], { y: -100, opacity: 0 });
    gsap.set(speedLines.current, { scale: 0, opacity: 0 });

    tl.to(title1.current, { y: 0, opacity: 1, duration: 0.5, ease: "power4.out" }, 0.7)
      .to(title2.current, { y: 0, opacity: 1, duration: 0.4, ease: "power4.out" }, 0.8)
      .to(title3.current, { y: 0, opacity: 1, duration: 0.5, ease: "power4.out" }, 1.1)
      .to(speedLines.current, { scale: 1, opacity: 0.4, duration: 0.3, ease: "power2.out" }, 1.1)
      .to(speedLines.current, { opacity: 0, duration: 0.5 }, 1.4);

  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-[85vh] bg-paper overflow-hidden panel-border-heavy m-4 lg:m-8 flex flex-col lg:flex-row">
      
      {/* Background Elements */}
      <div className="absolute inset-0 halftone-heavy pointer-events-none w-1/2"></div>
      <div className="absolute inset-0 speed-lines-bg pointer-events-none opacity-20"></div>
      
      {/* Background Sound Effects */}
      <div className="absolute top-1/4 left-10 font-display text-[25vw] text-ink opacity-[0.06] -rotate-12 pointer-events-none leading-none select-none">
        DRAW!
      </div>
      <div className="absolute bottom-10 right-20 font-display text-[20vw] text-ink opacity-[0.06] rotate-12 pointer-events-none leading-none select-none">
        RARE!!
      </div>

      {/* Left Column */}
      <div className="relative z-10 w-full lg:w-[55%] p-8 lg:p-16 flex flex-col justify-center">
        <div className="mb-6">
          <ChapterBadge chapter="01" title="LA TIENDA" />
        </div>
        
        <div className="flex flex-col gap-0 leading-[0.8] mb-8 relative">
          <h1 ref={title1} className="font-display text-ink text-7xl md:text-8xl lg:text-[11rem] tracking-tight">TU TIENDA</h1>
          <h1 ref={title2} className="font-display text-stroke-ink text-6xl md:text-7xl lg:text-[10rem] tracking-tight ml-4">DE CARTAS</h1>
          <div className="relative inline-block">
            <div ref={speedLines} className="absolute inset-0 bg-blood/20 rounded-full blur-xl -z-10"></div>
            <h1 ref={title3} className="font-display text-blood text-8xl md:text-9xl lg:text-[12rem] tracking-tight -ml-2">DEFINITIVA</h1>
          </div>
        </div>

        <p className="font-body text-mid-gray text-lg max-w-[500px] mb-10 leading-relaxed font-medium">
          Encuentra lo que buscas. Precios honestos, stock real, comunidad de verdad.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <InkButton className="text-xl px-10 py-5">ENTRAR A TIENDA</InkButton>
          <a href="#" className="font-mono text-blood font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
            Ver buylist →
          </a>
        </div>

        {/* Social Proof Bubble */}
        <div className="absolute bottom-12 left-12 hidden lg:block">
          <SpeechBubble 
            type="speech" 
            text="★★★★★ Más de 10K jugadores ya confían en nosotros" 
            author="COMUNIDAD" 
            className="w-64"
          />
        </div>
      </div>

      {/* Right Column (Hero Card Canvas) */}
      <div className="relative z-10 w-full lg:w-[45%] p-8 lg:p-16 flex items-center justify-center">
        <div 
          id="hero-card-canvas"
          className="relative w-full max-w-[400px] aspect-[3/4] panel-border-heavy shadow-hard-red bg-white halftone-medium flex items-center justify-center group"
        >
          {/* Manga Crop Marks */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-ink"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-ink"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-ink"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-ink"></div>

          <div className="text-center p-8">
            <h3 className="font-display text-4xl text-ink mb-4">ESPACIO PARA CARTA 3D</h3>
            <p className="font-mono text-sm text-text-muted">Inserta tu asset aquí</p>
          </div>
        </div>
      </div>

    </section>
  );
}
