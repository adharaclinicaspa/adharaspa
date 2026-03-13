"use client";
import { useScrollReveal } from "../hooks/useScrollReveal";
import LedLine from "./LedLine";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Cejas definidas y simétricas",
  "Labios con efecto juvenil",
  "Delineado que intensifica la mirada",
  "Pigmentos de máxima calidad",
  "Diseño 100% personalizado",
];

export default function MicropigmentacionSection() {
  const leftRef = useScrollReveal({ staggerDelay: 100 });
  const rightRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="micropigmentacion"
      className="section-padding"
      style={{ background: "var(--color-concrete)" }}
    >
      <div className="container-brand px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div ref={leftRef} data-stagger>
            <div className="flex flex-col gap-4 mb-8" data-reveal>
              <span className="eyebrow">Producto Estrella</span>
              <LedLine width="50px" />
            </div>

            <h2
              data-reveal
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.15,
                color: "var(--color-text-primary)",
                marginBottom: "1.5rem",
              }}
            >
              El arte de{" "}
              <em className="text-gold-gradient" style={{ fontStyle: "italic" }}>
                realzar tu belleza natural
              </em>
            </h2>

            <p
              data-reveal
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "var(--color-text-secondary)",
                marginBottom: "2.5rem",
              }}
            >
              Diseñamos cejas perfectamente simétricas, labios con color uniforme y delineado
              de ojos que intensifica tu mirada. Nuestras técnicas combinan precisión médica
              con sensibilidad artística para resultados elegantes y de larga duración.
            </p>

            {/* Benefits */}
            <ul className="flex flex-col gap-4 mb-10" data-reveal>
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle
                    size={18}
                    color="var(--color-gold)"
                    strokeWidth={1.5}
                    style={{ flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div data-reveal>
              <a href="#contacto" className="btn-primary">
                Agendar valoración gratuita
              </a>
            </div>
          </div>

          {/* Right: Visual panel */}
          <div ref={rightRef}>
            <div
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                background: "var(--color-black)",
                aspectRatio: "4/5",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "3rem",
              }}
            >
              {/* Decorative gold orb inside panel */}
              <div
                className="gold-orb"
                style={{ width: "300px", height: "300px", top: "-20%", right: "-20%", opacity: 0.4 }}
              />

              {/* Stylized illustration */}
              <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    fontSize: "5rem",
                    marginBottom: "1.5rem",
                    filter: "drop-shadow(0 0 30px rgba(212,175,55,0.4))",
                  }}
                >
                  ✦
                </div>
                <p
                  className="text-gold-gradient"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "2rem",
                    fontWeight: 400,
                    lineHeight: 1.3,
                    marginBottom: "1rem",
                  }}
                >
                  &ldquo;Tu mejor versión,
                  <br />
                  cada día&rdquo;
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(245,245,245,0.5)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Micropigmentación profesional
                </p>
              </div>

              {/* Gold border accent */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  height: "3px",
                  background: "var(--color-gold-gradient)",
                  boxShadow: "var(--glow-gold)",
                }}
              />

              {/* Floating stat */}
              <div
                style={{
                  position: "absolute",
                  bottom: "2rem",
                  right: "2rem",
                  background: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(212,175,55,0.2)",
                  borderRadius: "12px",
                  padding: "1rem 1.5rem",
                }}
              >
                <div
                  className="text-gold-gradient"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                  }}
                >
                  98%
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "rgba(245,245,245,0.55)",
                    marginTop: "0.2rem",
                  }}
                >
                  Clientas satisfechas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
