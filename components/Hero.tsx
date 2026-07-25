"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { MessageCircle, ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/Button";

// Animated counter hook
function useCounter(target: number, duration: number = 1800, suffix: string = "") {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return { ref, count, suffix };
}

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-36 pb-24 lg:pt-48 lg:pb-36 overflow-hidden flex items-center justify-center min-h-[85vh]"
    >
      {/* Background Image with solid dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Dekorasi Tenda dan Perlengkapan Acara Tomi tomi"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center space-y-8">
        {/* Hero Heading — staggered entrance */}
        <h1 className="hero-animate hero-animate-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
          Solusi Lengkap &amp; Terpercaya untuk{" "}
          <span className="text-emerald-400">
            Acara Impian Anda
          </span>
        </h1>

        <p className="hero-animate hero-animate-2 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
          Penyewaan tenda, kursi, meja, panggung, sound system, hingga live
          music untuk pernikahan, event kantor, festival, pesta ulang
          tahun, dan lain sebagainya.
        </p>

        {/* CTAs */}
        <div className="hero-animate hero-animate-3 w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
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

        {/* Animated Stats */}
        <div className="hero-animate hero-animate-4 pt-8 border-t border-white/10 w-full max-w-2xl grid grid-cols-3 gap-4">
          <StatItem target={1000} suffix="+" label="Acara Sukses Ditangani" />
          <StatItemRating />
          <StatItem target={5} suffix="+ Tahun" label="Beroperasi" />
        </div>
      </div>
    </section>
  );
};

function StatItem({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, count } = useCounter(target);

  return (
    <div ref={ref}>
      <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
        {label}
      </div>
    </div>
  );
}

function StatItemRating() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <div ref={ref}>
      <div className="text-2xl sm:text-3xl font-bold text-emerald-400 flex items-center justify-center gap-1">
        {visible ? "4.9" : "0.0"}{" "}
        <Star className="w-5 h-5 fill-emerald-400 text-emerald-400" />
      </div>
      <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
        Rating Kepuasan Klien
      </div>
    </div>
  );
}
