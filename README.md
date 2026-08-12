# Maryam Mumtaz | AI Engineer & Full-Stack Developer Portfolio

A modern, responsive portfolio website built with **Next.js 15**, **Tailwind CSS 4**, **TypeScript**, and **Framer Motion**. Features a light theme with violet accent, smooth animations, and an AI-powered chatbot.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## Preview

> **Live:** Coming soon on Vercel

## Features  

- **13 Sections** — Navbar, Hero, About, Experience, Startup, Hackathons, Projects, Testimonials, Tech Stack, FAQ, Contact, Footer, AI Chatbot
- **Responsive Design** — Mobile-first, works on all screen sizes
- **Smooth Animations** — Powered by Framer Motion with scroll-triggered effects
- **AI Chatbot** — Floating chat widget using OpenAI GPT-4.1-mini with portfolio context
- **Light Theme** — Clean white/gray with violet (#7C3AED) accent
- **Projects Page** — Dedicated `/projects` route with all projects
- **Skill Progress Bars** — Animated skill bars across 6 categories
- **Contact Form** — Opens mailto with pre-filled subject and message

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Icons | React Icons (Feather) |
| AI Chatbot | OpenAI GPT-4.1-mini |
| Font | Inter (Google Fonts) |
| Package Manager | pnpm |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with Inter font
│   ├── page.tsx                # Homepage (all sections)
│   ├── globals.css             # Global styles & theme
│   ├── api/chat/route.ts       # OpenAI chatbot API
│   └── projects/page.tsx       # All projects page
├── components/
│   ├── Navbar.tsx              # Sticky navigation
│   ├── Hero.tsx                # Hero with profile image
│   ├── About.tsx               # About, education, certs
│   ├── Experience.tsx          # Work history timeline
│   ├── Startup.tsx             # Marsa Empower section
│   ├── Hackathons.tsx          # Hackathon projects
│   ├── FeaturedProjects.tsx    # 6 featured projects
│   ├── Testimonials.tsx        # Client feedback
│   ├── TechStack.tsx           # Skills with progress bars
│   ├── FAQ.tsx                 # Accordion FAQ
│   ├── Contact.tsx             # Contact form + info
│   ├── Footer.tsx              # Footer with links
│   └── ChatBot.tsx             # Floating AI chat widget
└── data/
    └── portfolio-data.ts       # All portfolio content
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/muhammadsami987123/maryam-mumtaz-dev.git

# Navigate to the project
cd maryam-mumtaz-dev

# Install dependencies
pnpm install

# Set up environment variables
cp .env.local.example .env.local
# Add your OPENAI_API_KEY in .env.local
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
pnpm start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for the chatbot | Optional (chatbot shows fallback message without it) |

## Deployment

Deploy to [Vercel](https://vercel.com) with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/muhammadsami987123/maryam-mumtaz-dev)

## Author

**Maryam Mumtaz**
- LinkedIn: [maryam-mumtaz](https://www.linkedin.com/in/maryam-mumtaz-315358361/)
- GitHub: [MaryamMumtaz-piaic](https://github.com/MaryamMumtaz-piaic)
- Email: maryamqureshimumtazm.a@gmail.com

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
