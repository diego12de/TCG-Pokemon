/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TopBar } from "@/src/components/layout/TopBar";
import { Navbar } from "@/src/components/layout/Navbar";
import { Hero } from "@/src/components/sections/Hero";
import { TrustBar } from "@/src/components/sections/TrustBar";
import { StatsBar } from "@/src/components/sections/StatsBar";
import { GameCategories } from "@/src/components/sections/GameCategories";
import { FeaturedProducts } from "@/src/components/sections/FeaturedProducts";
import { BuylistBanner } from "@/src/components/sections/BuylistBanner";
import { ValueProps } from "@/src/components/sections/ValueProps";
import { NewReleases } from "@/src/components/sections/NewReleases";
import { EventsCalendar } from "@/src/components/sections/EventsCalendar";
import { SocialProof } from "@/src/components/sections/SocialProof";
import { GoogleReviews } from "@/src/components/sections/GoogleReviews";
import { DiscordCTA } from "@/src/components/sections/DiscordCTA";
import { LeadCapture } from "@/src/components/sections/LeadCapture";
import { Contact } from "@/src/components/sections/Contact";
import { Footer } from "@/src/components/sections/Footer";
import { siteConfig } from "@/src/config/site";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent selection:text-white">
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      {/* Cosmic Background System */}
      <div className="cosmic-bg" aria-hidden="true" />

      {/* Layout Components */}
      <TopBar />
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        <Hero />
        <TrustBar />
        <StatsBar />
        <GameCategories />
        <FeaturedProducts />
        {siteConfig.features.hasBuylist && <BuylistBanner />}
        <ValueProps />
        {siteConfig.features.hasPreorders && <NewReleases />}
        {siteConfig.features.hasEvents && <EventsCalendar />}
        <SocialProof />
        <GoogleReviews />
        {siteConfig.features.hasDiscord && <DiscordCTA />}
        <LeadCapture />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

