import React from 'react';
import { siteConfig } from '../../config/site';

export function Footer() {
  return (
    <footer className="bg-ink text-paper relative pt-16 pb-8 border-t-[4px] border-blood">
      
      {/* Top SVG Divider */}
      <div className="absolute top-0 left-0 w-full h-4 -translate-y-full">
        <svg viewBox="0 0 1200 12" preserveAspectRatio="none" className="w-full h-full fill-ink">
          <path d="M0,12 L1200,12 L1200,0 Q900,12 600,0 Q300,12 0,0 Z" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand */}
          <div className="flex flex-col">
            <h2 className="font-display text-5xl text-paper mb-2 tracking-wider hover:text-blood transition-colors cursor-pointer inline-block">
              {siteConfig.storeName}
            </h2>
            <p className="font-body text-sm text-text-muted mb-6">
              {siteConfig.tagline}
            </p>
            <p className="font-mono text-xs text-text-muted mt-auto">
              EST. 2017
            </p>
          </div>

          {/* Col 2: Tienda */}
          <div>
            <h4 className="font-mono text-sm text-blood font-bold uppercase mb-6">TIENDA</h4>
            <ul className="space-y-3 font-body text-sm">
              {siteConfig.games.slice(0, 4).map(game => (
                <li key={game}>
                  <a href="#" className="hover:text-blood hover:underline decoration-2 underline-offset-4 transition-all">{game}</a>
                </li>
              ))}
              <li><a href="#" className="hover:text-blood hover:underline decoration-2 underline-offset-4 transition-all">Accesorios</a></li>
            </ul>
          </div>

          {/* Col 3: Info */}
          <div>
            <h4 className="font-mono text-sm text-blood font-bold uppercase mb-6">INFO</h4>
            <ul className="space-y-3 font-body text-sm">
              <li><a href="#" className="hover:text-blood hover:underline decoration-2 underline-offset-4 transition-all">Buylist / Vender Cartas</a></li>
              <li><a href="#" className="hover:text-blood hover:underline decoration-2 underline-offset-4 transition-all">Calendario Torneos</a></li>
              <li><a href="#" className="hover:text-blood hover:underline decoration-2 underline-offset-4 transition-all">Envíos y Devoluciones</a></li>
              <li><a href="#" className="hover:text-blood hover:underline decoration-2 underline-offset-4 transition-all">Contacto</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="font-mono text-sm text-blood font-bold uppercase mb-6">NEWSLETTER</h4>
            <p className="font-body text-sm text-text-muted mb-4">
              Nada de spam. Solo lo esencial.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="bg-mid-gray border-[2px] border-paper p-3 font-mono text-sm text-paper w-full focus:outline-none focus:border-blood rounded-none"
              />
              <button type="submit" className="bg-paper text-ink font-display text-xl px-4 border-[2px] border-paper hover:bg-blood hover:text-white hover:border-blood transition-colors">
                OK
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t-[2px] border-mid-gray pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} {siteConfig.storeName} | <a href="#" className="hover:text-paper">Aviso Legal</a> | <a href="#" className="hover:text-paper">Privacidad</a> | <a href="#" className="hover:text-paper">Cookies</a>
          </div>
          <div className="font-mono text-[10px] text-blood font-bold tracking-widest">
            HECHO CON TINTA Y CAFÉ
          </div>
        </div>

      </div>
    </footer>
  );
}
