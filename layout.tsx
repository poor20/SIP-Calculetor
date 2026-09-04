import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coffee And | Premium Café & Restaurant in Dhanmondi, Dhaka",
  description:
    "Coffee And — Dhaka's beloved café for premium coffee, refreshing drinks, healthy food & memorable moments. House #42, 1st Floor, Road 12, Dhanmondi, Dhaka 1213.",
  keywords:
    "Coffee And, Dhaka cafe, Dhanmondi coffee shop, restaurant Dhaka, coffee Dhaka, breakfast Dhaka, brunch Dhanmondi",
  openGraph: {
    title: "Coffee And | Premium Café & Restaurant in Dhanmondi, Dhaka",
    description:
      "Best place for coffee, refreshing drinks, healthy food & celebrating with friends and family in Dhanmondi, Dhaka.",
    url: "https://maps.app.goo.gl/Y2uNwPDKxjDyuBiM6",
    siteName: "Coffee And",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream-50 text-espresso-800 antialiased">{children}</body>
    </html>
  );
}
