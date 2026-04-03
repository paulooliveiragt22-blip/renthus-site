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
              "border border-gray-200 bg-white shadow-lg"
            )}
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-renthus-purple">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Renthus IA</p>
                  <p className="text-xs text-gray-500">Simulação · preview</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                aria-label="Fechar chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-3 overflow-y-auto bg-renthus-surface p-4">
              {seed.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                    m.role === "assistant"
                      ? "self-start border border-gray-200 bg-white text-gray-700 shadow-sm"
                      : "self-end bg-renthus-orange text-white shadow-sm"
                  )}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 bg-white p-3">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Digite uma mensagem…"
                  className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-renthus-orange/50 focus:outline-none focus:ring-2 focus:ring-renthus-orange/20"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setInput("");
                  }}
                />
                <button
                  type="button"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-renthus-orange text-white shadow-sm transition hover:bg-renthus-orange-hover"
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
          "bg-renthus-orange text-white shadow-md ring-4 ring-white",
          "transition hover:bg-renthus-orange-hover"
        )}
        aria-label={open ? "Fechar assistente" : "Abrir assistente"}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  );
}
