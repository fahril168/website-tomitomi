"use client";

import React from "react";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5 fill-white/20" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Tomi <span className="text-emerald-500">tomi</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Mitra penyewaan perlengkapan acara dan pesta terpercaya. Menyediakan tenda, panggung, tempat duduk, sound system, lighting, organ tunggal, hingga generator power dengan jaminan bersih, higienis, dan tepat waktu.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400 flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400 flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400 flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400 flex items-center justify-center text-slate-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#hero" className="hover:text-emerald-400 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:text-emerald-400 transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-emerald-400 transition-colors">
                  Katalog Produk
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-emerald-400 transition-colors">
                  Daftar Harga
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-emerald-400 transition-colors">
                  Testimoni Klien
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-emerald-400 transition-colors">
                  Hubungi &amp; Lokasi
                </a>
              </li>
              <li>
                <a href="/admin" className="text-emerald-400 font-bold hover:underline">
                  Dashboard Admin CMS
                </a>
              </li>
            </ul>
          </div>

          {/* Services Offered */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Layanan Utama
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Tenda Roder &amp; Semi Dekorasi VIP</li>
              <li>Kursi Futura, Tiffany &amp; Meja Bulat</li>
              <li>Panggung Modul &amp; Flooring Carpet</li>
              <li>Sound System Digital &amp; Stage Lighting</li>
              <li>Pemain Organ / Live Music Entertainment</li>
              <li>AC Portable Standing &amp; Genset Silent</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Kontak Layanan
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span>Jl. Raya Utama No. 88, Jakarta &amp; Sekitarnya</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>0812-3456-7890 (WhatsApp 24/7)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>info@tomitomi-rental.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; 2026 Tomi tomi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 transition-colors">
              Kebijakan Privasi
            </span>
            <span className="hover:text-slate-300 transition-colors">
              Syarat &amp; Ketentuan
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <span>Kembali Ke Atas</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
