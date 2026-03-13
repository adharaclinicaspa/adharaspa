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
        
        <div className="text-center mb-16">
          <BlurReveal>
            <span className="inline-block mb-3 text-[var(--color-brand-gold-text)] font-semibold tracking-wider text-sm uppercase">
              Body Care With Natural Ingredients
            </span>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Feel the luxury of soft,<br /> glowing skin.
            </h2>
          </BlurReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <BlurReveal key={i} delay={0.2 + (i * 0.1)} className="group">
                <div className="glass-panel p-8 rounded-3xl h-full flex flex-col gap-6 border-white/5 hover:border-white/20 transition-all hover:bg-neutral-900/80">
                  <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white group-hover:bg-[var(--color-brand-gold-text)] group-hover:text-black transition-colors">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{benefit.desc}</p>
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
