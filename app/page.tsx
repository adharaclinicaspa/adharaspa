import dynamic from "next/dynamic";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";

// Lazy-load below-the-fold components
const StarServicesSlider = dynamic(() => import("./components/StarServicesSlider"));
const IntroSection = dynamic(() => import("./components/IntroSection"));
const SocialProofCarousel = dynamic(() => import("./components/SocialProofCarousel"));
const PaquetesSection = dynamic(() => import("./components/PaquetesSection"));
const TestimonialsSection = dynamic(() => import("./components/TestimonialsSection"));
const FAQSection = dynamic(() => import("./components/FAQSection"));
const BookingSection = dynamic(() => import("./components/BookingSection"));
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <StarServicesSlider />
        <IntroSection />
      
      <section id="resultados" className="py-32 bg-gradient-to-b from-[#A68037] to-black overflow-hidden relative">
        <div className="container-brand px-6 md:px-10 mx-auto text-center mb-16 relative z-10">
          <span className="text-white font-extrabold tracking-[0.3em] text-xs uppercase mb-6 block">Resultados Adhara</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter drop-shadow-sm">Voces de Belleza Real</h2>
          <p className="text-white/80 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-tight">Mira lo que nuestra comunidad dice sobre su<br/>experiencia de transformación en Adhara.</p>
        </div>
        <SocialProofCarousel />
      </section>

      <PaquetesSection />
        <TestimonialsSection />
        <FAQSection />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
