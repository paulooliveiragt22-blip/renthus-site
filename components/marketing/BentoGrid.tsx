"use client";

import {
  Bot,
  BrainCircuit,
  Globe,
  LayoutDashboard,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FadeIn } from "./FadeIn";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Sites",
    description:
      "Presença digital rápida, responsiva e otimizada para conversão e SEO.",
    icon: Globe,
    className: "md:col-span-2 md:row-span-2 min-h-[240px]",
    featured: true,
  },
  {
    title: "Chatbots",
    description:
      "Atendimento 24/7 no WhatsApp e web, com fluxos inteligentes e handoff humano.",
    icon: Bot,
    className: "md:col-span-2 min-h-[180px]",
    featured: true,
  },
  {
    title: "ERP integrado",
    description:
      "Pedidos, estoque, financeiro e operação em um só lugar, conectado ao seu canal de vendas.",
    icon: LayoutDashboard,
    className: "md:col-span-2 min-h-[200px]",
    featured: false,
  },
  {
    title: "Soluções de IA",
    description:
      "Automação, análise de dados e copilots treinados no contexto do seu negócio.",
    icon: BrainCircuit,
    className: "md:col-span-4 min-h-[180px]",
    featured: true,
  },
] as const;

export function BentoGrid() {
  return (
    <section
      id="solucoes"
      className="scroll-mt-24 px-4 py-20 sm:px-6"
    >
      <FadeIn className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            O que construímos para você
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Produtos e serviços em grade modular — estilo Linear, foco em clareza
            e performance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn
                key={item.title}
                delay={i * 0.06}
                className={cn("h-full", item.className)}
              >
                <Card
                  className={cn(
                    "flex h-full flex-col p-0",
                    item.featured && "ring-1 ring-renthus-orange/15"
                  )}
                >
                  <CardHeader className="flex flex-row items-start gap-4 pb-2">
                    <div
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]",
                        item.featured && "icon-glow-orange"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-6 w-6",
                          item.featured
                            ? "text-renthus-orange"
                            : "text-renthus-purple-light"
                        )}
                      />
                    </div>
                    <div className="min-w-0">
                      <CardTitle>{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn className="mx-auto mt-20 max-w-6xl" delay={0.12}>
        <div
          id="chat-ia"
          className="scroll-mt-24 rounded-2xl border border-white/10 bg-renthus-purple-dark/40 p-8 backdrop-blur-md sm:p-12"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-zinc-100">
                Chat IA Renthus
              </h3>
              <p className="mt-2 max-w-xl text-zinc-400">
                Experimente o assistente no canto da tela — é um preview da
                experiência que seus clientes podem ter no dia a dia.
              </p>
            </div>
            <Bot className="icon-glow-orange hidden h-16 w-16 text-renthus-orange md:block" />
          </div>
        </div>
      </FadeIn>

      <FadeIn className="mx-auto mt-16 max-w-3xl text-center" delay={0.08}>
        <div id="sobre" className="scroll-mt-24">
          <h3 className="text-2xl font-bold text-zinc-100">Sobre a Renthus</h3>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Somos uma empresa de tecnologia focada em produtos digitais de
            alto impacto: da primeira conversa com o cliente até a operação
            completa no ERP. Segurança, escalabilidade e design moderno guiam
            cada entrega.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
