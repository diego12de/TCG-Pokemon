import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../config/site';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { InkButton } from '../ui/InkButton';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-paper transition-shadow duration-300 ${isScrolled ? 'shadow-[0_4px_0_#0A0A0A]' : ''} border-b-[4px] border-ink`}>
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-blood"></div>
          <a href="/" className="font-display text-4xl text-ink tracking-wider hover:text-blood transition-colors">
            {siteConfig.storeName}
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 font-body text-[13px] font-bold uppercase tracking-widest text-ink">
          <a href="#" className="hover:text-blood transition-colors">INICIO</a>
          <div className="relative group cursor-pointer">
            <span className="hover:text-blood transition-colors flex items-center gap-1">TIENDA ▾</span>
            {/* Mega Menu Dropdown (Simplified for now) */}
            <div className="absolute top-full left-0 mt-6 w-[600px] bg-paper panel-border shadow-hard opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-6 grid grid-cols-2 gap-6">
              <div className="grid grid-cols-2 gap-4">
                {siteConfig.games.map(game => (
                  <a key={game} href="#" className="font-display text-xl hover:text-blood border-b-2 border-transparent hover:border-blood">{game}</a>
                ))}
              </div>
              <div className="border-l-2 border-ink pl-6">
                <h4 className="font-mono text-sm text-blood mb-4">ÚLTIMOS LLEGADOS</h4>
                <ul className="space-y-2 font-mono text-xs text-ink">
                  <li>→ Charizard ex 199/165</li>
                  <li>→ The One Ring (Borderless)</li>
                  <li>→ S:P Little Knight</li>
                </ul>
              </div>
            </div>
          </div>
          <a href="#" className="hover:text-blood transition-colors">BUYLIST</a>
          <a href="#" className="hover:text-blood transition-colors">TORNEOS</a>
          <a href="#" className="hover:text-blood transition-colors">BLOG</a>
          <a href="#" className="hover:text-blood transition-colors">CONTACTO</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button className="text-ink hover:text-blood transition-colors" aria-label="Search">
            <Search size={24} strokeWidth={2.5} />
          </button>
          <button className="text-ink hover:text-blood transition-colors relative" aria-label="Cart">
            <ShoppingCart size={24} strokeWidth={2.5} />
            <span className="absolute -top-2 -right-2 bg-blood text-white font-mono text-[10px] w-5 h-5 flex items-center justify-center rounded-full">3</span>
          </button>
          <div className="hidden md:block">
            <InkButton className="text-sm px-4 py-2">VER TIENDA</InkButton>
          </div>
          <button className="lg:hidden text-ink" aria-label="Menu">
            <Menu size={28} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </nav>
  );
}
