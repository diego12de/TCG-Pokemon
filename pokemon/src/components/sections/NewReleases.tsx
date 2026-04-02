import { CountdownTimer } from "@/src/components/ui/CountdownTimer";
import { SkewButton } from "@/src/components/ui/SkewButton";

interface Release {
  id: number;
  game: string;
  name: string;
  image: string;
  date: string;
  reservations: number;
  badge: string;
  badgeColor: string;
}

const RELEASES: Release[] = [
  {
    id: 1,
    game: "POKÉMON TCG",
    name: "MEGA Expansion Pack Ninja Spinner",
    image: "https://images.pokemontcg.io/sv3pt5/199_hires.png",
    date: "13 MAR 2026",
    reservations: 89,
    badge: "Lanzamiento Inminente",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/50",
  },
  {
    id: 2,
    game: "POKÉMON TCG",
    name: "Prismatic Evolutions",
    image: "https://images.pokemontcg.io/swsh7/212_hires.png",
    date: "28 ABR 2026",
    reservations: 52,
    badge: "Pre-venta Abierta",
    badgeColor: "bg-green-500/20 text-green-400 border-green-500/50",
  },
  {
    id: 3,
    game: "MAGIC: THE GATHERING",
    name: "Modern Horizons 3",
    image: "https://images.pokemontcg.io/swsh7/218_hires.png",
    date: "14 JUN 2026",
    reservations: 47,
    badge: "Pre-venta Abierta",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/50",
  },
  {
    id: 4,
    game: "YU-GI-OH!",
    name: "Maze of Millennia",
    image: "https://images.pokemontcg.io/swsh7/209_hires.png",
    date: "22 MAY 2026",
    reservations: 31,
    badge: "Próximamente",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/50",
  },
  {
    id: 5,
    game: "LORCANA",
    name: "Shimmering Skies",
    image: "https://images.pokemontcg.io/swsh7/205_hires.png",
    date: "09 AGO 2026",
    reservations: 28,
    badge: "Próximamente",
    badgeColor: "bg-indigo-500/20 text-indigo-400 border-indigo-500/50",
  },
];

export function NewReleases() {
  // Set target date to 7 days from now for demo
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  return (
    <section className="py-24 bg-surface/50 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] uppercase font-bold inline-block relative">
              Próximas llegadas
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent-2 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
            </h2>
            <p className="text-text-muted mt-4 max-w-xl">
              Reserva ya los próximos lanzamientos y asegúrate de ser el primero en tenerlos.
            </p>
          </div>
          <CountdownTimer targetDate={targetDate.toISOString()} />
        </div>

        {/* Snap Scroll Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar">
          {RELEASES.map((release) => (
            <div 
              key={release.id} 
              className="snap-center shrink-0 w-[85vw] sm:w-[380px] glass-card overflow-hidden group"
            >
              <div className="relative h-56 bg-card overflow-hidden">
                {/* Product image with gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent-2/20 to-transparent" />
                <img 
                  src={release.image}
                  alt={release.name}
                  className="w-full h-full object-contain mix-blend-luminosity opacity-40 group-hover:opacity-70 group-hover:mix-blend-normal transition-all duration-500 group-hover:scale-105 p-4"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className={`${release.badgeColor} border px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-lg`}>
                    <span className="w-1.5 h-1.5 bg-current rounded-full animate-pulse" />
                    {release.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-xs font-mono text-accent mb-2">{release.game}</div>
                <h3 className="font-heading text-2xl font-bold mb-4">{release.name}</h3>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-text-muted">
                    Lanzamiento: <span className="text-white font-mono">{release.date}</span>
                  </div>
                  <div className="text-sm font-mono text-accent-2">
                    {release.reservations} reservas
                  </div>
                </div>

                <SkewButton label="Reservar ahora" className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
