import React, { useState } from 'react';
import { ChapterBadge } from '../ui/ChapterBadge';
import { MangaCard } from '../ui/MangaCard';

const MOCK_CARDS = [
  { id: 1, name: "Charizard ex", set: "Paldean Fates", price: "120.00€", originalPrice: "145.00€", condition: "NM", rarity: "★★★", image: "https://picsum.photos/seed/charizard/400/560", stock: 2, category: "🔥 HOT" },
  { id: 2, name: "The One Ring", set: "Tales of Middle-earth", price: "85.50€", condition: "LP", rarity: "◆◆◆◆", image: "https://picsum.photos/seed/onering/400/560", stock: 5, category: "★ RARO" },
  { id: 3, name: "S:P Little Knight", set: "Age of Overlord", price: "95.00€", condition: "NM", rarity: "Secret", image: "https://picsum.photos/seed/splittle/400/560", stock: 0, category: "🔥 HOT" },
  { id: 4, name: "Manga Zoro", set: "Romance Dawn", price: "850.00€", condition: "NM", rarity: "Manga", image: "https://picsum.photos/seed/zoro/400/560", stock: 1, category: "★ RARO" },
  { id: 5, name: "Elsa - Spirit of Winter", set: "The First Chapter", price: "45.00€", originalPrice: "60.00€", condition: "MP", rarity: "Legendary", image: "https://picsum.photos/seed/elsa/400/560", stock: 12, category: "⚡ OFERTA" },
];

const TABS = ["TODOS", "🔥 HOT", "★ RARO", "⚡ OFERTA", "🆕 NUEVO"];

export function SinglesBoard() {
  const [activeTab, setActiveTab] = useState("TODOS");

  const filteredCards = activeTab === "TODOS" 
    ? MOCK_CARDS 
    : MOCK_CARDS.filter(c => c.category === activeTab);

  return (
    <section className="py-24 px-6 max-w-[1440px] mx-auto bg-paper relative">
      <div className="absolute inset-0 halftone-light pointer-events-none"></div>
      
      <div className="relative z-10 mb-12">
        <ChapterBadge chapter="04" title="CARTAS EN ROTACIÓN" />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="text-6xl md:text-8xl text-ink">
            <span className="manga-underline is-visible">LO MÁS BUSCADO</span>
          </h2>
          
          {/* Brutalist Tabs */}
          <div className="flex flex-wrap gap-2">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-mono text-sm font-bold uppercase px-6 py-3 border-[3px] border-ink transition-colors ${
                  activeTab === tab 
                    ? 'bg-ink text-paper shadow-hard-red' 
                    : 'bg-paper text-ink hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
        {filteredCards.map(card => (
          <MangaCard 
            key={card.id} 
            name={card.name}
            set={card.set}
            price={card.price}
            originalPrice={card.originalPrice}
            condition={card.condition as any}
            rarity={card.rarity}
            image={card.image}
            stock={card.stock}
          />
        ))}
      </div>

      <div className="mt-16 text-center relative z-10">
        <a href="#" className="font-mono text-lg text-ink font-bold uppercase tracking-widest hover:text-blood transition-colors underline decoration-2 underline-offset-8">
          VER TODAS LAS CARTAS →
        </a>
      </div>
    </section>
  );
}
