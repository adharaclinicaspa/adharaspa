"use client";
import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import { ShineBorder } from "./ui/ShineBorder"; // Added ShineBorder import
import { cn } from "../../lib/utils";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden text-center"
    >
      {/* Background glow effects */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-[var(--color-brand-gold-text)] opacity-[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[20%] left-1/3 -translate-x-1/2 w-[40%] h-[30%] bg-[#E3C98B] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-white opacity-[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="container-brand px-6 md:px-10 mx-auto w-full max-w-5xl z-10 flex flex-col items-center">

        {/* Google Reviews Badge */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="inline-flex items-center gap-3 glass-pill px-4 py-2 mb-8 bg-black/40 border border-white/10">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>
            <span className="text-white text-sm font-medium">4.9/5</span>
            <span className="text-white/30">|</span>
            <span className="text-neutral-300 text-sm font-medium flex items-center gap-2">
              <Image src="/google-icon.svg" alt="Google" width={16} height={16} />
              Google Reviews
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-gold-gradient leading-tight mb-10 pb-4 flex flex-wrap items-center justify-center gap-x-4">
            <span>Bienvenida a</span> 
            <span className="font-normal inline-block pr-8 pb-4 -mb-4 text-6xl md:text-7xl lg:text-8xl xl:text-[90px]" style={{ fontFamily: "'Pinyon Script', cursive" }}>Adhara</span>
        </h1>

        <p className="text-[#BFB7AA] text-lg md:text-xl max-w-3xl leading-relaxed mb-10">
            En Adhara Clínica Spa nos especializamos en el cuidado integral de la piel y el bienestar, 
            combinando tecnología avanzada con experiencia profesional para ofrecer tratamientos faciales, 
            corporales y estéticos de alta calidad.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <a
            href="#reservar"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-gold px-8 py-4 rounded-full font-semibold text-sm transition-transform shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            Probar la experiencia Adhara
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="/tratamientos"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-outline px-8 py-4 rounded-full font-semibold text-sm transition-colors"
          >
            Ver Tratamientos
          </a>
        </div>

        {/* Hero Bottom Image Teaser (Optional Centered element) */}
        <div className="mt-12 w-full max-w-5xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <ShineBorder borderRadius="3rem" className="w-full">
            <div className="relative aspect-video rounded-[3rem] overflow-hidden bg-neutral-900">
               {/* LCP Image: Loads ultra fast and is the stable LCP element */}
               <div className="absolute inset-0 w-full h-full opacity-70 z-10">
                 <Image 
                   src="/hero-poster.jpg" 
                   alt="Adhara Clínica Spa Hero" 
                   fill 
                   priority
                   sizes="(max-width: 768px) 100vw, 1200px"
                   className="object-cover"
                   // @ts-ignore
                   fetchPriority="high"
                 />
                 
                 <video
                   src="/videos/hero-spa.mp4"
                   poster="/hero-poster.jpg"
                   autoPlay
                   muted
                   loop
                   playsInline
                   preload="auto"
                   className="absolute inset-0 w-full h-full object-cover z-10"
                 />
               </div>
               
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20" />
               <div className="absolute bottom-10 left-10 flex gap-4 z-30">
                 <div className="glass-pill px-6 py-2 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[var(--color-brand-gold-text)] animate-pulse" />
                   <span className="text-xs font-semibold text-white tracking-widest uppercase">Resultados Reales</span>
                 </div>
               </div>
            </div>
          </ShineBorder>
        </div>

      </div>
    </section>
  );
}
