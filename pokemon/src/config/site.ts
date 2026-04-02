export const siteConfig = {
  // ─── BRAND IDENTITY ───
  storeName: "NEXUS CARDS",
  tagline: "Tu tienda de cartas de referencia",
  location: "Madrid, España",
  locationType: "physical", // "physical" | "online-only"
  phone: "+34 600 000 000",
  email: "hola@nexuscards.com",
  whatsapp: "https://wa.me/34600000000",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.669868735517!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287e28d447f3%3A0x63351d520de380f7!2sPuerta%20del%20Sol!5e0!3m2!1sen!2ses!4v1710000000000!5m2!1sen!2ses",
  logoUrl: "/assets/logo.svg",

  // ─── SOCIAL LINKS ───
  socialLinks: {
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    discord: "https://discord.com",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com",
  },

  // ─── TCG GAMES SUPPORTED ───
  games: [
    "Pokémon", "Magic: The Gathering", "Yu-Gi-Oh!", "Lorcana",
    "One Piece", "Flesh and Blood", "Dragon Ball Super"
  ],

  // ─── STORE STATS ───
  stats: [
    { value: "+15.000", label: "Cartas en stock", icon: "cards" },
    { value: "+200", label: "Clientes activos", icon: "users" },
    { value: "4,9★", label: "Google Reviews", icon: "star" },
    { value: "24h", label: "Envíos nacionales", icon: "truck" },
  ],

  // ─── FEATURES & TOGGLES ───
  features: {
    hasBuylist: true,
    hasEvents: true,
    hasMembership: false,
    hasDiscord: true,
    hasBlog: false,
    hasPreorders: true,
    hasInstallments: true,
    chatbotWidget: true,
    reviewPlatform: "google",
  },

  // ─── CONTENT ───
  heroHeadline: {
    line1: "TU TIENDA DE",
    line2: "CARTAS",
    line3: "DE REFERENCIA",
  },
  heroSubtitle: "Encuentra las mejores singles, sellados y accesorios. Precios competitivos, stock actualizado diario y comunidad apasionada.",
  heroCTA1: "Explorar tienda →",
  heroCTA2: "Ver próximos eventos",

  // ─── SEO ───
  seo: {
    language: "es",
    locale: "es_ES",
    primaryKeywords: ["tienda tcg", "cartas pokemon", "magic the gathering"],
    schemaType: "HobbyShop",
  },
};
