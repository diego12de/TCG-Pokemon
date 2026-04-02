import { useState } from "react";
import { motion } from "motion/react";
import { CardHover, type ProductType } from "@/src/components/ui/CardHover";
import { SkewButton } from "@/src/components/ui/SkewButton";
import { cn } from "@/src/lib/utils";

import { MOCK_PRODUCTS } from "@/src/data/products";

export function FeaturedProducts() {
  const featuredCards = MOCK_PRODUCTS
    .filter(product => product.category === "Pokémon")
    .slice(0, 8);

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] uppercase font-bold inline-block relative tracking-tight">
            Lo más buscado
            <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-accent to-accent-2 shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
          </h2>
          <p className="text-text-muted mt-6 max-w-md text-lg">
            Las cartas más cotizadas y difíciles de conseguir, ahora a tu alcance.
          </p>
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
        {featuredCards.map((product) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            <CardHover product={product} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 flex justify-center">
        <SkewButton label="Ver todos los singles →" variant="ghost" size="lg" />
      </div>
    </section>
  );
}
