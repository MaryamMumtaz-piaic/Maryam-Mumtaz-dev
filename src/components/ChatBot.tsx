"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMessageCircle,
  FiX,
  FiSend,
  FiCpu,
  FiMinus,
  FiCode,
  FiLayers,
  FiMail,
  FiBriefcase,
  FiChevronRight,
  FiZap,
  FiAward,
  FiHelpCircle,
  FiStar,
} from "react-icons/fi";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const capabilityCards = [
  { icon: FiCode, title: "Skills & Tech Stack", color: "from-taupe-500 to-taupe-700" },
  { icon: FiLayers, title: "AI & Projects", color: "from-taupe-400 to-taupe-600" },
  { icon: FiMail, title: "Contact & Hire", color: "from-sand-400 to-taupe-500" },
  { icon: FiBriefcase, title: "Experience", color: "from-taupe-600 to-taupe-800" },
];

const quickQuestions = [
  { icon: FiZap, text: "What are her top skills?" },
  { icon: FiAward, text: "Tell me about her projects" },
  { icon: FiHelpCircle, text: "How can I contact her?" },
  { icon: FiStar, text: "What's her experience?" },
];

function renderLine(line: string, key: string) {
  // Headings
  if (line.startsWith("### "))
    return <h4 key={key} className="font-bold text-sm mt-2 mb-0.5">{renderInline(line.slice(4))}</h4>;
  if (line.startsWith("## "))
    return <h3 key={key} className="font-bold text-base mt-2 mb-0.5">{renderInline(line.slice(3))}</h3>;
  if (line.startsWith("# "))
    return <h2 key={key} className="font-bold text-lg mt-2 mb-0.5">{renderInline(line.slice(2))}</h2>;
  // Bullet list
  if (/^[-•*]\s/.test(line))
    return <li key={key} className="ml-3 list-disc">{renderInline(line.replace(/^[-•*]\s/, ""))}</li>;
  // Numbered list
  if (/^\d+[.)]\s/.test(line))
    return <li key={key} className="ml-3 list-decimal">{renderInline(line.replace(/^\d+[.)]\s/, ""))}</li>;
  // Empty line
  if (line.trim() === "") return <br key={key} />;
  // Normal text
  return <p key={key} className="mb-0.5">{renderInline(line)}</p>;
}

function renderInline(text: string) {
  // Bold **text** and inline code `text`
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**"))
      return <strong key={i} className="font-bold">{part.slice(2, -2)}</strong>;
    if (part.startsWith("`") && part.endsWith("`"))
      return <code key={i} className="bg-sand-200 text-taupe-800 px-1 py-0.5 rounded text-xs">{part.slice(1, -1)}</code>;
    return <span key={i}>{part}</span>;
  });
}

