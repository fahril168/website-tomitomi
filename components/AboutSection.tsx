"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useData } from "@/context/DataContext";

export const AboutSection: React.FC = () => {
  const { galleryItems } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (galleryItems.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
    }, 4000); // Ganti gambar setiap 4 detik
    return () => clearInterval(timer);
  }, [galleryItems.length]);

  if (galleryItems.length === 0) {
    return null; // Don't render gallery section if it is empty
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  return (
    <section id="tentang-kami" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Galeri Perlengkapan &amp; Event Kami
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Dokumentasi unit alat sewa asli dan suasana event yang telah kami sukseskan.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 group bg-slate-900">
          {/* Slides */}
          <div className="relative w-full h-full">
            {galleryItems.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Caption text */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-white space-y-2 z-20">
                  <span className="inline-flex items-center gap-1 bg-emerald-600/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    <Sparkles className="w-3.5 h-3.5 fill-white/10" />
                    <span>Tomitomi Gallery</span>
                  </span>
                  <h3 className="text-xl md:text-3xl font-extrabold tracking-tight">
                    {img.title}
                  </h3>
                  <p className="text-slate-200 text-xs md:text-base max-w-xl font-medium">
                    {img.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-105 border border-white/10"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-105 border border-white/10"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Indicators Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
            {galleryItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-6 bg-emerald-500" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
