"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Tent,
  Layers,
  Armchair,
  Table as TableIcon,
  Zap,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import { useData } from "@/context/DataContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const PricingSection: React.FC = () => {
  const { priceItems } = useData();
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const categories = [
    { name: "Semua", icon: LayoutGrid },
    { name: "Tenda", icon: Tent },
    { name: "Dekorasi & Pelengkap", icon: Sparkles },
    { name: "Panggung", icon: Layers },
    { name: "Kursi", icon: Armchair },
    { name: "Meja", icon: TableIcon },
    { name: "Elektronik & Genset", icon: Zap },
  ];

  // Filter logic
  const filteredData = useMemo(() => {
    return priceItems.filter((item) => {
      const matchesCategory =
        activeCategory === "Semua" || item.category === activeCategory;
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [priceItems, activeCategory, searchQuery]);

  // Format currency
  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID").format(num);
  };

  return (
    <section id="harga" className="py-20 bg-slate-50 relative">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto space-y-4 mb-10 reveal ${isVisible ? "revealed" : ""}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Tabel Harga Penyewaan Alat Acara
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Kami selalu memberikan harga terbaik dan transparan untuk Anda.
            Hubungi kami untuk penawaran khusus dan potongan volume besar.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className={`space-y-6 mb-8 reveal ${isVisible ? "revealed" : ""}`} style={{ transitionDelay: "100ms" }}>
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 border ${
                    isActive
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200"
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama barang (misal: Tenda Slayer, Kursi Tiffany, Genset)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm shadow-sm transition-shadow"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-1 rounded-md transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Interactive Price Table */}
        <div className={`bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden reveal-scale ${isVisible ? "revealed" : ""}`} style={{ transitionDelay: "200ms" }}>
          <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
            <table className="w-full text-left border-collapse">
              {/* Table Header — solid dark, no gradient */}
              <thead>
                <tr className="bg-emerald-700 text-white text-xs sm:text-sm uppercase tracking-wider sticky top-0 z-10">
                  <th className="py-4 px-4 sm:px-6 font-semibold w-16 text-center hidden sm:table-cell">No</th>
                  <th className="py-4 px-6 font-semibold">Nama Barang</th>
                  <th className="py-4 px-6 font-semibold text-center hidden sm:table-cell">Kategori</th>
                  <th className="py-4 px-6 font-semibold text-right">Harga (Rp)</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr
                      key={item.id}
                      className="hover:bg-emerald-50/50 transition-colors group"
                    >
                      {/* No */}
                      <td className="py-3.5 px-4 sm:px-6 text-center font-medium text-slate-400 group-hover:text-emerald-700 hidden sm:table-cell">
                        {index + 1}
                      </td>

                      {/* Nama Barang */}
                      <td className="py-3.5 px-6 font-semibold text-slate-900 group-hover:text-slate-900 transition-colors">
                        {item.name}
                      </td>

                      {/* Kategori Badge */}
                      <td className="py-3.5 px-6 text-center hidden sm:table-cell">
                        <span className="inline-block px-2.5 py-0.5 bg-emerald-50 text-emerald-800 rounded-md text-xs font-medium">
                          {item.category}
                        </span>
                      </td>

                      {/* Harga (Rp) */}
                      <td className="py-3.5 px-6 text-right font-bold text-emerald-600 text-base">
                        {formatRupiah(item.price)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-12 text-center text-slate-500">
                      <p className="text-base font-medium text-slate-700">
                        Tidak ada barang yang cocok dengan pencarian &ldquo;{searchQuery}&rdquo;
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Coba kata kunci lain atau pilih kategori &ldquo;Semua&rdquo;
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer Note Inside Table */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 text-xs text-slate-500 text-center sm:text-left">
            <span>
              *Harga dapat berubah sewaktu-waktu sesuai lokasi pengiriman &amp; durasi sewa.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
