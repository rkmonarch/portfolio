import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { site } from "@/lib/data";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Building AI systems that feel simple`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/1.jpeg",
        width: 719,
        height: 572,
        alt: "Rahul Kulkarni speaking on stage at ETH KL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    creator: "@0xrahulk",
    images: ["/1.jpeg"],
  },
  icons: { icon: "/icon.png", apple: "/icon.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-grow w-full max-w-[680px] mx-auto px-6">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
