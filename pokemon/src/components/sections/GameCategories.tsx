import { motion } from "motion/react";
import { GameCategoryCard, type GameCategoryType } from "@/src/components/ui/GameCategoryCard";

const categories: GameCategoryType[] = [
  {
    id: "pokemon",
    name: "Pokémon TCG",
    count: 12450,
    gradient: "bg-gradient-to-br from-yellow-500 to-red-500",
    logo: "/assets/pokemon.svg",
    isFeatured: true,
  },
  {
    id: "magic",
    name: "Magic: The Gathering",
    count: 8200,
    gradient: "bg-gradient-to-br from-blue-600 to-purple-600",
    logo: "/assets/mtg.svg",
  },
  {
    id: "yugioh",
    name: "Yu-Gi-Oh!",
    count: 5300,
    gradient: "bg-gradient-to-br from-orange-500 to-yellow-600",
    logo: "/assets/yugioh.svg",
  },
  {
    id: "lorcana",
    name: "Lorcana",
    count: 2100,
    gradient: "bg-gradient-to-br from-indigo-500 to-pink-500",
    logo: "/assets/lorcana.svg",
  },
  {
    id: "onepiece",
    name: "One Piece",
    count: 1800,
    gradient: "bg-gradient-to-br from-red-600 to-orange-500",
    logo: "/assets/onepiece.svg",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export function GameCategories() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] uppercase font-bold inline-block relative">
          Elige tu juego
          <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent-2 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        </h2>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {categories.map((cat) => (
          <motion.div key={cat.id} variants={item} className={cat.isFeatured ? "md:col-span-2" : ""}>
            <GameCategoryCard category={cat} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
