"use client";
import { useEffect, useRef, useState } from "react";
import { MapPin, Gift, Star } from "lucide-react";
import { cn } from "../../lib/utils";
import { BlurReveal } from "./ui/BlurReveal";

const stats = [
  { icon: Star, number: "500+", label: "Clientas Satisfechas" },
  { icon: Gift, number: "Gratis", label: "Valoración Inicial" },
  { icon: MapPin, number: "Lindavista", label: "CDMX" },
];

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const numericTarget = parseInt(target.replace(/\D/g, ""), 10);
    if (isNaN(numericTarget)) { setDisplay(target); return; }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1600;
        const step = Math.ceil(numericTarget / (duration / 16));
        const interval = setInterval(() => {
          start = Math.min(start + step, numericTarget);
          setDisplay(start.toString() + suffix);
          if (start >= numericTarget) clearInterval(interval);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, suffix]);

  return <span ref={ref}>{display}</span>;
}

export default function TrustBar() {
  return (
    <section className="relative z-10 w-full px-4 -mt-16 md:-mt-24 lg:-mt-12 overflow-visible">
      <div className="container-brand max-w-5xl mx-auto">
        <BlurReveal delay={0.6} duration={1}>
          <div className="glass-panel rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 divide-none md:divide-x divide-white/10 shadow-2xl relative overflow-hidden bg-neutral-900/60 transition-transform">
            {/* Subtle glow background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none" />

            {stats.map(({ icon: Icon, number, label }, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 group-hover:bg-white/10">
                  <Icon size={20} className="text-[var(--color-brand-gold-text)]" />
                </div>
                <div className="text-center sm:text-left flex flex-col">
                  <div className="text-3xl font-bold tracking-tighter text-white">
                    {number.match(/^\d/) ? (
                      <CountUp target={number.replace(/\D/g, "")} suffix="+" />
                    ) : (
                      number
                    )}
                  </div>
                  <div className="text-sm font-medium text-neutral-400 mt-1">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}
