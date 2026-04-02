/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { TopBar } from "@/src/components/layout/TopBar";
import { Navbar } from "@/src/components/layout/Navbar";
import { Hero } from "@/src/components/sections/Hero";
import { TrustBar } from "@/src/components/sections/TrustBar";
import { StatsBar } from "@/src/components/sections/StatsBar";
import { ShippingBanner } from "@/src/components/sections/ShippingBanner";
import { GameCategories } from "@/src/components/sections/GameCategories";
import { ProductCategories } from "@/src/components/sections/ProductCategories";
import { FeaturedProducts } from "@/src/components/sections/FeaturedProducts";
import { BuylistBanner } from "@/src/components/sections/BuylistBanner";
import { ValueProps } from "@/src/components/sections/ValueProps";
import { NewReleases } from "@/src/components/sections/NewReleases";
import { EventsCalendar } from "@/src/components/sections/EventsCalendar";
import { BlindBox } from "@/src/components/sections/BlindBox";
import { GoogleReviews } from "@/src/components/sections/GoogleReviews";
import { WhatsAppCTA } from "@/src/components/sections/WhatsAppCTA";
import { LeadCapture } from "@/src/components/sections/LeadCapture";
import { Contact } from "@/src/components/sections/Contact";
import { Footer } from "@/src/components/sections/Footer";
import { siteConfig } from "@/src/config/site";
import { CartProvider } from "@/src/components/layout/CartContext";
import { SinglesGallery } from "@/src/components/views/SinglesGallery";
import { ProductDetail } from "@/src/components/views/ProductDetail";
import { type ProductType } from "@/src/components/ui/CardHover";

export default function App() {
  const [view, setView] = useState<"home" | "singles" | "detail">("home");
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

  const handleProductClick = (product: ProductType) => {
    setSelectedProduct(product);
    setView("detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-bg text-text selection:bg-accent selection:text-white">
        {/* Accessibility Skip Link */}
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>

        {/* Cosmic Background System */}
        <div className="cosmic-bg" aria-hidden="true" />

        {/* Layout Components */}
        <TopBar />
        <ShippingBanner />
        <Navbar onViewChange={setView} />

        {/* Main Content */}
        {view === "home" ? (
          <main id="main-content">
            <Hero />
            <TrustBar />
            <StatsBar />
            <GameCategories />
            <ProductCategories />
            <FeaturedProducts />
            {siteConfig.features.hasBuylist && <BuylistBanner />}
            <ValueProps />
            {siteConfig.features.hasPreorders && <NewReleases />}
            {siteConfig.features.hasEvents && <EventsCalendar />}
            {siteConfig.features.hasBlindBox && <BlindBox />}
            <GoogleReviews />
            {siteConfig.features.hasWhatsApp && <WhatsAppCTA />}
            <LeadCapture />
            <Contact />
          </main>
        ) : view === "singles" ? (
          <main id="main-content">
            <SinglesGallery 
              onBack={() => setView("home")} 
              onProductClick={handleProductClick}
            />
          </main>
        ) : (
          <main id="main-content">
            {selectedProduct && (
              <ProductDetail 
                product={selectedProduct} 
                onBack={() => setView("singles")} 
              />
            )}
          </main>
        )}

        {/* Footer */}
        <Footer />
      </div>
    </CartProvider>
  );
}
