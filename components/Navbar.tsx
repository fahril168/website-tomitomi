"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "./ui/Button";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Produk & Layanan", href: "/produk" },
    { name: "Kontak", href: "/kontak" },
  ];

  // On internal pages, navbar is always "scrolled" style (white bg)
  const showScrolledStyle = !isHome || isScrolled;

  return (
    <header
      className={`nav-enter fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showScrolledStyle
          ? "glass-nav py-4 shadow-sm border-b border-slate-200/60"
          : "bg-transparent py-6 md:py-7 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="Tomi tomi Logo"
              className="w-11 h-11 md:w-12 md:h-12 object-contain rounded-xl group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold tracking-tight leading-none transition-colors ${
                  showScrolledStyle ? "text-slate-900" : "text-white"
                }`}
              >
                Tomi <span className="text-emerald-400">tomi</span>
              </span>
              <span className="text-[10px] font-semibold text-emerald-400 tracking-wider uppercase mt-0.5">
                Event Equipment Rental
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-2 text-base xl:text-lg font-heading font-bold transition-colors duration-200 group ${
                    showScrolledStyle
                      ? isActive
                        ? "text-emerald-600"
                        : "text-slate-700 hover:text-emerald-600"
                      : isActive
                        ? "text-white"
                        : "text-slate-100 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ease-out ${
                      showScrolledStyle ? "bg-emerald-600" : "bg-emerald-400"
                    } ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
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
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                showScrolledStyle
                  ? "text-slate-700 hover:text-emerald-600 hover:bg-emerald-50"
                  : "text-white hover:bg-white/10"
              }`}
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mobile-menu-enter bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 text-lg font-bold transition-all border-b border-slate-100 flex items-center justify-between ${
                    isActive
                      ? "text-emerald-600 border-b-2 border-b-emerald-600"
                      : "text-slate-800 hover:text-emerald-600"
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}
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
