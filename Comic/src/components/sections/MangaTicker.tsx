import React from 'react';
import { siteConfig } from '../../config/site';

export function MangaTicker() {
  return (
    <div className="w-full bg-ink overflow-hidden border-b-[2px] border-blood relative flex items-center h-10">
      <div className="absolute left-0 top-0 bottom-0 bg-blood text-white font-mono text-xs font-bold uppercase px-4 flex items-center z-10 shadow-[4px_0_0_#0A0A0A]">
        ⚡ BREAKING
      </div>
      
      <div className="flex-1 overflow-hidden relative">
        <div className="animate-marquee whitespace-nowrap font-display text-paper text-[15px] tracking-widest flex items-center gap-8 pl-32">
          <span>★ NUEVO STOCK MAGIC BLOOMBURROW ★</span>
          <span>BUYLIST ACTIVA — ¡PAGA MÁS QUE NADIE! ★</span>
          <span>TORNEO FNM VIERNES 20H ★</span>
          <span>ENVÍO GRATIS +40€ ★</span>
          <span>PRERRELEASE [SET] — APUNTA YA ★</span>
          {/* Duplicate for seamless loop */}
          <span>★ NUEVO STOCK MAGIC BLOOMBURROW ★</span>
          <span>BUYLIST ACTIVA — ¡PAGA MÁS QUE NADIE! ★</span>
          <span>TORNEO FNM VIERNES 20H ★</span>
          <span>ENVÍO GRATIS +40€ ★</span>
          <span>PRERRELEASE [SET] — APUNTA YA ★</span>
        </div>
      </div>

      <div className="absolute right-0 top-0 bottom-0 bg-ink text-blood font-mono text-xs font-bold px-4 flex items-center z-10 shadow-[-4px_0_0_#0A0A0A]">
        {siteConfig.phone}
      </div>
    </div>
  );
}
