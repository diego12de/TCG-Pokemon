import { useEffect, useState } from "react";
import { cn } from "@/src/lib/utils";

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
}

export function CountdownTimer({ targetDate, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const FlipCard = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-12 h-16 sm:w-16 sm:h-20 bg-surface rounded-lg border border-border flex items-center justify-center overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black/50 z-10" />
        <span className="font-mono text-2xl sm:text-4xl font-bold text-accent-2 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-text-muted">
        {label}
      </span>
    </div>
  );

  return (
    <div className={cn("flex items-center gap-2 sm:gap-4", className)}>
      <FlipCard value={timeLeft.days} label="Días" />
      <span className="text-2xl font-mono text-accent-2/50 pb-6">:</span>
      <FlipCard value={timeLeft.hours} label="Hrs" />
      <span className="text-2xl font-mono text-accent-2/50 pb-6">:</span>
      <FlipCard value={timeLeft.minutes} label="Min" />
      <span className="text-2xl font-mono text-accent-2/50 pb-6">:</span>
      <FlipCard value={timeLeft.seconds} label="Seg" />
    </div>
  );
}
