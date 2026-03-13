"use client";
import { BlurReveal } from "./ui/BlurReveal";
import { BeforeAfterSlider } from "./ui/BeforeAfterSlider";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function BeforeAfterSection() {
  const benefits = [
    "Diseño de cejas simétrico",
    "Pigmentos premium duraderos",
    "Técnica sin dolor",
    "Resultados naturales inmediatos"
  ];

  return (
    <section id="resultados" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container-brand px-6 md:px-10 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-5 flex flex-col items-start z-10">
            <BlurReveal>
              <span className="inline-block mb-4 text-[var(--color-brand-gold-text)] font-semibold tracking-wider text-sm uppercase">
                Resultados Visibles
              </span>
            </BlurReveal>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              <BlurReveal delay={0.1}>
                Técnicas probadas,
              </BlurReveal>
              <BlurReveal delay={0.2} className="text-neutral-400">
                resultados tangibles.
              </BlurReveal>
            </h2>

            <BlurReveal delay={0.3}>
              <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                Olvídate del maquillaje diario. Nuestra técnica de micropigmentación 
                profesional realza tus rasgos con una precisión artística. Siente la 
                libertad de estar lista 24/7.
              </p>
            </BlurReveal>

            <div className="flex flex-col gap-4 mb-10 w-full">
              {benefits.map((benefit, idx) => (
                <BlurReveal key={idx} delay={0.4 + (idx * 0.1)} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-gold-text)]" />
                  <span className="text-neutral-200 font-medium">{benefit}</span>
                </BlurReveal>
              ))}
            </div>

            <BlurReveal delay={0.8}>
              <a
                href="#contacto"
                className="group flex items-center justify-between w-full sm:w-auto gap-12 glass-panel hover:bg-white/10 transition-colors border border-white/20 px-6 py-4 rounded-2xl"
              >
                <div className="flex flex-col">
                  <span className="text-white font-semibold">Agendar Valoración</span>
                  <span className="text-neutral-400 text-sm">Gratis y sin compromiso</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </a>
            </BlurReveal>
          </div>

          {/* Right Column: Interactive Slider */}
          <div className="lg:col-span-7 relative z-10 w-full rounded-3xl p-2 glass-panel border border-white/10 bg-neutral-900/50">
            <BlurReveal delay={0.4} className="w-full">
              <BeforeAfterSlider 
                beforeImage="https://images.pexels.com/photos/3785139/pexels-photo-3785139.jpeg?auto=compress&cs=tinysrgb&w=1200"
                afterImage="https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg?auto=compress&cs=tinysrgb&w=1200"
                className="w-full h-[600px]"
              />
            </BlurReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
