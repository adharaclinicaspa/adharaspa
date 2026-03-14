"use client";
import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import { BlurReveal } from "./ui/BlurReveal";
import { ShineBorder } from "./ui/ShineBorder"; // Added ShineBorder import
import { cn } from "../../lib/utils";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden text-center"
    >
      {/* Background glow effects */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[60%] h-[50%] bg-[var(--color-brand-gold-text)] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-white opacity-[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="container-brand px-6 md:px-10 mx-auto w-full max-w-5xl z-10 flex flex-col items-center">

        {/* Google Reviews Badge */}
        <BlurReveal delay={0.1}>
          <div className="inline-flex items-center gap-3 glass-pill px-4 py-2 mb-8 bg-black/40 border border-white/10">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>
            <span className="text-white text-sm font-medium">4.9/5</span>
            <span className="text-white/30">|</span>
            <span className="text-neutral-300 text-sm font-medium flex items-center gap-2">
              <Image src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width={16} height={16} />
              Google Reviews
            </span>
          </div>
        </BlurReveal>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[90px] font-bold tracking-tighter text-white leading-none mb-10">
          <BlurReveal delay={0.2}>
            El cuidado que mereces<span className="text-[var(--color-brand-gold-text)]">.</span>
          </BlurReveal>
        </h1>

        <BlurReveal delay={0.4}>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            En Adhara Clínica Spa, creemos que el amor propio comienza con el cuidado de tu ser.
            Un momento de paz para ti, una transformación real para tu piel.
          </p>
        </BlurReveal>

        {/* CTAs */}
        <BlurReveal delay={0.5} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
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
        </BlurReveal>

        {/* Hero Bottom Image Teaser (Optional Centered element) */}
        <BlurReveal delay={0.5} className="mt-12 w-full max-w-5xl mx-auto">
          <ShineBorder borderRadius="3rem" className="w-full">
            <div className="relative aspect-video rounded-[3rem] overflow-hidden bg-neutral-900">
               <video
                 autoPlay
                 muted
                 loop
                 playsInline
                 preload="auto"
                 className="w-full h-full object-cover opacity-70"
               >
                 <source src="https://scwu2vendl74s1qu.public.blob.vercel-storage.com/Hero%20Section%20video%20homepage.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
               <div className="absolute bottom-10 left-10 flex gap-4">
                 <div className="glass-pill px-6 py-2 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-xs font-semibold text-white tracking-widest uppercase">Resultados Reales</span>
                 </div>
               </div>
            </div>
          </ShineBorder>
        </BlurReveal>

      </div>
    </section>
  );
}
