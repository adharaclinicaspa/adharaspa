"use client";
import { BlurReveal } from "./ui/BlurReveal";
import { ShieldCheck, CalendarClock, Droplet, CreditCard, Sparkles, UserCheck } from "lucide-react";

export default function BeneficiosSection() {
  const benefits = [
    {
      icon: UserCheck,
      title: "Gentle Formulas",
      desc: "Designed to keep your skin smooth and hydrated all day long.",
    },
    {
      icon: CreditCard,
      title: "Easy Payment & Delivery",
      desc: "Enjoy a seamless shopping experience from start to finish.",
    },
    {
      icon: Sparkles,
      title: "Long-lasting Fragrance",
      desc: "Each scent is crafted to stay fresh and elegant throughout the day.",
    },
    {
      icon: Droplet,
      title: "Eco-friendly Ingredients",
      desc: "Safe for your skin and kind to the environment, natural touch.",
    },
    {
      icon: ShieldCheck,
      title: "Medical Precision",
      desc: "Advanced protocols combining aesthetic sensitivity and clinical safety.",
    },
    {
      icon: CalendarClock,
      title: "Personalized Follow-up",
      desc: "Constant evolution and dedicated tracking for your unique journey.",
    },
  ];

  return (
    <section id="beneficios" className="py-24 bg-[var(--color-brand-bg)]">
      <div className="container-brand px-6 md:px-10 max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <BlurReveal>
            <span className="inline-block mb-3 text-[var(--color-brand-gold-text)] font-semibold tracking-wider text-sm uppercase">
              La Diferencia Adhara
            </span>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#F4F1EA]">
              ¿Por qué elegir <span className="text-[var(--color-brand-gold-text)]" style={{ fontFamily: "'Pinyon Script', cursive" }}>Adhara</span>?
            </h2>
          </BlurReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: UserCheck,
              title: "Atención personalizada",
              desc: "Diseñamos cada tratamiento según las necesidades únicas de tu piel y tus objetivos personales.",
            },
            {
              icon: Sparkles,
              title: "Tecnología especializada",
              desc: "Contamos con aparatología de vanguardia para garantizar resultados seguros y de alta calidad.",
            },
            {
              icon: ShieldCheck,
              title: "Protocolos profesionales",
              desc: "Nuestros procedimientos siguen estándares rigurosos para tu total seguridad y confianza.",
            },
            {
              icon: Droplet,
              title: "Resultados visibles",
              desc: "Tratamientos enfocados en lograr cambios reales que mejoren la apariencia y salud de tu piel.",
            },
            {
              icon: CalendarClock,
              title: "Ambiente cómodo y seguro",
              desc: "Un espacio diseñado para tu bienestar, donde podrás relajarte mientras cuidamos de ti.",
            },
            {
              icon: Sparkles,
              title: "Tratamientos adaptados",
              desc: "Protocolos específicos para cada tipo de piel, asegurando la máxima eficacia en cada sesión.",
            },
          ].map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <BlurReveal key={i} delay={0.2 + (i * 0.1)} className="group">
                <div className="glass-panel p-10 rounded-[2rem] h-full flex flex-col gap-6 border-white/5 hover:border-[var(--color-brand-gold-text)]/30 transition-all duration-500">
                  <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center text-[var(--color-brand-gold-text)] group-hover:bg-[var(--color-brand-gold-text)] group-hover:text-black transition-all duration-500">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#F4F1EA] mb-3">{benefit.title}</h3>
                    <p className="text-[#BFB7AA] text-base leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </BlurReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
