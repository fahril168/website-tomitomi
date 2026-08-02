"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  ClipboardList,
  MapPin,
  Truck,
  Wrench,
  PartyPopper,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useData } from "@/context/DataContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProdukPage() {
  const { services } = useData();
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: listRef, isVisible: listVisible } = useScrollReveal();
  const { ref: processRef, isVisible: processVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  const processSteps = [
    {
      icon: Phone,
      title: "Konsultasi",
      desc: "Hubungi kami via WhatsApp atau telepon untuk mendiskusikan kebutuhan acara Anda. Tim kami siap membantu merekomendasikan perlengkapan yang sesuai.",
    },
    {
      icon: ClipboardList,
      title: "Survei & Penawaran",
      desc: "Tim kami melakukan survei lokasi acara untuk memastikan kebutuhan teknis. Anda akan menerima penawaran harga yang transparan dan detail.",
    },
    {
      icon: MapPin,
      title: "Konfirmasi & Booking",
      desc: "Setelah menyetujui penawaran, lakukan konfirmasi booking dengan DP. Jadwal pengiriman dan setup akan ditentukan bersama.",
    },
    {
      icon: Truck,
      title: "Pengiriman & Setup",
      desc: "Peralatan dikirim tepat waktu ke lokasi acara. Tim profesional kami melakukan setup dan pengecekan akhir untuk memastikan semuanya siap.",
    },
    {
      icon: Wrench,
      title: "Standby & Support",
      desc: "Selama acara berlangsung, tim support kami standby untuk memastikan semua peralatan berfungsi optimal. Hubungi kapan saja jika ada kendala.",
    },
    {
      icon: PartyPopper,
      title: "Pembongkaran & Selesai",
      desc: "Setelah acara selesai, tim kami akan membongkar dan mengangkut semua peralatan. Pelunasan dilakukan setelah proses selesai.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/489001683_17847816036443677_2577878175083365400_n.png"
          alt="Produk & Layanan Tomi tomi"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-slate-900/30" />
        <div ref={heroRef} className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className={`space-y-4 reveal ${heroVisible ? "revealed" : ""}`}>
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <Link href="/" className="hover:text-emerald-300 transition-colors">Beranda</Link>
              <ArrowRight className="w-3.5 h-3.5" />
              <span className="text-white">Produk &amp; Layanan</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Produk &amp; Layanan
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl">
              Perlengkapan acara lengkap, terawat, dan siap mendukung keberhasilan acara Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Daftar Produk Lengkap */}
      <section className="py-24 bg-white">
        <div ref={listRef} className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-3xl mx-auto space-y-4 mb-16 reveal ${listVisible ? "revealed" : ""}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Katalog Produk Penyewaan
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Semua sarana perlengkapan pesta dalam satu tempat. Terawat, bersih, dan disiapkan oleh tim berpengalaman.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, idx) => {
              const isReversed = idx % 2 !== 0;
              const hasValidImage = service.image && service.image !== "-" && service.image.startsWith("/");

              return (
                <div
                  key={service.id || idx}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center reveal ${listVisible ? "revealed" : ""}`}
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  {/* Image */}
                  <div className={`relative h-[320px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl ${isReversed ? "lg:order-2" : ""}`}>
                    {hasValidImage ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                        <span className="text-slate-400 text-lg">No Image</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`space-y-5 ${isReversed ? "lg:order-1" : ""}`}>
                    <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                      {service.category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <p className="text-emerald-600 font-semibold text-base">
                        {service.subtitle}
                      </p>
                    )}
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    {service.features && service.features.length > 0 && (
                      <div className="space-y-2.5 pt-2">
                        <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Varian / Fitur Tersedia:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-2.5 text-slate-700">
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                              <span className="font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-3">
                      <a
                        href={`https://wa.me/6282196321203?text=Halo%20Tomi%20tomi,%20saya%20ingin%20tanya%20tentang%20${encodeURIComponent(service.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all active:scale-[0.97] text-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Tanya Harga {service.title}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Alur Pemesanan */}
      <section className="py-24 bg-slate-50">
        <div ref={processRef} className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-3xl mx-auto space-y-4 mb-16 reveal ${processVisible ? "revealed" : ""}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Alur Pemesanan
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Proses mudah dan transparan dari konsultasi hingga acara selesai.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal ${processVisible ? "revealed" : ""}`}>
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 space-y-4 relative group"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Step number */}
                <div className="absolute top-6 right-6 text-5xl font-extrabold text-slate-100 group-hover:text-emerald-100 transition-colors select-none">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
        <div ref={ctaRef} className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center space-y-6 reveal ${ctaVisible ? "revealed" : ""}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Tertarik dengan Layanan Kami?
            </h2>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
              Hubungi kami sekarang untuk mendapatkan penawaran terbaik. Konsultasi gratis dan tanpa komitmen!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/6282196321203?text=Halo%20Tomi%20tomi,%20saya%20ingin%20konsultasi%20penyewaan%20alat%20acara"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white text-emerald-700 font-bold px-8 py-4 rounded-2xl shadow-lg hover:bg-emerald-50 transition-all active:scale-[0.97] text-base"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Hubungi via WhatsApp</span>
              </a>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 text-white font-semibold px-6 py-4 rounded-2xl border-2 border-white/30 hover:border-white/60 transition-all text-base"
              >
                <span>Lihat Kontak Lengkap</span>
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
