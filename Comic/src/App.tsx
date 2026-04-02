/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MangaTicker } from './components/sections/MangaTicker';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { TrustStrip } from './components/sections/TrustStrip';
import { GamePanels } from './components/sections/GamePanels';
import { SinglesBoard } from './components/sections/SinglesBoard';
import { RarePanel } from './components/sections/RarePanel';
import { BuylistInk } from './components/sections/BuylistInk';
import { TournamentBulletin } from './components/sections/TournamentBulletin';
import { ThoughtBubbles } from './components/sections/ThoughtBubbles';
import { StrikeZone } from './components/sections/StrikeZone';
import { InkForm } from './components/sections/InkForm';
import { ContactPanel } from './components/sections/ContactPanel';
import { Footer } from './components/sections/Footer';
import { LiveVoiceWidget } from './components/LiveVoiceWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-paper flex flex-col font-body">
      <MangaTicker />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        
        {/* Stats Bar / Ficha de Personaje */}
        <section className="w-full bg-ink py-16 relative overflow-hidden border-y-[4px] border-ink">
          <div className="absolute inset-0 halftone-heavy-black opacity-30 pointer-events-none"></div>
          <div className="max-w-[1440px] mx-auto px-6 relative z-10">
            <p className="font-mono text-paper text-center text-xs tracking-[0.2em] mb-12 opacity-70">
              FICHA DE TIENDA — DATOS OFICIALES
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x-2 divide-paper/20">
              {[
                { value: "10K+", label: "Cartas en stock" },
                { value: "48H",  label: "Buylist procesada" },
                { value: "★4.9", label: "Reseñas Google" },
                { value: "7",    label: "Años en activo" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center px-4 relative group">
                  <div className="absolute inset-0 speed-lines-bg-white opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
                  <span className="font-display text-5xl md:text-6xl text-blood mb-2 relative z-10">
                    {stat.value.replace(/[^0-9K+]/g, '')}
                    <span className="text-paper">{stat.value.replace(/[0-9K+]/g, '')}</span>
                  </span>
                  <span className="font-body text-paper text-sm font-bold uppercase tracking-wider relative z-10">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GamePanels />
        <SinglesBoard />
        <RarePanel />
        <BuylistInk />
        <TournamentBulletin />
        <ThoughtBubbles />
        <StrikeZone />
        <InkForm />
        <ContactPanel />
      </main>

      <Footer />
      
      {/* Gemini Live API Voice Assistant */}
      <LiveVoiceWidget />
    </div>
  );
}

