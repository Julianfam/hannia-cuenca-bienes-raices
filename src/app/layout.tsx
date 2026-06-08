import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { agent } from "@/data/agent";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${agent.name} | Bienes Raíces Bogotá`,
    template: `%s | ${agent.shortName} Bienes Raíces`,
  },
  description: `${agent.name} - Asesora inmobiliaria en ${agent.city}. Venta, arriendo y asesoría personalizada para encontrar tu propiedad ideal.`,
  keywords: [
    "bienes raíces",
    "inmobiliaria",
    "Bogotá",
    "venta de casas",
    "arriendo",
    agent.name,
  ],
  openGraph: {
    title: `${agent.name} | Bienes Raíces Bogotá`,
    description: agent.tagline,
    images: [agent.photo],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${sans.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}