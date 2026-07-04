import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { footer } from "@/data/homeData";

/**
 * Cormorant Garamond — editorial serif for headings
 * Refined, trustworthy, used by law firms & luxury brands
 */

export const metadata: Metadata = {
  title: "Holidays By ValueAdz",
  description: "Best Tour & Travel Agency in India. We provide best travel packages for domestic and international tours.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`w-full max-w-screen  relative`}
      >
        <Header />
        {children}
        <Footer footer={footer} />
      </body>
    </html>
  );
}