function renderContent(content: string) {
  const lines = content.split("\n");
  return <div className="space-y-0">{lines.map((line, i) => renderLine(line, String(i)))}</div>;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const [hoveredMsg, setHoveredMsg] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open && !minimized) {
      textareaRef.current?.focus();
      setUnread(0);
    }
  }, [open, minimized]);

  const autoResize = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 100) + "px";
  }, []);

  const handleSend = async (text?: string) => {
    const msgText = text || input.trim();
    if (!msgText || loading) return;

    if (showWelcome) setShowWelcome(false);

    const userMsg: Message = { role: "user", content: msgText, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });
      const data = await res.json();
      const assistantMsg: Message = {
        role: "assistant",
        content: data.message || "Sorry, I couldn't respond.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      if (minimized || !open) setUnread((prev) => prev + 1);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const todayLabel = new Date().toLocaleDateString([], {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      {/* ===== Floating Button ===== */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.08, rotate: 5 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => {
              setOpen(true);
              setMinimized(false);
            }}
            className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] bg-gradient-to-br from-taupe-600 via-taupe-700 to-taupe-900 text-white rounded-full shadow-2xl shadow-taupe-900/25 flex items-center justify-center group cursor-pointer"
          >
            <FiMessageCircle size={26} />

            {/* Pulse ring 1 */}
            <motion.span
              className="absolute inset-0 rounded-full bg-sand-2000/30"
              animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            {/* Pulse ring 2 (staggered) */}
            <motion.span
              className="absolute inset-0 rounded-full bg-taupe-400/20"
              animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
            />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-taupe-900 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Chat with Maryam&apos;s AI
              <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-taupe-900 rotate-45" />
            </span>

            {/* Unread badge */}
            <AnimatePresence>
              {unread > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
                >
                  {unread}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ===== Chat Panel ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: minimized ? "auto" : "580px",
            }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="fixed bottom-6 right-6 max-sm:bottom-0 max-sm:right-0 max-sm:left-0 max-sm:w-full max-sm:rounded-t-3xl max-sm:rounded-b-none z-50 w-[360px] sm:w-[420px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-taupe-900/20 border border-taupe-200 flex flex-col overflow-hidden"
          >
            {/* ===== Header ===== */}
            <div className="relative bg-gradient-to-r from-taupe-700 via-taupe-800 to-taupe-900 text-white p-4 flex items-center justify-between flex-shrink-0 overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/5" />

              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30">
                  <FiCpu size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Maryam&apos;s AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        loading ? "bg-amber-400" : "bg-green-400"
                      } animate-pulse`}
                    />
                    {loading ? (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sand-300 text-xs"
                      >
                        Thinking...
                      </motion.span>
                    ) : (
                      <span className="text-sand-300 text-xs">Online</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 relative z-10">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMinimized(!minimized)}
                  className="w-8 h-8 rounded-lg hover:bg-white/15 flex items-center justify-center transition-colors"
                >
                  <FiMinus size={16} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-lg hover:bg-white/15 flex items-center justify-center transition-colors"
                >
                  <FiX size={16} />
                </motion.button>
              </div>
            </div>

            {!minimized && (
              <>
                {/* ===== Messages / Welcome ===== */}
                <div className="flex-1 overflow-y-auto bg-gradient-to-b from-sand-100 via-sand-50 to-white">
                  <AnimatePresence mode="wait">
                    {showWelcome ? (
                      /* ===== Welcome Screen ===== */
                      <motion.div
                        key="welcome"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="p-5 flex flex-col items-center"
                      >
                        {/* AI Icon */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.1 }}
                          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-taupe-500 to-taupe-700 flex items-center justify-center text-white mb-4 shadow-lg shadow-taupe-900/15"
                        >
                          <FiCpu size={28} />
                        </motion.div>

                        <motion.h4
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                          className="text-base font-bold text-taupe-900 mb-1"
                        >
                          Hi! I&apos;m Maryam&apos;s AI
                        </motion.h4>
                        <motion.p
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-sm text-taupe-600 text-center mb-5"
                        >
                          Ask me anything about her skills, projects, or experience.
                        </motion.p>

                        {/* Capability Cards 2x2 */}
                        <div className="grid grid-cols-2 gap-2.5 w-full mb-5">
                          {capabilityCards.map((card, i) => (
                            <motion.div
                              key={card.title}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.25 + i * 0.06 }}
                              className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-taupe-200 hover:border-taupe-400 hover:bg-sand-200/50 transition-colors"
                            >
                              <div
                                className={`w-8 h-8 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center text-white flex-shrink-0`}
                              >
                                <card.icon size={14} />
                              </div>
                              <span className="text-xs font-medium text-taupe-800 leading-tight">
                                {card.title}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Quick Questions List */}
                        <div className="w-full space-y-1.5">
                          <p className="text-xs font-medium text-taupe-600 mb-2 px-1">
                            Try asking:
                          </p>
                          {quickQuestions.map((q, i) => (
                            <motion.button
                              key={q.text}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + i * 0.06 }}
                              onClick={() => handleSend(q.text)}
                              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-taupe-700 hover:bg-sand-200 hover:text-taupe-900 transition-colors group text-left"
                            >
                              <q.icon
                                size={15}
                                className="text-taupe-500 flex-shrink-0"
                              />
                              <span className="flex-1">{q.text}</span>
                              <FiChevronRight
                                size={14}
                                className="text-taupe-300 group-hover:text-taupe-700 transition-colors flex-shrink-0"
                              />
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      /* ===== Messages ===== */
                      <motion.div
                        key="messages"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="p-4 space-y-3"
                      >
                        {/* Today pill */}
                        <div className="flex justify-center mb-2">
                          <span className="px-3 py-1 bg-sand-200 text-taupe-700 text-[10px] font-medium rounded-full">
                            {todayLabel}
                          </span>
                        </div>

                        {messages.map((msg, i) => (
                          <motion.div
                            key={i}
                            initial={{
                              opacity: 0,
                              x: msg.role === "user" ? 20 : -20,
                            }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            onMouseEnter={() => setHoveredMsg(i)}
                            onMouseLeave={() => setHoveredMsg(null)}
                            className={`flex gap-2.5 ${
                              msg.role === "user" ? "justify-end" : "justify-start"
                            }`}
                          >
                            {/* Assistant avatar */}
                            {msg.role === "assistant" && (
                              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-taupe-500 to-taupe-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                                <FiCpu size={14} />
                              </div>
                            )}

                            {/* Bubble */}
                            <div
                              className={`max-w-[78%] flex flex-col ${
                                msg.role === "user" ? "items-end" : "items-start"
                              }`}
                            >
                              <div
                                className={`px-3.5 py-2.5 text-sm leading-relaxed ${
                                  msg.role === "user"
                                    ? "bg-gradient-to-br from-taupe-700 to-taupe-800 text-white rounded-2xl rounded-tr-md shadow-sm"
                                    : "bg-white text-taupe-800 rounded-2xl rounded-tl-md border border-taupe-200 shadow-sm"
                                }`}
                              >
                                {renderContent(msg.content)}
                              </div>
                              {/* Hover timestamp */}
                              <AnimatePresence>
                                {hoveredMsg === i && (
                                  <motion.span
                                    initial={{ opacity: 0, y: -2 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -2 }}
                                    className="text-[10px] text-taupe-600 mt-1 px-1"
                                  >
                                    {formatTime(msg.timestamp)}
                                  </motion.span>
                                )}
                              </AnimatePresence>
                            </div>
                          </motion.div>
                        ))}

                        {/* Typing Indicator */}
                        {loading && (
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex gap-2.5"
                          >
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-taupe-500 to-taupe-700 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                              <FiCpu size={14} />
                            </div>
                            <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-md border border-taupe-200 shadow-sm flex items-center gap-2.5">
                              <div className="flex gap-1">
                                {[0, 1, 2].map((dot) => (
                                  <motion.span
                                    key={dot}
                                    className="w-1.5 h-1.5 rounded-full bg-taupe-400"
                                    animate={{
                                      scale: [1, 1.4, 1],
                                      opacity: [0.4, 1, 0.4],
                                    }}
                                    transition={{
                                      duration: 1.2,
                                      repeat: Infinity,
                                      delay: dot * 0.2,
                                      ease: "easeInOut",
                                    }}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-taupe-600">Thinking</span>
                            </div>
                          </motion.div>
                        )}

                        <div ref={messagesEndRef} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* ===== Input Area ===== */}
                <div className="p-3 border-t border-taupe-200 bg-white flex-shrink-0">
                  <div className="flex gap-2 items-end rounded-xl border border-taupe-200 bg-sand-50 px-3 py-2 focus-within:border-taupe-500 focus-within:ring-2 focus-within:ring-taupe-100 transition-all">
                    <textarea
                      ref={textareaRef}
                      value={input}
                      rows={1}
                      onChange={(e) => {
                        setInput(e.target.value);
                        autoResize();
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSend();
                        }
                      }}
                      placeholder="Ask about Maryam..."
                      className="flex-1 bg-transparent text-sm text-taupe-900 resize-none focus:outline-none max-h-[100px] leading-relaxed placeholder:text-taupe-500"
                      style={{ height: "auto", minHeight: "24px" }}
                    />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleSend()}
                      disabled={loading || !input.trim()}
                      className="w-8 h-8 bg-taupe-700 text-white rounded-lg hover:bg-taupe-800 transition-colors disabled:opacity-30 flex items-center justify-center flex-shrink-0"
                    >
                      <FiSend size={14} />
                    </motion.button>
                  </div>
                  <div className="flex items-center justify-between mt-1.5 px-1">
                    {input.length > 0 ? (
                      <span
                        className={`text-[10px] ${
                          input.length > 450 ? "text-taupe-700" : "text-taupe-500"
                        }`}
                      >
                        {input.length}/500
                      </span>
                    ) : (
                      <span />
                    )}
                    <span className="text-[10px] text-taupe-500">
                      Powered by GPT-4.1 Mini
                    </span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
