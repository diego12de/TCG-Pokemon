import React from 'react';

export function TrustStrip() {
  const logos = [
    "POKÉMON", "MAGIC: THE GATHERING", "YU-GI-OH!", "ONE PIECE", "LORCANA", "FLESH AND BLOOD"
  ];

  return (
    <div className="w-full bg-ink py-12 relative overflow-hidden">
      {/* Top SVG Divider */}
      <div className="absolute top-0 left-0 w-full h-4">
        <svg viewBox="0 0 1200 12" preserveAspectRatio="none" className="w-full h-full fill-paper">
          <path d="M0,0 L1200,0 L1200,12 Q900,0 600,12 Q300,0 0,12 Z" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6">
        <h3 className="font-mono text-paper text-center text-sm tracking-[0.2em] mb-8 opacity-50">JUGAMOS CON TODOS</h3>
        
        <div className="flex overflow-hidden relative">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 pl-16">
            {logos.map((logo, i) => (
              <span key={i} className="font-display text-4xl text-paper opacity-80 hover:opacity-100 hover:text-blood transition-all duration-300 cursor-pointer hover:scale-110">
                {logo}
              </span>
            ))}
            {/* Duplicate for loop */}
            {logos.map((logo, i) => (
              <span key={`dup-${i}`} className="font-display text-4xl text-paper opacity-80 hover:opacity-100 hover:text-blood transition-all duration-300 cursor-pointer hover:scale-110">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full h-4 rotate-180">
        <svg viewBox="0 0 1200 12" preserveAspectRatio="none" className="w-full h-full fill-paper">
          <path d="M0,0 L1200,0 L1200,12 Q900,0 600,12 Q300,0 0,12 Z" />
        </svg>
      </div>
    </div>
  );
}
