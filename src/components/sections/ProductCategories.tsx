import { motion } from "motion/react";
import { SkewButton } from "@/src/components/ui/SkewButton";

interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  gradient: string;
  cta: string;
}

const CATEGORIES: ProductCategory[] = [
  {
    id: "camisetas",
    name: "Camisetas",
    description: "Camisetas con diseños originales de diversos animes, series, películas o videojuegos. Todos los diseños son referencias únicas.",
    image: "/assets/categories/camisetas.png",
    gradient: "from-rose-600/80 to-orange-500/80",
    cta: "Ver camisetas",
  },
  {
    id: "figuras",
    name: "Figuras",
    description: "Figuras de colección de animes como Dragon Ball Z, One Piece, Kimetsu no Yaiba y más. Marcas como Banpresto y Tamashii.",
    image: "/assets/categories/figuras.png",
    gradient: "from-purple-700/80 to-indigo-600/80",
    cta: "Ver figuras",
  },
  {
    id: "loungefly",
    name: "Loungefly",
    description: "Bolsos y mochilas de licencias mundiales con diseños originales. Excelente calidad y estilo único.",
    image: "/assets/categories/loungefly.png",
    gradient: "from-pink-600/80 to-fuchsia-500/80",
    cta: "Ver Loungefly",
  },
  {
    id: "tcg",
    name: "Trading Card Games",
    description: "Pokémon, One Piece, Lorcana, Magic y más. Decks, sobres sellados y singles para armar ese deck ganador.",
    image: "/assets/categories/tcg.png",
    gradient: "from-blue-700/80 to-cyan-500/80",
    cta: "Ver TCGs",
  },
  {
    id: "pokeprints",
    name: "Pokeprints",
    description: "Impresiones 3D de pokeballs con muchos estilos increíbles. Iremos agregando más diseños.",
    image: "/assets/categories/pokeprints.png",
    gradient: "from-red-600/80 to-yellow-500/80",
    cta: "Ver Pokeprints",
  },
  {
    id: "tazas",
    name: "Súper Tazas",
    description: "Tazas para tomar café, té o lo que se te antoje con diseños de animes, series o videojuegos.",
    image: "/assets/categories/tazas.png",
    gradient: "from-emerald-600/80 to-teal-500/80",
    cta: "Ver tazas",
  },
  {
    id: "videojuegos",
    name: "Videojuegos",
    description: "Videojuegos de diferentes consolas con descuentos exclusivos en todos ellos.",
    image: "/assets/categories/videojuegos.png",
    gradient: "from-violet-700/80 to-purple-500/80",
    cta: "Ver videojuegos",
  },
  {
    id: "juegosdemesa",
    name: "Juegos de Mesa",
    description: "Gran variedad de juegos de mesa, todos con excelentes descuentos.",
    image: "/assets/categories/juegosdemesa.png",
    gradient: "from-amber-600/80 to-orange-500/80",
    cta: "Ver juegos de mesa",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ProductCategories() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] uppercase font-bold inline-block relative">
          Nuestros Productos
          <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent-2 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        </h2>
        <p className="text-text-muted mt-6 text-lg max-w-2xl mx-auto">
          Descubre todo lo que tenemos para ti. Desde cartas hasta figuras, ropa y más.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {CATEGORIES.map((cat) => (
          <motion.div
            key={cat.id}
            variants={item}
            className="group relative h-[380px] rounded-xl overflow-hidden cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-70 group-hover:opacity-85 transition-opacity duration-500`} />

            {/* Dark overlay for bottom text */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <h3 className="font-heading text-2xl font-bold uppercase tracking-wide mb-2 drop-shadow-lg">
                {cat.name}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2 drop-shadow-md">
                {cat.description}
              </p>
              <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <SkewButton label={cat.cta} size="sm" />
              </div>
            </div>

            {/* Hover border glow */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent/50 group-hover:shadow-[inset_0_0_30px_rgba(124,58,237,0.15)] transition-all duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
