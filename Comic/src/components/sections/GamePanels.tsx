import React from 'react';
import { motion } from 'motion/react';
import { ChapterBadge } from '../ui/ChapterBadge';

const games = [
  { id: 'PKMN-001', name: 'POKÉMON', color: 'bg-[#E53E3E]', count: '12.4K', colSpan: 'col-span-12 md:col-span-7', rowSpan: 'row-span-2' },
  { id: 'MTG-002', name: 'MAGIC', color: 'bg-[#2B6CB0]', count: '45.1K', colSpan: 'col-span-12 md:col-span-5', rowSpan: 'row-span-1' },
  { id: 'YGO-003', name: 'YU-GI-OH!', color: 'bg-[#D69E2E]', count: '8.2K', colSpan: 'col-span-12 md:col-span-5', rowSpan: 'row-span-1' },
  { id: 'OP-004', name: 'ONE PIECE', color: 'bg-[#C53030]', count: '3.5K', colSpan: 'col-span-12 md:col-span-4', rowSpan: 'row-span-1' },
  { id: 'LOR-005', name: 'LORCANA', color: 'bg-[#553C9A]', count: '1.2K', colSpan: 'col-span-12 md:col-span-4', rowSpan: 'row-span-1' },
  { id: 'FAB-006', name: 'FLESH & BLOOD', color: 'bg-[#276749]', count: '2.8K', colSpan: 'col-span-12 md:col-span-4', rowSpan: 'row-span-1' },
];

export function GamePanels() {
  return (
    <section className="py-24 px-6 max-w-[1440px] mx-auto bg-paper">
      <div className="mb-12">
        <ChapterBadge chapter="02" title="CATEGORÍAS" />
        <h2 className="text-6xl md:text-8xl text-ink">
          <span className="manga-underline is-visible">ELIGE TU ARMA</span>
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-2 auto-rows-[200px] md:auto-rows-[250px]">
        {games.map((game, i) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`${game.colSpan} ${game.rowSpan} ${game.color} relative group cursor-pointer panel-border overflow-hidden`}
          >
            {/* Halftone Overlay */}
            <div className="absolute inset-0 halftone-heavy-black opacity-50 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
            
            {/* Panel ID */}
            <div className="absolute top-3 left-3 bg-paper px-2 py-1 font-mono text-[10px] uppercase border-2 border-ink z-10">
              [ GAME ID: {game.id} ]
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <h3 className="font-display text-5xl md:text-7xl text-white tracking-wider filter brightness-0 invert group-hover:scale-110 transition-transform duration-300">
                {game.name}
              </h3>
            </div>

            {/* Bottom Dialogue Box */}
            <div className="absolute bottom-4 right-4 bg-white border-[3px] border-ink px-4 py-2 shadow-hard z-10 flex items-center gap-3 group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] transition-transform">
              <span className="font-display text-xl text-ink">{game.name}</span>
              <span className="font-mono text-sm text-blood font-bold">{game.count}</span>
            </div>

            {/* Hover Effects */}
            <div className="absolute inset-0 border-[4px] border-blood opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
