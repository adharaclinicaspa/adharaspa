"use client";
import { useEffect, useRef } from "react";

interface LedLineProps {
  width?: string;
  className?: string;
  animate?: boolean;
}

export default function LedLine({ width = "80px", className = "", animate = true }: LedLineProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate || !lineRef.current) return;
    const el = lineRef.current;
    el.style.width = "0";
    el.style.opacity = "0";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = "width 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease";
          el.style.width = width;
          el.style.opacity = "1";
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animate, width]);

  return (
    <div
      ref={lineRef}
      className={`led-line ${className}`}
      style={animate ? { width: 0 } : { width }}
    />
  );
}
