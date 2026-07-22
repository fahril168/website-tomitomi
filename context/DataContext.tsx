"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface PriceItem {
  id: number;
  name: string;
  category: "Tenda" | "Dekorasi & Pelengkap" | "Panggung" | "Kursi" | "Meja" | "Elektronik & Genset";
  unit: string;
  price: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  iconName?: string;
  image: string;
  description: string;
  features: string[];
  popularSpecs: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  desc: string;
}

const initialPrices: PriceItem[] = [
  // TENDA
  { id: 1, name: "Tenda Slayer", category: "Tenda", unit: "m²", price: 20000 },
  { id: 2, name: "Tenda Slayer Kombinasi", category: "Tenda", unit: "m²", price: 25000 },
  { id: 3, name: "Tenda Slayer Semi Dekorasi", category: "Tenda", unit: "m²", price: 35000 },
  { id: 4, name: "Tenda Dekorasi VIP", category: "Tenda", unit: "m²", price: 45000 },
  { id: 5, name: "Tenda Lengkung Kombinasi", category: "Tenda", unit: "m²", price: 40000 },
  { id: 6, name: "Tenda Roder Bentang 10m / 15m", category: "Tenda", unit: "m²", price: 75000 },
  { id: 7, name: "Tenda Sarnafil / Kerucut 3x3m", category: "Tenda", unit: "Unit / Hari", price: 350000 },
  { id: 8, name: "Tenda Sarnafil / Kerucut 5x5m", category: "Tenda", unit: "Unit / Hari", price: 650000 },

  // DEKORASI & PELENGKAP
  { id: 9, name: "Karpet Pelaminan / Jalan (Merah / Hijau)", category: "Dekorasi & Pelengkap", unit: "m²", price: 15000 },
  { id: 10, name: "Backdrop Bunga Artificial 3x4m", category: "Dekorasi & Pelengkap", unit: "Set", price: 1500000 },
  { id: 11, name: "Fairy Lights / Lampu Gantung Warm LED", category: "Dekorasi & Pelengkap", unit: "Meter", price: 12000 },
  { id: 12, name: "Flooring Kayu + Karpet Buatan", category: "Dekorasi & Pelengkap", unit: "m²", price: 30000 },
  { id: 13, name: "Kotak Angpau Akrilik / Kayu VIP", category: "Dekorasi & Pelengkap", unit: "Unit", price: 75000 },
  { id: 14, name: "Pergola Masuk Utama (Gate Dekorasi)", category: "Dekorasi & Pelengkap", unit: "Set", price: 650000 },

  // PANGGUNG
  { id: 15, name: "Panggung Modul Knockdown (Tinggi 20cm - 50cm)", category: "Panggung", unit: "m²", price: 35000 },
  { id: 16, name: "Panggung Modul Heavy Duty (Tinggi 1m)", category: "Panggung", unit: "m²", price: 45000 },
  { id: 17, name: "Mini Stage Akad / Pidato (2x3m)", category: "Panggung", unit: "Set", price: 300000 },
  { id: 18, name: "Rigging Stage Frame 6x8m (Panggung Konser)", category: "Panggung", unit: "Set", price: 3500000 },

  // KURSI
  { id: 19, name: "Kursi Futura (Polos)", category: "Kursi", unit: "Unit", price: 10000 },
  { id: 20, name: "Kursi Futura + Cover & Pita Warna", category: "Kursi", unit: "Unit", price: 15000 },
  { id: 21, name: "Kursi Tiffany Kayu (Putih / Gold)", category: "Kursi", unit: "Unit", price: 25000 },
  { id: 22, name: "Kursi Tiffany Akrilik Bening (Crystal)", category: "Kursi", unit: "Unit", price: 35000 },
  { id: 23, name: "Kursi Bar High Top Modern", category: "Kursi", unit: "Unit", price: 40000 },
  { id: 24, name: "Sofa VIP Single Leather Exclusive", category: "Kursi", unit: "Unit", price: 150000 },

  // MEJA
  { id: 25, name: "Meja Bulat (Round Table) Dia. 120cm + Cover", category: "Meja", unit: "Unit", price: 75000 },
  { id: 26, name: "Meja Bulat VIP Dia. 160cm + Cover & Taplak", category: "Meja", unit: "Unit", price: 110000 },
  { id: 27, name: "Meja Kotak Prasmanan + Cover Kain", category: "Meja", unit: "Unit", price: 60000 },
  { id: 28, name: "Meja Bar High Top + Cover", category: "Meja", unit: "Unit", price: 80000 },
  { id: 29, name: "Meja VIP Kaca Minimalis (Coffee Table)", category: "Meja", unit: "Unit", price: 120000 },

  // ELEKTRONIK & GENSET
  { id: 30, name: "Sound System 1.000 Watt (2 Speaker + Mic Wireless)", category: "Elektronik & Genset", unit: "Set / Hari", price: 850000 },
  { id: 31, name: "Sound System 3.000 Watt (4 Speaker + Digital Mixer)", category: "Elektronik & Genset", unit: "Set / Hari", price: 2200000 },
  { id: 32, name: "Sound System 5.000 Watt Concert Level", category: "Elektronik & Genset", unit: "Set / Hari", price: 4500000 },
  { id: 33, name: "AC Portable Standing 5 PK", category: "Elektronik & Genset", unit: "Unit / Hari", price: 750000 },
  { id: 34, name: "Kipas Blower Misty Fan Embun 26 Inci", category: "Elektronik & Genset", unit: "Unit / Hari", price: 250000 },
  { id: 35, name: "Genset Silent 40 KVA + Solar Backup", category: "Elektronik & Genset", unit: "Unit / Hari", price: 2500000 },
  { id: 36, name: "Genset Silent 60 KVA + Solar Backup", category: "Elektronik & Genset", unit: "Unit / Hari", price: 3200000 },
  { id: 37, name: "Paket Organ Tunggal + 1 Singer Profesional", category: "Elektronik & Genset", unit: "Paket / 4 Jam", price: 2000000 },
];

