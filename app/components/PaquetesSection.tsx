import { BlurReveal } from "./ui/BlurReveal";
import { ShineBorder } from "./ui/ShineBorder";
import { LazyVideo } from "./ui/LazyVideo";

export default function PaquetesSection() {
  const packages = [
    {
      id: "faciales",
      title: "Experiencias Faciales",
      description: "Tratamientos personalizados para limpiar, nutrir y rejuvenecer tu piel con resultados visibles.",
      video: "/videos/facial.mp4",
      highlight: false
    },
    {
      id: "micropigmentacion",
      title: "Micropigmentación",
      description: "Realce semipermanente natural para cejas, labios y ojos con diseño artístico personalizado.",
      video: "/videos/micropigmentacion.mp4",
      highlight: true
    },
    {
      id: "corporales",
      title: "Protocolos Corporales",
      description: "Moldea y redefine tu figura sin cirugía con tecnología de remodelación avanzada.",
      video: "/videos/spa-videos.mp4",
      highlight: false
    },
    {
      id: "depilacion",
      title: "Depilación Láser",
      description: "Olvídate del vello y disfruta una piel suave con tecnología segura y resultados duraderos.",
      video: "/videos/laser.mp4",
      highlight: false
    },
    {
      id: "hollywood-peel",
      title: "Hollywood Peel",
      description: "El tratamiento favorito de las celebridades para una piel luminosa.",
      video: "/videos/peeling.mp4",
      highlight: false
    },
    {
      id: "bb-glow",
      title: "BB Glow",
      description: "Efecto piel de porcelana con apariencia uniforme y luminosa.",
      video: "/videos/bb-glow.mp4",
      highlight: false
    }
  ];

  return (
    <section id="paquetes-preview" className="py-24 bg-[var(--color-brand-bg)] overflow-hidden">
      <div className="container-brand px-6 md:px-10 max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <BlurReveal>
            <span className="inline-block mb-4 text-[var(--color-brand-gold-text)] font-semibold tracking-widest text-xs uppercase">
              Una experiencia única
            </span>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-none">
              Paquetes Exclusivos <span className="text-gold-gradient italic inline-block pr-6 pb-2 font-normal" style={{ fontFamily: "'Pinyon Script', cursive" }}>Adhara</span>
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.2}>
            <p className="text-[#BFB7AA] text-lg mt-6 max-w-2xl mx-auto">
              Diseñados para potenciar resultados de forma progresiva, segura y personalizada.
            </p>
          </BlurReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {packages.map((pkg, idx) => (
            <BlurReveal key={pkg.id} delay={0.1 * idx}>
              {pkg.highlight ? (
                <ShineBorder borderRadius="2.5rem" className="h-full">
                  <PackageCard pkg={pkg} />
                </ShineBorder>
              ) : (
                <PackageCard pkg={pkg} />
              )}
            </BlurReveal>
          ))}
        </div>

        <BlurReveal delay={0.5} className="flex justify-center mt-20">
          <a href="/experiencia" className="text-neutral-400 hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-bold border-b border-transparent hover:border-white/20 pb-1">
            ¿Por qué elegir Adhara? →
          </a>
        </BlurReveal>
      </div>
    </section>
  );
}

function PackageCard({ pkg }: { pkg: any }) {
  return (
    <div className="group relative aspect-[14/9] rounded-[2.5rem] overflow-hidden glass-panel border border-white/10 flex flex-col justify-end p-8 md:p-10">
      <LazyVideo 
        autoPlay 
        muted 
        loop 
        playsInline 
        src={pkg.video}
        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      
      {pkg.highlight && (
        <div className="absolute top-6 right-6 px-4 py-1.5 text-[10px] font-bold bg-gold-shimmer text-black rounded-full tracking-widest uppercase shadow-lg">
          MÁS POPULAR
        </div>
      )}

      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{pkg.title}</h3>
        <p className="text-neutral-300 text-sm md:text-base mb-8 max-w-sm line-clamp-2 md:line-clamp-none">
          {pkg.description}
        </p>
        <a 
          href="/experiencia" 
          className="btn-gold px-8 py-3 rounded-full text-black font-bold text-sm inline-flex items-center gap-2 group/btn"
        >
          Vive la Experiencia
        </a>
      </div>
    </div>
  );
}

