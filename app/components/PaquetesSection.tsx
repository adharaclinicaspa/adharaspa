"use client";
import { BlurReveal } from "./ui/BlurReveal";

export default function PaquetesSection() {
  return (
    <section id="paquetes-preview" className="py-24 bg-[var(--color-brand-bg)]">
      <div className="container-brand px-6 md:px-10 max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <BlurReveal>
            <span className="inline-block mb-3 text-[var(--color-brand-gold-text)] font-semibold tracking-wider text-sm uppercase">
              Resultados que evolucionan contigo
            </span>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Paquetes Exclusivos Adhara
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.2}>
            <p className="text-neutral-400 text-lg mt-4 max-w-2xl mx-auto">
              Diseñados para potenciar resultados de forma progresiva, segura y personalizada.
            </p>
          </BlurReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Experiencias Faciales */}
          <BlurReveal delay={0.3}>
            <div className="glass-panel p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all h-full flex flex-col items-center text-center bg-gradient-to-b from-neutral-900/50 to-transparent">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Experiencias Faciales</h3>
              <p className="text-neutral-300 mb-8 leading-relaxed flex-grow">
                Rituales personalizados enfocados en rejuvenecimiento, control de acné, 
                despigmentación, efecto glow y bioestimulación avanzada.
              </p>
                <a href="/tratamientos#paquetes" className="btn-outline px-6 py-3 rounded-full text-white font-semibold text-sm w-full flex justify-center">
                  Ver Opciones Faciales
                </a>
            </div>
          </BlurReveal>

          {/* Protocolos Corporales */}
          <BlurReveal delay={0.4}>
            <div className="glass-panel p-10 rounded-3xl border border-[var(--color-brand-gold-text)]/30 hover:border-[var(--color-brand-gold-text)] transition-all h-full flex flex-col items-center text-center relative overflow-hidden bg-gradient-to-b from-[var(--color-brand-gold-text)]/5 to-transparent">
              <div className="absolute top-0 right-0 glass-pill px-4 py-1.5 text-xs font-semibold bg-[var(--color-brand-gold-text)] text-black rounded-bl-3xl">
                MÁS POPULAR
              </div>
              <div className="w-16 h-16 rounded-full bg-[var(--color-brand-gold-text)]/10 flex items-center justify-center mb-6">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Protocolos Corporales</h3>
              <p className="text-neutral-300 mb-8 leading-relaxed flex-grow">
                Tecnología estética de última generación para moldear, reafirmar y 
                mejorar la textura de la piel. Planes diseñados a medida.
              </p>
              <a href="/tratamientos#paquetes" className="btn-gold px-6 py-3 rounded-full text-black font-semibold text-sm w-full flex justify-center">
                Ver Opciones Corporales
              </a>
            </div>
          </BlurReveal>
        </div>

        <BlurReveal delay={0.5} className="flex justify-center mt-12">
           <a href="/tratamientos" className="text-neutral-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold flex items-center gap-2">
             Conocer todos los servicios →
           </a>
        </BlurReveal>

      </div>
    </section>
  );
}