const initialServices: ServiceItem[] = [
  {
    id: "tenda",
    title: "Tenda",
    subtitle: "Tenda Premium",
    category: "Tenda",
    image: "/images/tenda.png",
    description: "Berbagai jenis tenda berkualitas premium yang sudah dipercaya oleh perusahaan ternama dan instansi pemerintah.",
    features: ["Tenda Slayer", "Tenda Dekorasi", "Tenda Pagoda", "Tenda Lengkung"],
    popularSpecs: "",
  },
  {
    id: "panggung",
    title: "Panggung",
    subtitle: "Panggung & Flooring",
    category: "Panggung",
    image: "",
    description: "Panggung kokoh dengan berbagai ketinggian, dilengkapi karpet dan dapat disesuaikan dengan kebutuhan acara.",
    features: ["Panggung 20-150 cm", "Panggung Podium", "Karpet Premium"],
    popularSpecs: "",
  },
  {
    id: "kursi",
    title: "Kursi",
    subtitle: "Kursi VIP",
    category: "Kursi",
    image: "/images/kursi.png",
    description: "Kursi berkualitas dengan berbagai pilihan, dari kursi standar hingga kursi VIP dengan cover elegan.",
    features: ["Kursi Futura", "Cover Spandex", "Kursi Sofa VIP"],
    popularSpecs: "",
  },
  {
    id: "meja",
    title: "Meja",
    subtitle: "Meja Pesta",
    category: "Meja",
    image: "",
    description: "Meja dengan berbagai ukuran, mulai dari meja persegi hingga meja bundar dengan taplak premium.",
    features: ["Meja Persegi", "Meja Bundar", "Meja VIP Ukir"],
    popularSpecs: "",
  },
  {
    id: "genset",
    title: "Genset",
    subtitle: "Genset Silent",
    category: "Genset",
    image: "",
    description: "Genset handal dengan berbagai kapasitas untuk memastikan acara Anda berjalan lancar tanpa khawatir listrik mati.",
    features: ["40 KVA - 150 KVA", "Siap 8 Jam", "Operator Berpengalaman"],
    popularSpecs: "",
  },
  {
    id: "perlengkapan",
    title: "Perlengkapan",
    subtitle: "Alat Pendukung",
    category: "Perlengkapan",
    image: "",
    description: "Perlengkapan lengkap pendukung acara dari sound system, AC, hingga dekorasi taman dan lampu sorot.",
    features: ["Sound System", "AC Standing", "Lampu & Kipas", "Dekorasi"],
    popularSpecs: "",
  },
];

const initialGallery: GalleryItem[] = [
  {
    id: "gal-1",
    src: "/images/488418828_17847816027443677_1742583229405988828_n.png",
    title: "Dekorasi Event Eksklusif",
    desc: "Tata kelola dekorasi dan estetika panggung acara dari tim Tomitomi Project."
  },
  {
    id: "gal-2",
    src: "/images/488504212_17847816054443677_596256452473833969_n.png",
    title: "Panggung & Lighting Sistem",
    desc: "Instalasi panggung kokoh lengkap dengan sistem tata pencahayaan profesional."
  },
  {
    id: "gal-3",
    src: "/images/488613742_17847813165443677_8703584701075085170_n.png",
    title: "Koleksi Tenda Premium",
    desc: "Pilihan unit tenda terbaik yang siap melindungi kelancaran acara Anda."
  },
  {
    id: "gal-4",
    src: "/images/488736167_17847817164443677_2853469951436042474_n.png",
    title: "Layout Area Acara",
    desc: "Pengaturan tata letak kursi dan meja agar memaksimalkan kenyamanan tamu."
  },
  {
    id: "gal-5",
    src: "/images/488801816_17847813156443677_6208976998321015747_n.png",
    title: "Perlengkapan Acara Terintegrasi",
    desc: "Menyediakan seluruh alat pesta pendukung agar Anda tidak perlu cemas."
  },
  {
    id: "gal-6",
    src: "/images/489001683_17847816036443677_2577878175083365400_n.png",
    title: "Pesta Pernikahan & Resepsi",
    desc: "Momen berharga yang didukung penuh oleh infrastruktur terbaik kami."
  },
  {
    id: "gal-7",
    src: "/images/489574839_17847816063443677_7252592277985721862_n.png",
    title: "Event Corporate & Festival",
    desc: "Kesiapan kru berpengalaman mengawal berjalannya berbagai skala event."
  }
];

