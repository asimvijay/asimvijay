import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
 



// SEO Metadata for Hashim's Portfolio
export const metadata: Metadata = {
  title: "Hashims Portfolio ",
  description: "Welcome to Hashim's personal portfolio. Explore projects, achievements, and contact details.",
  keywords: "Hashim, portfolio, web developer, frontend developer, backend developer, React, Next.js, Tailwind CSS",
  openGraph: {
    type: "website",
    title: "Hashim&apos;s Portfolio",
    description: "Explore Hashim's portfolio showcasing web development projects and skills.",
    url: "https://hashim-portfolio.com", // Replace with actual URL
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashim&apos;s Portfolio",
    description: "Explore Hashim's portfolio showcasing web development projects and skills.",
   
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
        <link rel="icon" href="/me.ico" type="image/x-icon" />

        {/* Add author meta tag manually */}
        <meta name="author" content="Hashim" />
      </Head>
      <body
        className={` antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
