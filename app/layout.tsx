import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import FirstTimeModal from "@/components/FirstTimeModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Meritium",
  description: "Meritium is a privacy-focused promotion voting system that uses encrypted, reputation-weighted ballots to ensure fair, bias-free corporate advancement decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${inter.className} font-sans antialiased relative`}
      >
        <Toaster richColors position="top-right" />
        <FirstTimeModal />
        {children}
      </body>
    </html>
  );
}
