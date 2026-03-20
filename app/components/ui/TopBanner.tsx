"use client";
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gold-shimmer relative z-50 overflow-hidden">
      <div className="container-brand mx-auto px-4 md:px-8 py-2.5 flex items-center justify-center gap-4 relative">
        <p className="text-sm font-semibold text-black flex items-center gap-2">
          <span className="glass-pill px-2 py-0.5 text-[10px] bg-white text-black border-none font-bold shadow-sm">NUEVO</span>
          <span>Agenda tu valoración inicial sin costo hoy mismo.</span>
          <a href="#reservar" className="text-black/80 font-bold inline-flex items-center gap-1 hover:underline underline-offset-4 decoration-black/30 ml-2 group transition-all">
            Reservar <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </p>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 md:right-8 text-black/40 hover:text-black transition-colors p-1"
          aria-label="Cerrar aviso"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
