import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SkewButton } from "@/src/components/ui/SkewButton";

gsap.registerPlugin(ScrollTrigger);

export function BlindBox() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.9, opacity: 0.5, rotateY: -15 },
        {
          scale: 1,
          opacity: 1,
          rotateY: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
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
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-gradient-to-br from-surface via-bg to-surface border-y border-accent/20">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-2/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Side */}
          <div ref={imageRef} className="relative aspect-square max-h-[550px] rounded-2xl overflow-hidden group perspective-[1000px]">
            <img 
              src="/assets/blindbox.png" 
              alt="Blind Box - Caja misteriosa" 
              className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent rounded-2xl" />
            
            {/* Price tag */}
            <div className="absolute bottom-6 left-6 bg-surface/90 backdrop-blur-md border border-accent/30 rounded-xl px-6 py-4 shadow-[0_0_30px_rgba(124,58,237,0.3)]">
              <div className="text-xs font-mono text-accent-2 uppercase tracking-wider mb-1">Desde</div>
              <div className="font-display text-4xl font-bold bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">20€</div>
            </div>

            {/* Mystery badge */}
            <div className="absolute top-6 right-6 bg-accent/90 backdrop-blur-md text-white rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(124,58,237,0.5)] animate-pulse">
              🎁 SORPRESA
            </div>
          </div>

          {/* Content Side */}
          <div ref={contentRef} className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold font-mono text-xs uppercase tracking-wider w-fit">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Edición Limitada
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              BLIND BOX{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
                NEXUS
              </span>
            </h2>

            <p className="text-lg text-text-muted leading-relaxed max-w-lg">
              ¿Te atreves a probar suerte? Nuestras Blind Box contienen productos sorpresa con un{" "}
              <span className="text-white font-semibold">valor garantizado superior al precio de la caja</span>. 
              Cartas, figuras, accesorios… ¡hasta productos exclusivos que no encontrarás en ningún otro sitio!
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "📦", text: "Producto sorpresa" },
                { emoji: "💰", text: "Valor superior asegurado" },
                { emoji: "⭐", text: "Productos exclusivos" },
                { emoji: "🔄", text: "Nuevas cajas cada mes" },
              ].map((feat) => (
                <div key={feat.text} className="flex items-center gap-3 bg-surface/50 border border-border rounded-lg px-4 py-3">
                  <span className="text-xl">{feat.emoji}</span>
                  <span className="text-sm text-white/80 font-medium">{feat.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <SkewButton label="Comprar Blind Box" size="lg" />
              <SkewButton label="¿Cómo funciona?" variant="ghost" size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
