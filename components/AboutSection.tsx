"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { useData } from "@/context/DataContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const AboutSection: React.FC = () => {
  const { galleryItems } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal();

  // Drag & Swipe states
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragThreshold = 40;

  useEffect(() => {
    if (galleryItems.length === 0 || isDragging) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryItems.length, isDragging]);

  const handleStart = (clientX: number) => {
    setStartX(clientX);
    setIsDragging(true);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || startX === null) return;
    const diff = startX - clientX;
    if (Math.abs(diff) > dragThreshold) {
      if (diff > 0) {
        // Swiped/Dragged left -> next
        setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
      } else {
        // Swiped/Dragged right -> prev
        setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
      }
      setIsDragging(false);
      setStartX(null);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    setStartX(null);
  };

  return (
    <section id="tentang-kami" className="py-24 bg-white relative overflow-hidden select-none">
      <div ref={sectionRef} className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center reveal ${sectionVisible ? "revealed" : ""}`}>
          
          {/* Left Column — Content */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2]">
              Profesional Event Organizer &amp; Rental Service
            </h2>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Tomi tomi adalah perusahaan penyedia jasa penyewaan perlengkapan acara dan event organizer yang berbasis di Indonesia. Kami menawarkan layanan profesional dalam merancang, mengatur, dan menyediakan seluruh kebutuhan berbagai jenis acara, baik untuk keperluan pribadi maupun perusahaan.
            </p>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Dengan tim yang berpengalaman, Tomi tomi berkomitmen untuk memberikan pengalaman acara yang tak terlupakan melalui konsep yang kreatif, perhatian terhadap detail, serta koordinasi yang efisien dari awal hingga akhir acara.
            </p>

            <div className="pt-4">
              <Button
                href="/tentang-kami"
                variant="primary"
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white border-none rounded-full px-8 py-3.5 font-bold shadow-lg shadow-emerald-600/20"
              >
                SELENGKAPNYA TENTANG KAMI
              </Button>
            </div>
          </div>

          {/* Right Column — Image Slider with Touch/Mouse Drag & Stats Box */}
          <div className="lg:col-span-6 space-y-0">
            {/* Top Image Slider container */}
            <div
              className="relative w-full h-[320px] sm:h-[400px] rounded-t-3xl rounded-bl-3xl rounded-br-[80px] overflow-hidden shadow-md cursor-grab active:cursor-grabbing"
              onMouseDown={(e) => handleStart(e.clientX)}
              onMouseMove={(e) => handleMove(e.clientX)}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={(e) => handleStart(e.touches[0].clientX)}
              onTouchMove={(e) => handleMove(e.touches[0].clientX)}
              onTouchEnd={handleEnd}
            >
              {/* Sliding Track */}
              <div
                className="flex w-full h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {galleryItems.map((img, idx) => (
                  <div
                    key={img.id || idx}
                    className="relative w-full h-full shrink-0"
                  >
                    <Image
                      src={img.src}
                      alt={img.title || "Tentang Tomi tomi Event"}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              {/* Slide Indicator Dots */}
              {galleryItems.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 pointer-events-auto">
                  {galleryItems.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Emerald Stats Card */}
            <div className="bg-emerald-600 text-white p-8 sm:p-10 rounded-b-3xl grid grid-cols-2 gap-8 shadow-xl">
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  1000+
                </div>
                <div className="text-sm sm:text-base text-emerald-100 font-medium">
                  Acara Sukses Ditangani
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  5+ Tahun
                </div>
                <div className="text-sm sm:text-base text-emerald-100 font-medium">
                  Terpercaya dan Inovatif
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};



