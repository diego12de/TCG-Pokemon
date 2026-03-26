import React from 'react';
import { InkButton } from '../ui/InkButton';

export function BuylistInk() {
  return (
    <section className="py-24 px-6 bg-paper relative">
      <div className="max-w-[900px] mx-auto bg-paper border-[4px] border-ink shadow-hard-lg p-8 md:p-16 relative">
        
        {/* Decorative Top Rule */}
        <div className="w-full h-4 border-y-[4px] border-ink mb-12 flex flex-col justify-center">
          <div className="w-full h-[2px] bg-ink"></div>
        </div>

        <div className="text-center mb-12">
          <h2 className="font-display text-7xl md:text-9xl text-blood leading-none">COMPRAMOS</h2>
          <h3 className="font-display text-5xl md:text-7xl text-ink leading-none mt-2">TUS CARTAS</h3>
        </div>

        {/* Decorative Middle Rule */}
        <div className="w-full h-2 border-y-[2px] border-ink mb-12"></div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 relative">
          <div className="font-body text-lg text-ink leading-relaxed">
            <p>
              ¿Tienes cartas que ya no usas? Somos compradores serios. Precios justos, pago rápido y sin mareos.
            </p>
            <p className="mt-4 font-bold">
              Trae tu colección a la tienda o envíanos tu lista online.
            </p>
          </div>
          
          {/* Vertical Divider (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-ink -translate-x-1/2"></div>

          <div className="font-mono text-sm text-ink flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-blood font-bold text-xl">✓</span>
              <span>Singles sueltas de valor</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blood font-bold text-xl">✓</span>
              <span>Colecciones completas</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blood font-bold text-xl">✓</span>
              <span>Lotes sin clasificar (Bulk)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blood font-bold text-xl">✓</span>
              <span>Material sellado antiguo</span>
            </div>
          </div>
        </div>

        {/* Price Highlight Box */}
        <div className="border-[4px] border-blood bg-blood/10 p-8 text-center mb-12 shadow-hard-red">
          <p className="font-display text-3xl md:text-4xl text-blood uppercase tracking-wide">
            PAGO INMEDIATO EN EFECTIVO <br/>
            O +10% EN CRÉDITO TIENDA
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <InkButton className="text-xl">ACCEDER A BUYLIST</InkButton>
          <InkButton variant="red" className="text-xl">ENVIAR TASACIÓN ONLINE</InkButton>
        </div>

        {/* Footer Rule */}
        <div className="w-full h-2 border-y-[2px] border-ink mb-6"></div>
        
        <p className="font-mono text-xs text-text-muted text-center uppercase">
          Condiciones en tienda. Sujeto a revisión de estado. Actualizamos precios cada 48H.
        </p>

      </div>
    </section>
  );
}
