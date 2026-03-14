"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ShineBorderProps {
  children: React.ReactNode;
  className?: string;
  borderRadius?: string;
  borderWidth?: number;
  duration?: number;
  color?: string | string[];
}

/**
 * ShineBorder Component
 * Adds a rotating gradient border effect to any container.
 */
export function ShineBorder({
  children,
  className,
  borderRadius = "2rem",
  borderWidth = 1,
  duration = 8,
  color = ["#D4AF37", "#F3D078", "#A67C00"],
}: ShineBorderProps) {
  const gradientColor = Array.isArray(color) ? color.join(", ") : color;

  return (
    <div
      className={cn(
        "relative min-h-[50px] w-full overflow-hidden p-[1px]",
        className
      )}
      style={{
        borderRadius: borderRadius,
      }}
    >
      <div
        className="absolute inset-0 z-0 animate-shine"
        style={{
          background: `conic-gradient(from 0deg, transparent 0 340deg, ${gradientColor} 360deg)`,
          animationDuration: `${duration}s`,
          padding: borderWidth,
        }}
      />
      <div
        className="relative z-10 w-full h-full bg-[var(--color-brand-bg)]"
        style={{
          borderRadius: `calc(${borderRadius} - 1px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
