import type { Metadata } from "next";
import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { DataProvider } from "@/context/DataContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
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
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
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
    <html lang="id" className={`${poppins.variable} ${nunitoSans.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body className="bg-white text-slate-900 font-sans antialiased selection:bg-emerald-500 selection:text-white">
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}

