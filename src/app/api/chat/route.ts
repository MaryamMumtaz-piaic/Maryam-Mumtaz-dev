import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `You are Maryam Mumtaz's AI portfolio assistant. Answer questions about her skills, projects, and experience based on the following context:

**About Maryam:**
- AI Agent Engineer & Full-Stack Developer from Karachi, Pakistan
- Founder of Marsa Empower (Jan 2026 - Present)
- Freelance Full Stack Developer (Jan 2025 - Present)
- 550+ AI agents built, 50+ projects delivered, 90%+ token usage reduction achieved

**Skills:**
- Full Stack: Next.js (98%), React (95%), TypeScript (95%), Python/FastAPI (90%), PostgreSQL (92%)
- AI & Agents: OpenAI SDK (98%), Agentic AI (95%), LangChain (90%), Prompt Engineering (98%), MCP Protocol (92%)
- Cloud: Vercel (98%), Firebase (95%), AWS (85%), Docker (95%), Kubernetes (88%)
- Design: Figma (95%), Canva (98%), UI/UX Design (92%), Tailwind CSS (95%)

**Key Projects:**
1. Modern E-Commerce Platform (Next.js, TypeScript, Sanity CMS, Stripe)
2. AI Spec-Driven Todo (OpenAI, Next.js, Dapr, Kubernetes)
3. LearnFlow AI Platform (Kafka, Next.js 15, Goose AI, Dapr)
4. Physical AI Textbook (Docusaurus, RAG, Python, Cloud Native)
5. AI Intelligence Agent (MCP, OpenAI SDK, LangChain, n8n)
6. Inventory Enterprise (PostgreSQL, React, Node.js, Prisma)

**Education:**
- PIAIC: Agentic & Robotic AI Engineer (In Process)
- DIT: Diploma Information Technology
- Intermediate: Engineering

**Contact:** maryamqureshimumtazm.a@gmail.com | LinkedIn: linkedin.com/in/maryam-mumtaz-315358361

Be helpful, professional, and concise. If asked something outside this context, politely redirect to portfolio-related topics.`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { message: "OpenAI API key not configured. Please add OPENAI_API_KEY to .env.local" },
        { status: 200 }
      );
    }

    const openai = new OpenAI({ apiKey });

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.slice(-10),
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    return NextResponse.json({
      message: completion.choices[0]?.message?.content || "No response generated.",
    });
  } catch {
    return NextResponse.json(
      { message: "Sorry, I'm having trouble connecting. Please try again later." },
      { status: 200 }
    );
  }
}
