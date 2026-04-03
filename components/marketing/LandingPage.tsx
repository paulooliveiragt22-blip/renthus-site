"use client";

import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { BentoGrid } from "./BentoGrid";
import { ChatWidget } from "./ChatWidget";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-renthus-radial font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
      </main>
      <footer className="border-t border-white/10 px-4 py-10 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Renthus Tecnologia. Todos os direitos reservados.</p>
      </footer>
      <ChatWidget />
    </div>
  );
}
