import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { LinksProvider } from "@/components/LinksProvider";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Royalle Pizzaria — Demonstração conceitual",
  description: "Proposta conceitual de landing page para a Royalle Pizzaria. Demonstração independente, não é o site oficial.",
  robots: { index: false, follow: false },
};
export const viewport: Viewport = { themeColor: "#240E13", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans"><LinksProvider>{children}</LinksProvider></body>
    </html>
  );
}
