import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI agents, RAG systems, automation workflows, SaaS platforms, and full-stack projects by Maryam Mumtaz.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    url: "https://maryam-mumtaz.vercel.app/projects",
    title: "Projects | Maryam Mumtaz",
    description: "Explore Maryam Mumtaz's AI agents, RAG systems, automation workflows, SaaS platforms, and full-stack projects.",
    siteName: "Maryam Mumtaz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Maryam Mumtaz",
    description: "AI agents, RAG systems, automation workflows, SaaS platforms, and full-stack projects by Maryam Mumtaz.",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
