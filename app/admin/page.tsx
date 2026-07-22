"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Plus,
  Pencil,
  Trash2,
  Search,
  ExternalLink,
  RotateCcw,
  LayoutGrid,
  FileSpreadsheet,
  Package,
  CheckCircle2,
  X,
  Save,
  ArrowLeft,
  DollarSign,
  Image as ImageIcon,
  Tent,
  Layers,
  Armchair,
  Table,
  Zap,
  Wrench,
} from "lucide-react";
import { useData, PriceItem, ServiceItem, GalleryItem } from "@/context/DataContext";

import { Sidebar } from "@/components/admin/Sidebar";

export default function AdminDashboard() {
  const {
    priceItems,
    services,
    galleryItems,
    addPriceItem,
    updatePriceItem,
    deletePriceItem,
    resetPriceData,
    addServiceItem,
    updateServiceItem,
    deleteServiceItem,
    resetServiceData,
    addGalleryItem,
    updateGalleryItem,
    deleteGalleryItem,
    resetGalleryData,
  } = useData();

  const [activeTab, setActiveTab] = useState<"overview" | "harga" | "produk" | "galeri">("harga");
  const [searchPrice, setSearchPrice] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Semua");

  // Gallery Modal States
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [editingGalleryItem, setEditingGalleryItem] = useState<GalleryItem | null>(null);
  const [galleryForm, setGalleryForm] = useState<{
    src: string;
    title: string;
    desc: string;
  }>({
    src: "",
    title: "",
    desc: "",
  });

  // Price Modal States
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
  const [editingPriceItem, setEditingPriceItem] = useState<PriceItem | null>(null);
  const [priceForm, setPriceForm] = useState<{
    name: string;
    category: PriceItem["category"];
    unit: string;
    price: number;
  }>({
    name: "",
    category: "Tenda",
    unit: "m²",
    price: 0,
  });

  // Service Modal States
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [editingServiceItem, setEditingServiceItem] = useState<ServiceItem | null>(null);
  const [serviceForm, setServiceForm] = useState<{
    title: string;
    subtitle: string;
    category: string;
    image: string;
    description: string;
    features: string;
    popularSpecs: string;
  }>({
    title: "",
    subtitle: "",
    category: "Infrastruktur Acara",
    image: "",
    description: "",
    features: "",
    popularSpecs: "",
  });

  // Filtered prices
  const filteredPrices = priceItems.filter((item) => {
    const matchCat = categoryFilter === "Semua" || item.category === categoryFilter;
    const matchSearch = item.name.toLowerCase().includes(searchPrice.toLowerCase());
    return matchCat && matchSearch;
  });

  // Handle Open Price Modal
  const handleOpenPriceModal = (item?: PriceItem) => {
    if (item) {
      setEditingPriceItem(item);
      setPriceForm({
        name: item.name,
        category: item.category,
        unit: item.unit,
        price: item.price,
      });
    } else {
      setEditingPriceItem(null);
      setPriceForm({
        name: "",
        category: "Tenda",
        unit: "m²",
        price: 0,
      });
    }
    setIsPriceModalOpen(true);
  };

  // Handle Save Price Item
  const handleSavePrice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!priceForm.name || priceForm.price <= 0) {
      alert("Mohon isi nama barang dan harga dengan benar.");
      return;
    }

    if (editingPriceItem) {
      updatePriceItem(editingPriceItem.id, priceForm);
    } else {
      addPriceItem(priceForm);
    }

    setIsPriceModalOpen(false);
  };

  // Handle Open Service Modal
  const handleOpenServiceModal = (item?: ServiceItem) => {
    if (item) {
      setEditingServiceItem(item);
      setServiceForm({
        title: item.title,
        subtitle: item.subtitle,
        category: item.category,
        image: item.image,
        description: item.description,
        features: item.features.join("\n"),
        popularSpecs: item.popularSpecs,
      });
    } else {
      setEditingServiceItem(null);
      setServiceForm({
        title: "",
        subtitle: "",
        category: "Infrastruktur Acara",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
        description: "",
        features: "",
        popularSpecs: "",
      });
    }
    setIsServiceModalOpen(true);
  };

  // Handle Save Service Item
  const handleSaveService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceForm.title || !serviceForm.description) {
      alert("Mohon isi Judul dan Deskripsi produk layanan.");
      return;
    }

    const featureArray = serviceForm.features
      .split("\n")
      .map((f) => f.trim())
      .filter((f) => f.length > 0);

    const payload = {
      title: serviceForm.title,
      subtitle: serviceForm.subtitle,
      category: serviceForm.category,
      image: serviceForm.image || "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
      description: serviceForm.description,
      features: featureArray,
      popularSpecs: serviceForm.popularSpecs,
    };

    if (editingServiceItem) {
      updateServiceItem(editingServiceItem.id, payload);
    } else {
      addServiceItem(payload);
    }

    setIsServiceModalOpen(false);
  };

  // Handle Open Gallery Modal
  const handleOpenGalleryModal = (item?: GalleryItem) => {
    if (item) {
      setEditingGalleryItem(item);
      setGalleryForm({
        src: item.src,
        title: item.title,
        desc: item.desc,
      });
    } else {
      setEditingGalleryItem(null);
      setGalleryForm({
        src: "",
        title: "",
        desc: "",
      });
    }
    setIsGalleryModalOpen(true);
  };

  // Handle Save Gallery Item
  const handleSaveGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!galleryForm.src || !galleryForm.title) {
      alert("Mohon isi Judul dan URL/Path Gambar.");
      return;
    }

    if (editingGalleryItem) {
      updateGalleryItem(editingGalleryItem.id, galleryForm);
    } else {
      addGalleryItem(galleryForm);
    }

    setIsGalleryModalOpen(false);
  };

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

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID").format(num);
  };

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans text-slate-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col pb-16">
        {/* Top Admin Navigation Bar */}
        <header className="bg-slate-900 text-white sticky top-0 z-40 shadow-lg border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5 fill-white/20" />
              </div>
              <div>
                <h1 className="text-lg font-extrabold tracking-tight">
                  Tomi <span className="text-emerald-400">tomi</span> CMS
                </h1>
                <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
                  Admin Panel Control Center
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Synced with Website
              </span>

              <Link
                href="/"
                target="_blank"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-md"
              >
                <span>Website Utama</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </header>

        {/* Main Admin Content Container */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* TAB 1: KELOLA DAFTAR HARGA */}
        {activeTab === "harga" && (
          <div className="space-y-6 animate-fade-in">
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Cari barang sewa..."
                    value={searchPrice}
                    onChange={(e) => setSearchPrice(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-3.5 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Semua">Semua Kategori</option>
                  <option value="Tenda">Tenda</option>
                  <option value="Dekorasi & Pelengkap">Dekorasi &amp; Pelengkap</option>
                  <option value="Panggung">Panggung</option>
                  <option value="Kursi">Kursi</option>
                  <option value="Meja">Meja</option>
                  <option value="Elektronik & Genset">Elektronik &amp; Genset</option>
                </select>
              </div>

              <button
                onClick={() => handleOpenPriceModal()}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-md transition-all shrink-0"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Tambah Barang Baru</span>
              </button>
            </div>

            {/* Price Table Card */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
              <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider sticky top-0 z-10">
                      <th className="py-4 px-4 font-bold text-center w-12">No</th>
                      <th className="py-4 px-6 font-bold">Nama Barang</th>
                      <th className="py-4 px-6 font-bold text-center">Kategori</th>
                      <th className="py-4 px-6 font-bold text-center">Satuan</th>
                      <th className="py-4 px-6 font-bold text-right">Harga (Rp)</th>
                      <th className="py-4 px-6 font-bold text-center w-32">Aksi CMS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                    {filteredPrices.length > 0 ? (
                      filteredPrices.map((item, idx) => (
                        <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                          <td className="py-3.5 px-4 text-center font-medium text-slate-400">
                            {idx + 1}
                          </td>
                          <td className="py-3.5 px-6 font-bold text-slate-900">
                            {item.name}
                          </td>
                          <td className="py-3.5 px-6 text-center">
                            <span className="inline-block px-3 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200/80 rounded-full text-xs font-semibold">
                              {item.category}
                            </span>
                          </td>
                          <td className="py-3.5 px-6 text-center text-slate-500 font-medium">
                            {item.unit}
                          </td>
                          <td className="py-3.5 px-6 text-right font-extrabold text-emerald-600">
                            {formatRupiah(item.price)}
                          </td>
                          <td className="py-3.5 px-6 text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              <button
                                onClick={() => handleOpenPriceModal(item)}
                                className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                                title="Edit Barang"
                              >
                                <Pencil className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => {
                                  if (confirm(`Yakin hapus "${item.name}" dari daftar harga?`)) {
                                    deletePriceItem(item.id);
                                  }
                                }}
                                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                                title="Hapus Barang"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-slate-400">
                          Tidak ada barang ditemukan.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: KELOLA PRODUK & LAYANAN */}
        {activeTab === "produk" && (
          <div className="space-y-6 animate-fade-in">
            {/* Header Action */}
            <div className="flex items-center justify-between bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Daftar Produk &amp; Kartu Layanan Catalog
                </h2>
                <p className="text-xs text-slate-500">
                  Perubahan nama, deskripsi, gambar, &amp; fitur di sini akan langsung tampil pada website utama.
                </p>
              </div>

              <button
                onClick={() => handleOpenServiceModal()}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-md transition-all shrink-0"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Tambah Layanan Baru</span>
              </button>
            </div>

            {/* Product Services Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item) => {
                const IconComp = getIconForTitle(item.title);
                return (
                  <div
                    key={item.id}
                    className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5"
                  >
                    <div className="space-y-4">
                      {/* Icon Box */}
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                        <IconComp className="w-6 h-6 stroke-[2]" />
                      </div>

                      {/* Title & Desc */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-slate-900 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>

                      {/* Bullet List */}
                      <ul className="space-y-1.5 pt-1">
                        {item.features.map((feat, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => handleOpenServiceModal(item)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-3.5 py-2 rounded-xl transition-colors"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                        <span>Edit Layanan</span>
                      </button>

                      <button
                        onClick={() => {
                          if (confirm(`Yakin hapus produk layanan "${item.title}"?`)) {
                            deleteServiceItem(item.id);
                          }
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-800 p-2 rounded-xl hover:bg-rose-50 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Hapus</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: OVERVIEW & STATS */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-fade-in">
            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <FileSpreadsheet className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900">
                    {priceItems.length}
                  </div>
                  <div className="text-xs text-slate-500 font-semibold mt-0.5">
                    Total Item Barang Sewa
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Package className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900">
                    {services.length}
                  </div>
                  <div className="text-xs text-slate-500 font-semibold mt-0.5">
                    Kartu Produk &amp; Layanan
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <ImageIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900">
                    {galleryItems.length}
                  </div>
                  <div className="text-xs text-slate-500 font-semibold mt-0.5">
                    Foto Galeri Aktif
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-emerald-600">
                    6
                  </div>
                  <div className="text-xs text-slate-500 font-semibold mt-0.5">
                    Kategori Utama Aktif
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Guidance Box */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span>Panduan Penggunaan CMS Tomi tomi</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
                Setiap perubahan yang Anda lakukan di dashboard admin ini (menambah barang, mengubah harga, memperbarui deskripsi atau gambar produk, mengelola galeri) secara otomatis tersimpan dan sinkron langsung dengan halaman utama website penyewaan.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setActiveTab("harga")}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
                >
                  Mulai Kelola Harga
                </button>
                <button
                  onClick={() => setActiveTab("produk")}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
                >
                  Mulai Kelola Produk
                </button>
                <button
                  onClick={() => setActiveTab("galeri")}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
                >
                  Mulai Kelola Galeri
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: KELOLA GALERI */}
        {activeTab === "galeri" && (
          <div className="space-y-6 animate-fade-in">
            {/* Header Action */}
            <div className="flex items-center justify-between bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Daftar Foto Galeri Perlengkapan
                </h2>
                <p className="text-xs text-slate-500">
                  Perubahan foto, judul, &amp; penjelasan di sini akan langsung tampil pada slideshow halaman utama.
                </p>
              </div>

              <button
                onClick={() => handleOpenGalleryModal()}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-md transition-all shrink-0"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Tambah Foto Baru</span>
              </button>
            </div>

            {/* Gallery Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Image Preview */}
                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-5 space-y-2">
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => handleOpenGalleryModal(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-3.5 py-2 rounded-xl transition-colors"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                      <span>Edit Info</span>
                    </button>

                    <button
                      onClick={() => {
                        if (confirm(`Yakin hapus foto "${item.title}" dari galeri?`)) {
                          deleteGalleryItem(item.id);
                        }
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-800 p-2 rounded-xl hover:bg-rose-50 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Hapus</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* MODAL 1: EDIT / ADD PRICE ITEM */}
      {isPriceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative space-y-5">
            <button
              onClick={() => setIsPriceModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-xl font-extrabold text-slate-900">
                {editingPriceItem ? "Edit Barang Sewa" : "Tambah Barang Sewa Baru"}
              </h3>
              <p className="text-xs text-slate-500">
                Isi rincian barang sewa di bawah ini.
              </p>
            </div>

            <form onSubmit={handleSavePrice} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Nama Barang <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Tenda Roder 15m"
                  value={priceForm.name}
                  onChange={(e) => setPriceForm({ ...priceForm, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Kategori
                </label>
                <select
                  value={priceForm.category}
                  onChange={(e) =>
                    setPriceForm({
                      ...priceForm,
                      category: e.target.value as PriceItem["category"],
                    })
                  }
                  className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium"
                >
                  <option value="Tenda">Tenda</option>
                  <option value="Dekorasi & Pelengkap">Dekorasi &amp; Pelengkap</option>
                  <option value="Panggung">Panggung</option>
                  <option value="Kursi">Kursi</option>
                  <option value="Meja">Meja</option>
                  <option value="Elektronik & Genset">Elektronik &amp; Genset</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Satuan
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="m², Unit, Set, Hari"
                    value={priceForm.unit}
                    onChange={(e) => setPriceForm({ ...priceForm, unit: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Harga (Rp) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    min={0}
                    placeholder="25000"
                    value={priceForm.price || ""}
                    onChange={(e) =>
                      setPriceForm({ ...priceForm, price: Number(e.target.value) })
                    }
                    className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bold text-emerald-700"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsPriceModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Perubahan</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: EDIT / ADD SERVICE ITEM */}
      {isServiceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative space-y-5 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsServiceModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-xl font-extrabold text-slate-900">
                {editingServiceItem ? "Edit Kartu Layanan Produk" : "Tambah Produk Layanan Baru"}
              </h3>
              <p className="text-xs text-slate-500">
                Ubah informasi gambar, judul, deskripsi, &amp; fitur pendukung.
              </p>
            </div>

            <form onSubmit={handleSaveService} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Judul Utama Layanan <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Tenda Dekorasi & Tenda Roder"
                  value={serviceForm.title}
                  onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Subjudul / Keterangan Singkat
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Tenda Pernikahan & Pameran"
                    value={serviceForm.subtitle}
                    onChange={(e) =>
                      setServiceForm({ ...serviceForm, subtitle: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Label Kategori
                  </label>
                  <input
                    type="text"
                    placeholder="Infrastruktur Acara"
                    value={serviceForm.category}
                    onChange={(e) =>
                      setServiceForm({ ...serviceForm, category: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  URL / Path Gambar <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <ImageIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="/images/tenda.png atau URL Unsplash"
                    value={serviceForm.image}
                    onChange={(e) =>
                      setServiceForm({ ...serviceForm, image: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Deskripsi Lengkap <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Jelaskan spesifikasi dan keunggulan unit..."
                  value={serviceForm.description}
                  onChange={(e) =>
                    setServiceForm({ ...serviceForm, description: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Poin Fitur Utama (Pisahkan dengan Baris Baru)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tenda Roder bentang 10m&#10;Tenda Dekorasi VIP&#10;Bahan kedap air"
                  value={serviceForm.features}
                  onChange={(e) =>
                    setServiceForm({ ...serviceForm, features: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-mono"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Catatan Spesifikasi Populer
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Tersedia modul custom sesuai ukuran lahan Anda."
                  value={serviceForm.popularSpecs}
                  onChange={(e) =>
                    setServiceForm({ ...serviceForm, popularSpecs: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsServiceModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Layanan</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: EDIT / ADD GALLERY ITEM */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative space-y-5">
            <button
              onClick={() => setIsGalleryModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-xl font-extrabold text-slate-900">
                {editingGalleryItem ? "Edit Foto Galeri" : "Tambah Foto Galeri Baru"}
              </h3>
              <p className="text-xs text-slate-500">
                Ubah informasi gambar, judul, &amp; penjelasan singkat.
              </p>
            </div>

            <form onSubmit={handleSaveGallery} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Judul Foto <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Dekorasi Pelaminan VIP"
                  value={galleryForm.title}
                  onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  URL / Path Gambar <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <ImageIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Contoh: /images/foto1.png"
                    value={galleryForm.src}
                    onChange={(e) => setGalleryForm({ ...galleryForm, src: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Deskripsi / Penjelasan Singkat
                </label>
                <textarea
                  rows={3}
                  placeholder="Jelaskan secara singkat suasana atau unit alat dalam foto..."
                  value={galleryForm.desc}
                  onChange={(e) => setGalleryForm({ ...galleryForm, desc: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsGalleryModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Foto</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
