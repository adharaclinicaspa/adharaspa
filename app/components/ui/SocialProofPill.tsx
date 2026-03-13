import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export const SocialProofPill = ({ className }: { className?: string }) => {
  return (
    <div className={cn("inline-flex items-center gap-4 px-5 py-3 glass-pill", className)}>
      <div className="flex -space-x-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-10 h-10 rounded-full border-2 border-[var(--color-brand-surface)] bg-neutral-800 overflow-hidden relative">
            <div className={`w-full h-full bg-gradient-to-br from-neutral-600 to-neutral-800`} />
          </div>
        ))}
        <div className="w-10 h-10 rounded-full border-2 border-[var(--color-brand-surface)] bg-neutral-900 flex items-center justify-center text-xs font-medium relative z-10 text-white">
          +99
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
            ))}
          </div>
          <span className="font-bold text-lg leading-none text-white">4.95</span>
          <span className="text-[var(--color-text-muted)] text-sm ml-1">(1K reviews)</span>
        </div>
        <span className="text-[var(--color-text-secondary)] text-xs mt-1">Trusted by 1000+ customers</span>
      </div>
    </div>
  );
};
