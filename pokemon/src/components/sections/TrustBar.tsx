import { siteConfig } from "@/src/config/site";

export function TrustBar() {
  return (
    <section className="w-full bg-surface border-y border-accent/10 py-6 overflow-hidden relative flex flex-col items-center">
      <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-4 z-10 bg-surface px-4">
        Jugamos a:
      </div>
      
      <div className="relative flex overflow-x-hidden w-full group">
        <div className="animate-marquee flex whitespace-nowrap items-center group-hover:[animation-play-state:paused]">
          {[...siteConfig.games, ...siteConfig.games].map((game, i) => (
            <div 
              key={`${game}-${i}`} 
              className="mx-8 text-2xl font-display font-bold text-white/40 hover:text-white hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.8)] transition-all duration-300 cursor-default"
            >
              {game}
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent pointer-events-none" />
    </section>
  );
}
