"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: string;
}

export const Marquee = ({ children, className, speed = "40s" }: MarqueeProps) => {
  const cloneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cloneRef.current) {
      // Use setAttribute for maximum compatibility with emulated browsers / Lighthouse
      cloneRef.current.setAttribute("inert", "");
    }
  }, []);

  return (
    <div className={cn("flex w-full overflow-hidden no-scrollbar", className)}>
      <div 
        className="flex w-max shrink-0 animate-marquee items-center gap-6 pr-6"
        style={{ animationDuration: speed }}
      >
        {children}
      </div>
      <div 
        ref={cloneRef}
        className="flex w-max shrink-0 animate-marquee items-center gap-6 pr-6 pointer-events-none select-none" 
        aria-hidden="true"
        style={{ animationDuration: speed }}
      >
        {children}
      </div>
    </div>
  );
};
