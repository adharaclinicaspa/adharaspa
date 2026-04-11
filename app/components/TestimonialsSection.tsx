"use client";
import { BlurReveal } from "./ui/BlurReveal";
import { Marquee } from "./ui/Marquee";
import { SocialProofPill } from "./ui/SocialProofPill";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sofia M.",
      text: "Me encanta lo natural que se ven mis cejas. El proceso fue súper rápido y el resultado es exactamente lo que pedía.",
      date: "Hace 2 semanas",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Elena R.",
      text: "Mi piel se siente más firme y luminosa que nunca. El trato es excepcional y los protocolos realmente funcionan.",
      date: "Hace 1 mes",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Carlos P.",
      text: "Excelente servicio para hombres también. La depilación láser es indolora y los resultados son increíbles.",
      date: "Hace 3 meses",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Valeria C.",
      text: "El nivel de detalle y cuidado es increíble. Mis cejas se ven perfectas y me ahorro muchísimo tiempo por la mañana.",
      date: "Hace 1 semana",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Daniela G.",
      text: "Un trato super profesional. Desde la valoración hasta el resultado final me sentí en las mejores manos.",
      date: "Hace 2 meses",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-[var(--color-brand-bg)] overflow-hidden relative">
      <div className="container-brand px-6 md:px-10 max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <BlurReveal>
            <div className="max-w-2xl">
              <span className="inline-block mb-3 text-[var(--color-brand-gold-text)] font-semibold tracking-wider text-xs uppercase">
                Lo Que Dicen Nuestros Pacientes
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                No lo decimos nosotros. Escucha a quienes ya tuvieron su experiencia <span className="text-gold-gradient italic inline-block pr-6 pb-2 font-normal text-6xl md:text-7xl" style={{ fontFamily: "'Pinyon Script', cursive" }}>Adhara</span>
              </h2>
            </div>
          </BlurReveal>
          <BlurReveal delay={0.2}>
            <SocialProofPill />
          </BlurReveal>
        </div>
      </div>

      <BlurReveal delay={0.3} className="w-full relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-brand-bg)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-brand-bg)] to-transparent z-10" />
        
        <Marquee speed="40s">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-panel w-[350px] md:w-[400px] p-8 rounded-3xl border border-[var(--color-brand-gold-text)]/20 hover:border-[var(--color-brand-gold-text)]/40 transition-all duration-500">
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="text-[var(--color-brand-gold-text)] fill-[var(--color-brand-gold-text)] drop-shadow-[0_0_8px_rgba(198,162,90,0.5)]" />
                ))}
              </div>
              <p className="text-[#F4F1EA] text-lg font-medium leading-relaxed mb-8">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-sm text-neutral-300 relative overflow-hidden">
                  {t.image ? (
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  ) : (
                    t.name.charAt(0)
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm">{t.name}</span>
                  <span className="text-neutral-500 text-xs">Paciente</span>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </BlurReveal>
    </section>
  );
}
