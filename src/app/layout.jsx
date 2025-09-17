import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

// SEO Metadata for Hashim's Portfolio
export const metadata = {
  title: "Hashims Portfolio",
  description:
    "Welcome to Hashim's personal portfolio. Explore projects, achievements, and contact details.",
  keywords:
    "Hashim, portfolio, web developer, frontend developer, backend developer, React, Next.js, Tailwind CSS",
  openGraph: {
    type: "website",
    title: "Hashim's Portfolio",
    description:
      "Explore Hashim's portfolio showcasing web development projects and skills.",
    url: "https://hashim-portfolio.com", // Replace with actual URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashim's Portfolio",
    description:
      "Explore Hashim's portfolio showcasing web development projects and skills.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Set the favicon */}
        <link rel="icon" href="/me.ico" type="image/x-icon" />

        {/* Add author meta tag manually */}
        <meta name="author" content="Hashim" />
      </Head>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
