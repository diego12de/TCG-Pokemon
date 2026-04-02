import { CountdownTimer } from "@/src/components/ui/CountdownTimer";
import { SkewButton } from "@/src/components/ui/SkewButton";

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
          </div>
          <CountdownTimer targetDate={targetDate.toISOString()} />
        </div>

        {/* Snap Scroll Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="snap-center shrink-0 w-[85vw] sm:w-[400px] glass-card overflow-hidden group"
            >
              <div className="relative h-48 bg-card overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1622819584099-e0e9ec9d8684?q=80&w=600&auto=format&fit=crop&sig=${i}`}
                  alt="Release Banner"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500/20 text-amber-400 border border-amber-500/50 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-[0_0_10px_rgba(245,158,11,0.3)]">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                    Lanzamiento Inminente
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-xs font-mono text-accent mb-2">MAGIC: THE GATHERING</div>
                <h3 className="font-heading text-2xl font-bold mb-4">Modern Horizons 3</h3>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-text-muted">
                    Lanzamiento: <span className="text-white font-mono">14 JUN 2026</span>
                  </div>
                  <div className="text-sm font-mono text-accent-2">
                    47 reservas
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
