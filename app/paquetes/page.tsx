import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function PaquetesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[var(--color-brand-bg)] pt-32 pb-24">
        <div className="container-brand px-6 md:px-10 max-w-5xl mx-auto">
          
          <div className="text-center mb-20 mt-10">
            <span className="inline-block mb-3 text-[var(--color-brand-gold-text)] font-semibold tracking-wider text-sm uppercase">
              Resultados que evolucionan contigo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Paquetes Exclusivos Adhara
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              En Adhara Clínica Spa, creemos que la constancia es la clave para lograr 
              cambios reales y visibles. Por eso creamos paquetes diseñados para potenciar 
              resultados de forma progresiva, segura y personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Experiencias Faciales */}
            <div className="glass-panel p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all">
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8">
                <span className="text-2xl">✨</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Experiencias Faciales</h2>
              <p className="text-neutral-300 mb-8 leading-relaxed">
                Rituales personalizados enfocados en rejuvenecimiento, control de acné, 
                despigmentación, efecto glow y bioestimulación avanzada.
              </p>
              <div className="p-6 bg-black/50 rounded-2xl border border-white/5 mb-8">
                <p className="text-[var(--color-brand-gold-text)] font-semibold text-lg mb-2">Programa de 3 o 6 sesiones</p>
                <p className="text-white text-3xl font-bold mb-2">desde $2,999 MXN</p>
                <p className="text-neutral-500 text-sm">Ideal para quienes buscan luminosidad inmediata o transformación profunda de la piel.</p>
              </div>
              <a href="/#reservar" className="btn-gold inline-flex w-full justify-center px-6 py-3 rounded-full text-black font-semibold text-sm">
                Agendar Valoración
              </a>
            </div>

            {/* Protocolos Corporales */}
            <div className="glass-panel p-10 rounded-3xl border border-[var(--color-brand-gold-text)]/30 hover:border-[var(--color-brand-gold-text)] transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 glass-pill px-4 py-1.5 text-xs font-semibold bg-[var(--color-brand-gold-text)] text-black rounded-bl-3xl">
                MÁS POPULAR
              </div>
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8">
                <span className="text-2xl">🌟</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Protocolos Corporales</h2>
              <p className="text-neutral-300 mb-8 leading-relaxed">
                Tecnología estética de última generación para moldear, reafirmar y 
                mejorar la textura de la piel. Una experiencia de evolución y cuidado personalizado.
              </p>
              <div className="p-6 bg-black/50 rounded-2xl border border-white/5 mb-8">
                <p className="text-[var(--color-brand-gold-text)] font-semibold text-lg mb-2">Planes a Medida</p>
                <p className="text-neutral-400 text-sm mb-4">Diseñamos el protocolo ideal después de tu valoración inicial sin costo.</p>
                <ul className="text-neutral-300 space-y-2 text-sm">
                  <li className="flex items-center gap-2">✓ Moldéo corporal avanzado</li>
                  <li className="flex items-center gap-2">✓ Firmeza y tonificación</li>
                  <li className="flex items-center gap-2">✓ Mejora de textura (celulitis)</li>
                </ul>
              </div>
              <a href="/#reservar" className="btn-outline border-[var(--color-brand-gold-text)] text-[var(--color-brand-gold-text)] inline-flex w-full justify-center px-6 py-3 rounded-full font-semibold text-sm hover:bg-[var(--color-brand-gold-text)] hover:text-black transition-colors">
                Agendar Valoración
              </a>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-12">Al adquirir cualquiera de nuestros programas obtienes:</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="glass-panel p-6 rounded-2xl border border-white/5">
                <h4 className="text-[var(--color-brand-gold-text)] font-semibold mb-2">⭐ Valoración profesional sin costo</h4>
                <p className="text-neutral-400 text-sm">Diagnóstico personalizado para diseñar tu protocolo ideal.</p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border border-white/5">
                <h4 className="text-[var(--color-brand-gold-text)] font-semibold mb-2">🎁 Bonos especiales en tu compra</h4>
                <p className="text-neutral-400 text-sm">Beneficios adicionales al adquirir paquete de 6 sesiones.</p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border border-white/5">
                <h4 className="text-[var(--color-brand-gold-text)] font-semibold mb-2">💳 Facilidades de pago</h4>
                <p className="text-neutral-400 text-sm">Pregunta por opciones disponibles a meses sin intereses.</p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border border-white/5">
                <h4 className="text-[var(--color-brand-gold-text)] font-semibold mb-2">📊 Seguimiento personalizado</h4>
                <p className="text-neutral-400 text-sm">Monitoreo de avances en cada fase de tu tratamiento.</p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-10 md:p-16 text-center bg-gradient-to-b from-neutral-900 to-black border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">¿Por qué elegir nuestros programas?</h3>
            <p className="text-xl text-neutral-300 italic max-w-2xl mx-auto leading-relaxed">
              "Porque la constancia transforma.<br/>
              Porque cada sesión potencia la anterior.<br/>
              Porque en Adhara trabajamos resultados reales, no promesas."
            </p>
          </div>

        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
