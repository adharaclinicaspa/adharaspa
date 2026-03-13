"use client";
import { BlurReveal } from "./ui/BlurReveal";
import Image from "next/image";

export default function ProcesoSection() {
  const processes = [
    {
      step: "01",
      title: "AI Skin Analysis",
      desc: "Quickly analyze your skin, receive personalized skincare insights.",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop"
    },
    {
      step: "02",
      title: "Custom Formula",
      desc: "We blend medical precision with natural ingredients tailored for you.",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
    },
    {
      step: "03",
      title: "Radiant Journey",
      desc: "Enjoy a seamless shopping experience and consistent, glowing results.",
      image: "https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="proceso" className="py-24 bg-[var(--color-brand-bg)] overflow-hidden">
      <div className="container-brand px-6 md:px-10 max-w-7xl mx-auto">
        <BlurReveal>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-xl">
              <span className="inline-block mb-3 text-[var(--color-brand-gold-text)] font-semibold tracking-wider text-sm uppercase">
                Collection Products
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                Love your skin, the natural way.
              </h2>
            </div>
            <a href="#contacto" className="btn-outline px-6 py-2.5 rounded-full text-sm font-semibold shrink-0">
              Ver Catálogo
            </a>
          </div>
        </BlurReveal>

        {/* Horizontal scroll gallery with slight perspective */}
        <div className="w-full relative">
          <BlurReveal delay={0.2} className="w-full">
            <div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar" style={{ perspective: "1000px" }}>
              {processes.map((p, idx) => (
                <div 
                  key={idx} 
                  className="min-w-[85vw] md:min-w-[400px] h-[500px] rounded-3xl overflow-hidden relative group snap-center shrink-0 border border-white/10"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                    <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white font-bold mb-4">
                      {p.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </BlurReveal>
        </div>

      </div>
    </section>
  );
}