interface DataContextType {
  priceItems: PriceItem[];
  services: ServiceItem[];
  galleryItems: GalleryItem[];
  addPriceItem: (item: Omit<PriceItem, "id">) => void;
  updatePriceItem: (id: number, item: Partial<PriceItem>) => void;
  deletePriceItem: (id: number) => void;
  resetPriceData: () => void;
  addServiceItem: (service: Omit<ServiceItem, "id">) => void;
  updateServiceItem: (id: string, service: Partial<ServiceItem>) => void;
  deleteServiceItem: (id: string) => void;
  resetServiceData: () => void;
  addGalleryItem: (item: Omit<GalleryItem, "id">) => void;
  updateGalleryItem: (id: string, item: Partial<GalleryItem>) => void;
  deleteGalleryItem: (id: string) => void;
  resetGalleryData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [priceItems, setPriceItems] = useState<PriceItem[]>(initialPrices);
  const [services, setServices] = useState<ServiceItem[]>(initialServices);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(initialGallery);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const savedPrices = localStorage.getItem("tomitomi_prices");
      if (savedPrices) {
        setPriceItems(JSON.parse(savedPrices));
      }
      const savedServices = localStorage.getItem("tomitomi_services");
      if (savedServices) {
        setServices(JSON.parse(savedServices));
      }
      const savedGallery = localStorage.getItem("tomitomi_gallery");
      if (savedGallery) {
        setGalleryItems(JSON.parse(savedGallery));
      }
    } catch (e) {
      console.error("Failed to load CMS data from localStorage", e);
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("tomitomi_prices", JSON.stringify(priceItems));
    }
  }, [priceItems, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("tomitomi_services", JSON.stringify(services));
    }
  }, [services, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("tomitomi_gallery", JSON.stringify(galleryItems));
    }
  }, [galleryItems, isInitialized]);

  // PRICE ACTIONS
  const addPriceItem = (newItem: Omit<PriceItem, "id">) => {
    const nextId = priceItems.length > 0 ? Math.max(...priceItems.map((p) => p.id)) + 1 : 1;
    setPriceItems((prev) => [...prev, { ...newItem, id: nextId }]);
  };

  const updatePriceItem = (id: number, updatedFields: Partial<PriceItem>) => {
    setPriceItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item))
    );
  };

  const deletePriceItem = (id: number) => {
    setPriceItems((prev) => prev.filter((item) => item.id !== id));
  };

  const resetPriceData = () => {
    setPriceItems(initialPrices);
    localStorage.removeItem("tomitomi_prices");
  };

  // SERVICE ACTIONS
  const addServiceItem = (newService: Omit<ServiceItem, "id">) => {
    const newId = "service-" + Date.now();
    setServices((prev) => [...prev, { ...newService, id: newId }]);
  };

  const updateServiceItem = (id: string, updatedFields: Partial<ServiceItem>) => {
    setServices((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item))
    );
  };

  const deleteServiceItem = (id: string) => {
    setServices((prev) => prev.filter((item) => item.id !== id));
  };

  const resetServiceData = () => {
    setServices(initialServices);
    localStorage.removeItem("tomitomi_services");
  };

  // GALLERY ACTIONS
  const addGalleryItem = (newItem: Omit<GalleryItem, "id">) => {
    const newId = "gal-" + Date.now();
    setGalleryItems((prev) => [...prev, { ...newItem, id: newId }]);
  };

  const updateGalleryItem = (id: string, updatedFields: Partial<GalleryItem>) => {
    setGalleryItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item))
    );
  };

  const deleteGalleryItem = (id: string) => {
    setGalleryItems((prev) => prev.filter((item) => item.id !== id));
  };

  const resetGalleryData = () => {
    setGalleryItems(initialGallery);
    localStorage.removeItem("tomitomi_gallery");
  };

  return (
    <DataContext.Provider
      value={{
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
