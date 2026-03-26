import React from 'react';
import { siteConfig } from '../../config/site';
import { ChapterBadge } from '../ui/ChapterBadge';
import { Instagram, Twitter, MessageCircle, Youtube } from 'lucide-react';

export function ContactPanel() {
  return (
    <section className="py-24 px-6 bg-paper">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 border-[4px] border-ink shadow-hard-lg">
        
        {/* Left Panel: Info */}
        <div className="p-12 lg:p-16 bg-paper flex flex-col justify-center border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-ink">
          <div className="mb-10">
            <ChapterBadge chapter="10" title="UBICACIÓN" />
            <h3 className="font-display text-5xl md:text-6xl text-ink">ENCUÉNTRANOS</h3>
          </div>

          <div className="space-y-6 font-mono text-sm md:text-base text-ink font-bold">
            <p className="flex items-start gap-4">
              <span className="text-blood text-xl">📍</span>
              <span>{siteConfig.location}<br/>Calle Falsa 123, Local 4</span>
            </p>
            <p className="flex items-center gap-4 hover:text-blood transition-colors cursor-pointer">
              <span className="text-blood text-xl">✉</span>
              <span>{siteConfig.email}</span>
            </p>
            <p className="flex items-center gap-4">
              <span className="text-blood text-xl">📞</span>
              <span>{siteConfig.phone}</span>
            </p>
            <p className="flex items-center gap-4">
              <span className="text-blood text-xl">💬</span>
              <span>WhatsApp: {siteConfig.whatsapp}</span>
            </p>
            
            <div className="mt-8 pt-8 border-t-[2px] border-ink border-dashed">
              <p className="flex items-center gap-4">
                <span className="text-blood text-xl">🕐</span>
                <span>HORARIO: L-S 10:00 - 21:00</span>
              </p>
              <div className="mt-4 inline-block bg-green-100 border-2 border-green-600 text-green-700 px-3 py-1 text-xs animate-pulse">
                ABIERTO AHORA
              </div>
            </div>
          </div>

          {/* Social Row */}
          <div className="flex gap-6 mt-12">
            {[Instagram, Twitter, MessageCircle, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 bg-ink text-paper flex items-center justify-center hover:bg-paper hover:text-ink hover:shadow-hard-red transition-all border-[2px] border-transparent hover:border-ink">
                <Icon size={24} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Panel: Map */}
        <div className="relative h-[400px] lg:h-auto bg-mid-gray overflow-hidden">
          <iframe 
            src={siteConfig.googleMapsEmbed}
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
            className="absolute inset-0"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
