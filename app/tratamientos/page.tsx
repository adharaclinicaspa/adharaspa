import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Image from "next/image";
import { CheckCircle2, Droplet, Sparkles, Wind } from "lucide-react";

export default function TratamientosPage() {
  const servicios = [
    {
      id: "faciales",
      titulo: "Experiencias Faciales",
      descripcion: "Rituales diseñados para limpiar, nutrir y rejuvenecer la piel desde las capas más profundas.",
      icono: Sparkles,
      imagen: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop",
      lista: [
        "Limpieza Facial Profunda con aparatología",
        "Control de Acné activo y secuelas",
        "Despigmentación y efecto Glow (BB Glow)",
        "Bioestimulación (Microneedling / Dermapen)",
        "Rejuvenecimiento y Lifting Facial"
      ]
    },
    {
      id: "corporales",
      titulo: "Protocolos Corporales",
      descripcion: "Tecnología y maniobras enfocadas en la remodelación corporal y mejora de la calidad de piel.",
      icono: Droplet,
      imagen: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
      lista: [
        "Masajes Reductivos y Moldeadores",
        "Drenaje Linfático",
        "Tratamientos Anticelulíticos",
        "Reafirmación de Glúteos y Abdomen",
        "Cavitación y Radiofrecuencia"
      ]
    },
    {
      id: "micropigmentacion",
      titulo: "Micropigmentación",
      descripcion: "Diseño y corrección semipermanente para realzar tus facciones con naturalidad las 24 horas del día.",
      icono: CheckCircle2,
      imagen: "https://images.unsplash.com/photo-1596178065887-113861d8d4e7?q=80&w=1200&auto=format&fit=crop",
      lista: [
        "Microblading y Powder Brows (Cejas)",
        "Micropigmentación de Labios (Acuarela Lips)",
        "Delineado de Ojos (Eyeliner clásico y sombreado)",
        "Retoques y corrección de color"
      ]
    },
    {
      id: "depilacion",
      titulo: "Depilación Láser",
      descripcion: "Tecnología de punta para la eliminación definitiva del vello, segura y apta para todo tipo de piel.",
      icono: Wind,
      imagen: "https://images.unsplash.com/photo-1522338140262-f46f5912018a?q=80&w=1200&auto=format&fit=crop",
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
              En Adhara Clínica Spa combinamos aparatología estética avanzada, ingredientes premium 
              y maniobras precisas para ofrecerte resultados seguros, visibles y duraderos.
            </p>
          </div>

          <div className="flex flex-col gap-24">
            {servicios.map((servicio, index) => {
              const Icon = servicio.icono;
              const isEven = index % 2 === 0;

              return (
                <div key={servicio.id} id={servicio.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                  
                  {/* Imagen */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/10 group">
                      <Image
                        src={servicio.imagen}
                        alt={servicio.titulo}
                        fill
                        className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                      />
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
                      Agendar Cita
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
