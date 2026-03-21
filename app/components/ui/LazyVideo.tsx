"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../../lib/utils";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  priority?: boolean;
  className?: string; // Explicitly add to satisfy linter
}

export function LazyVideo({ src, poster, priority = false, className, ...props }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(priority);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px" } // Use large margin to seamlessly lazy load
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Removing intensive React state like onLoadedData/onPlaying and native hooks
  // to avoid Main Thread Blocking Time (TBT) spikes.
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <video
        ref={videoRef}
        className={cn("w-full h-full object-cover z-10")}
        poster={poster}
        preload={priority ? "auto" : "none"}
        {...props}
      >
        {isInView && <source src={src} type="video/mp4" />}
      </video>
    </div>
  );
}
