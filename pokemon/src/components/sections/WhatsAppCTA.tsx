import { SkewButton } from "@/src/components/ui/SkewButton";
import { siteConfig } from "@/src/config/site";

export function WhatsAppCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#25D366]/10 border-y border-[#25D366]/30">
      {/* Animated geometric pattern background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="whatsapp-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#25D366" />
              <path d="M0 20h40M20 0v40" stroke="#25D366" strokeWidth="0.5" fill="none" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#whatsapp-pattern)" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="w-20 h-20 mx-auto bg-[#25D366] rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(37,211,102,0.5)] rotate-12 hover:rotate-0 transition-transform duration-300">
          {/* WhatsApp Icon */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>

        <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
          LA TIENDA TAMBIÉN VIVE ONLINE
        </h2>
        
        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
          Escríbenos para consultar disponibilidad, hacer pedidos, reservas o resolver cualquier duda. ¡Respuesta rápida garantizada!
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="bg-surface border border-border px-4 py-2 rounded-full text-sm font-mono text-white/80">
            ⚡ Respuesta rápida
          </span>
          <span className="bg-surface border border-border px-4 py-2 rounded-full text-sm font-mono text-white/80">
            📦 Pedidos y reservas
          </span>
          <span className="bg-surface border border-border px-4 py-2 rounded-full text-sm font-mono text-white/80">
            🎯 Atención personalizada
          </span>
        </div>

        <SkewButton 
          label="Escríbenos por WhatsApp →" 
          variant="whatsapp" 
          size="lg" 
          href={siteConfig.socialLinks.whatsapp}
        />
      </div>
    </section>
  );
}
