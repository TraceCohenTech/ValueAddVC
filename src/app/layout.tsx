import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Value Add VC | The VC Tools Hub",
  description:
    "A comprehensive suite of venture capital analysis tools including fund benchmarking, unicorn tracking, SPV calculators, and liquidity waterfall analysis.",
  keywords: [
    "venture capital",
    "VC tools",
    "fund benchmarking",
    "unicorn tracker",
    "SPV calculator",
    "liquidity waterfall",
    "startup investing",
    "value add vc",
  ],
  authors: [{ name: "Trace Cohen", url: "https://twitter.com/trace_cohen" }],
  metadataBase: new URL("https://valueaddvc.com"),
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Value Add VC | The VC Tools Hub",
    description:
      "A comprehensive suite of venture capital analysis tools for fund managers and investors.",
    type: "website",
    url: "https://valueaddvc.com",
    siteName: "Value Add VC",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Value Add VC - The VC Tools Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Value Add VC | The VC Tools Hub",
    description:
      "A comprehensive suite of venture capital analysis tools for fund managers and investors.",
    creator: "@trace_cohen",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0e14] text-white min-h-screen`}
      >
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
