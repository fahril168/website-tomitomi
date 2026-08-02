"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  Plus,
  Pencil,
  Trash2,
  ExternalLink,
  RotateCcw,
  Package,
  CheckCircle2,
  X,
  Save,
  ArrowLeft,
  Image as ImageIcon,
  Lock,
  User,
  LogOut,
} from "lucide-react";
import { useData, ServiceItem, GalleryItem } from "@/context/DataContext";

import { Sidebar } from "@/components/admin/Sidebar";

export default function AdminDashboard() {
  const {
    services,
    galleryItems,
    addServiceItem,
    updateServiceItem,
    deleteServiceItem,
    resetServiceData,
    addGalleryItem,
    updateGalleryItem,
    deleteGalleryItem,
    resetGalleryData,
  } = useData();

  // Login states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // Check login on mount
  useEffect(() => {
    const logged = sessionStorage.getItem("tomitomi_admin_logged");
    if (logged === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (usernameInput === "admin" && passwordInput === "fahril123") {
      setIsLoggedIn(true);
      sessionStorage.setItem("tomitomi_admin_logged", "true");
    } else {
      alert("Username atau password salah!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("tomitomi_admin_logged");
    setUsernameInput("");
    setPasswordInput("");
  };

  const [activeTab, setActiveTab] = useState<"overview" | "produk" | "galeri">("produk");

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



  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden font-sans">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-emerald-600/10 blur-[120px]" />

        {/* Card */}
        <div className="w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl relative z-10 space-y-6">
          <div className="text-center space-y-2">
            {/* Brand Icon */}
            <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/20 mx-auto">
              <Sparkles className="w-7 h-7 fill-white/20" />
            </div>
            
            <h2 className="text-2xl font-extrabold tracking-tight text-white pt-2">
              Tomi <span className="text-emerald-400">tomi</span> CMS
            </h2>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              Silakan login untuk mengelola website
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Username
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="Masukkan username"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 text-white rounded-xl border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm placeholder-slate-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="Masukkan password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 text-white rounded-xl border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm placeholder-slate-500 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-emerald-600/10 transition-all mt-2"
            >
              Sign In ke Dashboard
            </button>
          </form>

          <div className="text-center">
            <Link
              href="/"
              className="text-xs text-slate-500 hover:text-slate-400 transition-colors inline-flex items-center gap-1"
            >
              &larr; Kembali ke Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-md animate-fade-in"
              >
                <span>Website Utama</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-md shrink-0"
              >
                <span>Keluar</span>
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Admin Content Container */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

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
                const hasValidImage = item.image && item.image !== "-" && item.image.startsWith("/");
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden"
                  >
                    {/* Card Image Preview */}
                    <div className="relative w-full h-44 bg-slate-900 overflow-hidden">
                      {hasValidImage ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs font-semibold">
                          Belum ada gambar
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <h3 className="absolute bottom-3 left-4 right-4 text-base font-bold text-white tracking-tight drop-shadow-md">
                        {item.title}
                      </h3>
                    </div>

                    {/* Card Info */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                        {item.description || "Tidak ada deskripsi"}
                      </p>

                      {/* Card Actions */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <button
                          onClick={() => handleOpenServiceModal(item)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-3.5 py-2 rounded-xl transition-colors"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                          <span>Edit / Ganti Gambar</span>
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                    {services.length}
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
                Setiap perubahan yang Anda lakukan di dashboard admin ini (memperbarui deskripsi atau gambar produk, mengelola galeri) secara otomatis tersimpan dan sinkron langsung dengan halaman utama website penyewaan.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setActiveTab("produk")}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
                >
                  Kelola Produk &amp; Layanan
                </button>
                <button
                  onClick={() => setActiveTab("galeri")}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
                >
                  Kelola Galeri Foto
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
                  Pilih atau Input URL Gambar <span className="text-rose-500">*</span>
                </label>
                {/* Image Picker Select */}
                <select
                  value={serviceForm.image}
                  onChange={(e) =>
                    setServiceForm({ ...serviceForm, image: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm mb-2"
                >
                  <option value="">-- Pilih dari Koleksi Gambar --</option>
                  <option value="/images/tenda.png">Tenda (/images/tenda.png)</option>
                  <option value="/images/kursi.png">Kursi (/images/kursi.png)</option>
                  <option value="/images/488418828_17847816027443677_1742583229405988828_n.png">Event Eksklusif 1</option>
                  <option value="/images/488504212_17847816054443677_596256452473833969_n.png">Panggung &amp; Lighting</option>
                  <option value="/images/488613742_17847813165443677_8703584701075085170_n.png">Tenda Premium</option>
                  <option value="/images/488736167_17847817164443677_2853469951436042474_n.png">Layout Meja</option>
                  <option value="/images/488801816_17847813156443677_6208976998321015747_n.png">Perlengkapan Acara</option>
                  <option value="/images/489001683_17847816036443677_2577878175083365400_n.png">Pesta Pernikahan</option>
                  <option value="/images/489574839_17847816063443677_7252592277985721862_n.png">Event Corporate</option>
                  {galleryItems.map((gItem) => (
                    <option key={gItem.id} value={gItem.src}>
                      {gItem.title} ({gItem.src.substring(0, 30)}...)
                    </option>
                  ))}
                </select>

                <div className="relative">
                  <ImageIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Atau ketik URL/Path manual..."
                    value={serviceForm.image}
                    onChange={(e) =>
                      setServiceForm({ ...serviceForm, image: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>

                {/* Live Image Preview */}
                {serviceForm.image && (
                  <div className="mt-3 relative w-full h-32 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                    <img
                      src={serviceForm.image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>
                )}
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
