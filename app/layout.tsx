import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { DataProvider } from "@/context/DataContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Tomi tomi | Jasa Penyewaan Alat Acara & Pesta Terlengkap",
  description:
    "Sewa tenda dekorasi, kursi, meja, panggung, sound system, lighting, organ tunggal hingga generator untuk pernikahan, event kantor, dan ulang tahun.",
  keywords: [
    "sewa tenda",
    "sewa kursi futura",
    "sewa kursi tiffany",
    "sewa sound system",
    "sewa panggung event",
    "sewa alat pesta",
    "Tomi tomi rental",
    "sewa ac portable event",
  ],
  authors: [{ name: "Tomi tomi Event Equipment Rental" }],
  openGraph: {
    title: "Tomi tomi - Solusi Lengkap Acara Impian Anda",
    description:
      "Penyewaan alat acara profesional, higienis, tepat waktu dengan harga transparan.",
    url: "https://tomitomi.com",
    siteName: "Tomi tomi Rental",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="bg-white text-slate-900 font-sans antialiased selection:bg-emerald-500 selection:text-white">
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
