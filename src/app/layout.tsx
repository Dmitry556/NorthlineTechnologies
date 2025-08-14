import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Northline Technologies - Your Infrastructure Runs Itself",
  description: "Complete IT management that scales with your business. Security, compliance, and reliability handled by experts so you can focus on growth. Start free for 30 days.",
  keywords: "IT infrastructure, cloud management, security, compliance, startup IT, remote team IT",
  authors: [{ name: "Northline Technologies" }],
  creator: "Northline Technologies",
  publisher: "Northline Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://northlinetech.com'),
  openGraph: {
    title: "Northline Technologies - Your Infrastructure Runs Itself",
    description: "Complete IT management that scales with your business. Security, compliance, and reliability handled by experts so you can focus on growth.",
    url: "https://northlinetech.com",
    siteName: "Northline Technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northline Technologies - Your Infrastructure Runs Itself",
    description: "Complete IT management that scales with your business. Start free for 30 days.",
    creator: "@northlinetech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" href="/fonts/inter-variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0b0c0e" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
