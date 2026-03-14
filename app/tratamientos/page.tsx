import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import { CheckCircle2, Droplet, Sparkles, Wind } from "lucide-react";

export default function TratamientosPage() {
  const servicios = [
    {
      id: "faciales",
      titulo: "Experiencias Faciales",
      descripcion: "Rituales diseñados para limpiar, nutrir y rejuvenecer la piel desde las capas más profundas.",
      icono: Sparkles,
      video: "https://scwu2vendl74s1qu.public.blob.vercel-storage.com/procedimiento%20facial.mp4",
      lista: [
        "Limpieza Facial Profunda con aparatología",
        "Control de Acné activo y secuelas",
        "Despigmentación y efecto Glow (BB Glow)",
        "Bioestimulación (Microneedling / Dermapen)",
        "Rejuvenecimiento y Lifting Facial"
      ]
    },
    {
      id: "micropigmentacion",
      titulo: "Micropigmentación",
      descripcion: "Diseño y corrección semipermanente para realzar tus facciones con naturalidad las 24 horas del día.",
      icono: CheckCircle2,
      video: "https://scwu2vendl74s1qu.public.blob.vercel-storage.com/6641580-uhd_4096_2160_25fps.mp4",
      lista: [
        "Microblading y Powder Brows (Cejas)",
        "Micropigmentación de Labios (Acuarela Lips)",
        "Delineado de Ojos (Eyeliner clásico y sombreado)",
        "Retoques y corrección de color"
      ]
    },
    {
      id: "corporales",
      titulo: "Protocolos Corporales",
      descripcion: "Tecnología y maniobras enfocadas en la remodelación corporal y mejora de la calidad de piel.",
      icono: Droplet,
      video: "https://scwu2vendl74s1qu.public.blob.vercel-storage.com/Vi%CC%81deos%20de%20Spa%201080p.mp4",
      lista: [
        "Masajes Reductivos y Moldeadores",
        "Drenaje Linfático",
        "Tratamientos Anticelulíticos",
        "Reafirmación de Glúteos y Abdomen",
        "Cavitación y Radiofrecuencia"
      ]
    },
    {
      id: "depilacion",
      titulo: "Depilación Láser",
      descripcion: "Tecnología de punta para la eliminación definitiva del vello, segura y apta para todo tipo de piel.",
      icono: Wind,
      video: "https://scwu2vendl74s1qu.public.blob.vercel-storage.com/Depilacio%CC%81n%20La%CC%81ser%20UHD%202160.mp4",
      lista: [
        "Rostro Completo",
        "Axilas y Brazos",
        "Piernas Completas",
        "Zona Bikini / Brasileña",
        "Espalda y Pecho (Depilación Masculina)"
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[var(--color-brand-bg)] pt-32 pb-24">
        <div className="container-brand px-6 md:px-10 max-w-7xl mx-auto">
          
          <div className="text-center mb-20 mt-10">
            <span className="inline-block mb-3 text-[var(--color-brand-gold-text)] font-semibold tracking-wider text-sm uppercase">
              Descubre tu mejor versión
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Nuestros Tratamientos
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              En Adhara Clínica Spa combinamos aparatología de alta gama, ingredientes premium 
              y maniobras precisas para ofrecerte resultados seguros, visibles y duraderos.
            </p>
          </div>

          <div className="flex flex-col gap-24 mb-32">
            {servicios.map((servicio, index) => {
              const Icon = servicio.icono;
              const isEven = index % 2 === 0;

              return (
                <div key={servicio.id} id={servicio.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                  
                  {/* Imagen */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/10 group bg-neutral-900">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                      >
                        <source src={servicio.video} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-brand-gold-text)]/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-[var(--color-brand-gold-text)]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{servicio.titulo}</h2>
                    <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                      {servicio.descripcion}
                    </p>

                    <ul className="space-y-4 mb-10 w-full">
                      {servicio.lista.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-gold-text)] shrink-0 mt-0.5" />
                          <span className="text-neutral-200">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a href="/#reservar" className="btn-outline px-8 py-3 rounded-full text-white font-semibold text-sm hover:bg-[var(--color-brand-gold-text)] hover:text-black hover:border-transparent transition-all">
                      Probar la experiencia Adhara
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Seccion de Paquetes Integrada */}
          <div className="pt-24 border-t border-white/10" id="paquetes">
            <div className="text-center mb-16">
              <span className="inline-block mb-3 text-[var(--color-brand-gold-text)] font-semibold tracking-wider text-sm uppercase">
                Resultados que evolucionan contigo
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Paquetes Exclusivos <span className="text-[var(--color-brand-gold-text)]" style={{ fontFamily: "'Pinyon Script', cursive" }}>Adhara</span>
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                Diseñados para potenciar resultados de forma progresiva, segura y personalizada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {/* Experiencias Faciales */}
              <div className="group glass-panel p-8 md:p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all flex flex-col relative overflow-hidden">
                <video 
                  autoPlay muted loop playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                >
                  <source src="https://scwu2vendl74s1qu.public.blob.vercel-storage.com/procedimiento%20facial.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black z-0" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8">
                    <Sparkles className="w-7 h-7 text-[var(--color-brand-gold-text)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Experiencias Faciales</h3>
                  <p className="text-neutral-300 mb-8 leading-relaxed flex-grow">
                    Rituales personalizados enfocados en rejuvenecimiento, control de acné, 
                    despigmentación, efecto glow y bioestimulación avanzada (Dermapen).
                  </p>
                  <div className="p-6 bg-black/50 rounded-2xl border border-white/5 mb-8">
                    <p className="text-[var(--color-brand-gold-text)] font-semibold text-lg mb-2">Programa de 3 o 6 sesiones</p>
                    <p className="text-white text-3xl font-bold mb-2">desde $2,999 MXN</p>
                    <p className="text-neutral-500 text-sm">Ideal para quienes buscan luminosidad inmediata o transformación profunda de la piel.</p>
                  </div>
                   <a href="/#reservar" className="btn-gold inline-flex w-full justify-center px-6 py-4 rounded-full text-black font-semibold text-sm">
                    Vive la Experiencia
                  </a>
                </div>
              </div>

              {/* Protocolos Corporales */}
              <div className="group glass-panel p-8 md:p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all relative overflow-hidden flex flex-col">
                <video 
                  autoPlay muted loop playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                >
                  <source src="https://scwu2vendl74s1qu.public.blob.vercel-storage.com/Vi%CC%81deos%20de%20Spa%201080p.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black z-0" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8">
                    <Droplet className="w-7 h-7 text-[var(--color-brand-gold-text)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Protocolos Corporales</h3>
                  <p className="text-neutral-300 mb-8 leading-relaxed flex-grow">
                    Tecnología estética de última generación para moldear, reafirmar y 
                    mejorar la textura de la piel. Una experiencia de evolución y cuidado.
                  </p>
                  <div className="p-6 bg-black/50 rounded-2xl border border-white/5 mb-8">
                    <p className="text-[var(--color-brand-gold-text)] font-semibold text-lg mb-2">Planes a Medida</p>
                    <p className="text-neutral-400 text-sm mb-4">Diseñamos el protocolo ideal después de tu valoración inicial sin costo.</p>
                    <ul className="text-neutral-300 space-y-2 text-sm">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-brand-gold-text)]" /> Moldéo corporal avanzado</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-brand-gold-text)]" /> Firmeza y tonificación</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-brand-gold-text)]" /> Mejora de textura (celulitis)</li>
                    </ul>
                  </div>
                  <a href="/#reservar" className="btn-outline inline-flex w-full justify-center px-6 py-4 rounded-full font-semibold text-sm hover:bg-[var(--color-brand-gold-text)] hover:text-black transition-colors">
                    Vive la Experiencia
                  </a>
                </div>
              </div>

              {/* Micropigmentación Adhara */}
              <div className="group glass-panel p-8 md:p-10 rounded-3xl border border-[var(--color-brand-gold-text)]/30 hover:border-[var(--color-brand-gold-text)] transition-all relative overflow-hidden flex flex-col">
                <video 
                  autoPlay muted loop playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                >
                  <source src="https://scwu2vendl74s1qu.public.blob.vercel-storage.com/6641580-uhd_4096_2160_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black z-0" />

                <div className="absolute top-0 right-0 px-6 py-2 text-[10px] font-bold bg-gold-shimmer text-black rounded-bl-3xl tracking-widest uppercase shadow-lg font-inter z-20">
                  MÁS POPULAR
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-7 h-7 text-[var(--color-brand-gold-text)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Micropigmentación</h3>
                  <p className="text-neutral-300 mb-8 leading-relaxed flex-grow">
                    Realce semipermanente de rasgos faciales. Diseño artístico de cejas, labios y ojos con pigmentos premium.
                  </p>
                  <div className="p-6 bg-black/50 rounded-2xl border border-white/5 mb-8">
                    <p className="text-[var(--color-brand-gold-text)] font-semibold text-lg mb-2">Sesión Inicial + Retoque</p>
                    <p className="text-white text-3xl font-bold mb-2">desde $3,500 MXN</p>
                    <p className="text-neutral-500 text-sm">Incluye diseño de visagismo y kit post-cuidado.</p>
                  </div>
                  <a href="/#reservar" className="btn-outline px-6 py-4 rounded-full text-white font-semibold text-sm flex justify-center hover:bg-[var(--color-brand-gold-text)] hover:text-black hover:border-transparent transition-all">
                    Vive la Experiencia
                  </a>
                </div>
              </div>

              {/* Depilación Láser */}
              <div className="group glass-panel p-8 md:p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all relative overflow-hidden flex flex-col">
                <video 
                  autoPlay muted loop playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                >
                  <source src="https://scwu2vendl74s1qu.public.blob.vercel-storage.com/Depilacio%CC%81n%20La%CC%81ser%20UHD%202160.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black z-0" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8">
                    <Wind className="w-7 h-7 text-[var(--color-brand-gold-text)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Depilación Láser</h3>
                  <p className="text-neutral-300 mb-8 leading-relaxed flex-grow">
                    Eliminación definitiva del vello con tecnología de enfriamiento para una experiencia cómoda y segura.
                  </p>
                  <div className="p-6 bg-black/50 rounded-2xl border border-white/5 mb-8">
                    <p className="text-[var(--color-brand-gold-text)] font-semibold text-lg mb-2">Paquetes de 6 Sesiones</p>
                    <p className="text-white text-3xl font-bold mb-2">desde $1,999 MXN</p>
                    <p className="text-neutral-500 text-sm">Precios preferenciales en cuerpo completo o zonas combinadas.</p>
                  </div>
                  <a href="/#reservar" className="btn-outline px-6 py-4 rounded-full text-white font-semibold text-sm flex justify-center hover:bg-[var(--color-brand-gold-text)] hover:text-black hover:border-transparent transition-all">
                    Vive la Experiencia
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-panel p-10 md:p-16 rounded-3xl text-center bg-gradient-to-b from-neutral-900 to-black border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">¿Por qué elegir nuestros programas?</h3>
              <p className="text-xl text-neutral-300 italic max-w-2xl mx-auto leading-relaxed">
                "Inversión deliberada en tu confianza. Cada sesión potencia la anterior. 
                En Adhara Clínica Spa, trabajamos para ver resultados reales que evolucionan contigo."
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

