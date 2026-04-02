import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { RarityBadge, type RarityType } from "./RarityBadge";
import { PriceTag } from "./PriceTag";
import { cn } from "@/src/lib/utils";
import { useCart } from "../layout/CartContext";

export interface ProductType {
  id: string;
  name: string;
  image: string;
  set: string;
  condition: string;
  rarity: RarityType;
  price: number;
  originalPrice?: number;
  stock: number;
  category: string;
}

export function CardHover({ product, onClick }: { product: ProductType; onClick?: (product: ProductType) => void }) {
  const { addToCart } = useCart();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const getGlowVar = (rarity: RarityType) => {
    switch (rarity) {
      case "uncommon": return "var(--glow-uncommon)";
      case "rare": return "var(--glow-rare)";
      case "holo": return "var(--glow-holo)";
      case "ultra": return "var(--glow-ultra)";
      case "secret": return "var(--glow-secret)";
      default: return "none";
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onClick={() => onClick?.(product)}
      className="group relative w-full rounded-xl bg-card border border-border p-4 transition-colors duration-300 hover:border-accent cursor-pointer"
    >
      <div 
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        style={{ boxShadow: getGlowVar(product.rarity) }}
      />
      
      <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-surface mb-4">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-2 left-2">
            <RarityBadge rarity={product.rarity} />
          </div>
          <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono uppercase border border-white/10">
            {product.condition}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-heading font-semibold text-lg leading-tight line-clamp-2">
              {product.name}
            </h3>
          </div>
          
          <p className="text-xs text-text-muted uppercase tracking-wider font-mono">
            {product.set}
          </p>

          <div className="flex items-center justify-between pt-2">
            <PriceTag price={product.price} original={product.originalPrice} />
            <div className="text-xs font-mono flex items-center gap-1">
              {product.stock > 0 ? (
                product.stock <= 3 ? (
                  <span className="text-amber-400 flex items-center gap-1 animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Últimas {product.stock}
                  </span>
                ) : (
                  <span className="text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    En stock
                  </span>
                )
              ) : (
                <span className="text-red-400">Agotado</span>
              )}
            </div>
          </div>
        </div>

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 -bottom-2 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pt-4">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-full bg-accent hover:bg-accent-2 text-white font-body font-medium py-2 rounded-md transition-colors text-sm uppercase tracking-wider"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </motion.div>
  );
}
