"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { BlurReveal } from "./ui/BlurReveal";
import { cn } from "../../lib/utils";

const faqs = [
  {
    question: "¿Qué preparación necesito antes de una sesión de micropigmentación?",
    answer: "Recomendamos evitar el consumo de alcohol, aspirinas o cafeína 24 horas antes. También es ideal venir sin maquillaje en la zona a tratar. En tu valoración te daremos las indicaciones precisas.",
  },
  {
    question: "¿Es doloroso el tratamiento?",
    answer: "No. Utilizamos anestesia tópica de grado médico (doble acción) antes y durante el procedimiento para garantizar que tu experiencia sea completamente cómoda y relajante.",
  },
  {
    question: "¿Cuánto tiempo duran los resultados?",
    answer: "La duración varía según tu tipo de piel y estilo de vida. En Micropigmentación los resultados duran entre 1.5 y 3 años. En tratamientos faciales, recomendamos un plan de mantenimiento continuo para resultados permanentes.",
  },
  {
    question: "¿Tienen paquetes de varias sesiones?",
    answer: "Sí, creamos los 'Paquetes Exclusivos Adhara'. Sabemos que la constancia transforma, por eso ofrecemos programas de 3 o 6 sesiones con precios preferenciales, diseñados para potenciar resultados de forma progresiva.",
  },
  {
    question: "¿Cuáles son las opciones de pago que aceptan?",
    answer: "Aceptamos pago en efectivo, tarjetas de crédito/débito y transferencias. También contamos con facilidades de pago diferido a meses sin intereses en la compra de paquetes de varias sesiones.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[var(--color-brand-bg)]">
      <div className="container-brand px-6 md:px-10 max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <BlurReveal>
            <span className="inline-block mb-3 text-[var(--color-brand-gold-text)] font-semibold tracking-wider text-sm uppercase">
              Atención Personalizada
            </span>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Preguntas Frecuentes
            </h2>
          </BlurReveal>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <BlurReveal key={index} delay={0.2 + (index * 0.1)}>
                <div 
                  className={cn(
                    "glass-panel rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer",
                    isOpen ? "border-white/20 bg-neutral-900/80" : "border-white/5 hover:border-white/10"
                  )}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="px-6 py-5 flex items-center justify-between">
                    <h3 className={cn(
                      "text-lg font-medium transition-colors pr-4",
                      isOpen ? "text-white" : "text-neutral-300"
                    )}>
                      {faq.question}
                    </h3>
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
                      isOpen ? "bg-[var(--color-brand-gold-text)] text-black" : "bg-white/5 text-white"
                    )}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </div>
                  
                  <div 
                    className={cn(
                      "overflow-hidden transition-all duration-300 px-6",
                      isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <p className="text-neutral-400 text-sm leading-relaxed pr-8">
                      {faq.answer}
                    </p>
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
