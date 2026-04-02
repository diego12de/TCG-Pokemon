import { motion } from "motion/react";

const REVIEWS = [
  { name: "Javier M.", text: "El envío fue rapidísimo y las cartas venían súper bien protegidas. 10/10.", date: "Hace 2 días" },
  { name: "Ana S.", text: "Tienen un stock increíble de Lorcana. Encontré todo lo que buscaba a buen precio.", date: "Hace 1 semana" },
  { name: "Miguel A.", text: "La mejor tienda para jugar FNM. El ambiente es genial y los premios muy generosos.", date: "Hace 2 semanas" },
];

export function GoogleReviews() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {REVIEWS.map((review, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="glass-card p-6 flex flex-col"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <svg key={j} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-text-muted mb-6 flex-1">"{review.text}"</p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold">{review.name}</div>
                  <div className="text-xs text-text-muted">{review.date}</div>
                </div>
              </div>
              <svg className="w-6 h-6 text-white/50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.02 0C5.396 0 .02 5.376.02 12c0 6.624 5.376 12 12 12 6.624 0 12-5.376 12-12 0-6.624-5.376-12-12-12zm4.44 16.488c-1.344 0-2.424-1.08-2.424-2.424 0-1.344 1.08-2.424 2.424-2.424 1.344 0 2.424 1.08 2.424 2.424 0 1.344-1.08 2.424-2.424 2.424zm-8.88 0c-1.344 0-2.424-1.08-2.424-2.424 0-1.344 1.08-2.424 2.424-2.424 1.344 0 2.424 1.08 2.424 2.424 0 1.344-1.08 2.424-2.424 2.424zm4.44-4.848c-1.344 0-2.424-1.08-2.424-2.424 0-1.344 1.08-2.424 2.424-2.424 1.344 0 2.424 1.08 2.424 2.424 0 1.344-1.08 2.424-2.424 2.424z" />
              </svg>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-8 text-center">
        <a href="#" className="text-sm text-accent hover:text-accent-2 transition-colors inline-flex items-center gap-1">
          Ver todas las reseñas en Google <span className="text-lg">→</span>
        </a>
      </div>
    </section>
  );
}
