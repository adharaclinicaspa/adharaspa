"use client";
import { Sparkles, Activity, CheckCircle2 } from "lucide-react";
import { BlurReveal } from "./ui/BlurReveal";
import { Marquee } from "./ui/Marquee";
import { cn } from "../../lib/utils";

const starServices = [
  { icon: Sparkles, name: "Micropigmentación de Cejas" },
  { icon: Activity, name: "Bioestimulación Facial" },
  { icon: CheckCircle2, name: "Delineado Permanente" },
  { icon: Sparkles, name: "Rejuvenecimiento Corporal" },
  { icon: Activity, name: "Control de Acné" },
];

export default function StarServicesSlider() {
  return (
    <section className="relative z-10 w-full px-4 mt-8 md:mt-12 overflow-visible">
      <div className="container-brand max-w-7xl mx-auto">
        <BlurReveal delay={0.6} duration={1}>
          <div className="glass-panel rounded-[2rem] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative overflow-hidden bg-black/80 border border-white/10">
            {/* Subtle glow background */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-gold-text)] to-transparent opacity-50" />
            
            <div className="flex items-center">
              <div className="px-6 py-2 border-r border-white/10 hidden md:block shrink-0">
                <span className="text-[var(--color-brand-gold-text)] text-xs font-bold uppercase tracking-widest">
                  Servicios Estrella
                </span>
              </div>
              <div className="flex-1 overflow-hidden">
                <Marquee speed="30s">
                  {starServices.map(({ icon: Icon, name }, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 group">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand-gold-text)] transition-colors">
                        <Icon size={14} className="text-white group-hover:text-black transition-colors" />
                      </div>
                      <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors whitespace-nowrap">
                        {name}
                      </span>
                    </div>
                  ))}
                  {/* The instruction seems to imply adding a new element, as "Agendar Valoración" is not present.
                      Assuming the user wants to add a button/link with the new text "Probar la experiencia Adhara"
                      as an additional item in the marquee, or perhaps as a separate call to action.
                      Given the provided code edit, it seems to be intended as an additional item within the marquee.
                      However, placing it inside the icon div would replace the icon.
                      I will place it as a separate item in the marquee, following the structure of existing items.
                      If the intent was to replace an existing text, please provide the exact text to be replaced.
                  */}
                  <div className="flex items-center gap-3 px-4 group">
                    <a href="/#reservar" className="btn-gold px-8 py-3 rounded-full text-black font-semibold text-sm">
                      Probar la experiencia Adhara
                    </a>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}
