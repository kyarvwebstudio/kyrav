import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const seoKeywords = [
  "web design studio India", "Next.js development agency", "custom website design", 
  "website redesign services", "annual website maintenance", "AI integration agency", 
  "SEO performance optimization", "freelance web studio", "high performance frontend engineering", 
  "B2B web design agency", "responsive web design", "KYRAV web studio"
];

export const metadata: Metadata = {
  metadataBase: new URL("https://kyrav.in"),
  title: {
    default: "KYRAV | Where Confidence Meets Creativity — Web Design, Redesign, AI & SEO",
    template: "%s | KYRAV — Where Confidence Meets Creativity"
  },
  description: "KYRAV is an independent digital studio in India crafting high-performance websites for founders globally. No templates, just bespoke Next.js development.",
  keywords: seoKeywords,
  authors: [{ name: "KYRAV Web Studio", url: "https://kyrav.in" }],
  creator: "KYRAV Web Studio",
  publisher: "KYRAV Web Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "https://kyrav.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kyrav.in",
    title: "KYRAV | Where Confidence Meets Creativity — Web Design, Redesign, AI & SEO",
    description: "KYRAV is an independent digital studio in India crafting high-performance websites for founders globally. No templates, just bespoke Next.js development.",
    siteName: "KYRAV",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "KYRAV — Where Confidence Meets Creativity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KYRAV | Where Confidence Meets Creativity",
    description: "KYRAV is an independent digital studio in India crafting high-performance websites for founders globally. No templates, just bespoke Next.js development.",
    images: ["/logo.png"],
    creator: "@kyravwebstudio",
  },
};

import AmbientBackground from "@/components/AmbientBackground";

// ... existing code in layout.tsx will be preserved outside of the replaced block

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "KYRAV Web Studio",
    "url": "https://kyrav.in",
    "logo": "https://kyrav.in/logo.png",
    "image": "https://kyrav.in/logo.png",
    "description": "KYRAV is an independent digital studio in India crafting high-performance websites for founders globally. No templates, just bespoke Next.js development.",
    "slogan": "Where Confidence Meets Creativity",
    "telephone": "+91-88830-94601",
    "email": "kyravwebstudio@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "areaServed": ["India", "UAE", "UK", "USA"],
    "priceRange": "$$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "KYRAV Services Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Redesign"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Annual Maintenance (AMC)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Integration of AI"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Performance Optimization"
          }
        }
      ]
    }
  };

  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${caveat.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white selection:bg-white selection:text-black overflow-x-hidden font-sans relative">
        
        <AmbientBackground />

        <SmoothScroll>
          <Navbar />
          <main className="flex-1 w-full relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
