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
              {siteConfig.tagline}. Especialistas en TCG, producto sellado, singles, figuras, accesorios y mucho más.
            </p>
            <div className="flex items-center gap-3">
              {siteConfig.socialLinks.instagram && (
                <a 
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-white hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all"
                  aria-label="Síguenos en Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              )}
              {siteConfig.socialLinks.tiktok && (
                <a 
                  href={siteConfig.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all"
                  aria-label="Síguenos en TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.16 15.2a6.34 6.34 0 006.33 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.53v-3.46a4.83 4.83 0 01-1-.11z"/></svg>
                </a>
              )}
              {siteConfig.socialLinks.twitter && (
                <a 
                  href={siteConfig.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-white hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all"
                  aria-label="Síguenos en X/Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              )}
              {siteConfig.socialLinks.youtube && (
                <a 
                  href={siteConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all"
                  aria-label="Síguenos en YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              )}
              {siteConfig.socialLinks.whatsapp && (
                <a 
                  href={siteConfig.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-white hover:border-green-500 hover:shadow-[0_0_15px_rgba(37,211,102,0.3)] transition-all"
                  aria-label="Escríbenos por WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Tienda */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Tienda</h3>
            <nav aria-label="Navegación de tienda" className="flex flex-col gap-4">
              <a href="#" className="text-text-muted hover:text-accent transition-colors text-sm">Trading Card Games</a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors text-sm">Camisetas</a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors text-sm">Figuras</a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors text-sm">Loungefly</a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors text-sm">Pokeprints</a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors text-sm">Súper Tazas</a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors text-sm">Blind Box</a>
            </nav>
          </div>

          {/* Col 3: Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Información</h3>
            <nav aria-label="Navegación de información" className="flex flex-col gap-4">
              <a href="#" className="text-text-muted hover:text-accent transition-colors text-sm">Sobre Nosotros</a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors text-sm">Mi Cuenta</a>
              {siteConfig.features.hasEvents && <a href="#eventos" className="text-text-muted hover:text-accent transition-colors text-sm">Torneos y Eventos</a>}
              {siteConfig.features.hasBuylist && <a href="#buylist" className="text-text-muted hover:text-accent transition-colors text-sm">Vende tus cartas</a>}
              <a href="#contacto" className="text-text-muted hover:text-accent transition-colors text-sm">Contacto y Ubicación</a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors text-sm">Soporte & FAQ</a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors text-sm">Próximamente</a>
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
            <div className="flex flex-wrap gap-2 mb-6">
              {['VISA', 'MC', 'PAYPAL', 'KLARNA', 'BIZUM'].map(method => (
                <div key={method} className="bg-surface border border-border px-3 py-1.5 rounded text-[10px] font-mono text-white/70" aria-label={`Pago con ${method}`}>
                  {method}
                </div>
              ))}
            </div>

            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider text-text-muted">Envíos</h3>
            <div className="flex flex-wrap gap-2">
              {['CORREOS', 'SEUR', 'MRW'].map(carrier => (
                <div key={carrier} className="bg-surface border border-border px-3 py-1.5 rounded text-[10px] font-mono text-white/70">
                  {carrier}
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} {siteConfig.storeName}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="#" className="text-text-muted hover:text-white text-xs transition-colors">Aviso Legal</a>
            <a href="#" className="text-text-muted hover:text-white text-xs transition-colors">Aviso de Privacidad</a>
            <a href="#" className="text-text-muted hover:text-white text-xs transition-colors">Cookies</a>
            <a href="#" className="text-text-muted hover:text-white text-xs transition-colors">Términos y Condiciones</a>
            <a href="#" className="text-text-muted hover:text-white text-xs transition-colors">Política de Reembolsos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
