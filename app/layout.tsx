import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  title: "Crafted by Ellis | Premium Digital Experiences",
  description: "Thoughtfully designed apps and games. Home of Renew+, your lifestyle app for goals, journaling, and intentional living.",
  keywords: ["Crafted by Ellis", "Renew+", "iOS app", "lifestyle app", "goal tracking", "journaling"],
  authors: [{ name: "Braden Ellis" }],
  openGraph: {
    title: "Crafted by Ellis",
    description: "Thoughtfully designed digital experiences",
    url: "https://craftedbyellis.com",
    siteName: "Crafted by Ellis",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
