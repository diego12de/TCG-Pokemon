import React from 'react';
import { motion } from 'motion/react';
import { InkButton } from '../ui/InkButton';

const TOURNAMENTS = [
  { id: 1, name: "FNM DRAFT", date: "VIERNES 20:00", format: "DRAFT", capacity: 12, total: 20, price: "15€", game: "MAGIC", color: "bg-[#2B6CB0]", rotation: -2 },
  { id: 2, name: "LOCAL TOURNAMENT", date: "SÁBADO 10:30", format: "STANDARD", capacity: 20, total: 20, price: "5€", game: "POKÉMON", color: "bg-[#E53E3E]", rotation: 3, soldOut: true },
  { id: 3, name: "PRERELEASE", date: "DOMINGO 16:00", format: "SEALED", capacity: 8, total: 32, price: "30€", game: "ONE PIECE", color: "bg-[#C53030]", rotation: -1 },
  { id: 4, name: "CASUAL PLAY", date: "JUEVES 18:00", format: "COMMANDER", capacity: 15, total: 40, price: "FREE", game: "MAGIC", color: "bg-[#2B6CB0]", rotation: 2 },
];

export function TournamentBulletin() {
  return (
    <section className="py-24 px-6 bg-mid-gray relative overflow-hidden" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.05\'/%3E%3C/svg%3E")' }}>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <h2 className="font-display text-6xl md:text-8xl text-paper text-center mb-16 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          TABLÓN DE TORNEOS
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {TOURNAMENTS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 50, rotate: t.rotation * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: t.rotation }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 50 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative w-full max-w-[320px] bg-paper p-6 shadow-[4px_4px_12px_rgba(0,0,0,0.4)] cursor-pointer group"
            >
              {/* Push Pin */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blood shadow-md z-20">
                <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-white/50"></div>
              </div>

              {/* Game Stamp */}
              <div className={`${t.color} text-white font-mono text-[10px] font-bold uppercase px-2 py-1 inline-block mb-4`}>
                {t.game}
              </div>

              <h3 className="font-display text-3xl text-ink leading-none mb-2">{t.name}</h3>
              <p className="font-mono text-sm text-blood font-bold mb-4">{t.date}</p>
              
              <div className="border-2 border-ink inline-block px-2 py-1 font-body text-xs font-bold uppercase mb-6">
                {t.format}
              </div>

              {/* Capacity Bar */}
              <div className="mb-6">
                <div className="w-full h-[6px] bg-gray-200 border-b-[2px] border-ink relative overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-blood transition-all duration-1000" 
                    style={{ width: `${(t.capacity / t.total) * 100}%` }}
                  ></div>
                </div>
                <p className="font-mono text-[11px] text-text-muted mt-2 text-right">
                  {t.capacity}/{t.total} PLAZAS
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <span className={`font-display text-4xl ${t.price === 'FREE' ? 'text-green-600' : 'text-blood'}`}>
                  {t.price}
                </span>
                <InkButton className="text-sm px-4 py-2" disabled={!!t.soldOut}>
                  {t.soldOut ? 'COMPLETO' : 'APUNTARME'}
                </InkButton>
              </div>

              {/* Sold Out Stamp */}
              {t.soldOut && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                  <div className="font-display text-5xl text-blood border-4 border-blood px-4 py-2 -rotate-12 opacity-80 backdrop-blur-sm bg-white/30">
                    COMPLETO
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#" className="font-mono text-lg text-paper font-bold uppercase tracking-widest hover:text-blood transition-colors underline decoration-2 underline-offset-8">
            VER CALENDARIO COMPLETO →
          </a>
        </div>
      </div>
    </section>
  );
}
