import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maryam-mumtaz.vercel.app"),
  title: {
    default: "Maryam Mumtaz | AI Engineer & Full-Stack Developer",
    template: "%s | Maryam Mumtaz"
  },
  description:
    "Maryam Mumtaz is a Karachi-based Forward Deployed Engineer, AI Engineer, AI Agent Engineer, Full-Stack Developer, and Founder of MARSA Empower, working on agentic AI, AI automation, RAG, and production full-stack systems.",
  keywords: [
    "Maryam Mumtaz",
    "Maryam Mumtaz AI Engineer",
    "Maryam Mumtaz AI Agent Engineer",
    "Maryam Mumtaz Full Stack Developer",
    "AI Engineer Pakistan",
    "AI Agent Engineer Pakistan",
    "Agentic AI",
    "AI Automation",
    "RAG",
    "MARSA Empower",
  ],
  authors: [{ name: "Maryam Mumtaz" }],
  creator: "Maryam Mumtaz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maryam-mumtaz.vercel.app/",
    title: "Maryam Mumtaz | AI Engineer, AI Agent Engineer & Founder of MARSA Empower",
    description: "Forward Deployed Engineer, AI Engineer, AI Agent Engineer, Full-Stack Developer, and Founder of MARSA Empower working on agentic AI, AI automation, RAG, and scalable digital products.",
    siteName: "Maryam Mumtaz Portfolio",
    images: [
      {
        url: "https://maryam-mumtaz.vercel.app/maryam.png",
        width: 1254,
        height: 1254,
        alt: "Maryam Mumtaz - AI Engineer and Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maryam Mumtaz | AI Engineer & Full-Stack Developer",
    description: "Forward Deployed Engineer, AI Engineer, AI Agent Engineer, and Founder of MARSA Empower working on agentic AI, AI automation, RAG, and full-stack systems.",
    images: ["https://maryam-mumtaz.vercel.app/maryam.png"],
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
  const personId = "https://maryam-mumtaz.vercel.app/#person";
  const organizationId = "https://marsaempower.com/#organization";
  const websiteId = "https://maryam-mumtaz.vercel.app/#website";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        "name": "Maryam Mumtaz",
        "url": "https://maryam-mumtaz.vercel.app/",
        "image": "https://maryam-mumtaz.vercel.app/maryam.png",
        "email": "maryamqureshimumtazm.a@gmail.com",
        "jobTitle": "Forward Deployed Engineer, AI Engineer, AI Agent Engineer, Full-Stack Developer, and Founder",
        "description": "Forward Deployed Engineer, AI Engineer, AI Agent Engineer, and Full-Stack Developer from Karachi, Pakistan, working on agentic AI, AI automation, RAG, and intelligent full-stack systems. Founder of MARSA Empower.",
        "sameAs": [
          "https://github.com/MaryamMumtaz-piaic",
          "https://linkedin.com/in/maryam-mumtaz-",
          "https://www.instagram.com/maryammumtaz2810/",
          "https://maryam-resume.vercel.app/"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Karachi",
          "addressRegion": "Sindh",
          "addressCountry": "PK"
        },
        "worksFor": {
          "@id": organizationId
        },
        "mainEntityOfPage": {
          "@id": websiteId
        },
        "knowsAbout": [
          "Agentic AI",
          "AI agents",
          "AI automation",
          "RAG systems",
          "LLM applications",
          "Full-stack development",
          "System design",
          "Cloud-native applications"
        ]
      },
      {
        "@type": "Organization",
        "@id": organizationId,
        "name": "MARSA Empower",
        "url": "https://marsaempower.com",
        "sameAs": [
          "https://www.linkedin.com/company/marsa-empower"
        ],
        "founder": {
          "@id": personId
        }
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        "url": "https://maryam-mumtaz.vercel.app/",
        "name": "Maryam Mumtaz Portfolio",
        "description": "Portfolio of Maryam Mumtaz, AI Engineer, AI Agent Engineer, Full-Stack Developer, and Founder of MARSA Empower.",
        "inLanguage": "en",
        "publisher": {
          "@id": organizationId
        }
      }
    ]
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


