"use client";

import React from "react";
import {
  Tent,
  Layers,
  Armchair,
  Table,
  Zap,
  Wrench,
} from "lucide-react";
import { useData } from "@/context/DataContext";

export const ServicesSection: React.FC = () => {
  const { services } = useData();

  const getIconForTitle = (title: string) => {
    switch (title.toLowerCase()) {
      case "tenda":
        return Tent;
      case "panggung":
        return Layers;
      case "kursi":
        return Armchair;
      case "meja":
        return Table;
      case "genset":
        return Zap;
      default:
        return Wrench;
    }
  };

  return (
    <section id="produk" className="py-20 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Produk &amp; Layanan Penyewaan Utama
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Semua sarana perlengkapan pesta dalam satu tempat. Terawat, bersih,
            dan disiapkan oleh tim berpengalaman.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((cat, idx) => {
            const IconComp = getIconForTitle(cat.title);
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col space-y-5"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <IconComp className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Title & Desc */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    {cat.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Bullet List */}
                <ul className="space-y-2.5 pt-1">
                  {cat.features.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-center gap-2.5 text-sm font-semibold text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
