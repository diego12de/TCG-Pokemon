import React, { useState } from 'react';
import { ChapterBadge } from '../ui/ChapterBadge';
import { InkButton } from '../ui/InkButton';
import { motion } from 'motion/react';

export function InkForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-32 px-6 bg-paper relative flex justify-center">
      <div className="absolute inset-0 halftone-light pointer-events-none opacity-30"></div>
      
      <div className="w-full max-w-[800px] bg-paper border-[4px] border-ink shadow-hard-lg relative z-10 overflow-hidden">
        
        {/* Top Decoration */}
        <div className="absolute top-0 left-0 w-full h-32 bg-ink/5 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="font-display text-[150px] text-ink opacity-5 -rotate-6 select-none">JOIN</span>
        </div>

        <div className="p-8 md:p-12 relative z-10">
          <div className="mb-10 text-center">
            <ChapterBadge chapter="09" title="GUILD REGISTRATION" />
            <h2 className="font-display text-5xl md:text-7xl text-ink mb-4">ÚNETE AL GREMIO</h2>
            <p className="font-body text-mid-gray text-lg max-w-md mx-auto">
              Novedades, torneos y restocks antes que nadie. Sin spam. Nunca.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="flex flex-col">
                  <label className="font-mono text-[11px] font-bold uppercase mb-2 text-ink">TU JUEGO PRINCIPAL</label>
                  <select className="bg-paper border-[2px] border-ink p-3 font-body text-sm focus:outline-none focus:border-blood focus:ring-1 focus:ring-blood transition-colors appearance-none rounded-none">
                    <option>Magic: The Gathering</option>
                    <option>Pokémon TCG</option>
                    <option>Yu-Gi-Oh!</option>
                    <option>One Piece</option>
                    <option>Lorcana</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="font-mono text-[11px] font-bold uppercase mb-2 text-ink">TIPO DE JUGADOR</label>
                  <select className="bg-paper border-[2px] border-ink p-3 font-body text-sm focus:outline-none focus:border-blood focus:ring-1 focus:ring-blood transition-colors appearance-none rounded-none">
                    <option>Competitivo (Torneos)</option>
                    <option>Casual / Coleccionista</option>
                    <option>Inversor</option>
                    <option>Principiante</option>
                  </select>
                </div>

              </div>

              <div className="flex flex-col">
                <label className="font-mono text-[11px] font-bold uppercase mb-2 text-ink">CORREO ELECTRÓNICO</label>
                <input 
                  type="email" 
                  required
                  placeholder="tu@correo.com"
                  className="bg-paper border-[2px] border-ink p-4 font-mono text-sm focus:outline-none focus:border-blood focus:ring-1 focus:ring-blood transition-colors rounded-none placeholder:text-gray-400"
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-ink text-paper font-display text-2xl py-5 shadow-hard-red hover-lift-red uppercase tracking-widest"
                >
                  REGISTRAR EN EL GREMIO →
                </button>
              </div>
            </form>
          ) : (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 mx-auto bg-blood rounded-full flex items-center justify-center mb-6 shadow-hard">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="font-display text-4xl text-ink mb-2">¡BIENVENIDO/A, JUGADOR/A!</h3>
              <p className="font-mono text-sm text-text-muted">Revisa tu correo para confirmar tu inscripción.</p>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
