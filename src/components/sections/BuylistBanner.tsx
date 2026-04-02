import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SkewButton } from "@/src/components/ui/SkewButton";

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
          
          <p className="text-lg text-text-muted mb-10 max-w-md leading-relaxed">
            Consulta nuestra buylist actualizada y consigue crédito o efectivo. Proceso rápido, tasación justa y pago en 24h.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <SkewButton label="Ver buylist completa" />
            <SkewButton label="Enviar tasación online" variant="ghost" />
          </div>
        </div>

        {/* Right Content (Diagonal Split & Cards) */}
        <div ref={rightRef} className="relative hidden lg:block bg-gradient-to-br from-accent/20 to-accent-2/20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
          
          {/* Diagonal cut */}
          <div className="absolute inset-y-0 left-0 w-32 bg-surface" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />

          {/* Floating Cards */}
          <div className="absolute inset-0 flex items-center justify-center perspective-[1000px]">
            <div className="relative w-64 h-80 transform-style-3d rotate-y-[-20deg] rotate-x-[10deg] animate-[pulse-slow_4s_ease-in-out_infinite]">
              <div className="absolute inset-0 bg-card border border-accent/50 rounded-xl shadow-[var(--glow-holo)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                <span className="font-mono text-4xl text-white/50">€</span>
              </div>
              <div className="absolute inset-0 bg-card border border-accent-2/50 rounded-xl shadow-[var(--glow-secret)] flex items-center justify-center translate-x-12 translate-y-12 translate-z-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-2/20 to-transparent" />
                <span className="font-mono text-4xl text-white/50">💳</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
