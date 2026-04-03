"use client";

import Link from "next/link";
import { Bot, BrainCircuit, Database, Globe } from "lucide-react";
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
    title: "Ecossistema de IA",
    description: "Automação inteligente para seu negócio.",
    icon: BrainCircuit,
    href: "/solucoes/ia-chatbot",
    className: "min-h-[220px]",
    featured: true,
  },
  {
    title: "ERP com Chatbot",
    description: "Gestão completa integrada ao WhatsApp.",
    icon: Database,
    href: "/solucoes/erp-integrado",
    className: "min-h-[220px]",
    featured: true,
  },
  {
    title: "Desenvolvimento High-End",
    description: "Sites que vendem 24h por dia.",
    icon: Globe,
    href: "/contato",
    className: "min-h-[220px]",
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
          <h2 className="text-3xl font-bold tracking-tight text-renthus-purple sm:text-4xl">
            O que construímos para você
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Produtos e serviços em grade modular — estilo Linear, foco em clareza
            e performance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
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
                    "group flex h-full flex-col p-0",
                    item.featured && "ring-1 ring-renthus-orange/20"
                  )}
                >
                  <Link
                    href={item.href}
                    className="flex h-full min-h-0 flex-col rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-renthus-orange/50 focus-visible:ring-offset-2 focus-visible:ring-offset-renthus-surface"
                  >
                  <CardHeader className="flex flex-row items-start gap-4 pb-2">
                    <div
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-renthus-surface",
                        item.featured && "icon-glow-orange"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-6 w-6",
                          item.featured
                            ? "text-renthus-orange"
                            : "text-renthus-purple"
                        )}
                      />
                    </div>
                    <div className="min-w-0">
                      <CardTitle>{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-base group-hover:text-gray-700">
                      {item.description}
                    </CardDescription>
                    <span className="mt-4 inline-block text-sm font-semibold text-renthus-orange hover:underline">
                      Saiba mais →
                    </span>
                  </CardContent>
                  </Link>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn className="mx-auto mt-20 max-w-6xl" delay={0.12}>
        <div
          id="chat-ia"
          className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-12"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-renthus-purple">
                Chat IA Renthus
              </h3>
              <p className="mt-2 max-w-xl text-gray-600">
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
          <h3 className="text-2xl font-bold text-renthus-purple">Sobre a Renthus</h3>
          <p className="mt-4 leading-relaxed text-gray-600">
            Somos uma empresa de tecnologia focada em produtos digitais de
            alto impacto: da primeira conversa com o cliente até a operação
            completa no ERP. Segurança, escalabilidade e design moderno guiam
            cada entrega.
          </p>
          <Link
            href="/sobre"
            className="mt-6 inline-block text-sm font-semibold text-renthus-orange hover:underline"
          >
            Conheça nossa história e stack →
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
