"use client";

import { Layers, Smartphone, Zap } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: Smartphone,
    title: "Nativo e multiplataforma",
    description:
      "Apps nativos (iOS e Android) e soluções híbridas com código compartilhado, mantendo sensação fluida em cada dispositivo.",
  },
  {
    icon: Layers,
    title: "Arquitetura em camadas",
    description:
      "Separação clara entre interface, lógica e dados — facilita evolução, testes e integração com APIs e backends modernos.",
  },
  {
    icon: Zap,
    title: "Performance em primeiro lugar",
    description:
      "Tempo de abertura, animações leves e uso eficiente de rede e bateria para uma experiência que seus usuários sentem no dia a dia.",
  },
] as const;

export function AppsMobileShowcase() {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-3">
      {pillars.map((p, i) => {
        const Icon = p.icon;
        return (
          <FadeIn key={p.title} delay={i * 0.08}>
            <article
              className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10",
                "bg-gradient-to-br from-renthus-purple-light/[0.12] via-renthus-purple-dark/[0.5] to-[#06030a] p-6 shadow-card backdrop-blur-md",
                "transition-all duration-300 hover:border-renthus-orange/35 hover:shadow-[0_0_40px_-12px_rgba(255,107,0,0.25)]"
              )}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-renthus-orange/10 blur-2xl transition-opacity group-hover:opacity-100"
              />
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] icon-glow-orange">
                <Icon className="h-7 w-7 text-renthus-orange" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-50">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {p.description}
              </p>
            </article>
          </FadeIn>
        );
      })}
    </div>
  );
}
