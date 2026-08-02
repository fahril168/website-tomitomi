"use client";

import React from "react";
import Image from "next/image";
import { useData } from "@/context/DataContext";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

export const ServicesSection: React.FC = () => {
  const { services } = useData();
  const { ref, isVisible, getDelay } = useStaggerReveal(services.length, 100);

  return (
    <section id="produk" className="py-20 bg-white relative">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto space-y-4 mb-16 reveal ${isVisible ? "revealed" : ""}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Produk &amp; Layanan Penyewaan Utama
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Semua sarana perlengkapan pesta dalam satu tempat. Terawat, bersih,
            dan disiapkan oleh tim berpengalaman.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((cat, idx) => {
            const hasValidImage = cat.image && cat.image !== "-" && cat.image.startsWith("/");

            return (
              <div
                key={idx}
                className={`relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer reveal ${isVisible ? "revealed" : ""}`}
                style={getDelay(idx)}
              >
                {/* Background Image or Fallback Color */}
                {hasValidImage ? (
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-900" />
                )}

                {/* Subtle Gradient Overlay for text readability without darkening image too much */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Title Only — Overlaid on Image */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                    {cat.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

