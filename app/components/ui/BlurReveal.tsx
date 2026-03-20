"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const BlurReveal = ({ children, className, delay = 0, duration = 0.8 }: BlurRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
