import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Maryam Mumtaz | Full Stack Developer & AI Engineer",
    template: "%s | Maryam Mumtaz",
  },
  description: "Portfolio of Maryam Mumtaz - Full Stack Developer, Graphic Designer, Frontend Specialist, and AI Automation Engineer based in Pakistan. Student at PIAIC.",
  keywords: [
    "Maryam Mumtaz",
    "Maryam Mumtaz PIAIC",
    "Maryam Mumtaz Portfolio",
    "Maryam Mumtaz Developer",
    "Full Stack Developer",
    "Web Developer Pakistan",
    "Graphic Designer",
    "AI Automation Engineer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
  ],
  authors: [{ name: "Maryam Mumtaz", url: "https://maryam-piaic.vercel.app" }], // Replace with actual URL if different
  creator: "Maryam Mumtaz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maryam-piaic.vercel.app", // Replace with your actual domain
    title: "Maryam Mumtaz | Full Stack Developer & AI Engineer",
    description: "Explore the portfolio of Maryam Mumtaz, a Full Stack Developer & AI Engineer specializing in Next.js, React, and modern web technologies.",
    siteName: "Maryam Mumtaz Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Create this image in public folder for best results
        width: 1200,
        height: 630,
        alt: "Maryam Mumtaz Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maryam Mumtaz | Full Stack Developer",
    description: "Full Stack Developer & AI Engineer. View my projects and skills.",
    creator: "@maryammumtaz", // Update with your actual Twitter handle if you have one
    images: ["/og-image.jpg"],
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
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE", // Replace this with the code from Google Search Console
  },
};

import CustomCursor from "@/components/ui/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-[#030014] text-slate-200`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
