import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Image from "next/image";
import { Star, ShieldCheck, Heart, Sparkles } from "lucide-react";

import { CosmicParticles } from "../components/ui/CosmicParticles";

export default function ExperienciaPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[var(--color-brand-bg)] pt-32 pb-24 overflow-hidden">
        
        {/* Experience Hero */}
        <section className="container-brand px-6 md:px-10 max-w-6xl mx-auto mb-32">
          <div className="relative h-[60vh] md:h-[80vh] rounded-[3rem] overflow-hidden group">
            {/* Cosmic Particles Background */}
            <CosmicParticles className="absolute inset-0 w-full h-full opacity-40 z-0" />
            
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-[2s] z-0"
            >
              <source src="https://scwu2vendl74s1qu.public.blob.vercel-storage.com/Spa%20Relaxacio%CC%81n%20Video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 z-0" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
              <span className="inline-block mb-6 text-[var(--color-brand-gold-text)] font-semibold tracking-[0.3em] text-sm uppercase">
                Bienvenido a lo extraordinario
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.1] pb-6 max-w-[90%] mx-auto">
                El Arte del <br/>
                <span 
                  className="text-[var(--color-brand-gold-text)] inline-block font-light" 
                  style={{ fontFamily: "'Pinyon Script', cursive" }}
                >
                  Cuidado Consciente
                </span>
              </h1>
              <p className="text-neutral-300 text-lg md:text-xl max-w-2xl leading-relaxed">
                En Adhara Clínica Spa, no solo realizamos tratamientos. Creamos rituales de transformación 
                donde la ciencia avanzada y el lujo se encuentran.
              </p>
            </div>
          </div>
        </section>

        {/* Brand Pillars */}
        <section className="container-brand px-6 md:px-10 max-w-7xl mx-auto mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                ¿Por qué elegir <br/><span className="text-[var(--color-brand-gold-text)]">Adhara Clínica Spa?</span>
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Star className="text-[var(--color-brand-gold-text)] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Exclusividad Premium</h3>
                    <p className="text-neutral-400">Ambientes diseñados para desconectar del exterior y reconectar contigo en un espacio de total privacidad y confort.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-[var(--color-brand-gold-text)] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Ciencia y Resultados</h3>
                    <p className="text-neutral-400">Aparatología de última generación y protocolos médicos estéticos certificados para garantizar cambios visibles desde la primera sesión.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Heart className="text-[var(--color-brand-gold-text)] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Trato Humano</h3>
                    <p className="text-neutral-400">Para nosotros no eres un paciente más. Eres una historia de belleza que merece ser escuchada y potenciada con cariño.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden relative z-10">
                <Image 
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop"
                  alt="Trato Adhara"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[var(--color-brand-gold-text)] opacity-10 rounded-full blur-[100px]" />
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-white opacity-5 rounded-full blur-[80px]" />
            </div>
          </div>
        </section>

        {/* Philosophy Callout */}
        <section className="py-32 bg-neutral-900/30 border-y border-white/5">
          <div className="container-brand px-6 md:px-10 max-w-4xl mx-auto text-center">
             <Sparkles className="w-12 h-12 text-[var(--color-brand-gold-text)] mx-auto mb-8 opacity-50" />
             <h2 className="text-3xl md:text-5xl font-bold text-white leading-relaxed mb-12">
               "Nuestra misión es que al mirarte en el espejo, no solo veas una piel rejuvenecida, 
               sino a alguien que ha decidido <span className="text-[var(--color-brand-gold-text)]">priorizar su propio bienestar</span>."
             </h2>
             <div className="h-px w-24 bg-[var(--color-brand-gold-text)] mx-auto" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40">
          <div className="container-brand px-6 md:px-10 max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-10">
              ¿Lista para tu momento <span className="text-[var(--color-brand-gold-text)]" style={{ fontFamily: "'Pinyon Script', cursive" }}>Adhara</span>?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/#reservar" className="btn-gold px-12 py-5 rounded-full text-lg shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                Probar la experiencia Adhara
              </a>
              <a href="/tratamientos" className="btn-outline px-12 py-5 rounded-full text-lg">
                Explorar Tratamientos
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
