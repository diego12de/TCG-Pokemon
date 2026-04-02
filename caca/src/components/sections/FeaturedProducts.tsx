import { useState } from "react";
import { motion } from "motion/react";
import { CardHover, type ProductType } from "@/src/components/ui/CardHover";
import { SkewButton } from "@/src/components/ui/SkewButton";
import { cn } from "@/src/lib/utils";

const TABS = ["Todos", "Pokémon", "Magic", "Yu-Gi-Oh!", "Lorcana"];

const MOCK_PRODUCTS: ProductType[] = [
  {
    id: "1",
    name: "Charizard ex - 199/165",
    image: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=600&auto=format&fit=crop",
    set: "151",
    condition: "NM",
    rarity: "secret",
    price: 115.50,
    originalPrice: 130.00,
    stock: 2,
  },
  {
    id: "2",
    name: "The One Ring",
    image: "https://images.unsplash.com/photo-1622819584099-e0e9ec9d8684?q=80&w=600&auto=format&fit=crop",
    set: "Tales of Middle-earth",
    condition: "MINT",
    rarity: "ultra",
    price: 85.00,
    stock: 12,
  },
  {
    id: "3",
    name: "Blue-Eyes White Dragon",
    image: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=600&auto=format&fit=crop",
    set: "Legend of Blue Eyes",
    condition: "EX",
    rarity: "holo",
    price: 45.00,
    stock: 0,
  },
  {
    id: "4",
    name: "Elsa - Spirit of Winter",
    image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=600&auto=format&fit=crop",
    set: "The First Chapter",
    condition: "NM",
    rarity: "rare",
    price: 32.50,
    stock: 5,
  },
];

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("Todos");

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] uppercase font-bold inline-block relative">
            Lo más buscado
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent-2 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                activeTab === tab
                  ? "bg-accent/20 border-accent text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                  : "bg-surface border-border text-text-muted hover:border-accent/50 hover:text-white"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.08 } }
        }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {MOCK_PRODUCTS.map((product) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <CardHover product={product} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 flex justify-center">
        <SkewButton label="Cargar más" variant="ghost" size="lg" />
      </div>
    </section>
  );
}
