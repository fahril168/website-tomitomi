"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

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

const initialServices: ServiceItem[] = defaultData.services as ServiceItem[];
const initialGallery: GalleryItem[] = defaultData.galleryItems as GalleryItem[];

interface DataContextType {
  services: ServiceItem[];
  galleryItems: GalleryItem[];
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
  const [services, setServices] = useState<ServiceItem[]>(initialServices);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(initialGallery);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data dynamically on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("/api/save-data");
        if (res.ok) {
          const data = await res.json();
          setServices(data.services || []);
          setGalleryItems(data.galleryItems || []);
        }
      } catch (error) {
        console.error("Failed to load CMS data dynamically:", error);
      } finally {
        setIsLoaded(true);
      }
    };
    loadData();
  }, []);

  // Save to local data.json file in development mode
  useEffect(() => {
    if (isLoaded && process.env.NODE_ENV === "development") {
      const syncLocalFile = async () => {
        try {
          await fetch("/api/save-data", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
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
  }, [services, galleryItems, isLoaded]);

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
