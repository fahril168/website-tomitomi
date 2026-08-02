"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { useStaggerReveal, useScrollReveal } from "@/hooks/useScrollReveal";

interface Testimonial {
  name: string;
  role: string;
  eventType: string;
  initials: string;
  comment: string;
  rating: number;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Dian & Rizky",
      role: "Pasangan Pengantin",
      eventType: "Pernikahan Rumah VIP",
      initials: "DR",
      comment:
        "Tenda dekorasi juntai dan kursi tiffany-nya benar-benar di luar ekspektasi! Bersih sekali, harum, dan tim Tomi tomi pasang H-1 tanpa molor. Suasana pernikahan kami jadi kelihatan sangat mewah.",
      rating: 5,
    },
    {
      name: "Bpk. Haryono Putro",
      role: "Ketua Panitia Event",
      eventType: "Gathering Perusahaan PT Sinar Abadi",
      initials: "HP",
      comment:
        "Sangat terkesan dengan ketepatan waktu dan tim teknisnya. Kami sewa tenda roder, panggung, sound system 5.000W, dan genset silent. Selama acara outdoor 2 hari penuh tidak ada kendala sama sekali.",
      rating: 5,
    },
    {
      name: "Siska Wardhani",
      role: "Wedding Organizer (WO)",
      eventType: "Mitra Vendor Resepsi",
      initials: "SW",
      comment:
        "Sudah lebih dari 3 tahun langganan dengan Tomi tomi untuk event-event klien kami. Pelayanannya cepat, komunikasi ramah, barang selalu kinclong dan siap pakai. Sangat direkomendasikan!",
      rating: 5,
    },
    {
      name: "Maya Anggraini",
      role: "Penyelenggara Pesta",
      eventType: "Sweet 17th & Birthday Party",
      initials: "MA",
      comment:
        "Sewa organ tunggal, sound system, dan AC portable di Tomi tomi untuk acara ultah di halaman. Penyanyinya seru banget, tamu-tamu puas bisa bernyanyi bareng. Terima kasih Tomi tomi!",
      rating: 5,
    },
  ];

  const { ref: cardsRef, isVisible: cardsVisible, getDelay } = useStaggerReveal(testimonials.length, 120);
  const { ref: bannerRef, isVisible: bannerVisible } = useScrollReveal();

  return (
    <section id="testimoni" className="py-24 relative overflow-hidden">
      {/* Fixed Background Image for Entire Section */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/488613742_17847813165443677_8703584701075085170_n.png')" }}
      />
      {/* Dark Overlay over the section */}
      <div className="absolute inset-0 z-0 bg-slate-950/90" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">

        <div ref={cardsRef} className={`text-center max-w-3xl mx-auto space-y-4 mb-16 reveal ${cardsVisible ? "revealed" : ""}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Apa Kata Klien Setia Tomi tomi?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Kepuasan dan kebahagiaan Anda di hari bahagia adalah prioritas utama
            seluruh tim kami.
          </p>
        </div>

        {/* Testimonials Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white/95 backdrop-blur-md p-7 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group reveal ${cardsVisible ? "revealed" : ""}`}
              style={getDelay(idx)}
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-slate-200 group-hover:text-slate-300 transition-colors pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Rating stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ml-2 text-xs font-medium text-slate-500">
                    5.0
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/30"
                >
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </h4>
                  <p className="text-xs text-slate-500">
                    {item.role} &bull;{" "}
                    <span className="text-slate-400">
                      {item.eventType}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Metric Green Banner */}
        <div
          ref={bannerRef}
          className={`mt-14 bg-emerald-900 text-white rounded-2xl p-6 sm:p-8 text-center flex flex-wrap items-center justify-around gap-6 shadow-xl border border-emerald-700/50 reveal-scale ${bannerVisible ? "revealed" : ""}`}
        >
          <div>
            <span className="text-2xl sm:text-3xl font-bold text-emerald-400">99.8%</span>
            <span className="text-xs font-medium text-emerald-100 block mt-1">
              Tingkat Kepuasan &amp; Repeat Order
            </span>
          </div>
          <div className="h-8 w-px bg-emerald-700/60 hidden sm:block" />
          <div>
            <span className="text-2xl sm:text-3xl font-bold text-white">500+</span>
            <span className="text-xs font-medium text-emerald-100 block mt-1">
              Acara Pernikahan Rumah &amp; Gedung
            </span>
          </div>
          <div className="h-8 w-px bg-emerald-700/60 hidden sm:block" />
          <div>
            <span className="text-2xl sm:text-3xl font-bold text-white">300+</span>
            <span className="text-xs font-medium text-emerald-100 block mt-1">
              Event Corporate &amp; Instansi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
