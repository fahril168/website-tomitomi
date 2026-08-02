import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
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

      {/* 5. Section Testimoni */}
      <TestimonialsSection />

      {/* 6. Section Kontak & Form Pemesanan */}
      <ContactSection />

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
