import { useState } from "react";
import { motion } from "motion/react";
import { Search, Filter, ArrowLeft } from "lucide-react";
import { CardHover } from "@/src/components/ui/CardHover";
import { MOCK_PRODUCTS } from "@/src/data/products";
import { cn } from "@/src/lib/utils";

import { type ProductType } from "@/src/components/ui/CardHover";

interface SinglesGalleryProps {
  onBack: () => void;
  onProductClick: (product: ProductType) => void;
}

export function SinglesGallery({ onBack, onProductClick }: SinglesGalleryProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const categories = ["Todos", "Pokémon", "Magic", "Lorcana", "Yu-Gi-Oh!"];

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "Todos" || 
                           product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-accent hover:text-white transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-mono uppercase tracking-widest">Volver al inicio</span>
          </button>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white italic uppercase tracking-tighter leading-none">
            CATÁLOGO <span className="text-accent underline decoration-accent/30 underline-offset-8">SINGLES</span>
          </h1>
        </div>

        <div className="relative group min-w-[300px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-hover:text-accent transition-colors" />
          <input 
            type="text"
            placeholder="Buscar por nombre o set..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-surface/50 border border-border rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-all backdrop-blur-md"
          />
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-wrap gap-3 mb-12 sticky top-[100px] z-30 py-4 bg-bg/80 backdrop-blur-md border-y border-white/5">
        <div className="flex items-center gap-2 mr-4 border-r border-border pr-4">
          <Filter className="w-4 h-4 text-accent" />
          <span className="text-xs font-black uppercase tracking-widest">Filtrar</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all border",
              activeCategory === cat
                ? "bg-accent text-white border-accent shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                : "bg-surface border-border text-text-muted hover:border-accent/50 hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results Grid */}
      {filteredProducts.length > 0 ? (
        <div className="space-y-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
            {paginatedProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <CardHover product={product} onClick={onProductClick} />
              </motion.div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 pt-12 border-t border-white/5">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="p-2 rounded-lg bg-surface border border-border text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-accent transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={cn(
                      "w-10 h-10 rounded-lg font-mono text-sm transition-all border",
                      currentPage === page
                        ? "bg-accent border-accent text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                        : "bg-surface border-border text-text-muted hover:border-accent/50 hover:text-white"
                    )}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="p-2 rounded-lg bg-surface border border-border text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-accent transition-colors"
              >
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="py-32 text-center">
          <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-accent/40" />
          </div>
          <h3 className="text-2xl font-heading font-black text-white italic uppercase tracking-tighter mb-4">
            No se encontraron cartas
          </h3>
          <p className="text-text-muted max-w-md mx-auto">
            Prueba a buscar con otros términos o cambia la categoría de filtrado.
          </p>
        </div>
      )}
    </div>
  );
}
