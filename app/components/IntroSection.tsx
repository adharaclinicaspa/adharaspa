"use client";
import { BlurReveal } from "./ui/BlurReveal";

export default function IntroSection() {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden bg-gradient-to-b from-[var(--color-brand-bg)] to-neutral-900/40">
      <div className="container-brand px-6 md:px-10 max-w-4xl mx-auto text-center">
        <BlurReveal delay={0.1}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-white/20" />
            <span className="text-[var(--color-brand-gold-text)] font-semibold tracking-widest text-xs uppercase">
              Nuestra Filosofía
            </span>
            <div className="h-px w-12 bg-white/20" />
          </div>
        </BlurReveal>

        <BlurReveal delay={0.3}>
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mb-8 max-w-4xl mx-auto">
            Descubre <span className="text-gold-gradient">tratamientos de nivel premium</span> diseñados para rejuvenecer, reafirmar y potenciar tu belleza natural.
          </h2>
        </BlurReveal>

        <BlurReveal delay={0.5}>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Cada protocolo está diseñado específicamente para resaltar tu brillo interior, combinando estética de vanguardia con un trato cálido y personalizado. Vive la diferencia Adhara.
          </p>
        </BlurReveal>
      </div>
    </section>
  );
}
