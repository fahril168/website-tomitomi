"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "./ui/Button";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang Kami", href: "#tentang-kami" },
    { name: "Produk & Layanan", href: "#produk" },
    { name: "Daftar Harga", href: "#harga" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <header
      className={`nav-enter fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-sm border-b border-slate-200/60"
          : "bg-white/80 backdrop-blur-md py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center gap-2 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="Tomi tomi Logo"
              className="w-10 h-10 object-contain rounded-xl group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                Tomi <span className="text-emerald-600">tomi</span>
              </span>
              <span className="text-[10px] font-semibold text-emerald-600 tracking-wider uppercase mt-0.5">
                Event Equipment Rental
              </span>
            </div>
          </a>

          {/* Desktop Navigation — pill style */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="https://wa.me/6282196321203?text=Halo%20Tomi%20tomi,%20saya%20ingin%20konsultasi%20penyewaan%20alat%20acara"
              variant="primary"
              size="sm"
              icon={PhoneCall}
            >
              0821-9632-1203
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://wa.me/6282196321203?text=Halo%20Tomi%20tomi,%20saya%20ingin%20konsultasi%20penyewaan%20alat%20acara"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden text-xs bg-emerald-600 text-white font-semibold px-3 py-1.5 rounded-lg"
            >
              Hubungi
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer — animated */}
      {mobileMenuOpen && (
        <div className="lg:hidden mobile-menu-enter bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <Button
                href="https://wa.me/6282196321203?text=Halo%20Tomi%20tomi,%20saya%20ingin%20konsultasi%20penyewaan%20alat%20acara"
                variant="primary"
                size="md"
                icon={PhoneCall}
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                0821-9632-1203
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
