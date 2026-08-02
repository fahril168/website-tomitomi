"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Instagram,
  ExternalLink,
  ChevronDown,
  Mail,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden hover:border-emerald-200 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 text-slate-600 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
}

export default function KontakPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal();
  const { ref: mapRef, isVisible: mapVisible } = useScrollReveal();
  const { ref: faqRef, isVisible: faqVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  const contactCards = [
    {
      icon: MapPin,
      title: "Alamat Kantor & Gudang",
      lines: [
        "Belakang SMP Negeri 4 Baubau",
        "Tanganapada, Kec. Murhum",
        "Kota Bau-Bau, Sulawesi Tenggara",
      ],
      action: {
        href: "https://www.google.com/maps/search/?api=1&query=-5.47018342966803,122.59218433138192",
        label: "Buka di Google Maps",
        icon: ExternalLink,
      },
    },
    {
      icon: Phone,
      title: "Nomor Telepon",
      lines: ["0821-9632-1203 (WhatsApp)", "0852-4159-0141"],
      action: {
        href: "tel:+6282196321203",
        label: "Telepon Sekarang",
        icon: Phone,
      },
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      lines: [
        "Senin — Sabtu: 08:00 — 21:00 WITA",
        "Minggu: 09:00 — 18:00 WITA",
        "WhatsApp: 24/7 (fast response)",
      ],
      action: null,
    },
    {
      icon: Mail,
      title: "Email & Media Sosial",
      lines: ["tomitomi.project@gmail.com", "@tomitomi.project (Instagram)"],
      action: {
        href: "https://www.instagram.com/tomitomi.project/",
        label: "Kunjungi Instagram",
        icon: Instagram,
      },
    },
  ];

  const faqItems = [
    {
      question: "Berapa minimal waktu pemesanan sebelum acara?",
      answer:
        "Kami merekomendasikan pemesanan minimal 3-7 hari sebelum acara untuk memastikan ketersediaan peralatan. Namun untuk acara besar (pernikahan, festival), sebaiknya dipesan 2-4 minggu sebelumnya agar semua kebutuhan dapat dipersiapkan dengan sempurna.",
    },
    {
      question: "Apakah harga sudah termasuk pengiriman dan setup?",
      answer:
        "Ya, untuk area Kota Baubau dan sekitarnya, harga yang kami tawarkan sudah termasuk pengiriman, setup (pemasangan), dan pembongkaran setelah acara. Untuk lokasi di luar area layanan, akan dikenakan biaya tambahan transportasi yang disepakati bersama.",
    },
    {
      question: "Bagaimana sistem pembayarannya?",
      answer:
        "Sistem pembayaran kami fleksibel. Umumnya, DP (Down Payment) minimal 50% saat booking, dan pelunasan dilakukan setelah acara selesai dan peralatan dibongkar. Pembayaran bisa melalui transfer bank atau tunai.",
    },
    {
      question: "Apakah peralatan dijamin bersih dan layak pakai?",
      answer:
        "Tentu saja. Semua peralatan kami selalu dicuci, disterilkan, dan diperiksa kondisinya sebelum dikirim ke lokasi acara. Kami menjamin setiap unit peralatan dalam kondisi bersih, higienis, dan layak pakai. Jika ditemukan kerusakan saat setup, kami akan langsung mengganti.",
    },
    {
      question: "Apakah ada operator/teknisi yang standby saat acara?",
      answer:
        "Untuk penyewaan genset, sound system, dan lighting, kami menyertakan operator/teknisi berpengalaman yang standby selama acara berlangsung. Untuk peralatan lainnya, tim kami bisa diminta standby dengan biaya tambahan jika diperlukan.",
    },
    {
      question: "Apa saja area layanan Tomi tomi?",
      answer:
        "Layanan utama kami mencakup wilayah Kota Baubau dan sekitarnya di Sulawesi Tenggara. Namun kami juga melayani penyewaan untuk acara di luar kota dengan penyesuaian biaya transportasi. Hubungi kami untuk detail lebih lanjut.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/489574839_17847816063443677_7252592277985721862_n.png"
          alt="Hubungi Tomi tomi"
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
              <span className="text-white">Kontak</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Hubungi Kami
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl">
              Kami siap melayani kebutuhan penyewaan peralatan acara Anda. Jangan ragu untuk menghubungi!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-white">
        <div ref={infoRef} className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 reveal ${infoVisible ? "revealed" : ""}`}>
            {contactCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 space-y-4 group"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <card.icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                    {card.lines.map((line, lIdx) => (
                      <p key={lIdx} className="text-slate-600 text-sm sm:text-base">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                {card.action && (
                  <div className="pt-2">
                    <a
                      href={card.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all active:scale-[0.97]"
                    >
                      <card.action.icon className="w-4 h-4" />
                      <span>{card.action.label}</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Full Width */}
      <section className="py-0 bg-slate-50">
        <div ref={mapRef} className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-16">
          <div className={`space-y-6 reveal ${mapVisible ? "revealed" : ""}`}>
            <div className="text-center space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Lokasi Kami
              </h2>
              <p className="text-slate-500 text-base sm:text-lg">
                Kunjungi gudang dan kantor operasional Tomi tomi
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <iframe
                title="Lokasi Gudang Utama Tomi tomi"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d290.58065376976685!2d122.59218433138192!3d-5.47018342966803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1784707844468!5m2!1sid!2sid"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>

              {/* Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-slate-200 space-y-3">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Gudang &amp; Kantor Tomi tomi
                  </h4>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    Belakang SMP Negeri 4 Baubau, Tanganapada, Kec. Murhum, Kota Bau-Bau
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=-5.47018342966803,122.59218433138192"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Buka di Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div ref={faqRef} className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className={`reveal ${faqVisible ? "revealed" : ""}`}>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Pertanyaan Umum (FAQ)
              </h2>
              <p className="text-slate-500 text-base sm:text-lg">
                Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan penyewaan kami.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqItems.map((item, idx) => (
                <FAQItem key={idx} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.15),transparent_60%)]" />
        <div ref={ctaRef} className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center reveal ${ctaVisible ? "revealed" : ""}`}>
            <div className="space-y-5">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Siap Wujudkan Acara Impian Anda?
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Jangan ragu untuk menghubungi kami. Tim Tomi tomi siap membantu merencanakan dan menyediakan seluruh kebutuhan acara Anda dengan profesional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a
                href="https://wa.me/6282196321203?text=Halo%20Tomi%20tomi,%20saya%20ingin%20konsultasi%20penyewaan%20alat%20acara"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-emerald-600/20 transition-all active:scale-[0.97] text-base"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/tomitomi.project/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 text-white font-semibold px-8 py-4 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all text-base"
              >
                <Instagram className="w-5 h-5 text-pink-400" />
                <span>Follow Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
