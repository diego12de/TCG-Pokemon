import { motion } from "motion/react";
import { ArrowLeft, ShoppingCart, ShieldCheck, Zap, Star } from "lucide-react";
import { type ProductType } from "@/src/components/ui/CardHover";
import { RarityBadge } from "../ui/RarityBadge";
import { PriceTag } from "../ui/PriceTag";
import { useCart } from "../layout/CartContext";

interface ProductDetailProps {
  product: ProductType;
  onBack: () => void;
}

export function ProductDetail({ product, onBack }: ProductDetailProps) {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-accent hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-mono uppercase tracking-widest">Volver al catálogo</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Product Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-surface border border-border group"
        >
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-6 left-6 scale-150 origin-top-left">
            <RarityBadge rarity={product.rarity} />
          </div>
        </motion.div>

        {/* Product Info Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <p className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-2">{product.set}</p>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white italic uppercase tracking-tighter leading-none mb-4">
              {product.name}
            </h1>
            <div className="flex flex-wrap gap-4 items-center">
              <PriceTag price={product.price} original={product.originalPrice} className="text-3xl" />
              <div className="h-6 w-px bg-border mx-2" />
              <span className="bg-surface border border-border px-3 py-1 rounded text-sm font-mono text-white">
                CONDICIÓN: {product.condition}
              </span>
            </div>
          </div>

          <div className="bg-surface/50 backdrop-blur-md border border-border rounded-2xl p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4 text-sm font-mono">
              <div className="space-y-1">
                <span className="text-text-muted uppercase text-[10px]">Rareza</span>
                <p className="text-white uppercase">{product.rarity}</p>
              </div>
              <div className="space-y-1">
                <span className="text-text-muted uppercase text-[10px]">Categoría</span>
                <p className="text-white">{product.category} TCG</p>
              </div>
              <div className="space-y-1">
                <span className="text-text-muted uppercase text-[10px]">Stock</span>
                <p className={product.stock > 0 ? "text-green-400" : "text-red-400"}>
                  {product.stock > 0 ? `${product.stock} unidades` : "Agotado"}
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-text-muted uppercase text-[10px]">Envío</span>
                <p className="text-white">24/48h Laborales</p>
              </div>
            </div>

            <button 
              onClick={() => addToCart(product)}
              disabled={product.stock === 0}
              className="w-full bg-accent hover:bg-accent-2 disabled:bg-surface disabled:text-text-muted text-white font-heading font-black py-4 rounded-xl transition-all uppercase tracking-widest flex items-center justify-center gap-3 group shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_50px_rgba(124,58,237,0.5)]"
            >
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Añadir al Carrito
            </button>
          </div>

          {/* Trust Features */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-surface/30 border border-border p-4 rounded-xl text-center space-y-2 group hover:border-accent/30 transition-colors">
              <ShieldCheck className="w-6 h-6 text-accent mx-auto" />
              <p className="text-[10px] font-mono uppercase text-text-muted">Garantía Autenticidad</p>
            </div>
            <div className="bg-surface/30 border border-border p-4 rounded-xl text-center space-y-2 group hover:border-accent/30 transition-colors">
              <Zap className="w-6 h-6 text-accent mx-auto" />
              <p className="text-[10px] font-mono uppercase text-text-muted">Envío Express</p>
            </div>
            <div className="bg-surface/30 border border-border p-4 rounded-xl text-center space-y-2 group hover:border-accent/30 transition-colors">
              <Star className="w-6 h-6 text-accent mx-auto" />
              <p className="text-[10px] font-mono uppercase text-text-muted">Vendedor Premium</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Description / Extra Info */}
      <div className="mt-20 border-t border-border pt-20">
        <h2 className="text-2xl font-heading font-black text-white italic uppercase tracking-tight mb-8">
          Descripción del Producto
        </h2>
        <div className="prose prose-invert max-w-none text-text-muted font-body leading-relaxed space-y-4">
          <p>
            Esta espectacular carta de <strong>{product.name}</strong> pertenece a la expansión <strong>{product.set}</strong>.
            Se trata de una pieza de colección en estado <strong>{product.condition}</strong>, ideal para jugadores competitivos 
            o coleccionistas que buscan elevar el nivel de su colección.
          </p>
          <p>
            Todas nuestras cartas son verificadas por expertos para garantizar su autenticidad y estado. 
            El envío se realiza con protección máxima (funda, top-loader y sobre acolchado) para asegurar que llegue 
            en las mismas condiciones que ves en la imagen.
          </p>
        </div>
      </div>
    </div>
  );
}
