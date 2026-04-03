"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#inicio", label: "Home" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#chat-ia", label: "Chat IA" },
  { href: "#sobre", label: "Sobre" },
] as const;

const clientAreaUrl =
  process.env.NEXT_PUBLIC_CLIENT_AREA_URL ?? "https://app.renthus.com.br/login";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 z-50 w-full border-b border-white/[0.08]",
        "bg-[#0f0716]/55 backdrop-blur-md supports-[backdrop-filter]:bg-[#0f0716]/40"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="#inicio"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-zinc-100"
        >
          <span className="bg-gradient-to-br from-renthus-purple-light to-renthus-orange bg-clip-text text-transparent">
            Renthus
          </span>
          <span className="hidden font-medium text-zinc-400 sm:inline">
            Tecnologia
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-renthus-orange"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="cta" size="sm" asChild>
            <a href={clientAreaUrl} target="_blank" rel="noopener noreferrer">
              Área do Cliente
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-zinc-300 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-[#0f0716]/95 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-200 hover:bg-white/5 hover:text-renthus-orange"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={clientAreaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
                onClick={() => setOpen(false)}
              >
                <Button variant="cta" className="w-full" size="md">
                  Área do Cliente
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
