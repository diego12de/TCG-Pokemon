import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/src/config/site";

export function Contact() {
  return (
    <section id="contacto" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Info Left */}
        <div className="space-y-10">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">DÓNDE ENCONTRARNOS</h2>
            <p className="text-text-muted text-lg">
              Ven a visitarnos, juega unas partidas y descubre nuestro stock en persona.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Dirección</h3>
                <p className="text-text-muted">{siteConfig.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-2/10 border border-accent-2/20 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-accent-2" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Teléfono / WhatsApp</h3>
                <p className="text-text-muted">{siteConfig.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <p className="text-text-muted">{siteConfig.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  Horario
                  <span className="text-[10px] uppercase font-mono bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full border border-green-500/30">
                    Abierto ahora
                  </span>
                </h3>
                <div className="text-text-muted space-y-1">
                  <p>Lunes a Viernes: 10:00 - 14:00 | 17:00 - 21:00</p>
                  <p>Sábados: 10:00 - 21:00 (Ininterrumpido)</p>
                  <p>Domingos: Cerrado (Salvo torneos)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Right */}
        <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden glass-card p-2">
          <div className="absolute inset-0 bg-accent/5 pointer-events-none z-10" />
          {siteConfig.googleMapsEmbed ? (
            <iframe 
              src={siteConfig.googleMapsEmbed}
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: "12px", filter: "invert(90%) hue-rotate(180deg) contrast(1.2)" }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación de la tienda"
            />
          ) : (
            <div className="w-full h-full bg-surface rounded-xl flex items-center justify-center border border-border">
              <p className="text-text-muted font-mono">Mapa no configurado</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
