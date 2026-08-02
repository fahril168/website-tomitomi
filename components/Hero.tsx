"use client";

import React from "react";
import { MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "./ui/Button";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Image (Fixed on scroll) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        {/* Gradient overlay: darker at bottom-left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
      </div>

      {/* Content — left-aligned, centered vertically */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-32">
        <div className="max-w-3xl flex flex-col items-start space-y-6">
          {/* Hero Heading */}
          <h1 className="hero-animate hero-animate-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
            Solusi Event Terlengkap. Bikin Acara Impian Jadi Nyata.
          </h1>

          {/* Subtitle */}
          <p className="hero-animate hero-animate-2 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
            Penyewaan tenda, kursi, meja, panggung, sound system, hingga
            live music untuk segala jenis acara Anda.
          </p>

          {/* CTA Buttons */}
          <div className="hero-animate hero-animate-3 flex flex-col sm:flex-row items-start gap-4 pt-2">
            <Button
              href="https://wa.me/6281234567890?text=Halo%20Tomi%20tomi,%20saya%20ingin%20konsultasi%20gratis%20penyewaan%20alat%20acara"
              variant="primary"
              size="lg"
              icon={MessageCircle}
              iconPosition="left"
            >
              Konsultasi Gratis
            </Button>
            <Button
              href="#produk"
              variant="secondary"
              size="lg"
              icon={ChevronRight}
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              Lihat Katalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

