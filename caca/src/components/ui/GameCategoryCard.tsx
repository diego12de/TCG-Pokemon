import { cn } from "@/src/lib/utils";
import { RarityBadge } from "./RarityBadge";

export interface GameCategoryType {
  id: string;
  name: string;
  count: number;
  gradient: string;
  logo: string;
  isFeatured?: boolean;
}

export function GameCategoryCard({ category }: { category: GameCategoryType }) {
  if (category.isFeatured) {
    return (
      <a href="#" className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-2xl p-6 flex flex-col justify-end min-h-[240px] border border-border hover:border-accent transition-all duration-300">
        <div className={cn("absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60", category.gradient)} />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
        
        <div className="relative z-10 flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/50 text-green-400 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Nuevas llegadas
          </div>
          
          <div>
            <h3 className="font-heading text-3xl font-bold text-white mb-1">
              {category.name}
            </h3>
            <p className="font-mono text-sm text-text-muted">
              +{category.count.toLocaleString()} productos disponibles
            </p>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a href="#" className="group relative overflow-hidden rounded-2xl p-6 flex flex-col min-h-[240px] border border-border hover:border-accent transition-all duration-300">
      <div className={cn("absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40", category.gradient)} />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
      
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="h-12 w-auto mb-auto opacity-70 group-hover:opacity-100 transition-opacity filter invert brightness-0">
          {/* Placeholder for game logo */}
          <div className="text-2xl font-display font-bold">{category.name}</div>
        </div>
        
        <div className="mt-8 space-y-4">
          <p className="font-mono text-sm text-text-muted">
            +{category.count.toLocaleString()} singles
          </p>
          
          <div className="flex flex-wrap gap-2">
            <RarityBadge rarity="common" label="C" />
            <RarityBadge rarity="rare" label="R" />
            <RarityBadge rarity="holo" label="H" />
            <RarityBadge rarity="secret" label="S" />
          </div>
        </div>
      </div>
    </a>
  );
}
