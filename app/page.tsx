import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import StarServicesSlider from "./components/StarServicesSlider";
import IntroSection from "./components/IntroSection";
import SocialProofCarousel from "./components/SocialProofCarousel";
import PaquetesSection from "./components/PaquetesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

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
      <WhatsAppFloat />
    </>
  );
}
