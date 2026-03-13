import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: string;
}

export const Marquee = ({ children, className, speed = "40s" }: MarqueeProps) => {
  return (
    <div className={cn("flex w-full overflow-hidden no-scrollbar", className)}>
      <div 
        className="flex w-max shrink-0 animate-marquee items-center gap-6 pr-6"
        style={{ animationDuration: speed }}
      >
        {children}
      </div>
      <div 
        className="flex w-max shrink-0 animate-marquee items-center gap-6 pr-6" 
        aria-hidden="true"
        style={{ animationDuration: speed }}
      >
        {children}
      </div>
    </div>
  );
};
