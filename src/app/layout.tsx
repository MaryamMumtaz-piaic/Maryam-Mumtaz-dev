import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Maryam Mumtaz | AI Engineer & Full-Stack Developer",
    template: "%s | Maryam Mumtaz"
  },
  description:
    "Official portfolio of Maryam Mumtaz, an AI Agent Engineer & Full-Stack Developer from Karachi, Pakistan. Founder of Marsa Empower, specializing in agentic AI and scalable automation.",
  keywords: [
    "Maryam Mumtaz",
    "Maryam Portfolio",
    "Maryam Mumtaz AI",
    "Maryam Mumtaz AI Engineer",
    "Marsa Empower",
    "Marsa Founder",
    "Maryam Marsa",
    "Mersa Empower",
    "Mersa Maryam",
    "Mersa Founder",
    "AI Agent Engineer",
    "Full Stack Developer",
    "Agentic AI",
    "Karachi",
    "Pakistan",
  ],
  authors: [{ name: "Maryam Mumtaz" }],
  creator: "Maryam Mumtaz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maryam-mumtaz.vercel.app/",
    title: "Maryam Mumtaz | AI Engineer & Founder of Marsa Empower",
    description: "AI Agent Engineer & Full-Stack Developer specializing in agentic AI and scalable automation workflows.",
    siteName: "Maryam Mumtaz Portfolio",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Maryam Mumtaz - AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maryam Mumtaz | AI Engineer",
    description: "AI Agent Engineer & Full-Stack Developer specializing in agentic AI.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google1cbe55350aca6b54",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Maryam Mumtaz",
    "url": "https://maryam-mumtaz.vercel.app/",
    "jobTitle": "AI Engineer & Full-Stack Developer",
    "description": "AI Agent Engineer specializing in agentic AI and scalable automation. Founder of Marsa Empower.",
    "sameAs": [
      "https://github.com/MaryamMumtaz-piaic",
      "https://www.linkedin.com/in/maryam-mumtaz-315358361/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karachi",
      "addressCountry": "PK"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}


