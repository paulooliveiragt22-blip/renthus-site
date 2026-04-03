"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

const seed = [
  { role: "assistant" as const, text: "Olá! Sou a IA Renthus. Como posso ajudar hoje?" },
  { role: "user" as const, text: "Quero saber mais sobre chatbot para delivery." },
  {
    role: "assistant" as const,
    text: "Perfeito — integramos cardápio, pedidos e pagamentos no WhatsApp com handoff para sua equipe quando precisar.",
  },
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "flex h-[min(420px,70vh)] w-[min(100vw-2rem,380px)] flex-col overflow-hidden rounded-2xl",
              "border border-white/12 bg-[#12081c]/95 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.75)] backdrop-blur-xl"
            )}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-renthus-purple to-renthus-orange">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-100">Renthus IA</p>
                  <p className="text-xs text-zinc-500">Simulação · preview</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
                aria-label="Fechar chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
              {seed.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                    m.role === "assistant"
                      ? "self-start border border-white/8 bg-renthus-purple-dark/60 text-zinc-200"
                      : "self-end bg-gradient-to-br from-[#FF8C00]/90 to-[#FF4500] text-white"
                  )}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 p-3">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Digite uma mensagem…"
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-renthus-orange/40 focus:outline-none focus:ring-1 focus:ring-renthus-orange/30"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setInput("");
                  }}
                />
                <button
                  type="button"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF8C00] to-[#FF4500] text-white shadow-orange-glow transition hover:opacity-95"
                  aria-label="Enviar"
                  onClick={() => setInput("")}
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full",
          "bg-gradient-to-br from-[#FF8C00] to-[#FF4500] text-white shadow-orange-glow-lg",
          "ring-4 ring-[#0f0716]/80"
        )}
        aria-label={open ? "Fechar assistente" : "Abrir assistente"}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  );
}
