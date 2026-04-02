import React, { useState } from "react";
import { SkewButton } from "@/src/components/ui/SkewButton";
import { siteConfig } from "@/src/config/site";

export function LeadCapture() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here you would normally send the data to an API
    }
  };

  return (
    <section className="py-24 bg-white text-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">SÉ EL PRIMERO EN SABER</h2>
          <p className="text-lg text-bg/70 max-w-2xl mx-auto">
            Novedades, restocks, torneos y ofertas exclusivas antes que nadie. Únete a la lista VIP.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-2">¡Bienvenido/a!</h3>
            <p className="text-green-600">Revisa tu bandeja de entrada para confirmar tu suscripción.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-surface/5 backdrop-blur-sm border border-bg/10 rounded-2xl p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label htmlFor="game" className="block text-sm font-bold uppercase tracking-wider">¿Juego principal?</label>
                <select id="game" className="w-full bg-white border border-bg/20 rounded-lg px-4 py-3 text-bg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow">
                  <option value="">Selecciona un juego...</option>
                  {siteConfig.games.map(game => <option key={game} value={game}>{game}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="type" className="block text-sm font-bold uppercase tracking-wider">¿Tipo de jugador?</label>
                <select id="type" className="w-full bg-white border border-bg/20 rounded-lg px-4 py-3 text-bg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow">
                  <option value="">Selecciona tu perfil...</option>
                  <option value="casual">Casual</option>
                  <option value="competitivo">Competitivo</option>
                  <option value="coleccionista">Coleccionista</option>
                  <option value="inversor">Inversor</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider">Tu Email</label>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="flex-1 bg-white border border-bg/20 rounded-lg px-4 py-3 text-bg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
                  aria-describedby="email-hint"
                />
                <SkewButton type="submit" label="Activar mi acceso →" size="lg" className="w-full sm:w-auto shrink-0" />
              </div>
              <p id="email-hint" className="text-xs text-bg/50">
                Al suscribirte aceptas nuestra política de privacidad. Cero spam, solo cartas.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
