import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SkewButton } from "@/src/components/ui/SkewButton";
import { DollarSign, Clock, ShieldCheck, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function BuylistBanner() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { x: -60, opacity: 0.5 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        rightRef.current,
        { x: 60, opacity: 0.5 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const FEATURES = [
    { icon: DollarSign, text: "Pago en efectivo o crédito", color: "text-gold" },
    { icon: Clock, text: "Tasación en menos de 24h", color: "text-accent-2" },
    { icon: ShieldCheck, text: "Valoración justa y transparente", color: "text-green-400" },
  ];

  return (
    <section className="w-full overflow-hidden bg-surface border-y border-accent/20">
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        
        {/* Left Content */}
        <div ref={leftRef} className="p-8 sm:p-16 lg:p-24 flex flex-col justify-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs uppercase tracking-wider mb-8 w-fit">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Buylist Activa
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            ¿TIENES CARTAS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-2">QUE NO USAS?</span>
          </h2>
          
          <p className="text-lg text-text-muted mb-8 max-w-md leading-relaxed">
            Consulta nuestra buylist actualizada y consigue crédito o efectivo. Proceso rápido, tasación justa y pago en 24h.
          </p>

          {/* Feature badges */}
          <div className="flex flex-col gap-3 mb-10">
            {FEATURES.map((feat) => (
              <div key={feat.text} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center">
                  <feat.icon className={`w-4 h-4 ${feat.color}`} />
                </div>
                <span className="text-sm text-white/80">{feat.text}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <SkewButton label="Ver buylist completa" />
            <SkewButton label="Enviar tasación online" variant="ghost" />
          </div>
        </div>

        {/* Right Content — Floating Cards Visual */}
        <div ref={rightRef} className="relative hidden lg:block bg-gradient-to-br from-accent/20 to-accent-2/20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
          
          {/* Diagonal cut */}
          <div className="absolute inset-y-0 left-0 w-32 bg-surface" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />

          {/* Animated Floating Cards Stack */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Card 1 - Back */}
            <div className="absolute w-52 h-72 rounded-xl overflow-hidden shadow-2xl transform -rotate-12 translate-x-[-30px] translate-y-[20px] transition-transform duration-500 hover:scale-105">
              <img 
                src="https://images.pokemontcg.io/swsh7/215_hires.png" 
                alt="Umbreon VMAX" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Card 2 - Middle */}
            <div className="absolute w-52 h-72 rounded-xl overflow-hidden shadow-2xl transform rotate-3 translate-x-[10px] translate-y-[-10px] transition-transform duration-500 hover:scale-105 z-10">
              <img 
                src="https://images.pokemontcg.io/sv3pt5/199_hires.png" 
                alt="Charizard ex" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Card 3 - Front */}
            <div className="absolute w-52 h-72 rounded-xl overflow-hidden shadow-2xl transform rotate-12 translate-x-[50px] translate-y-[30px] transition-transform duration-500 hover:scale-105 z-20">
              <img 
                src="https://images.pokemontcg.io/swsh7/218_hires.png" 
                alt="Rayquaza VMAX" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Currency floating badge */}
            <div className="absolute bottom-12 right-12 z-30 bg-surface/90 backdrop-blur-md border border-gold/30 rounded-xl px-5 py-3 shadow-[0_0_20px_rgba(201,168,76,0.3)] flex items-center gap-3">
              <ArrowRight className="w-5 h-5 text-gold" />
              <div>
                <div className="text-xs font-mono text-gold">Consigue hasta</div>
                <div className="font-display text-xl font-bold text-white">500€</div>
              </div>
            </div>
          </div>

          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
