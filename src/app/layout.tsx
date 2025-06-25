import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GoWithFund.org",
  description: "GoWithFund.org - Empowering Communities Through Volunteerism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden`}
      >
        <div className="layout-container flex h-full grow flex-col">
          <Header />
          <main className="max-w-7xl mx-auto px-8 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
