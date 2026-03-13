import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import StarServicesSlider from "./components/StarServicesSlider";
import IntroSection from "./components/IntroSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
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
        <BeforeAfterSection />
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
