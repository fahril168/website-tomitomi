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

import defaultData from "./data.json";

const initialPrices: PriceItem[] = defaultData.priceItems as PriceItem[];
const initialServices: ServiceItem[] = defaultData.services as ServiceItem[];
const initialGallery: GalleryItem[] = defaultData.galleryItems as GalleryItem[];

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

  // Save to local data.json file in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const syncLocalFile = async () => {
        try {
          await fetch("/api/save-data", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              priceItems,
              services,
              galleryItems,
            }),
          });
        } catch (error) {
          console.error("Failed to sync with local file:", error);
        }
      };

      syncLocalFile();
    }
  }, [priceItems, services, galleryItems]);

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
