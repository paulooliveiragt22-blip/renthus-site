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
                  "group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300",
                  "hover:border-gray-300 hover:shadow-renthus-card-hover"
                )}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-100 bg-renthus-surface icon-glow-orange">
                  <Icon className="h-6 w-6 text-renthus-orange" />
                </div>
                <h2 className="text-lg font-semibold text-renthus-purple">
                  {item.label}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {blurbs[item.href]}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-renthus-orange">
                  Ver detalhes
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-gray-500">
        Projetos web, landing pages e e-commerce sob medida entram pelo mesmo
        canal —{" "}
        <Link href="/contato" className="font-medium text-renthus-orange hover:underline">
          fale conosco em Contato
        </Link>
        .
      </p>
    </InnerMain>
  );
}
