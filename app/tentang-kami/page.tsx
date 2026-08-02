"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Award,
  Clock,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Target,
  Eye,
  Heart,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useData } from "@/context/DataContext";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

export default function TentangKamiPage() {
  const { galleryItems } = useData();
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: storyRef, isVisible: storyVisible } = useScrollReveal();
  const { ref: visiRef, isVisible: visiVisible } = useScrollReveal();
  const { ref: whyRef, isVisible: whyVisible } = useScrollReveal();
  const { ref: galRef, isVisible: galVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  const stats = [
    { value: "1000+", label: "Acara Sukses Ditangani", icon: Award },
    { value: "5+", label: "Tahun Pengalaman", icon: Clock },
    { value: "500+", label: "Klien Puas & Kembali", icon: Users },
    { value: "6", label: "Kategori Layanan", icon: Sparkles },
  ];

  const advantages = [
    {
      icon: ShieldCheck,
      title: "Profesional & Terpercaya",
      desc: "Tim berpengalaman yang terlatih dalam menangani berbagai jenis acara dari skala kecil hingga besar, memastikan setiap detail terkoordinasi dengan sempurna.",
    },
    {
      icon: Clock,
      title: "Tepat Waktu & Responsif",
      desc: "Pengiriman dan setup peralatan selalu tepat waktu. Tim support kami siap merespon kebutuhan Anda 24/7 melalui WhatsApp.",
    },
    {
      icon: Sparkles,
      title: "Peralatan Bersih & Terawat",
      desc: "Setiap peralatan dicuci, disterilkan, dan diperiksa sebelum dikirim. Kami menjamin kebersihan dan kelayakan pakai setiap unit.",
    },
    {
      icon: Heart,
      title: "Harga Transparan & Bersahabat",
      desc: "Tanpa biaya tersembunyi. Harga yang kami tawarkan sudah termasuk pengiriman, setup, dan pembongkaran untuk area layanan.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/488504212_17847816054443677_596256452473833969_n.png"
          alt="Tentang Tomi tomi"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-slate-900/30" />
        <div ref={heroRef} className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 pb-12 w-full">
          <div className={`space-y-4 reveal ${heroVisible ? "revealed" : ""}`}>
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <Link href="/" className="hover:text-emerald-300 transition-colors">Beranda</Link>
              <ArrowRight className="w-3.5 h-3.5" />
              <span className="text-white">Tentang Kami</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Tentang Kami
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl">
              Kenali lebih dekat Tomi tomi — mitra penyewaan perlengkapan acara terpercaya di Sulawesi Tenggara.
            </p>
          </div>
        </div>
      </section>

      {/* Profil Perusahaan */}
      <section className="py-24 bg-white">
        <div ref={storyRef} className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal ${storyVisible ? "revealed" : ""}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold">
                <Sparkles className="w-4 h-4" />
                Profil Perusahaan
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Profesional Event Organizer &amp; Rental Service
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                <strong>Tomi tomi</strong> adalah perusahaan penyedia jasa penyewaan perlengkapan acara dan event organizer yang berbasis di Kota Baubau, Sulawesi Tenggara. Berdiri sejak lebih dari 5 tahun lalu, kami telah dipercaya oleh ratusan klien untuk menangani berbagai jenis acara.
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Kami menawarkan layanan profesional dalam merancang, mengatur, dan menyediakan seluruh kebutuhan berbagai jenis acara — mulai dari pernikahan, resepsi, seminar, acara pemerintahan, hingga festival dan event perusahaan berskala besar.
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Dengan tim yang berpengalaman dan dedikasi tinggi, Tomi tomi berkomitmen untuk memberikan pengalaman acara yang tak terlupakan melalui konsep kreatif, perhatian terhadap detail, serta koordinasi yang efisien dari awal hingga akhir acara.
              </p>
            </div>

            {/* Image */}
            <div className="relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/488418828_17847816027443677_1742583229405988828_n.png"
                alt="Tim Tomi tomi"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-24 bg-slate-50">
        <div ref={visiRef} className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 reveal ${visiVisible ? "revealed" : ""}`}>
            {/* Visi */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Visi</h3>
              <p className="text-slate-600 leading-relaxed">
                Menjadi penyedia jasa penyewaan perlengkapan acara terdepan dan terpercaya di Sulawesi Tenggara, dengan standar kualitas, kebersihan, dan pelayanan terbaik.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-emerald-600 p-8 sm:p-10 rounded-3xl shadow-xl text-white space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold">Misi</h3>
              <ul className="space-y-3 text-emerald-50 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0 mt-0.5" />
                  <span>Menyediakan peralatan acara lengkap, bersih, dan terawat</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0 mt-0.5" />
                  <span>Memberikan pelayanan profesional dan tepat waktu</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0 mt-0.5" />
                  <span>Membangun hubungan jangka panjang dengan klien</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0 mt-0.5" />
                  <span>Terus berinovasi untuk memberikan pengalaman terbaik</span>
                </li>
              </ul>
            </div>

            {/* Nilai */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Nilai Kami</h3>
              <ul className="space-y-3 text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Integritas dan kejujuran dalam setiap layanan</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Kepuasan klien adalah prioritas utama</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Kerja tim yang solid dan profesional</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Komitmen untuk terus berkembang</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="py-20 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
        <div ref={statsRef} className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 reveal ${statsVisible ? "revealed" : ""}`}>
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-white/15 text-white flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-emerald-100 text-sm sm:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kenapa Memilih Kami */}
      <section className="py-24 bg-white">
        <div ref={whyRef} className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className={`text-center max-w-3xl mx-auto space-y-4 mb-16 reveal ${whyVisible ? "revealed" : ""}`}>
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mx-auto">
              <Award className="w-4 h-4" />
              Keunggulan Kami
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Kenapa Memilih Tomi tomi?
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Kami tidak hanya menyewakan alat, tapi juga memberikan jaminan kualitas dan pelayanan terbaik untuk setiap acara Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((item, idx) => (
              <div
                key={idx}
                className={`bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 space-y-4 group reveal ${whyVisible ? "revealed" : ""}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section className="py-24 bg-slate-50">
        <div ref={galRef} className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className={`text-center max-w-3xl mx-auto space-y-4 mb-16 reveal ${galVisible ? "revealed" : ""}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Galeri Kegiatan Kami
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Beberapa dokumentasi dari acara-acara yang telah kami tangani dengan sukses.
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal ${galVisible ? "revealed" : ""}`}>
            {galleryItems.map((item, idx) => (
              <div
                key={item.id || idx}
                className="relative h-64 sm:h-72 rounded-2xl overflow-hidden group"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  <p className="text-white/80 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.15),transparent_60%)]" />
        <div ref={ctaRef} className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
          <div className={`text-center space-y-6 reveal ${ctaVisible ? "revealed" : ""}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Siap Wujudkan Acara Impian Anda?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Konsultasikan kebutuhan acara Anda dengan tim kami. Gratis konsultasi dan survei lokasi!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/6282196321203?text=Halo%20Tomi%20tomi,%20saya%20ingin%20konsultasi%20penyewaan%20alat%20acara"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-emerald-600/20 transition-all active:scale-[0.97] text-base"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Hubungi via WhatsApp</span>
              </a>
              <Link
                href="/produk"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-semibold px-6 py-4 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all text-base"
              >
                <span>Lihat Produk &amp; Layanan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
