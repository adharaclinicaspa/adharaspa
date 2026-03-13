"use client";
import Link from "next/link";
import { BlurReveal } from "./ui/BlurReveal";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-bg)] pt-20 pb-10 border-t border-white/10">
      <div className="container-brand px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-1 mb-6">
              <span className="text-4xl tracking-wide text-[var(--color-brand-gold-text)]" style={{ fontFamily: "'Pinyon Script', cursive" }}>
                Adhara
              </span>
            </Link>
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed mb-8">
              Clínica estética de lujo en CDMX. Protocolos faciales y corporales diseñados para potenciar tus resultados de forma segura y personalizada.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">Instagram</a>
              <span className="text-neutral-800">|</span>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">Facebook</a>
            </div>
          </div>

          {/* Links Profesionales */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">Explora</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/tratamientos" className="text-neutral-400 hover:text-[var(--color-brand-gold-text)] transition-colors">Tratamientos</Link></li>
              <li><Link href="/#resultados" className="text-neutral-400 hover:text-white text-sm transition-colors">Resultados</Link></li>
              <li><Link href="/experiencia" className="text-neutral-400 hover:text-[var(--color-brand-gold-text)] transition-colors">Experiencia Adhara</Link></li>
              <li><Link href="/nosotros" className="text-neutral-400 hover:text-white text-sm transition-colors">Nosotros</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-semibold mb-6">Atención al Cliente</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="/#faq" className="text-neutral-400 hover:text-white text-sm transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#reservar" className="text-neutral-400 hover:text-white text-sm transition-colors">Agendar Valoración</a></li>
              <li><a href="tel:+525612979701" className="text-neutral-400 hover:text-white text-sm transition-colors">Llamar a Clínica</a></li>
              <li>
                <span className="text-neutral-500 text-sm block mt-2">
                  Ubicación:<br/>Lindavista, Zona de Hospitales<br/>CDMX, México.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-neutral-500 text-xs">
          <p>© 2026 Adhara Clínica Spa. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos del Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
