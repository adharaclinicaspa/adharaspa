"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, ChevronLeft, ChevronRight } from "lucide-react";
import { LazyVideo } from "./ui/LazyVideo";

const videos = [
  { id: 1, video: "/videos/facial.mp4", author: "@ana_skincare" },
  { id: 2, video: "/videos/spa-4k.mp4", author: "@adhara_clinica" },
  { id: 3, video: "/videos/spa-videos.mp4", author: "@mari_tips" },
  { id: 4, video: "/videos/spa-1080p.mp4", author: "@luxury_spa" },
  { id: 5, video: "/videos/relax.mp4", author: "@pao_beauty" },
];

export default function SocialProofCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % videos.length);
  const prev = () => setIndex((prev) => (prev - 1 + videos.length) % videos.length);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="relative w-full h-[650px] flex flex-col items-center justify-center overflow-visible py-10">
      
      {/* Navigation Arrows Desktop */}
      <div className="hidden md:flex absolute inset-x-0 top-1/2 -translate-y-1/2 justify-between px-4 md:px-10 lg:px-20 z-50 pointer-events-none">
        <button 
          onClick={prev} 
          className="w-16 h-16 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[var(--color-brand-gold-text)] hover:text-black transition-all pointer-events-auto backdrop-blur-md shadow-2xl group/btn"
          aria-label="Anterior"
        >
          <ChevronLeft size={36} strokeWidth={2.5} className="group-hover/btn:-translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={next} 
          className="w-16 h-16 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[var(--color-brand-gold-text)] hover:text-black transition-all pointer-events-auto backdrop-blur-md shadow-2xl group/btn"
          aria-label="Siguiente"
        >
          <ChevronRight size={36} strokeWidth={2.5} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="relative w-full max-w-5xl h-full flex items-center justify-center perspective-[1000px]">
        <AnimatePresence initial={false}>
          {videos.map((video, i) => {
            const offset = (i - index + videos.length) % videos.length;
            const isCenter = offset === 0;
            const isLeft = (offset === videos.length - 1);
            const isRight = (offset === 1);

            if (!isCenter && !isLeft && !isRight) return null;

            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.8, x: 0 }}
                animate={{
                  opacity: isCenter ? 1 : 0.4,
                  scale: isCenter ? 1 : 0.8,
                  x: isCenter ? 0 : isLeft ? -350 : 350,
                  rotateY: isCenter ? 0 : isLeft ? 35 : -35,
                  z: isCenter ? 0 : -200,
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-64 md:w-80 aspect-[9/16] rounded-3xl overflow-hidden glass-panel border border-[#010101]/10 cursor-pointer shadow-2xl"
                onClick={isCenter ? undefined : isLeft ? prev : next}
                style={{ transformStyle: "preserve-3d" }}
              >
                {isCenter ? (
                  <video
                    src={video.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#010101]/10 flex items-center justify-center">
                    <User size={48} className="text-[#010101]/10" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#010101] flex items-center justify-center text-[var(--gold-brilliant-mid)] border border-white/10">
                    <User size={18} />
                  </div>
                  <div>
                    <span className="text-white font-bold text-sm block">{video.author}</span>
                    <span className="text-white/60 text-[10px] uppercase tracking-widest">Experiencia Adhara</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      
      {/* Pagination indicators only at the bottom */}
      <div className="mt-32 pt-8 flex gap-3 items-center h-4 z-40 relative">
          {videos.map((_, i) => (
              <motion.div 
                  key={i} 
                  layout
                  initial={false}
                  animate={{
                      width: i === index ? 32 : 8,
                      backgroundColor: i === index ? 'var(--color-brand-gold-text)' : 'rgba(255, 255, 255, 0.2)'
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 300 }}
                  className="h-1.5 rounded-full"
              />
          ))}
      </div>
    </div>
  );
}
