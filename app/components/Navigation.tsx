"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Tratamientos", href: "/tratamientos" },
  { label: "Paquetes", href: "/paquetes" },
  { label: "Resultados", href: "/#resultados" },
  { label: "Experiencia", href: "/#paquetes-preview" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "top-0 py-4" : "top-[40px] md:top-[44px] py-6"
      )}
    >
      <div className="container-brand px-4 md:px-8 mx-auto flex justify-center">
        <nav
          className={cn(
            "flex items-center justify-between w-full max-w-6xl transition-all duration-500 rounded-full px-6 md:px-8 py-3",
            scrolled ? "glass-panel border-white/10" : "bg-transparent border-transparent"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-3xl tracking-wide text-[var(--color-brand-gold-text)]" style={{ fontFamily: "'Pinyon Script', cursive" }}>
              Adhara
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#reservar"
              className="px-5 py-2.5 rounded-full btn-gold text-sm font-semibold text-black"
            >
              Reservar Cita
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-1 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-4 right-4 mt-2 rounded-3xl overflow-hidden transition-all duration-300 glass-panel border border-white/10 origin-top",
          menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="px-6 py-8 flex flex-col gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-neutral-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contacto" 
            className="w-full text-center px-6 py-3 rounded-full btn-gold text-sm mt-4" 
            onClick={() => setMenuOpen(false)}
          >
            Agendar Valoración
          </a>
        </div>
      </div>
    </header>
  );
}
