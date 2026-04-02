import React from 'react';

interface MangaCardProps {
  name: string;
  set: string;
  price: string;
  originalPrice?: string;
  condition: 'NM' | 'LP' | 'MP' | 'HP';
  rarity: string;
  image: string;
  stock: number;
}

export function MangaCard({ name, set, price, originalPrice, condition, rarity, image, stock }: MangaCardProps) {
  return (
    <div className="group relative bg-paper panel-border shadow-hard hover-lift flex flex-col h-full">
      {/* Top Bar */}
      <div className="bg-ink h-8 flex items-center justify-between px-2 text-paper font-mono text-[10px]">
        <span>{condition}</span>
        <span>{rarity}</span>
      </div>

      {/* Image Area */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-white flex-shrink-0">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {stock === 0 && (
          <div className="absolute inset-0 bg-ink/50 flex items-center justify-center backdrop-grayscale">
            <div className="bg-blood text-white font-display text-2xl px-4 py-1 -rotate-12 shadow-hard">
              AGOTADO
            </div>
          </div>
        )}
      </div>

      {/* Bottom Strip */}
      <div className="p-3 flex flex-col flex-grow justify-between bg-paper relative z-10">
        <div>
          <h3 className="font-body font-bold text-ink text-sm leading-tight line-clamp-2">{name}</h3>
          <p className="font-mono text-[10px] text-text-muted mt-1">{set}</p>
        </div>

        <div className="mt-3 relative">
          <div className="absolute inset-0 speed-lines-bg opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
          <div className="flex items-end gap-2 relative z-10">
            <span className="font-display text-2xl text-blood leading-none">{price}</span>
            {originalPrice && (
              <span className="font-mono text-xs text-text-muted line-through mb-1">{originalPrice}</span>
            )}
          </div>
        </div>

        {/* Stock Status */}
        <div className="mt-3">
          {stock > 3 ? (
            <div className="h-[3px] w-full bg-green-500"></div>
          ) : stock > 0 ? (
            <div className="flex flex-col gap-1">
              <div className="h-[3px] w-full bg-blood"></div>
              <span className="font-mono text-[10px] text-blood uppercase">Últimas {stock}</span>
            </div>
          ) : null}
        </div>
      </div>

      {/* Quick Add Button */}
      <div className="absolute bottom-0 left-0 w-full translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 z-20">
        <button className="w-full bg-ink text-paper font-display text-sm py-2 hover:bg-blood transition-colors">
          AÑADIR AL CARRITO
        </button>
      </div>
    </div>
  );
}
