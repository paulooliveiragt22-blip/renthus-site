"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { solutionLinks } from "@/lib/nav";

const clientAreaUrl =
  process.env.NEXT_PUBLIC_CLIENT_AREA_URL ??
  "https://renthus-chat-erp.vercel.app/";

function NavLink({
  href,
  children,
  onClick,
  active,
  className,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        active
          ? "text-renthus-orange"
          : "text-zinc-300 hover:text-renthus-orange",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isSolutionActive = solutionLinks.some((l) => pathname === l.href);
  const isHome = pathname === "/";

  const closeDropdown = useCallback(() => setSolutionsOpen(false), []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileSolutionsOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

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
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-zinc-100"
        >
          <span className="bg-gradient-to-br from-renthus-purple-light to-renthus-orange bg-clip-text text-transparent">
            Renthus
          </span>
          <span className="hidden font-medium text-zinc-400 sm:inline">
            Tecnologia
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          <NavLink href="/" active={isHome}>
            Home
          </NavLink>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
              onClick={() => setSolutionsOpen((v) => !v)}
              className={cn(
                "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isSolutionActive || solutionsOpen
                  ? "text-renthus-orange"
                  : "text-zinc-300 hover:text-renthus-orange"
              )}
            >
              Soluções
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  solutionsOpen && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-xl border border-white/10 bg-[#12081c]/95 py-2 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.65)] backdrop-blur-xl"
                >
                  <Link
                    href="/solucoes"
                    onClick={closeDropdown}
                    className="block px-4 py-2.5 text-sm text-zinc-300 hover:bg-white/5 hover:text-renthus-orange"
                  >
                    Visão geral
                  </Link>
                  <div className="mx-2 border-t border-white/10" />
                  {solutionLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={closeDropdown}
                      className={cn(
                        "block px-4 py-2.5 text-sm hover:bg-white/5 hover:text-renthus-orange",
                        pathname === l.href
                          ? "text-renthus-orange"
                          : "text-zinc-300"
                      )}
                    >
                      {l.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink href="/sobre" active={pathname === "/sobre"}>
            Sobre
          </NavLink>
          <NavLink href="/contato" active={pathname === "/contato"}>
            Contato
          </NavLink>
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
              <NavLink
                href="/"
                onClick={() => setOpen(false)}
                active={isHome}
                className="py-3 text-zinc-200 hover:bg-white/5"
              >
                Home
              </NavLink>
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium text-zinc-200 hover:bg-white/5 hover:text-renthus-orange"
              >
                Soluções
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform",
                    mobileSolutionsOpen && "rotate-180"
                  )}
                />
              </button>
              {mobileSolutionsOpen && (
                <div className="ml-2 flex flex-col border-l border-white/10 pl-3">
                  <Link
                    href="/solucoes"
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg py-2 text-sm",
                      pathname === "/solucoes"
                        ? "text-renthus-orange"
                        : "text-zinc-400 hover:text-renthus-orange"
                    )}
                  >
                    Visão geral
                  </Link>
                  {solutionLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-lg py-2 text-sm",
                        pathname === l.href
                          ? "text-renthus-orange"
                          : "text-zinc-400 hover:text-renthus-orange"
                      )}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
              <NavLink
                href="/sobre"
                onClick={() => setOpen(false)}
                active={pathname === "/sobre"}
                className="py-3 text-zinc-200 hover:bg-white/5"
              >
                Sobre
              </NavLink>
              <NavLink
                href="/contato"
                onClick={() => setOpen(false)}
                active={pathname === "/contato"}
                className="py-3 text-zinc-200 hover:bg-white/5"
              >
                Contato
              </NavLink>
              <Button
                variant="cta"
                className="mt-2 w-full"
                size="md"
                asChild
              >
                <a
                  href={clientAreaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Área do Cliente
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
