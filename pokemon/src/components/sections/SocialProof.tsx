import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const STORIES = [
  { id: 1, name: "Alex M.", img: "https://i.pravatar.cc/150?u=1", game: "MTG", rating: 5, text: "El mejor trato que he recibido. Las cartas llegaron en estado MINT tal cual describían." },
  { id: 2, name: "Sara K.", img: "https://i.pravatar.cc/150?u=2", game: "PKMN", rating: 5, text: "Encontré la carta que me faltaba para mi master set a un precio increíble. Envío súper rápido." },
  { id: 3, name: "David R.", img: "https://i.pravatar.cc/150?u=3", game: "YGO", rating: 4, text: "Buena tienda local, los torneos de los fines de semana tienen un ambiente genial." },
  { id: 4, name: "Laura G.", img: "https://i.pravatar.cc/150?u=4", game: "Lorcana", rating: 5, text: "Compré una caja de Lorcana y me tocó la Enchanted. ¡Me traen suerte!" },
  { id: 5, name: "Carlos T.", img: "https://i.pravatar.cc/150?u=5", game: "OP", rating: 5, text: "La buylist es súper justa. Vendí mi colección antigua y me pagaron en 24h." },
  { id: 6, name: "Elena P.", img: "https://i.pravatar.cc/150?u=6", game: "MTG", rating: 5, text: "Siempre tienen stock de las staples que necesito para mis mazos de Commander." },
];

export function SocialProof() {
  const [activeStory, setActiveStory] = useState<number | null>(null);

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">LA COMUNIDAD HABLA</h2>
        <p className="text-text-muted font-mono text-sm uppercase tracking-widest">
          +200 reseñas verificadas
        </p>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="flex justify-center gap-4 sm:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
      >
        {STORIES.map((story, index) => (
          <motion.div
            key={story.id}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.4 } }
            }}
            className="flex flex-col items-center gap-3 cursor-pointer group snap-center shrink-0"
            onClick={() => setActiveStory(index)}
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-accent to-accent-2 transition-transform duration-300 group-hover:scale-110">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-bg bg-surface">
                <img src={story.img} alt={story.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-surface border border-border text-[10px] font-mono px-2 py-0.5 rounded-full text-white shadow-lg">
                {story.game}
              </div>
            </div>
            <span className="text-sm font-mono text-text-muted group-hover:text-white transition-colors">
              {story.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Fullscreen Story Modal */}
      <AnimatePresence>
        {activeStory !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button 
              className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-10"
              onClick={() => setActiveStory(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative w-full max-w-md aspect-[9/16] bg-surface rounded-2xl overflow-hidden border border-border shadow-[0_0_50px_rgba(124,58,237,0.2)]">
              {/* Progress Bars */}
              <div className="absolute top-4 inset-x-4 flex gap-2 z-10">
                {STORIES.map((_, i) => (
                  <div key={i} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                    {i === activeStory && (
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4, ease: "linear" }}
                        onAnimationComplete={() => {
                          if (activeStory < STORIES.length - 1) setActiveStory(activeStory + 1);
                          else setActiveStory(null);
                        }}
                        className="h-full bg-white"
                      />
                    )}
                    {i < activeStory && <div className="h-full bg-white" />}
                  </div>
                ))}
              </div>

              {/* Story Content */}
              <div className="absolute inset-0 flex flex-col p-8 pt-16">
                <div className="flex items-center gap-4 mb-8">
                  <img src={STORIES[activeStory].img} alt="" className="w-12 h-12 rounded-full border-2 border-accent" />
                  <div>
                    <div className="font-bold">{STORIES[activeStory].name}</div>
                    <div className="text-xs font-mono text-accent-2">{STORIES[activeStory].game}</div>
                  </div>
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-6 h-6 ${i < STORIES[activeStory].rating ? "text-gold" : "text-white/20"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-heading leading-relaxed text-white/90">
                  "{STORIES[activeStory].text}"
                </p>
              </div>

              {/* Navigation Areas */}
              <div 
                className="absolute inset-y-0 left-0 w-1/3 cursor-w-resize"
                onClick={() => activeStory > 0 && setActiveStory(activeStory - 1)}
              />
              <div 
                className="absolute inset-y-0 right-0 w-2/3 cursor-e-resize"
                onClick={() => activeStory < STORIES.length - 1 ? setActiveStory(activeStory + 1) : setActiveStory(null)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
