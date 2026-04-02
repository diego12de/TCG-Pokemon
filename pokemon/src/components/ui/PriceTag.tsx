import { cn, formatPrice } from "@/src/lib/utils";

interface PriceTagProps {
  price: number;
  original?: number;
  currency?: string;
  className?: string;
}

export function PriceTag({ price, original, currency = "€", className }: PriceTagProps) {
  return (
    <div className={cn("flex items-baseline gap-2 font-mono", className)}>
      <span className="text-gold font-bold text-lg">{formatPrice(price, currency)}</span>
      {original && (
        <span className="text-text-muted text-sm line-through decoration-red-500/50">
          {formatPrice(original, currency)}
        </span>
      )}
    </div>
  );
}
