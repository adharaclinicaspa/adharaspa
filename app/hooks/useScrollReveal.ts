"use client";
import { useRef, useEffect } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  staggerDelay?: number;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { threshold = 0.15, staggerDelay = 150 } = options;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const isStagger = container.hasAttribute("data-stagger");
    const items = isStagger
      ? Array.from(container.querySelectorAll("[data-reveal]"))
      : [container];

    items.forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(28px)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).style.transition =
                "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)";
              (el as HTMLElement).style.opacity = "1";
              (el as HTMLElement).style.transform = "translateY(0)";
            }, i * staggerDelay);
          });
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [threshold, staggerDelay]);

  return ref;
}
