"use client";
import { useScrollReveal } from "../hooks/useScrollReveal";
import LedLine from "./LedLine";

const services = [
  {
    emoji: "🌿",
    title: "Experiencias Faciales",
    description:
      "Protocolos personalizados para rejuvenecimiento, control de acné, despigmentación y bioestimulación avanzada.",
    price: "Desde $2,999",
    cta: "Agendar",
    featured: false,
  },
  {
    emoji: "💫",
    title: "Micropigmentación Profesional",
    description:
      "Técnica de alta precisión para cejas, labios y delineado de ojos. Resultados naturales y duraderos con pigmentos premium.",
    price: "Consultar",
    cta: "Descubre más",
    featured: true,
  },
  {
    emoji: "🌙",
    title: "Protocolos Corporales",
    description:
      "Tecnología estética de última generación para moldear, reafirmar y mejorar la textura de tu piel.",
    price: "Desde $2,500",
    cta: "Agendar",
    featured: false,
  },
  {
    emoji: "💎",
    title: "Depilación Láser Avanzada",
    description:
      "Tratamientos progresivos con equipos especializados para reducción efectiva y duradera del vello.",
    price: "6 sesiones desde $2,500",
    cta: "Agendar",
    featured: false,
  },
];

export default function ServiciosSection() {
  const ref = useScrollReveal({ staggerDelay: 130 });

  return (
    <section
      id="servicios"
      className="section-padding"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="container-brand px-6 md:px-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex flex-col items-center gap-4 mb-6">
            <LedLine width="60px" />
            <span className="eyebrow">Servicios Destacados</span>
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.18,
              color: "var(--color-text-primary)",
              maxWidth: "600px",
            }}
          >
            Tratamientos diseñados{" "}
            <em className="text-gold-gradient" style={{ fontStyle: "italic" }}>
              para ti
            </em>
          </h2>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-stagger
        >
          {services.map((service, i) => (
            <div
              key={i}
              data-reveal
              className="card-service flex flex-col"
              style={
                service.featured
                  ? {
                      background: "var(--color-black)",
                      color: "var(--color-surface)",
                      border: "1px solid rgba(212,175,55,0.3)",
                      boxShadow: "var(--shadow-gold)",
                    }
                  : {}
              }
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: "1.25rem",
                  filter: service.featured ? "none" : "saturate(0.8)",
                }}
              >
                {service.emoji}
              </div>

              {/* Featured badge */}
              {service.featured && (
                <span
                  className="eyebrow mb-3"
                  style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--color-gold-light)" }}
                >
                  ★ PRODUCTO ESTRELLA
                </span>
              )}

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  fontSize: "1.4rem",
                  lineHeight: 1.2,
                  marginBottom: "0.75rem",
                  color: service.featured ? "var(--color-surface)" : "var(--color-text-primary)",
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: service.featured ? "rgba(245,245,245,0.72)" : "var(--color-text-secondary)",
                  flex: 1,
                  marginBottom: "1.5rem",
                }}
              >
                {service.description}
              </p>

              {/* Price */}
              <div
                className={service.featured ? "" : "text-gold-gradient"}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  marginBottom: "1.25rem",
                  color: service.featured ? "var(--color-gold-light)" : undefined,
                }}
              >
                {service.price}
              </div>

              {/* CTA */}
              <a
                href="#contacto"
                className={service.featured ? "btn-primary" : "btn-secondary"}
                style={{ textAlign: "center", fontSize: "0.75rem", width: "100%", justifyContent: "center" }}
              >
                {service.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
