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
                "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm",
                "transition-all duration-300 hover:border-gray-300 hover:shadow-renthus-card-hover"
              )}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-gray-100 bg-renthus-surface icon-glow-orange">
                <Icon className="h-7 w-7 text-renthus-orange" />
              </div>
              <h3 className="text-lg font-semibold text-renthus-purple">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                {p.description}
              </p>
            </article>
          </FadeIn>
        );
      })}
    </div>
  );
}
