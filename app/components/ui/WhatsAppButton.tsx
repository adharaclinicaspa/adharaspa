"use client";
import Image from 'next/image';

export const WhatsAppButton = () => {
  const phoneNumber = "525525647074";
  const message = "Hola, me gustaría agendar una valoración o recibir más información sobre sus servicios.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-[100] group flex items-center justify-end">
      {/* Tooltip/Label */}
      <div className="mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 hidden md:block">
        <div className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold shadow-xl whitespace-nowrap border border-neutral-200">
          ¿Necesitas ayuda?
        </div>
      </div>
      
      {/* Container for button and pulsar to ensure perfect alignment */}
      <div className="relative flex items-center justify-center">
        {/* Ripple effect animation - strictly centered behind the button */}
        <div className="absolute inset-0 rounded-full bg-[#FFD700] opacity-50 animate-ping -z-10" />
        
        {/* Solid Gold Circle Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-full shadow-[0_15px_35px_rgba(212,175,55,0.6)] hover:shadow-[0_20px_45px_rgba(212,175,55,0.8)] hover:scale-110 transition-all duration-300 group-active:scale-95 border-2 border-white/40 z-10 p-0 overflow-hidden"
          aria-label="Contactar por WhatsApp"
        >
          <div className="relative w-full h-full flex items-center justify-center">
             <Image 
               src="/icons/whatsapp.svg" 
               alt="WhatsApp" 
               width={40} 
               height={40} 
               className="w-10 h-10 object-contain brightness-0"
               style={{ filter: 'brightness(0)' }}
             />
          </div>
        </a>
      </div>
    </div>
  );
};
