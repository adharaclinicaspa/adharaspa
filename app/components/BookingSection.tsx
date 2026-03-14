"use client";
import { ArrowRight, Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { ParticleBackground } from "./ui/ParticleBackground";
import { BlurReveal } from "./ui/BlurReveal";
import Image from "next/image";

export default function BookingSection() {
  return (
    <section id="reservar" className="py-24 relative overflow-hidden bg-black">
      {/* Background Effect */}
      <ParticleBackground className="absolute inset-0 opacity-30" />
      
      <div className="container-brand px-6 md:px-10 max-w-7xl mx-auto relative z-10">
        <div className="glass-panel border border-white/10 rounded-3xl p-6 md:p-12 flex flex-col lg:flex-row gap-12 items-center justify-between overflow-hidden relative">
          
          {/* Background image blend */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <Image 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
              alt="Texture background"
              fill
              className="object-cover mix-blend-overlay"
            />
          </div>

          <div className="w-full lg:w-1/2 relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            <BlurReveal>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Agenda tu <br className="hidden lg:block"/> cita hoy mismo.
              </h2>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed max-w-md">
                Selecciona el servicio y el horario que mejor se adapte a ti a 
                través de nuestro calendario. O contáctanos directamente.
              </p>
            </BlurReveal>
            <BlurReveal delay={0.2} className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                <a 
                  href="https://adharaclinicaspa.setmore.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-gold px-8 py-4 rounded-full text-black font-bold flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                >
                  Probar la experiencia Adhara <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
            </BlurReveal>
          </div>

          <div className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end">
            <BlurReveal delay={0.3} className="w-full max-w-md">
              <div className="glass-panel p-2 rounded-3xl border border-white/10 bg-black/60 shadow-2xl relative">
                 {/* Setmore iFrame */}
                 <div className="w-full bg-white rounded-3xl overflow-hidden shadow-2xl min-h-[800px] h-[800px] relative">
                    <iframe 
                      src="https://adharaclinicaspa.setmore.com" 
                      scrolling="yes" 
                      width="100%" 
                      height="100%" 
                      frameBorder="0"
                      title="Setmore Booking Calendar"
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                 </div>
              </div>
            </BlurReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
