"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useData } from "@/context/DataContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const AboutSection: React.FC = () => {
  const { galleryItems } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal();

  useEffect(() => {
    if (galleryItems.length === 0) return;
    const timer = setInterval(() => {
      setDirection("right");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryItems.length]);

  if (galleryItems.length === 0) {
    return null;
  }

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  return (
    <section id="tentang-kami" className="py-20 bg-slate-50 relative overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto space-y-4 mb-12 reveal ${sectionVisible ? "revealed" : ""}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Galeri Perlengkapan &amp; Event Kami
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Dokumentasi unit alat sewa asli dan suasana event yang telah kami sukseskan.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className={`relative max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-900 reveal-scale ${sectionVisible ? "revealed" : ""}`}
          style={{ transitionDelay: "150ms" }}
        >
          {/* Slides */}
          <div className="relative w-full h-full">
            {galleryItems.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  idx === currentIndex
                    ? "opacity-100 z-10 scale-100"
                    : "opacity-0 z-0 scale-105"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
                {/* Solid overlay — no gradient */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Caption text */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-white space-y-1.5 z-20">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                    {img.title}
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm max-w-xl font-medium">
                    {img.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-xl bg-white/10 hover:bg-white/25 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 active:scale-90 border border-white/10"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-xl bg-white/10 hover:bg-white/25 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 active:scale-90 border border-white/10"
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
                  idx === currentIndex ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
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
