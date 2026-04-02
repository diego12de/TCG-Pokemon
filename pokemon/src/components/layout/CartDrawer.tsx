import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

import { useCart } from "./CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, updateQuantity, removeFromCart, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 180 }}
            className="relative w-full max-w-[500px] bg-[#050508] border-l border-white/10 h-screen h-[100dvh] shadow-[0_0_150px_rgba(0,0,0,1)] flex flex-col"
          >
            {/* Header */}
            <div className="flex-none p-4 border-b border-white/5 flex items-center justify-between bg-white/[0.01] backdrop-blur-3xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center border border-accent/20 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                  <ShoppingBag className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-heading font-black text-white tracking-tighter uppercase italic leading-none mb-0.5">Tu Bóveda</h2>
                  <p className="text-[10px] font-mono text-accent/60 uppercase tracking-[0.4em] font-bold">{items.length} Joyas seleccionadas</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-xl transition-all text-text-muted hover:text-white focus:outline-none hover:rotate-90 duration-500 group"
                aria-label="Cerrar carrito"
              >
                <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-2 space-y-2 border-y border-white/5 custom-scrollbar bg-black/20">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 animate-pulse border border-white/5 shadow-lg">
                    <ShoppingBag className="w-10 h-10 text-text-muted opacity-10" />
                  </div>
                  <h3 className="text-2xl font-heading font-black text-white mb-4 italic uppercase tracking-tighter">Bóveda Vacía</h3>
                  <p className="text-sm text-text-muted mb-8 max-w-xs mx-auto leading-relaxed font-light">Explora el multiverso y añade las cartas más raras a tu inventario personal.</p>
                  <button 
                    onClick={onClose}
                    className="px-8 py-3 bg-accent text-white rounded-xl hover:bg-accent/80 transition-all font-black text-sm uppercase tracking-[0.1em] shadow-[0_15px_40px_rgba(124,58,237,0.3)] active:scale-95 flex items-center gap-3"
                  >
                    <span>Explorar</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group relative flex gap-4 p-3 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-accent/40 transition-all hover:bg-white/[0.02] shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
                  >
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.03] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    
                    <div className="w-20 h-28 rounded-lg overflow-hidden bg-black/60 border border-white/10 flex-shrink-0 relative group-hover:scale-105 transition-transform duration-700">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-2 relative z-10"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://placehold.co/400x560/1a1a2e/ffffff?text=Card";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-40 group-hover:opacity-10 transition-opacity duration-700" />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-center py-1 relative z-10">
                      <div className="space-y-1.5 mb-2">
                        <div className="flex justify-between items-start gap-4">
                          <h3 className="text-sm font-black text-white group-hover:text-accent transition-colors leading-[1.2] tracking-tighter uppercase italic">
                            {item.name}
                          </h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="p-1.5 text-text-muted hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all focus:outline-none border border-transparent hover:border-red-500/20"
                            title="Eliminar artículo"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                            <span className="text-[8px] font-mono text-accent uppercase tracking-[0.3em] font-black">
                              {item.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2 bg-black/90 rounded-lg border border-white/10 p-1.5 shadow-xl">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/5 rounded-md transition-all border border-white/5"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-base font-black text-white font-mono tracking-tighter">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/5 rounded-md transition-all border border-white/5"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-[7px] text-accent font-mono uppercase tracking-[0.2em] font-black italic opacity-40">VALORACIÓN</p>
                          <span className="text-lg font-black text-white drop-shadow-[0_5px_20px_rgba(124,58,237,0.7)] font-mono tracking-tighter leading-none">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            <div className="flex-none p-3 pb-12 border-t border-white/10 bg-[#020204] backdrop-blur-3xl">
              <div className="flex justify-between items-center mb-3 gap-6">
                <div className="space-y-1.5 flex-1">
                  <div className="flex justify-between items-center border-b border-white/5 pb-1">
                    <span className="text-[10px] text-text-muted font-black uppercase tracking-[0.2em] italic">Inversión Neta</span>
                    <span className="text-white font-black font-mono text-sm tracking-tighter">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] italic text-green-500/80 leading-none">Asegurado</span>
                    </div>
                    <span className="text-green-500 font-black tracking-widest text-[9px]">CUBIERTO</span>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-center border-l border-white/10 pl-6 min-w-[120px]">
                  <span className="text-[9px] font-heading font-black text-accent tracking-[0.3em] uppercase mb-0.5 italic opacity-70">Total del Inventario</span>
                  <span className="text-2xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] font-mono tracking-tighter leading-none">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent-2 to-accent rounded-xl blur-lg opacity-10 group-hover:opacity-100 transition duration-1000 animate-pulse" />
                <button 
                  className="relative w-full h-14 bg-accent hover:bg-accent/90 text-white font-black rounded-xl transition-all flex items-center justify-center gap-4 active:scale-[0.98] overflow-hidden shadow-[0_10px_40px_rgba(124,58,237,0.4)] border border-white/10"
                >
                  <span className="relative z-10 text-xl font-black uppercase tracking-tighter italic">Adquirir Colección</span>
                  <ArrowRight className="w-6 h-6 relative z-10 transition-transform group-hover:translate-x-2 group-hover:scale-110" />
                  
                  {/* Super Nova energy pulse */}
                  <div className="absolute top-0 -left-full w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-15deg] group-hover:animate-shine transition-all duration-700" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
