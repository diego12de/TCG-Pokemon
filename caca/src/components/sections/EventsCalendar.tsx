import { useState } from "react";
import { motion } from "motion/react";
import { EventCard, type EventType } from "@/src/components/ui/EventCard";
import { cn } from "@/src/lib/utils";

const TABS = ["Todos", "Pokémon", "Magic", "Yu-Gi-Oh!", "Gratuitos"];

const MOCK_EVENTS: EventType[] = [
  {
    id: "1",
    title: "Friday Night Magic",
    game: "Magic",
    type: "FNM",
    date: "Viernes, 14 Jun",
    time: "17:30",
    format: "Modern",
    price: 5,
    registered: 28,
    capacity: 32,
  },
  {
    id: "2",
    title: "Torneo Local Pokémon",
    game: "Pokémon",
    type: "Torneo",
    date: "Sábado, 15 Jun",
    time: "10:00",
    format: "Standard",
    price: 10,
    registered: 16,
    capacity: 16,
  },
  {
    id: "3",
    title: "Liga Yu-Gi-Oh! OTS",
    game: "Yu-Gi-Oh!",
    type: "Liga",
    date: "Domingo, 16 Jun",
    time: "16:00",
    format: "Advanced",
    price: 0,
    registered: 12,
    capacity: 24,
  },
  {
    id: "4",
    title: "Commander Casual",
    game: "Magic",
    type: "Commander",
    date: "Martes, 18 Jun",
    time: "18:00",
    format: "Commander",
    price: 0,
    registered: 8,
    capacity: 40,
  },
];

export function EventsCalendar() {
  const [activeTab, setActiveTab] = useState("Todos");

  return (
    <section id="eventos" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] uppercase font-bold inline-block relative">
            Juega, Compite, Gana
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent-2 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                activeTab === tab
                  ? "bg-accent/20 border-accent text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                  : "bg-surface border-border text-text-muted hover:border-accent/50 hover:text-white"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {MOCK_EVENTS.map((event) => (
          <motion.div
            key={event.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <EventCard event={event} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
