import { useState, useEffect } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import { cn } from "@/src/lib/utils";
import { SkewButton } from "@/src/components/ui/SkewButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setMegaMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-9 left-0 right-0 z-50 h-[72px] transition-all duration-300",
        scrolled 
          ? "bg-[#0f0f1a]/95 backdrop-blur-[20px] saturate-180 shadow-[0_4px_24px_rgba(0,0,0,0.4)] border-b border-border" 
          : "bg-[#0f0f1a]/80 backdrop-blur-[20px] saturate-180"
      )}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group" aria-label="Inicio">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.5)] group-hover:shadow-[0_0_25px_rgba(124,58,237,0.8)] transition-shadow">
            <span className="font-display font-bold text-xl text-white">N</span>
          </div>
          <span className="font-display font-bold text-xl tracking-wider hidden sm:block">
            {siteConfig.storeName}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
          <a href="/" className="text-sm font-medium hover:text-accent transition-colors aria-[current=page]:text-accent" aria-current="page">Inicio</a>
          
          <div className="relative">
            <button 
              className="flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors touch-manipulation"
              aria-expanded={megaMenuOpen}
              aria-controls="mega-menu"
              aria-haspopup="true"
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
            >
              Tienda
              <svg className={cn("w-4 h-4 transition-transform", megaMenuOpen && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Mega Menu Dropdown */}
            {megaMenuOpen && (
              <div 
                id="mega-menu"
                className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[600px] bg-surface border border-border rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] p-6 grid grid-cols-2 gap-8"
              >
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-4 border-b border-border pb-2">Juegos</h3>
                  <ul className="space-y-3">
                    {siteConfig.games.slice(0, 4).map(game => (
                      <li key={game}>
                        <a href="#" className="text-sm font-medium hover:text-accent transition-colors flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-accent-2/50" />
                          {game}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-4 border-b border-border pb-2">Categorías</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-sm font-medium hover:text-accent transition-colors">Singles</a></li>
                    <li><a href="#" className="text-sm font-medium hover:text-accent transition-colors">Producto Sellado</a></li>
                    <li><a href="#" className="text-sm font-medium hover:text-accent transition-colors">Accesorios</a></li>
                    <li><a href="#" className="text-sm font-medium hover:text-accent transition-colors text-gold">Outlet & Ofertas</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {siteConfig.features.hasBuylist && <a href="#buylist" className="text-sm font-medium hover:text-accent transition-colors">Compra tus cartas</a>}
          {siteConfig.features.hasEvents && <a href="#eventos" className="text-sm font-medium hover:text-accent transition-colors">Eventos</a>}
          <a href="#contacto" className="text-sm font-medium hover:text-accent transition-colors">Contacto</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-text-muted hover:text-white transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Buscar">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 text-text-muted hover:text-white transition-colors relative touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Carrito">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-accent text-[10px] font-bold flex items-center justify-center rounded-full text-white" aria-live="polite">
              3
            </span>
          </button>
          <div className="hidden sm:block">
            <SkewButton label="Ver singles →" size="sm" />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-text-muted hover:text-white transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-over */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-0 right-0 bottom-0 w-[300px] max-w-[80vw] bg-surface border-l border-border shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-4 flex justify-end border-b border-border">
              <button 
                className="p-2 text-text-muted hover:text-white transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              <a href="/" className="text-lg font-heading font-semibold hover:text-accent">Inicio</a>
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-text-muted border-b border-border pb-2">Tienda</div>
                {siteConfig.games.map(game => (
                  <a key={game} href="#" className="block text-base font-medium hover:text-accent">{game}</a>
                ))}
              </div>
              {siteConfig.features.hasBuylist && <a href="#buylist" className="text-lg font-heading font-semibold hover:text-accent">Compra tus cartas</a>}
              {siteConfig.features.hasEvents && <a href="#eventos" className="text-lg font-heading font-semibold hover:text-accent">Eventos</a>}
              <a href="#contacto" className="text-lg font-heading font-semibold hover:text-accent">Contacto</a>
            </nav>
            <div className="p-6 border-t border-border">
              <SkewButton label="Ver singles →" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
