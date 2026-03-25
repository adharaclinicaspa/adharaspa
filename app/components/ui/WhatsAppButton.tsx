"use client";
import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const phoneNumber = "525525647074";
  const message = "Hola, me gustaría agendar una valoración o recibir más información sobre sus servicios.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-[100] group flex items-center">
      {/* Tooltip/Label */}
      <div className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        <div className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold shadow-xl whitespace-nowrap border border-neutral-200">
          ¿Necesitas ayuda?
        </div>
      </div>
      
      {/* Green Circle Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 group-active:scale-95 border-2 border-white/20"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={32} className="text-white fill-white" />
      </a>
      
      {/* Ripple effect animation */}
      <div className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-20 animate-ping" />
    </div>
  );
};
