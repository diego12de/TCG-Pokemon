import React from 'react';
import { ChapterBadge } from '../ui/ChapterBadge';
import { InkButton } from '../ui/InkButton';

export function StrikeZone() {
  return (
    <section className="py-24 px-6 bg-ink relative">
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        <div className="mb-16 text-center">
          <ChapterBadge chapter="08" title="OFERTAS" inverted />
          <h2 className="text-6xl md:text-8xl text-paper mb-4">
            STRIKE ZONE
          </h2>
          <p className="font-body text-blood text-xl font-bold uppercase tracking-widest">
            Tiempo limitado. Sin excusas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Deal 1 */}
          <div className="bg-paper panel-border p-8 shadow-hard flex flex-col items-center text-center h-[400px] justify-between">
            <div>
              <span className="bg-ink text-paper font-mono text-[10px] font-bold uppercase px-2 py-1 mb-4 inline-block">PACK</span>
              <h3 className="font-display text-4xl text-ink mb-2">STARTER COMBO</h3>
              <p className="font-body text-sm text-text-muted mb-4">Mazo preconstruido + 100 sleeves + deckbox premium</p>
              <div className="bg-blood text-white font-mono text-xs font-bold px-3 py-1 inline-block mb-6">AHORRO: 12€</div>
            </div>
            <div>
              <p className="font-display text-5xl text-blood mb-6">34,90€</p>
              <InkButton className="w-full text-lg">ARMAR COMBO</InkButton>
            </div>
          </div>

          {/* Deal 2 (Center Highlight) */}
          <div className="bg-paper border-[5px] border-blood p-10 shadow-hard-red flex flex-col items-center text-center h-[480px] justify-between relative z-10 scale-105">
            <div className="absolute -top-4 bg-blood text-white font-display text-xl px-6 py-1 shadow-hard">
              OFERTA FLASH
            </div>
            <div className="mt-8">
              <div className="font-mono text-blood text-xl font-bold mb-2 animate-pulse">
                SOLO HASTA: 23:45:12
              </div>
              <h3 className="font-display text-5xl text-ink mb-4">DRAFT NIGHT PACK</h3>
              <p className="font-body text-base text-text-muted mb-6">3 Sobres de Draft + Tapete exclusivo + Bebida</p>
              <div className="bg-ink text-paper font-mono text-sm font-bold px-4 py-2 inline-block mb-8">AHORRO: 25€</div>
            </div>
            <div className="w-full">
              <p className="font-display text-7xl text-blood mb-8">22,00€</p>
              <InkButton variant="red" className="w-full text-2xl py-4">COMPRAR YA</InkButton>
            </div>
          </div>

          {/* Deal 3 */}
          <div className="bg-paper panel-border p-8 shadow-hard flex flex-col items-center text-center h-[400px] justify-between">
            <div>
              <span className="bg-ink text-paper font-mono text-[10px] font-bold uppercase px-2 py-1 mb-4 inline-block">INVERSIÓN</span>
              <h3 className="font-display text-4xl text-ink mb-2">CAJA SELLADA</h3>
              <p className="font-body text-sm text-text-muted mb-4">Booster Box (36 sobres) de la última expansión</p>
              <div className="bg-blood text-white font-mono text-xs font-bold px-3 py-1 inline-block mb-6">ENVÍO GRATIS</div>
            </div>
            <div>
              <p className="font-display text-5xl text-blood mb-6">115,00€</p>
              <InkButton className="w-full text-lg">RESERVAR CAJA</InkButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
