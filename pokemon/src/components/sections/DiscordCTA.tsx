import { SkewButton } from "@/src/components/ui/SkewButton";
import { siteConfig } from "@/src/config/site";

export function DiscordCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#5865F2]/10 border-y border-[#5865F2]/30">
      {/* Animated wave pattern background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="discord-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="#5865F2" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#discord-pattern)" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="w-20 h-20 mx-auto bg-[#5865F2] rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(88,101,242,0.5)] rotate-12 hover:rotate-0 transition-transform duration-300">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
          </svg>
        </div>

        <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
          LA TIENDA TAMBIÉN VIVE ONLINE
        </h2>
        
        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
          Torneos online, sorteos, alertas de restock, discusiones de meta y una comunidad de +1.200 jugadores activos.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="bg-surface border border-border px-4 py-2 rounded-full text-sm font-mono text-white/80">
            🟢 +1.200 miembros
          </span>
          <span className="bg-surface border border-border px-4 py-2 rounded-full text-sm font-mono text-white/80">
            🔍 #singles-search activo
          </span>
          <span className="bg-surface border border-border px-4 py-2 rounded-full text-sm font-mono text-white/80">
            🎁 Sorteos semanales
          </span>
        </div>

        <SkewButton 
          label="Unirme al Discord →" 
          variant="discord" 
          size="lg" 
          href={siteConfig.socialLinks.whatsapp}
        />
      </div>
    </section>
  );
}
