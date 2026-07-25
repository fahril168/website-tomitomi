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
import { useStaggerReveal } from "@/hooks/useScrollReveal";

export const ServicesSection: React.FC = () => {
  const { services } = useData();
  const { ref, isVisible, getDelay } = useStaggerReveal(services.length, 100);

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
    <section id="produk" className="py-20 bg-white relative">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto space-y-4 mb-16 reveal ${isVisible ? "revealed" : ""}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Produk &amp; Layanan Penyewaan Utama
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Semua sarana perlengkapan pesta dalam satu tempat. Terawat, bersih,
            dan disiapkan oleh tim berpengalaman.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((cat, idx) => {
            const IconComp = getIconForTitle(cat.title);
            return (
              <div
                key={idx}
                className={`bg-white p-7 rounded-2xl border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-5 group reveal ${isVisible ? "revealed" : ""}`}
                style={getDelay(idx)}
              >
                {/* Icon Box */}
                <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:bg-emerald-700 transition-colors duration-300">
                  <IconComp className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Title & Desc */}
                <div className="space-y-2.5">
                  <h3 className="text-lg font-bold text-slate-900">
                    {cat.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Bullet List */}
                <ul className="space-y-2 pt-1">
                  {cat.features.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-center gap-2.5 text-sm font-medium text-slate-600"
                    >
                      <span className="w-1 h-1 rounded-full bg-emerald-600 shrink-0" />
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
