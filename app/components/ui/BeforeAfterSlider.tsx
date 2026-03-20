"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

export const BeforeAfterSlider = ({ beforeImage, afterImage, className }: BeforeAfterSliderProps) => {
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const x = useMotionValue(0);
  
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      x.set(containerRef.current.offsetWidth / 2);
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        x.set(containerRef.current.offsetWidth / 2);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [x]);

  const clipPath = useTransform(x, (value) => `inset(0 0 0 ${value}px)`);

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full aspect-[4/5] md:aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none", className)}
      onMouseDown={() => setIsResizing(true)}
      onMouseUp={() => setIsResizing(false)}
      onMouseLeave={() => setIsResizing(false)}
      onMouseMove={(e) => {
        if (!isResizing || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const newX = e.clientX - rect.left;
        x.set(Math.max(0, Math.min(newX, containerWidth)));
      }}
      onTouchStart={() => setIsResizing(true)}
      onTouchEnd={() => setIsResizing(false)}
      onTouchMove={(e) => {
        if (!isResizing || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const newX = e.touches[0].clientX - rect.left;
        x.set(Math.max(0, Math.min(newX, containerWidth)));
      }}
    >
      {/* Before Image (Bottom Layer) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={beforeImage}
          alt="Before"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-6 left-6 glass-pill px-4 py-1.5 text-xs font-semibold text-white tracking-wider uppercase">
          Antes
        </div>
      </div>

      {/* After Image (Top Layer) */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ clipPath }}
      >
        <Image
          src={afterImage}
          alt="After"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-6 right-6 glass-pill px-4 py-1.5 text-xs font-semibold text-white tracking-wider uppercase">
          Después
        </div>
      </motion.div>

      {/* Slider Handle */}
      <motion.div
        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        style={{ x, left: -2 }}
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => setIsResizing(true)}
        onDragEnd={() => setIsResizing(false)}
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-black">
          <MoveHorizontal size={20} />
        </div>
      </motion.div>
    </div>
  );
};
