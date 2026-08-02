"use client";

import React from "react";
import Link from "next/link";
import {
  Package,
  Sparkles,
  LayoutGrid,
  LogOut,
  Image as ImageIcon,
} from "lucide-react";

interface SidebarProps {
  activeTab: "overview" | "produk" | "galeri";
  setActiveTab: (tab: "overview" | "produk" | "galeri") => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    {
      id: "overview" as const,
      name: "Dashboard Overview",
      icon: LayoutGrid,
    },
    {
      id: "produk" as const,
      name: "Kelola Produk & Layanan",
      icon: Package,
    },
    {
      id: "galeri" as const,
      name: "Kelola Galeri Foto",
      icon: ImageIcon,
    },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white h-screen sticky top-0 flex flex-col border-r border-slate-800 shrink-0 shadow-xl z-50">
      {/* Sidebar Header Brand */}
      <div className="p-6 border-b border-slate-800 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
          <Sparkles className="w-5 h-5 fill-white/20" />
        </div>
        <div>
          <h2 className="text-md font-extrabold tracking-tight">
            Tomi <span className="text-emerald-400">tomi</span>
          </h2>
          <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
            Admin Panel
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-1.5">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all text-left ${
                isActive
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-700/20"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer Controls */}
      <div className="p-4 border-t border-slate-800 space-y-1">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span>Lihat Website</span>
        </Link>
      </div>
    </aside>
  );
};
