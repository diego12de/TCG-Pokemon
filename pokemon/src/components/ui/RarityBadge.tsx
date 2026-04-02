import { cn } from "@/src/lib/utils";

export type RarityType = "common" | "uncommon" | "rare" | "holo" | "ultra" | "secret";

interface RarityBadgeProps {
  rarity: RarityType;
  label?: string;
  className?: string;
}

export function RarityBadge({ rarity, label, className }: RarityBadgeProps) {
  const styles = {
    common: "bg-gray-800 text-gray-300 border-gray-600",
    uncommon: "bg-green-900/50 text-green-300 border-green-500/50 shadow-[var(--glow-uncommon)]",
    rare: "bg-blue-900/50 text-blue-300 border-blue-500/50 shadow-[var(--glow-rare)]",
    holo: "bg-purple-900/50 text-purple-300 border-purple-500/50 shadow-[var(--glow-holo)]",
    ultra: "bg-yellow-900/50 text-yellow-300 border-yellow-500/50 shadow-[var(--glow-ultra)]",
    secret: "bg-cyan-900/50 text-cyan-300 border-cyan-500/50 shadow-[var(--glow-secret)]",
  };

  const defaultLabels = {
    common: "Común",
    uncommon: "Infrecuente",
    rare: "Rara",
    holo: "Holo",
    ultra: "Ultra Rara",
    secret: "Secreta",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border",
        styles[rarity],
        className
      )}
    >
      {label || defaultLabels[rarity]}
    </span>
  );
}
