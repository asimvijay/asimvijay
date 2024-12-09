import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// SEO Metadata for Hashim's Portfolio
export const metadata: Metadata = {
  title: "Hashim's Portfolio",
  description: "Welcome to Hashim's personal portfolio. Explore projects, achievements, and contact details.",
  keywords: "Hashim, portfolio, web developer, frontend developer, backend developer, React, Next.js, Tailwind CSS",
  author: "Hashim",
  openGraph: {
    type: "website",
    title: "Hashim's Portfolio",
    description: "Explore Hashim's portfolio showcasing web development projects and skills.",
    url: "https://hashim-portfolio.com", // Replace with actual URL
    image: "/images/me.jpg", // Path relative to public folder
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashim's Portfolio",
    description: "Explore Hashim's portfolio showcasing web development projects and skills.",
    image: "/images/me.jpg", // Path relative to public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Load Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Aboreto&family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />

        {/* Set the favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
