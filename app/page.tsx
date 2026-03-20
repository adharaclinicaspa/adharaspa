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
      
      <section id="resultados" className="py-24 bg-black overflow-hidden">
        <div className="container-brand px-6 md:px-10 mx-auto text-center mb-16">
          <span className="text-[var(--color-brand-gold-text)] font-semibold tracking-widest text-xs uppercase mb-4 block">Resultados Adhara</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Voces de Belleza Real</h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">Mira lo que nuestra comunidad dice sobre su experiencia de transformación en Adhara.</p>
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
