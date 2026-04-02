import { motion } from "motion/react";
import { TrendingUp, ShieldCheck, Trophy } from "lucide-react";

const features = [
  {
    title: "PRECIOS ACTUALIZADOS DIARIO",
    description: "No más pagar de más. Nuestros precios reflejan el mercado real.",
    sub: "Comparado con CardMarket cada 24h",
    icon: TrendingUp,
    color: "text-accent-2",
    bg: "bg-accent-2/10",
    border: "border-accent-2/20",
    className: "md:col-span-1",
  },
  {
    title: "STOCK REAL, SIN SORPRESAS",
    description: "Lo que ves en web, existe en tienda. Sistema de inventario en tiempo real.",
    sub: "Última actualización: hace 4 minutos",
    icon: ShieldCheck,
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
    className: "md:col-span-2",
    isLarge: true,
  },
  {
    title: "COMUNIDAD + TORNEOS",
    description: "Más que una tienda. Torneos semanales, ligas, FNM, prereleases.",
    sub: "Únete a nuestro Discord",
    icon: Trophy,
    color: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/20",
    className: "md:col-span-3 lg:col-span-1",
  },
];

export function ValueProps() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {features.map((feature, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className={`glass-card p-8 flex flex-col justify-between group hover:scale-[1.02] ${feature.className}`}
          >
            <div>
              <div className={`w-12 h-12 rounded-lg ${feature.bg} ${feature.border} border flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className={`font-heading text-2xl font-bold mb-4 ${feature.isLarge ? 'md:text-4xl' : ''}`}>
                {feature.title}
              </h3>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                {feature.description}
              </p>
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-white/50 flex items-center gap-2">
              {feature.isLarge && <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />}
              {feature.sub}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
