import { cn } from "@/src/lib/utils";

export interface EventType {
  id: string;
  title: string;
  game: string;
  type: "FNM" | "Prerelease" | "Liga" | "Torneo" | "Commander";
  date: string;
  time: string;
  format: string;
  price: number;
  registered: number;
  capacity: number;
}

export function EventCard({ event }: { event: EventType }) {
  const isFull = event.registered >= event.capacity;
  const progressPct = Math.min(100, (event.registered / event.capacity) * 100);

  return (
    <div className="glass-card p-5 flex flex-col h-full relative overflow-hidden group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-accent-2 border border-accent-2/30 bg-accent-2/10 px-2 py-1 rounded">
            {event.game}
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-white/70 bg-white/5 px-2 py-1 rounded">
            {event.type}
          </span>
        </div>
        <div className="text-right">
          <div className="text-sm font-mono text-accent">{event.date}</div>
          <div className="text-xs font-mono text-text-muted">{event.time}</div>
        </div>
      </div>

      <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-accent transition-colors">
        {event.title}
      </h3>
      
      <p className="text-sm text-text-muted mb-6">
        Formato: <span className="text-white">{event.format}</span>
      </p>

      <div className="mt-auto space-y-4">
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-text-muted">Plazas</span>
            <span className={isFull ? "text-red-400" : "text-white"}>
              {event.registered}/{event.capacity}
            </span>
          </div>
          <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden">
            <div 
              className={cn(
                "h-full rounded-full transition-all duration-1000",
                isFull ? "bg-red-500" : "bg-gradient-to-r from-accent to-accent-2"
              )}
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="font-mono font-bold text-gold">
            {event.price === 0 ? "GRATIS" : `${event.price}€`}
          </div>
          <button 
            className={cn(
              "px-4 py-1.5 rounded text-sm font-medium uppercase tracking-wider transition-colors",
              isFull 
                ? "bg-surface text-text-muted border border-border hover:bg-border" 
                : "bg-accent/20 text-accent border border-accent/50 hover:bg-accent hover:text-white"
            )}
          >
            {isFull ? "Lista de espera" : "Inscribirme"}
          </button>
        </div>
      </div>
    </div>
  );
}
