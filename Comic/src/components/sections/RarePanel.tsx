import React from 'react';
import { motion } from 'motion/react';
import { ChapterBadge } from '../ui/ChapterBadge';
import { InkButton } from '../ui/InkButton';

export function RarePanel() {
  return (
    <section className="w-full min-h-[80vh] bg-ink relative overflow-hidden flex flex-col lg:flex-row items-center py-24">
      
      {/* Background Effects */}
      <div className="absolute inset-0 speed-lines-bg-white opacity-30 pointer-events-none"></div>
      <div className="absolute left-0 top-0 bottom-0 w-1/2 halftone-heavy-black pointer-events-none"></div>
      
      {/* Giant Background Text */}
      <div className="absolute top-1/4 left-0 font-display text-[20vw] text-white opacity-5 pointer-events-none leading-none select-none -rotate-6">
        ULTRA
      </div>
      <div className="absolute bottom-10 right-0 font-display text-[25vw] text-white opacity-5 pointer-events-none leading-none select-none rotate-6">
        SECRET
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-6 flex flex-col lg:flex-row relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-[45%] flex flex-col justify-center pr-0 lg:pr-16 mb-16 lg:mb-0"
        >
          <div className="mb-6">
            <ChapterBadge chapter="05" title="BOSS DROP — CARTA ESPECIAL" inverted />
          </div>
          
          <div className="flex gap-4 mb-4">
            <span className="bg-paper text-ink font-mono text-xs font-bold px-2 py-1">MAGIC: THE GATHERING</span>
            <span className="border-2 border-paper text-paper font-mono text-xs font-bold px-2 py-1">ALPHA (1993)</span>
          </div>

          <h2 className="font-display text-7xl md:text-8xl text-paper mb-2" style={{ textShadow: '-3px 0 #CC0000, 3px 0 #F5F0E8' }}>
            BLACK LOTUS
          </h2>
          
          <p className="font-mono text-paper tracking-widest mb-8">◆◆◆◆ SECRET RARE ◆◆◆◆</p>
          
          <p className="font-body text-[#9A9A9A] text-lg mb-12 max-w-md">
            La joya de la corona. Estado BGS 9.5 Gem Mint. Una pieza de historia que rara vez ve la luz del día. Solo para coleccionistas serios.
          </p>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-10 relative inline-block"
          >
            <p className="font-mono text-sm text-paper opacity-70 mb-1">PRECIO ACTUAL:</p>
            <div className="relative">
              <div className="absolute inset-0 speed-lines-bg-white opacity-40 blur-sm"></div>
              <p className="font-display text-8xl text-blood relative z-10">24.900€</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <InkButton variant="red" className="w-full text-2xl py-4">CONSEGUIRLA AHORA</InkButton>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-mono text-sm text-blood font-bold animate-pulse">QUEDA 1 UNIDAD</p>
              <a href="#" className="font-mono text-sm text-paper opacity-70 hover:opacity-100 hover:text-blood transition-colors underline">
                Añadir a lista de deseos →
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Content (Image) */}
        <motion.div 
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-[55%] flex items-center justify-center relative"
        >
          {/* Floating Card Container */}
          <motion.div 
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[500px] aspect-[3/4] border-[5px] border-paper shadow-hard-red bg-white p-4"
          >
            {/* Speed lines emanating from image */}
            <div className="absolute inset-[-50%] speed-lines-bg-white opacity-20 -z-10" style={{ clipPath: 'circle(50% at 50% 50%)' }}></div>
            
            <img 
              src="https://picsum.photos/seed/blacklotus/800/1120" 
              alt="Black Lotus" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* Crop marks */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-4 border-l-4 border-paper"></div>
            <div className="absolute -top-6 -right-6 w-12 h-12 border-t-4 border-r-4 border-paper"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-4 border-l-4 border-paper"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-4 border-r-4 border-paper"></div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
