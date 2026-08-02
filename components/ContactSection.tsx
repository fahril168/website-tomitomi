"use client";

import React from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const ContactSection: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section id="kontak" className="py-20 bg-slate-50 relative">
      <div ref={sectionRef} className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">

        <div className={`text-center max-w-3xl mx-auto space-y-4 mb-14 reveal ${isVisible ? "revealed" : ""}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Hubungi &amp; Kunjungi Lokasi Kami
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Kami siap melayani kebutuhan penyewaan peralatan acara Anda di seluruh
            wilayah Jabodetabek &amp; sekitarnya.
          </p>
        </div>

        {/* Map & Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Google Map */}
          <div
            className={`lg:col-span-6 relative min-h-[380px] lg:min-h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 flex flex-col reveal-left ${isVisible ? "revealed" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            <iframe
              title="Lokasi Gudang Utama Tomi tomi"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d290.58065376976685!2d122.59218433138192!3d-5.47018342966803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1784707844468!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px", flex: 1 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            ></iframe>

            {/* Overlay Info Card on Map */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-200 space-y-3">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Gudang &amp; Kantor Utama Tomi tomi
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Lokasi Operasional Tomi tomi Event Equipment Rental
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=-5.47018342966803,122.59218433138192"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Buka di Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Cards Stack */}
          <div
            className={`lg:col-span-6 flex flex-col justify-between space-y-4 reveal-right ${isVisible ? "revealed" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Card 1: Alamat */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">Alamat</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Belakang SMP Negeri 4 Baubau, Tanganapada, Kec. Murhum, Kota Bau-Bau, Sulawesi Tenggara
                </p>
              </div>
            </div>

            {/* Card 2: Telepon */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">Telepon</h3>
                <p className="text-sm text-slate-700 font-semibold">
                  0821-9632-1203
                </p>
                <p className="text-sm text-slate-700 font-semibold">
                  0852-4159-0141
                </p>
              </div>
            </div>

            {/* Bottom Row Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href="https://wa.me/6282196321203?text=Halo%20Tomi%20tomi,%20saya%20ingin%20tanya%20penyewaan%20alat%20acara"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-semibold py-4 px-6 rounded-xl transition-all text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/tomitomi.project/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-semibold py-4 px-6 rounded-xl border border-slate-200 shadow-sm transition-all text-sm"
              >
                <Instagram className="w-5 h-5 text-pink-600" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
