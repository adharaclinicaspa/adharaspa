"use client";
import { BlurReveal } from "./ui/BlurReveal";
import { Marquee } from "./ui/Marquee";
import { Award, CheckCircle2, Heart, ShieldCheck, Star, Target, Zap, Eye, Search } from "lucide-react";

export default function IntroSection() {
  const valores = [
    { name: "Profesionalismo", desc: "Trabajamos con ética, conocimiento y responsabilidad en cada tratamiento.", icon: Award },
    { name: "Calidad", desc: "Utilizamos tecnología y productos especializados para ofrecer resultados efectivos.", icon: Star },
    { name: "Compromiso", desc: "Nos enfocamos en brindar atención personalizada y seguimiento a cada paciente.", icon: ShieldCheck },
    { name: "Confianza", desc: "Creamos un ambiente seguro y cómodo para cada persona.", icon: Heart },
    { name: "Innovación", desc: "Nos mantenemos en constante actualización en tratamientos estéticos.", icon: Zap },
    { name: "Honestidad", desc: "Recomendamos tratamientos adecuados según las necesidades reales de la piel.", icon: Search },
    { name: "Responsabilidad", desc: "Cuidamos la salud y bienestar de cada paciente.", icon: CheckCircle2 },
  ];

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden bg-gradient-to-b from-[var(--color-brand-bg)] to-neutral-900/40">
      {/* Radiant Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-[var(--color-brand-gold-text)] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-brand px-6 md:px-10 max-w-6xl mx-auto text-center relative z-10">
        <BlurReveal delay={0.1}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-[var(--color-brand-gold-text)] opacity-40" />
            <span className="text-[var(--color-brand-gold-text)] font-semibold tracking-widest text-xs uppercase">
              Nuestra Filosofía
            </span>
            <div className="h-px w-12 bg-[var(--color-brand-gold-text)] opacity-40" />
          </div>
        </BlurReveal>

        <BlurReveal delay={0.2}>
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gold-gradient leading-tight mb-8">
              Belleza que nace del <span className="italic inline-block pr-6 pb-2 font-normal" style={{ fontFamily: "'Pinyon Script', cursive" }}>cuidado experto</span>
            </h2>
            <p className="text-[#BFB7AA] text-lg md:text-xl leading-relaxed font-light mb-6">
              Nuestro enfoque personalizado nos permite atender las necesidades específicas de cada persona, 
              logrando resultados visibles que mejoran la apariencia de la piel y fortalecen la confianza en tu imagen. 
              Creemos que la belleza va de la mano con el cuidado, la constancia y la atención profesional. 
            </p>
            <p className="text-[#BFB7AA] text-lg md:text-xl leading-relaxed font-light mb-10 italic">
               Por ello, cada tratamiento está diseñado para brindar seguridad, confort y resultados efectivos. 
               Descubre una experiencia enfocada en resaltar tu belleza natural.
            </p>
          </div>
        </BlurReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          <BlurReveal delay={0.3}>
            <div className="glass-panel p-10 rounded-[2.5rem] border border-white/10 text-left h-full flex flex-col items-center md:items-start text-center md:text-left transition-all hover:border-[var(--color-brand-gold-text)]/30 group">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-gold-text)]/10 flex items-center justify-center mb-6 border border-[var(--color-brand-gold-text)]/20 group-hover:bg-[var(--color-brand-gold-text)]/20 transition-colors">
                <Target className="w-7 h-7 text-[var(--color-brand-gold-text)]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wider uppercase text-sm">Misión</h3>
              <p className="text-[#BFB7AA] leading-relaxed">
                Brindar tratamientos estéticos faciales y corporales con tecnología especializada, ofreciendo atención personalizada y profesional para mejorar la apariencia de la piel, promoviendo bienestar, seguridad y confianza en cada uno de nuestros pacientes.
              </p>
            </div>
          </BlurReveal>

          <BlurReveal delay={0.4}>
            <div className="glass-panel p-10 rounded-[2.5rem] border border-white/10 text-left h-full flex flex-col items-center md:items-start text-center md:text-left transition-all hover:border-[var(--color-brand-gold-text)]/30 group">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-gold-text)]/10 flex items-center justify-center mb-6 border border-[var(--color-brand-gold-text)]/20 group-hover:bg-[var(--color-brand-gold-text)]/20 transition-colors">
                <Eye className="w-7 h-7 text-[var(--color-brand-gold-text)]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wider uppercase text-sm">Visión</h3>
              <p className="text-[#BFB7AA] leading-relaxed">
                Ser una clínica spa reconocida por la calidad de nuestros tratamientos, la innovación en tecnología estética y la excelencia en el servicio, destacando por resultados visibles y la satisfacción de nuestros pacientes.
              </p>
            </div>
          </BlurReveal>
        </div>

        <BlurReveal delay={0.5}>
          <div className="mb-12">
            <h3 className="text-white font-bold tracking-widest text-xs uppercase mb-12 text-center">Nuestros Valores</h3>
          </div>
        </BlurReveal>
      </div>

      <div className="w-full relative z-20 overflow-hidden py-4 mb-4">
        <Marquee speed="60s">
          {valores.map((valor, idx) => (
            <div key={`${valor.name}-${idx}`} className="flex flex-col justify-center p-6 rounded-3xl text-left transition-all hover:-translate-y-1 w-[260px] md:w-[320px] h-[170px] shrink-0 bg-gradient-to-br from-[#E2C889] via-[#C09A4E] to-[#A68037] shadow-xl">
               <valor.icon className="w-7 h-7 text-[#010101] mb-2 opacity-90 shrink-0" />
               <h4 className="text-[#010101] font-bold mb-1 text-sm uppercase tracking-wide shrink-0">{valor.name}</h4>
               <p className="text-[#010101]/80 text-xs leading-relaxed font-medium">{valor.desc}</p>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="container-brand px-6 md:px-10 max-w-6xl mx-auto text-center relative z-10">
        <BlurReveal delay={0.7}>
          <div className="flex flex-col items-center gap-2 pt-16">
            <span className="text-gold-gradient text-7xl md:text-8xl" style={{ fontFamily: "'Pinyon Script', cursive" }}>Adhara</span>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[var(--color-brand-gold-text)] to-transparent opacity-60" />
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}
