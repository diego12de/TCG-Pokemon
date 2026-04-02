import { siteConfig } from "@/src/config/site";

export function Footer() {
  return (
    <footer className="bg-[#050508] pt-20 pb-10 border-t-2 border-accent relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand */}
          <div className="space-y-6">
            <a href="/" className="flex items-center gap-3 group inline-flex" aria-label="Inicio">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                <span className="font-display font-bold text-xl text-white">N</span>
              </div>
              <span className="font-display font-bold text-xl tracking-wider">
                {siteConfig.storeName}
              </span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed">
              {siteConfig.tagline}. Especialistas en TCG, producto sellado, singles y accesorios premium.
            </p>
            <div className="flex items-center gap-4">
              {Object.entries(siteConfig.socialLinks).map(([platform, url]) => {
                if (!url) return null;
                return (
                  <a 
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-white hover:border-accent hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all"
                    aria-label={`Síguenos en ${platform}`}
                  >
                    <span className="capitalize text-xs font-mono">{platform[0]}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Tienda */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Tienda</h3>
            <nav aria-label="Navegación de tienda" className="flex flex-col gap-4">
              {siteConfig.games.slice(0, 5).map(game => (
                <a key={game} href="#" className="text-text-muted hover:text-accent transition-colors text-sm">{game}</a>
              ))}
              <a href="#" className="text-text-muted hover:text-accent transition-colors text-sm">Accesorios</a>
            </nav>
          </div>

          {/* Col 3: Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Información</h3>
            <nav aria-label="Navegación de información" className="flex flex-col gap-4">
              <a href="#" className="text-text-muted hover:text-accent transition-colors text-sm">Sobre Nosotros</a>
              {siteConfig.features.hasEvents && <a href="#eventos" className="text-text-muted hover:text-accent transition-colors text-sm">Torneos y Eventos</a>}
              {siteConfig.features.hasBuylist && <a href="#buylist" className="text-text-muted hover:text-accent transition-colors text-sm">Vende tus cartas</a>}
              <a href="#contacto" className="text-text-muted hover:text-accent transition-colors text-sm">Contacto y Ubicación</a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors text-sm">Preguntas Frecuentes</a>
            </nav>
          </div>

          {/* Col 4: Newsletter & Payments */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Newsletter</h3>
            <p className="text-text-muted text-sm mb-4">
              Recibe ofertas exclusivas y alertas de restock.
            </p>
            <form className="flex gap-2 mb-8" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="tu@email.com" 
                required
                aria-label="Email para newsletter"
                className="flex-1 bg-surface border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-accent"
              />
              <button type="submit" className="bg-accent hover:bg-accent-2 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                →
              </button>
            </form>

            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider text-text-muted">Pago Seguro</h3>
            <div className="flex flex-wrap gap-2">
              {['VISA', 'MC', 'PAYPAL', 'KLARNA'].map(method => (
                <div key={method} className="bg-surface border border-border px-3 py-1.5 rounded text-[10px] font-mono text-white/70" aria-label={`Pago con ${method}`}>
                  {method}
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} {siteConfig.storeName}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-text-muted hover:text-white text-xs transition-colors">Aviso Legal</a>
            <a href="#" className="text-text-muted hover:text-white text-xs transition-colors">Privacidad</a>
            <a href="#" className="text-text-muted hover:text-white text-xs transition-colors">Cookies</a>
            <a href="#" className="text-text-muted hover:text-white text-xs transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
