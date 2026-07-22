import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Sticky Header / Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Section Tentang Kami */}
      <AboutSection />

      {/* 4. Section Produk / Layanan Kami */}
      <ServicesSection />

      {/* 5. Section Paket Harga & Estimasi */}
      <PricingSection />

      {/* 6. Section Testimoni */}
      <TestimonialsSection />

      {/* 7. Section Kontak & Form Pemesanan */}
      <ContactSection />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
