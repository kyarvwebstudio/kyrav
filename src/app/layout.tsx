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

// Worldwide Top-Level SEO Keywords List (100+ Keywords)
const seoKeywords = [
  "web design studio", "web development agency", "custom website design", "website redesign services",
  "annual website maintenance", "website AMC services", "AI integration agency", "AI chatbot development",
  "SEO optimization agency", "performance optimization studio", "Lighthouse 100 website development",
  "UI UX design studio", "full stack web development", "responsive web design", "Next.js development agency",
  "React web development", "Tailwind CSS design studio", "TypeScript web engineering", "Supabase web developers",
  "GSAP animation studio", "headless CMS development", "enterprise web applications", "B2B web design agency",
  "executive portfolio design", "C-suite website development", "industrial growth advisory portfolio",
  "luxury art studio web design", "hand painted wall mural website", "ceiling art portfolio design",
  "interior design agency website", "consulting firm web development", "personal brand website builder",
  "high converting web application", "conversion rate optimization agency", "brand digital strategy",
  "web design studio India", "web developers Tamil Nadu", "web design agency Chennai", "web development Coimbatore",
  "web studio Bangalore", "web design agency Mumbai", "web development GCC", "web design studio Dubai",
  "web design agency UAE", "website development Saudi Arabia", "web studio Qatar", "web design agency UK",
  "web development London", "web design studio USA", "web design agency New York", "web studio California",
  "global web design agency", "worldwide freelance web studio", "remote web development studio",
  "Core Web Vitals optimization", "sub-second page load speed", "JSON-LD schema metadata",
  "Google Knowledge Graph indexing", "technical SEO agency", "local business schema setup",
  "PWA progressive web app development", "jamstack web studio", "serverless web applications",
  "accessible web design WCAG", "dark mode web design", "glassmorphism web studio", "modern typography design",
  "custom AI workflow automation", "OpenAI integration agency", "Claude AI web integration",
  "WhatsApp lead capture integration", "Stripe payment web portal", "client portal web development",
  "real time database streaming", "WebP image pipeline optimization", "semantic HTML5 web studio",
  "high performance frontend engineering", "digital transformation studio", "startup web development",
  "best web design agency for small business", "hire Next.js developers worldwide",
  "affordable website annual maintenance plans", "professional website redesign company",
  "custom web design studio for executives", "luxury web design studio India",
  "high speed performance optimized website developers", "AI powered website development agency",
  "top rated web design studio 2026", "KYRAV web studio", "KYRAV digital experiences",
  "Where Confidence Meets Creativity", "KYRAV web engineering", "ultra fast nextjs portfolio",
  "cross border web design studio", "bespoke digital studio", "modern web design agency 2026"
];

export const metadata: Metadata = {
  metadataBase: new URL("https://kyrav.in"),
  title: {
    default: "KYRAV | Where Confidence Meets Creativity — Web Design, Redesign, AI & SEO",
    template: "%s | KYRAV — Where Confidence Meets Creativity"
  },
  description: "KYRAV is a elite worldwide digital web studio specializing in Website Design, Website Redesign, Annual Maintenance (AMC), AI Integration, and SEO & Performance Optimization. Delivering sub-second speeds and 100/100 Lighthouse metrics.",
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
    description: "Elite worldwide web studio offering Website Design, Redesign, AMC Maintenance, AI Integration, and SEO & Performance Optimization.",
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
    description: "Elite worldwide web studio offering Website Design, Redesign, AMC Maintenance, AI Integration, and SEO & Performance Optimization.",
    images: ["/logo.png"],
    creator: "@kyravwebstudio",
  },
};

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
    "description": "Where Confidence Meets Creativity. Elite worldwide web studio specializing in Website Design, Website Redesign, Annual Maintenance (AMC), AI Integration, and SEO & Performance Optimization.",
    "slogan": "Where Confidence Meets Creativity",
    "telephone": "+91-88830-94601",
    "email": "kyravwebstudio@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "areaServed": ["Worldwide", "India", "GCC", "UAE", "USA", "UK", "Europe"],
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
        
        {/* Ambient Background Glows */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[150px]" />
          <div className="absolute top-[30%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[150px]" />
          <div className="absolute bottom-[-20%] left-[10%] w-[60%] h-[60%] rounded-full bg-amber-500/5 blur-[150px]" />
        </div>

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
