"use client";

import React, { useState, useMemo } from "react";
import {
  Sparkles,
  Search,
  Tent,
  Layers,
  Armchair,
  Table as TableIcon,
  Zap,
  LayoutGrid,
  ChevronRight,
} from "lucide-react";
import { useData } from "@/context/DataContext";

export const PricingSection: React.FC = () => {
  const { priceItems } = useData();
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

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
    <section id="harga" className="py-20 bg-emerald-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tabel Harga Penyewaan Alat Acara
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Kami selalu memberikan harga terbaik dan transparan untuk Anda.
            Hubungi kami untuk penawaran khusus dan potongan volume besar.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-6 mb-8">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${isActive
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20 scale-105"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200"
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
              className="w-full pl-11 pr-4 py-3 bg-white text-slate-900 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Interactive Price Table */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
            <table className="w-full text-left border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-600 text-white text-xs sm:text-sm uppercase tracking-wider sticky top-0 z-10">
                  <th className="py-4 px-4 sm:px-6 font-bold w-16 text-center">No</th>
                  <th className="py-4 px-6 font-bold">Nama Barang</th>
                  <th className="py-4 px-6 font-bold text-center">Kategori</th>
                  <th className="py-4 px-6 font-bold text-right">Harga (Rp)</th>
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
                      <td className="py-4 px-4 sm:px-6 text-center font-medium text-slate-400 group-hover:text-emerald-700">
                        {index + 1}
                      </td>

                      {/* Nama Barang */}
                      <td className="py-4 px-6 font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {item.name}
                      </td>

                      {/* Kategori Badge */}
                      <td className="py-4 px-6 text-center">
                        <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200/80 rounded-full text-xs font-semibold">
                          {item.category}
                        </span>
                      </td>

                      {/* Harga (Rp) */}
                      <td className="py-4 px-6 text-right font-extrabold text-emerald-600 text-base sm:text-lg">
                        {formatRupiah(item.price)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-12 text-center text-slate-500">
                      <p className="text-base font-semibold text-slate-700">
                        Tidak ada barang yang cocok dengan pencarian "{searchQuery}"
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Coba kata kunci lain atau pilih kategori "Semua"
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer Note Inside Table */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <span>
              *Harga dapat berubah sewaktu-waktu sesuai lokasi pengiriman &amp; durasi sewa.
            </span>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Tomi%20tomi,%20saya%20ingin%20minta%20penawaran%20harga%20diskon%20volume%20banyak"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-700 hover:underline inline-flex items-center gap-1 shrink-0"
            >
              <span>Minta Penawaran Khusus (Volume Besar)</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
