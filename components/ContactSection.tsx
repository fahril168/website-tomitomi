"use client";

import React from "react";
import {
  Sparkles,
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  ExternalLink,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section id="kontak" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hubungi &amp; Kunjungi Lokasi Kami
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Kami siap melayani kebutuhan penyewaan peralatan acara Anda di seluruh
            wilayah Jabodetabek &amp; sekitarnya.
          </p>
        </div>

        {/* Map & Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Google Map Frame */}
          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[420px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex flex-col">
            {/* Google Map iframe embed */}
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

            {/* Overlay Info Card on Map (Top Left) */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200 space-y-3">
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">
                  Gudang &amp; Kantor Utama Tomi tomi
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Lokasi Operasional Tomi tomi Event Equipment Rental
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=-5.47018342966803,122.59218433138192"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-md"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Buka di Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Cards Stack */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
            {/* Card 1: Alamat */}
            <div className="bg-slate-50/80 p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">Alamat</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Belakang SMP Negeri 4 Baubau, Tanganapada, Kec. Murhum, Kota Bau-Bau, Sulawesi Tenggara
                </p>
              </div>
            </div>

            {/* Card 2: Telepon */}
            <div className="bg-slate-50/80 p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">Telepon</h3>
                <p className="text-sm text-slate-700 font-bold">
                  0821-9632-1203
                </p>
                <p className="text-sm text-slate-700 font-bold">
                  0852-4159-0141
                </p>
              </div>
            </div>

            {/* Bottom Row Action Buttons: WhatsApp & `Fa`cebook */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href="https://wa.me/6282196321203?text=Halo%20Tomi%20tomi,%20saya%20ingin%20tanya%20penyewaan%20alat%20acara"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-emerald-600/20 transition-all text-sm"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/tomitomi.project/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold py-4 px-6 rounded-2xl border border-slate-300 shadow-sm transition-all text-sm"
              >
                <Instagram className="w-5 h-5 text-pink-600 fill-pink-600/10" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
