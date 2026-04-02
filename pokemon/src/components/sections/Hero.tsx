import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SkewButton } from "@/src/components/ui/SkewButton";
import { siteConfig } from "@/src/config/site";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (trustRef.current) {
      tl.fromTo(trustRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 });
    }

    if (titleRef.current) {
      const lines = titleRef.current.children;
      tl.fromTo(
        lines,
        { opacity: 0, y: 60, skewY: 4 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.75, stagger: 0.12 },
        "-=0.2"
      );
    }

    if (subtitleRef.current && ctaRef.current) {
      tl.fromTo(
        [subtitleRef.current, ...ctaRef.current.children],
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
        "-=0.4"
      );
    }

    // Floating animation for the 3D asset
    gsap.to("#hero-3d-asset", {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to("#hero-3d-asset", {
      rotateY: 10,
      rotateX: 5,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-[148px] pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Content Left */}
        <div className="flex flex-col items-start gap-8">
          <div 
            ref={trustRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 backdrop-blur-md border border-accent/30 shadow-[0_0_15px_rgba(124,58,237,0.2)]"
          >
            <span className="text-gold">⭐ 4,9</span>
            <span className="text-xs font-mono text-text-muted">· +200 reseñas verificadas en Google</span>
          </div>

          <h1 ref={titleRef} className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[1.1] uppercase tracking-wide font-bold">
            <div className="block">{siteConfig.heroHeadline.line1}</div>
            <div className="block bg-gradient-to-r from-accent via-accent-2 to-accent bg-clip-text text-transparent animate-[shimmer_4s_linear_infinite] bg-[length:200%_auto]">
              {siteConfig.heroHeadline.line2}
            </div>
            <div className="block">{siteConfig.heroHeadline.line3}</div>
          </h1>

          <p ref={subtitleRef} className="text-lg text-text-muted max-w-[55ch] leading-relaxed">
            {siteConfig.heroSubtitle}
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <SkewButton label={siteConfig.heroCTA1} className="w-full sm:w-auto" />
            <SkewButton label={siteConfig.heroCTA2} variant="ghost" className="w-full sm:w-auto" />
          </div>
        </div>

        {/* Asset Right (Interactive 3D Poké Ball) */}
        <div className="relative w-full h-[420px] lg:h-[600px] flex items-center justify-center lg:justify-end perspective-[1000px]">
          <div 
            id="hero-3d-asset" 
            className="relative w-72 h-72 sm:w-96 sm:h-96 transition-transform duration-500 hover:scale-105"
          >
            {/* Ambient glow layers */}
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute inset-0 bg-accent-2/10 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
            
            {/* Main 3D Asset */}
            <img 
              src="/assets/hero_3d_pokeball.png" 
              alt="Holographic Poké Ball" 
              className="w-full h-full object-contain relative z-20 drop-shadow-[0_0_50px_rgba(124,58,237,0.4)]"
            />

            {/* Decorative orbit elements */}
            <div className="absolute inset-0 border border-white/5 rounded-full scale-110 animate-spin-slow opacity-20" />
            <div className="absolute inset-0 border border-accent/10 rounded-full scale-125 animate-spin-slow-reverse opacity-10" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] font-mono uppercase tracking-widest text-accent-2">Scroll</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
