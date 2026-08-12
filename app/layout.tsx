import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

// One family for the whole site. The width axis is not optional here — the
// display type is set at wdth 110–120, and a static cut ignores
// font-variation-settings entirely, so every heading would silently render at
// the default width.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  title: "Crafted by Ellis | Software made by hand",
  description:
    "A one-person software studio in Aotearoa New Zealand. Home of Renew+, the honest list of everything you subscribe to.",
  keywords: ["Crafted by Ellis", "Renew+", "iOS app", "subscription tracker", "New Zealand software studio"],
  authors: [{ name: "Braden Ellis" }],
  openGraph: {
    title: "Crafted by Ellis",
    description: "Software made by hand, one app at a time.",
    url: "https://craftedbyellis.com",
    siteName: "Crafted by Ellis",
    type: "website",
  },
};

// The layout deliberately renders no chrome. Every page in this design owns its
// own header and footer: the home page's nav points at its own sections, the
// Renew+ page's is a back link plus that page's anchors, and the prose pages
// use the shared studio pair. A single global header could not be any of those
// three without a pile of route checks inside it.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {children}
      </body>
    </html>
  );
}
