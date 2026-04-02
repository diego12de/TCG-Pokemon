import { Truck } from "lucide-react";
import { siteConfig } from "@/src/config/site";

export function ShippingBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-accent/20 via-accent-2/20 to-accent/20 border-b border-accent/20 py-2.5 relative overflow-hidden">
      {/* Animated shimmer background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_4s_linear_infinite] bg-[length:200%_auto]" />
      
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3 relative z-10">
        <Truck className="w-5 h-5 text-accent-2 shrink-0" />
        <p className="text-sm font-medium text-white/90 text-center">
          <span className="text-lg mr-1">📫</span>
          Envíos <span className="font-bold text-accent-2">GRATIS</span> a partir de {siteConfig.features.freeShippingThreshold}€ en Península
          <span className="text-lg ml-1">🚚</span>
        </p>
      </div>
    </div>
  );
}
