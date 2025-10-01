import "./css/style.css";

import type { Metadata } from 'next';

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


export const metadata: Metadata = {
  title: 'VGTech - Custom AI & Software Solutions',
  description:
    'VGTech creates tailored artificial intelligence and custom software solutions for industries including healthcare, defense, finance, and enterprise for operational excellence.',
  keywords:
    'artificial intelligence, AI solutions, custom software development, healthcare AI, defense AI, enterprise software, business automation, AI consulting',
  openGraph: {
    title: 'VGTech - Custom AI & Software Solutions',
    description:
      'Discover how VGTech delivers intelligent software and AI solutions for defense, healthcare, and enterprise sectors.',
    url: 'https://vallabhatech.com',
    siteName: 'VGTech',
    images: [
      {
        url: 'https://vallabhatech.com',
        width: 1200,
        height: 630,
        alt: 'VGTech AI Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://vallabhatech.com',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
