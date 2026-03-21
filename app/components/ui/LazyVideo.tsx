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
  const [isLoaded, setIsLoaded] = useState(false);

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
      { rootMargin: "400px" } // Increased margin for smoother experience
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Poster image that stays until video is playing */}
      {poster && !isLoaded && (
        <img
          src={poster}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000"
          aria-hidden="true"
        />
      )}
      
      <video
        ref={videoRef}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-1000 z-10",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoadedData={handleLoaded}
        onPlaying={handleLoaded}
        poster={poster}
        preload={priority ? "auto" : "none"}
        {...props}
      >
        {isInView && <source src={src} type="video/mp4" />}
      </video>
    </div>
  );
}
