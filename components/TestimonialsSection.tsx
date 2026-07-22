"use client";

import React from "react";
import { Sparkles, Star, Quote, CheckCircle2 } from "lucide-react";


interface Testimonial {
  name: string;
  role: string;
  eventType: string;
  avatarBg: string;
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
      avatarBg: "bg-emerald-600",
      initials: "DR",
      comment:
        "Tenda dekorasi juntai dan kursi tiffany-nya benar-benar di luar ekspektasi! Bersih sekali, harum, dan tim Tomi tomi pasang H-1 tanpa molor. Suasana pernikahan kami jadi kelihatan sangat mewah.",
      rating: 5,
    },
    {
      name: "Bpk. Haryono Putro",
      role: "Ketua Panitia Event",
      eventType: "Gathering Perusahaan PT Sinar Abadi",
      avatarBg: "bg-emerald-700",
      initials: "HP",
      comment:
        "Sangat terkesan dengan ketepatan waktu dan tim teknisnya. Kami sewa tenda roder, panggung, sound system 5.000W, dan genset silent. Selama acara outdoor 2 hari penuh tidak ada kendala sama sekali.",
      rating: 5,
    },
    {
      name: "Siska Wardhani",
      role: "Wedding Organizer (WO)",
      eventType: "Mitra Vendor Resepsi",
      avatarBg: "bg-emerald-800",
      initials: "SW",
      comment:
        "Sudah lebih dari 3 tahun langganan dengan Tomi tomi untuk event-event klien kami. Pelayanannya cepat, komunikasi ramah, barang selalu kinclong dan siap pakai. Sangat direkomendasikan!",
      rating: 5,
    },
    {
      name: "Maya Anggraini",
      role: "Penyelenggara Pesta",
      eventType: "Sweet 17th & Birthday Party",
      avatarBg: "bg-emerald-500",
      initials: "MA",
      comment:
        "Sewa organ tunggal, sound system, dan AC portable di Tomi tomi untuk acara ultah di halaman. Penyanyinya seru banget, tamu-tamu puas bisa bernyanyi bareng. Terima kasih Tomi tomi!",
      rating: 5,
    },
  ];

  return (
    <section id="testimoni" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Apa Kata Klien Setia Tomi tomi?
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Kepuasan dan kebahagiaan Anda di hari bahagia adalah prioritas utama
            seluruh tim kami.
          </p>
        </div>

        {/* Testimonials Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-emerald-100 group-hover:text-emerald-200 transition-colors pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                    5.0 Verified
                  </span>
                </div>

                <p className="text-slate-700 text-base italic leading-relaxed">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl ${item.avatarBg} text-white font-extrabold text-lg flex items-center justify-center shadow-md shrink-0`}
                >
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </h4>
                  <p className="text-xs text-emerald-700 font-semibold">
                    {item.role} &bull;{" "}
                    <span className="text-slate-500 font-normal">
                      {item.eventType}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Metric Banner */}
        <div className="mt-16 bg-white rounded-2xl p-6 border border-slate-200 text-center flex flex-wrap items-center justify-around gap-6 shadow-sm">
          <div>
            <span className="text-2xl font-extrabold text-emerald-600">99.8%</span>
            <span className="text-xs font-medium text-slate-500 block">
              Tingkat Kepuasan &amp; Repeat Order
            </span>
          </div>
          <div className="h-8 w-px bg-slate-200 hidden sm:block" />
          <div>
            <span className="text-2xl font-extrabold text-slate-900">500+</span>
            <span className="text-xs font-medium text-slate-500 block">
              Acara Pernikahan Rumah &amp; Gedung
            </span>
          </div>
          <div className="h-8 w-px bg-slate-200 hidden sm:block" />
          <div>
            <span className="text-2xl font-extrabold text-slate-900">300+</span>
            <span className="text-xs font-medium text-slate-500 block">
              Event Corporate &amp; Instansi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
