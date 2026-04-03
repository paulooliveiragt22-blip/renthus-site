import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Database, Smartphone } from "lucide-react";
import { InnerMain } from "@/components/layout/InnerMain";
import { PageHeader } from "@/components/layout/PageHeader";
import { solutionLinks } from "@/lib/nav";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Soluções — Renthus Tecnologia",
  description:
    "IA e chatbots, ERP integrado e apps mobile. Explore o que a Renthus constrói para o seu negócio.",
};

const icons = {
  "/solucoes/ia-chatbot": Bot,
  "/solucoes/erp-integrado": Database,
  "/solucoes/apps-mobile": Smartphone,
} as const;

const blurbs: Record<(typeof solutionLinks)[number]["href"], string> = {
  "/solucoes/ia-chatbot":
    "Assistentes no WhatsApp e na web, com fluxos inteligentes e transição suave para humanos quando fizer sentido.",
  "/solucoes/erp-integrado":
    "Pedidos, estoque, financeiro e canais de venda conectados — visão única da operação.",
  "/solucoes/apps-mobile":
    "Experiências nativas e híbridas com foco em performance e usabilidade.",
};

export default function SolucoesIndexPage() {
  return (
    <InnerMain>
      <PageHeader
        title="Soluções"
        description="Três frentes complementares para digitalizar atendimento, operação e presença nos dispositivos — sempre com a mesma identidade visual e rigor de engenharia."
      />

      <ul className="mt-14 grid gap-5 md:grid-cols-3">
        {solutionLinks.map((item) => {
          const Icon = icons[item.href];
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "group flex h-full flex-col rounded-2xl border border-white/10 p-6 shadow-card backdrop-blur-md transition-all duration-300",
                  "bg-gradient-to-br from-renthus-purple-light/[0.1] via-renthus-purple-dark/[0.5] to-[#06030a]",
                  "hover:border-renthus-orange/40 hover:shadow-[0_0_36px_-10px_rgba(255,107,0,0.3)]"
                )}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] icon-glow-orange">
                  <Icon className="h-6 w-6 text-renthus-orange" />
                </div>
                <h2 className="text-lg font-semibold text-zinc-50">
                  {item.label}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {blurbs[item.href]}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-renthus-orange">
                  Ver detalhes
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-zinc-500">
        Projetos web, landing pages e e-commerce sob medida entram pelo mesmo
        canal —{" "}
        <Link href="/contato" className="text-renthus-orange hover:underline">
          fale conosco em Contato
        </Link>
        .
      </p>
    </InnerMain>
  );
}
