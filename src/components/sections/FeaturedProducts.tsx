import { useState } from "react";
import { motion } from "motion/react";
import { CardHover, type ProductType } from "@/src/components/ui/CardHover";
import { SkewButton } from "@/src/components/ui/SkewButton";
import { cn } from "@/src/lib/utils";

import { MOCK_PRODUCTS } from "@/src/data/products";

const TABS = ["Todos", "Pokémon", "Magic", "Yu-Gi-Oh!", "Lorcana"];

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
