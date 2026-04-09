import type { Metadata } from "next";
import { Bebas_Neue, Inter, Caveat } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pizzacity · Echte Pizza seit 2003 · 1160 Wien Ottakring",
  description:
    "Pizza, Burger und indische Spezialitäten aus Ottakring. Lieferung in 8 Bezirke. Seit 2003 im Herzen Wiens.",
  openGraph: {
    title: "Pizzacity · Echte Pizza seit 2003 · 1160 Wien Ottakring",
    description:
      "Pizza, Burger und indische Spezialitäten aus Ottakring. Lieferung in 8 Bezirke. Seit 2003 im Herzen Wiens.",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${bebas.variable} ${inter.variable} ${caveat.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
