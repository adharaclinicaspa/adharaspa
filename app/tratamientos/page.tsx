import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import { CheckCircle2, Droplet, Sparkles, Wind } from "lucide-react";
import { LazyVideo } from "../components/ui/LazyVideo";

export default function TratamientosPage() {
  const servicios = [
    {
      id: "faciales",
      titulo: "Experiencias Faciales",
      descripcion: "Revela la mejor versión de tu piel con tratamientos faciales personalizados. Limpieza profunda, hidratación y rejuvenecimiento en una sola sesión.",
      icono: Sparkles,
      video: "/videos/facial.mp4",
      lista: [
        "Tu piel merece cuidado experto y resultados visibles",
        "Luce una piel luminosa, sana y llena de vida",
        "Tecnología avanzada para una piel más firme y radiante"
      ]
    },
    {
      id: "micropigmentacion",
      titulo: "Micropigmentación",
      descripcion: "Resalta tu belleza natural con resultados elegantes y duraderos. Cejas, labios y ojos con diseño personalizado.",
      icono: CheckCircle2,
      video: "/videos/micropigmentacion.mp4",
      lista: [
        "Ahorra tiempo en tu rutina diaria con un look perfecto siempre",
        "Realza tus facciones con técnicas profesionales",
        "Resultados naturales que armonizan tu rostro",
        "Despigmentación de cejas"
      ]
    },
    {
      id: "corporales",
      titulo: "Protocolos Corporales",
      descripcion: "Moldea tu figura con tratamientos corporales no invasivos. Reduce medidas, mejora la firmeza y resalta tu belleza natural.",
      icono: Droplet,
      video: "/videos/spa-videos.mp4",
      lista: [
        "Resultados visibles con aparatología de última tecnología",
        "Siéntete segura y cómoda con tu cuerpo",
        "Tratamientos diseñados para mejorar textura, firmeza y apariencia de la piel"
      ]
    },
    {
      id: "depilacion",
      titulo: "Depilación Láser",
      descripcion: "Olvídate del vello y disfruta una piel suave por más tiempo. Depilación láser segura, eficaz y duradera.",
      icono: Wind,
      video: "/videos/laser.mp4",
      lista: [
        "Resultados progresivos desde las primeras sesiones",
        "Tecnología avanzada para una piel libre de irritación",
        "Invierte en comodidad y seguridad para tu piel"
      ]
    },
    {
      id: "hollywood-peel",
      titulo: "Hollywood Peel",
      descripcion: "El tratamiento favorito de las celebridades para una piel luminosa. Reduce manchas, poros y líneas de expresión.",
      icono: Sparkles,
      video: "/videos/peeling.mp4",
      lista: [
        "Resultados visibles desde la primera sesión",
        "Piel más suave, uniforme y rejuvenecida",
        "Tecnología láser para un efecto glow inmediato"
      ]
    },
    {
      id: "bb-glow",
      titulo: "BB Glow",
      descripcion: "Efecto piel de porcelana con apariencia uniforme y luminosa. Tratamiento innovador que mejora el tono y textura de la piel.",
      icono: Sparkles,
      video: "/videos/bb-glow.mp4",
      lista: [
        "Reduce manchas y aporta un efecto maquillaje semipermanente",
        "Ideal para lucir una piel radiante todos los días",
        "Luminosidad natural sin necesidad de maquillaje"
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
              Nuestros <span className="text-gold-gradient">Tratamientos</span>
            </h1>
            <p className="text-[#BFB7AA] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              En Adhara Clínica Spa combinamos aparatología de alta gama, ingredientes premium 
              y maniobras precisas para ofrecerte resultados seguros, visibles y duraderos.
            </p>
          </div>

          <div className="flex flex-col gap-24 mb-32">
            {servicios.map((servicio, index) => {
              const Icon = servicio.icono;
              const isEven = index % 2 === 0;

              return (
                <div key={servicio.id} id={servicio.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center relative group`}>
                  
                  {/* Atmospheric Glow per section */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--color-brand-gold-text)] opacity-[0.02] rounded-full blur-[100px] pointer-events-none group-hover:opacity-[0.04] transition-opacity duration-700" />

                  {/* Imagen */}
                  <div className="w-full lg:w-1/2 relative z-10">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-[var(--color-brand-gold-text)]/20 group-hover:border-[var(--color-brand-gold-text)]/40 transition-all duration-700 bg-neutral-900">
                      <LazyVideo
                        autoPlay
                        muted
                        loop
                        playsInline
                        src={servicio.video}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="w-full lg:w-1/2 flex flex-col items-start text-left relative z-10">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-brand-gold-text)]/10 flex items-center justify-center mb-8 border border-[var(--color-brand-gold-text)]/20">
                      <Icon className="w-6 h-6 text-[var(--color-brand-gold-text)] drop-shadow-[0_0_8px_rgba(198,162,90,0.5)]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      <span className="text-gold-gradient">{servicio.titulo}</span>
                    </h2>
                    <p className="text-[#BFB7AA] text-lg leading-relaxed mb-8">
                      {servicio.descripcion}
                    </p>

                    <ul className="space-y-4 mb-10 w-full">
                      {servicio.lista.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-gold-text)] shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(198,162,90,0.3)] group-hover/item:scale-110 transition-transform" />
                          <span className="text-[#F4F1EA]">{item}</span>
                        </li>
                      ))}
                    </ul>


                    <a href="/#reservar" className="btn-gold px-12 py-4 rounded-full text-black font-bold text-sm shadow-[0_0_20px_rgba(198,162,90,0.2)] hover:shadow-[0_0_30px_rgba(198,162,90,0.4)] transition-all">
                      Vive la experiencia Adhara
                    </a>
                    
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-brand-gold-text)]/20 to-transparent mt-16 lg:hidden" />
                  </div>

                </div>
              );
            })}
          </div>

          {/* Seccion de Paquetes Integrada */}
          <div className="pt-24 border-t border-[var(--color-brand-gold-text)]/20" id="paquetes">
            <div className="text-center mb-16">
              <span className="inline-block mb-3 text-[var(--color-brand-gold-text)] font-semibold tracking-wider text-xs uppercase">
                Resultados que evolucionan contigo
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Paquetes Exclusivos <span className="text-gold-gradient italic" style={{ fontFamily: "'Pinyon Script', cursive" }}>Adhara</span>
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                Diseñados para potenciar resultados de forma progresiva, segura y personalizada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
              {/* Experiencias Faciales */}
              <div className="group glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all flex flex-col relative overflow-hidden">
                <LazyVideo 
                  autoPlay muted loop playsInline 
                  src="/videos/facial.mp4"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black z-0" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6 text-[var(--color-brand-gold-text)]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Experiencias Faciales</h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed flex-grow text-sm">
                    Rituales personalizados enfocados en rejuvenecimiento, control de acné, 
                    despigmentación, efecto glow y bioestimulación.
                  </p>
                  <div className="p-5 bg-black/50 rounded-2xl border border-white/5 mb-6">
                    <p className="text-[var(--color-brand-gold-text)] font-semibold text-sm mb-1">Planes a Medida</p>
                    <p className="text-white text-lg font-bold mb-1">Comunícate para cotizar</p>
                    <p className="text-neutral-500 text-xs text-balance">Manejamos promociones del mes y planes por sesión.</p>
                  </div>
                   <a href="https://wa.me/525525647074" target="_blank" className="btn-gold inline-flex w-full justify-center px-6 py-3 rounded-full text-black font-semibold text-sm">
                    Solicitar Información
                  </a>
                </div>
              </div>

              {/* Protocolos Corporales */}
              <div className="group glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all relative overflow-hidden flex flex-col">
                <LazyVideo 
                  autoPlay muted loop playsInline 
                  src="/videos/spa-videos.mp4"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black z-0" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                    <Droplet className="w-6 h-6 text-[var(--color-brand-gold-text)]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Protocolos Corporales</h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed flex-grow text-sm">
                    Tecnología estética de última generación para moldear, reafirmar y 
                    mejorar la textura de la piel.
                  </p>
                  <div className="p-5 bg-black/50 rounded-2xl border border-white/5 mb-6">
                    <p className="text-[var(--color-brand-gold-text)] font-semibold text-sm mb-1">Valora tu Tratamiento</p>
                    <p className="text-white text-lg font-bold mb-1">Comunícate para cotizar</p>
                    <p className="text-neutral-500 text-xs text-balance">Diseñamos el protocolo ideal para tus necesidades.</p>
                  </div>
                  <a href="https://wa.me/525525647074" target="_blank" className="btn-outline inline-flex w-full justify-center px-6 py-3 rounded-full font-semibold text-sm hover:bg-[var(--color-brand-gold-text)] hover:text-black transition-colors">
                    Solicitar Información
                  </a>
                </div>
              </div>

              {/* Micropigmentación */}
              <div className="group glass-panel p-8 rounded-3xl border border-[var(--color-brand-gold-text)]/30 hover:border-[var(--color-brand-gold-text)] transition-all relative overflow-hidden flex flex-col">
                <LazyVideo 
                  autoPlay muted loop playsInline 
                  src="/videos/micropigmentacion.mp4"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black z-0" />

                <div className="absolute top-0 right-0 px-4 py-1.5 text-[10px] font-bold bg-gold-shimmer text-black rounded-bl-2xl tracking-widest uppercase shadow-lg font-inter z-20">
                  MÁS POPULAR
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-gold-text)]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Micropigmentación</h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed flex-grow text-sm">
                    Realce semipermanente. Diseño artístico de cejas, labios y despigmentación de cejas con productos premium.
                  </p>
                  <div className="p-5 bg-black/50 rounded-2xl border border-white/5 mb-6">
                    <p className="text-[var(--color-brand-gold-text)] font-semibold text-sm mb-1">Resultados Naturales</p>
                    <p className="text-white text-lg font-bold mb-1">Comunícate para cotizar</p>
                    <p className="text-neutral-500 text-xs text-balance">Diseño personalizado que armoniza con tu rostro.</p>
                  </div>
                  <a href="https://wa.me/525525647074" target="_blank" className="btn-outline inline-flex w-full justify-center px-6 py-3 rounded-full text-white font-semibold text-sm hover:bg-[var(--color-brand-gold-text)] hover:text-black hover:border-transparent transition-all">
                    Solicitar Información
                  </a>
                </div>
              </div>

              {/* Depilación Láser */}
              <div className="group glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all relative overflow-hidden flex flex-col">
                <LazyVideo 
                  autoPlay muted loop playsInline 
                  src="/videos/laser.mp4"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black z-0" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                    <Wind className="w-6 h-6 text-[var(--color-brand-gold-text)]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Depilación Láser</h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed flex-grow text-sm">
                    Eliminación definitiva del vello con tecnología láser avanzada para una piel lisa y sin dolor.
                  </p>
                  <div className="p-5 bg-black/50 rounded-2xl border border-white/5 mb-6">
                    <p className="text-[var(--color-brand-gold-text)] font-semibold text-sm mb-1">Sesiones Completas</p>
                    <p className="text-white text-lg font-bold mb-1">Comunícate para cotizar</p>
                    <p className="text-neutral-500 text-xs text-balance">Precios preferenciales en cuerpo completo o zonas combinadas.</p>
                  </div>
                  <a href="https://wa.me/525525647074" target="_blank" className="btn-outline inline-flex w-full justify-center px-6 py-3 rounded-full text-white font-semibold text-sm hover:bg-[var(--color-brand-gold-text)] hover:text-black hover:border-transparent transition-all">
                    Solicitar Información
                  </a>
                </div>
              </div>

              {/* Hollywood Peel */}
              <div className="group glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all relative overflow-hidden flex flex-col">
                <LazyVideo 
                  autoPlay muted loop playsInline 
                  src="/videos/peeling.mp4"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black z-0" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6 text-[var(--color-brand-gold-text)]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Hollywood Peel</h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed flex-grow text-sm">
                    El tratamiento favorito de las celebridades para una piel luminosa. Reduce manchas, poros y líneas de expresión.
                  </p>
                  <div className="p-5 bg-black/50 rounded-2xl border border-white/5 mb-6">
                    <p className="text-[var(--color-brand-gold-text)] font-semibold text-sm mb-1">Sesión Individual</p>
                    <p className="text-white text-lg font-bold mb-1">Comunícate para cotizar</p>
                    <p className="text-neutral-500 text-xs text-balance">Obtén nuestro exclusivo tratamiento láser regenerador.</p>
                  </div>
                  <a href="https://wa.me/525525647074" target="_blank" className="btn-outline inline-flex w-full justify-center px-6 py-3 rounded-full text-white font-semibold text-sm hover:bg-[var(--color-brand-gold-text)] hover:text-black hover:border-transparent transition-all">
                    Solicitar Información
                  </a>
                </div>
              </div>

              {/* BB Glow */}
              <div className="group glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all relative overflow-hidden flex flex-col">
                <LazyVideo 
                  autoPlay muted loop playsInline 
                  src="/videos/bb-glow.mp4"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black z-0" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6 text-[var(--color-brand-gold-text)]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">BB Glow</h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed flex-grow text-sm">
                    Efecto piel de porcelana con apariencia uniforme. Tratamiento innovador que mejora el tono y la textura facial.
                  </p>
                  <div className="p-5 bg-black/50 rounded-2xl border border-white/5 mb-6">
                    <p className="text-[var(--color-brand-gold-text)] font-semibold text-sm mb-1">Maquillaje Semipermanente</p>
                    <p className="text-white text-lg font-bold mb-1">Comunícate para cotizar</p>
                    <p className="text-neutral-500 text-xs text-balance">Consulta por promociones y más información por WhatsApp.</p>
                  </div>
                   <a href="https://wa.me/525525647074" target="_blank" className="btn-outline inline-flex w-full justify-center px-6 py-3 rounded-full text-white font-semibold text-sm hover:bg-[var(--color-brand-gold-text)] hover:text-black hover:border-transparent transition-all">
                    Solicitar Información
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

