"use client";

import React from "react";
import Image from "next/image";
import {
  MessageCircle,
  ChevronRight,
  Star,
} from "lucide-react";
import { Button } from "./ui/Button";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-36 pb-24 lg:pt-48 lg:pb-36 overflow-hidden flex items-center justify-center min-h-[85vh]"
    >
      {/* Background Image with Dark Overlay for premium readability */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Dekorasi Tenda dan Perlengkapan Acara Tomi tomi"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center space-y-8">
        {/* Centered Hero Text Content */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
          Solusi Lengkap &amp; Terpercaya untuk{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-200">
            Acara Impian Anda
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
          Penyewaan tenda, kursi, meja, panggung, sound system, hingga live
          music untuk pernikahan, event kantor, festival, pesta ulang
          tahun, dan lain sebagainya.
        </p>

        {/* CTAs */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            href="#produk"
            variant="primary"
            size="lg"
            icon={ChevronRight}
          >
            Lihat Katalog Produk
          </Button>
          <Button
            href="https://wa.me/6281234567890?text=Halo%20Tomi%20tomi,%20saya%20ingin%20konsultasi%20gratis%20penyewaan%20alat%20acara"
            variant="secondary"
            size="lg"
            icon={MessageCircle}
            iconPosition="left"
            className="bg-white/10 hover:bg-white/20 text-white border-white/20"
          >
            Konsultasi Gratis via WA
          </Button>
        </div>

        {/* Micro Stats & Proof */}
        <div className="pt-8 border-t border-white/15 w-full max-w-2xl grid grid-cols-3 gap-4">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              1000+
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              Acara Sukses Ditangani
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 flex items-center justify-center gap-1">
              4.9 <Star className="w-5 h-5 fill-emerald-400 text-emerald-400" />
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              Rating Kepuasan Klien
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              5+ Tahun
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              Beroperasi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
