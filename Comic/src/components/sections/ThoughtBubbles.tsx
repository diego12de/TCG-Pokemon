import React from 'react';
import { ChapterBadge } from '../ui/ChapterBadge';
import { SpeechBubble } from '../ui/SpeechBubble';

export function ThoughtBubbles() {
  return (
    <section className="py-32 px-6 bg-paper relative overflow-hidden min-h-[800px]">
      <div className="absolute inset-0 halftone-medium pointer-events-none opacity-20"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="mb-16 text-center">
          <ChapterBadge chapter="07" title="COMUNIDAD" />
          <h2 className="text-5xl md:text-7xl text-ink">
            <span className="manga-underline is-visible">LO QUE DICEN DE NOSOTROS</span>
          </h2>
        </div>

        {/* Scattered Bubbles Container */}
        <div className="relative w-full h-[600px] mt-12">
          
          <SpeechBubble 
            type="speech" 
            text="Las cartas llegan en perfecto estado y los precios son iguales que CardMarket. Envío rapidísimo." 
            author="MARÍA G." 
            className="top-0 left-[5%] md:left-[10%] w-[300px]"
            delay={0.1}
          />

          <SpeechBubble 
            type="thought" 
            text="Encontré una carta que llevaba 2 años buscando. Primera búsqueda en la web y ahí estaba." 
            author="CARLOS M." 
            className="top-[150px] right-[5%] md:right-[15%] w-[280px]"
            delay={0.3}
          />

          <SpeechBubble 
            type="shout" 
            text="¡¡GANADOR DEL TORNEO!! Con mazo armado enteramente en la tienda. ¡El staff es increíble!" 
            author="JUAN P." 
            className="top-[300px] left-[10%] md:left-[25%] w-[320px]"
            delay={0.5}
          />

          <SpeechBubble 
            type="speech" 
            text="La mejor buylist de España. Pagan rápido y la valoración es súper justa. 10/10." 
            author="ELENA R." 
            className="bottom-0 right-[10%] md:right-[20%] w-[290px]"
            delay={0.7}
          />

        </div>
      </div>
    </section>
  );
}
