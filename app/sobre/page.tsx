import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Database, Sparkles } from "lucide-react";
import { InnerMain } from "@/components/layout/InnerMain";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sobre — Renthus Tecnologia",
  description:
    "Conheça a Renthus: produtos digitais, stack moderna e foco em escalabilidade com Next.js, Supabase e IA.",
};

const stack = [
  {
    name: "Next.js",
    icon: Code2,
    blurb:
      "Interfaces rápidas, SEO sólido e deploy global — a base ideal para sites e painéis que precisam performar.",
  },
  {
    name: "Supabase",
    icon: Database,
    blurb:
      "Banco Postgres gerenciado, autenticação e APIs em tempo real para backends seguros sem reinventar a roda.",
  },
  {
    name: "Inteligência Artificial",
    icon: Sparkles,
    blurb:
      "Assistentes, automações e copilots acoplados ao seu processo — com governança e evolução contínua.",
  },
] as const;

export default function SobrePage() {
  return (
    <InnerMain>
      <PageHeader
        title="Sobre a Renthus"
        description="Unimos estratégia, engenharia e design para levar operações reais ao digital — com a mesma atenção ao detalhe em cada camada do produto."
      />

      <section className="mx-auto mt-16 max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-renthus-purple sm:text-3xl">
          O que nos move
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Acreditamos que tecnologia boa é aquela que some na rotina: pedidos
          fluem, equipes respondem mais rápido e decisões passam a ser guiadas
          por dados. Por isso entregamos desde o primeiro contato com o cliente
          (chatbots e sites) até o coração da operação (ERP e integrações).
        </p>
      </section>

      <section className="mt-20">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-renthus-purple sm:text-3xl">
            Nossa stack
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Usamos tecnologias de ponta como{" "}
            <strong className="font-semibold text-gray-900">Next.js</strong>,{" "}
            <strong className="font-semibold text-gray-900">Supabase</strong> e{" "}
            <strong className="font-semibold text-gray-900">
              Inteligência Artificial
            </strong>{" "}
            para garantir escalabilidade, segurança e tempo de resposta à altura
            do seu crescimento.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {stack.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.name}
                className="flex flex-col border-gray-200 p-0 ring-1 ring-renthus-orange/15"
              >
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-renthus-surface">
                    <Icon className="h-5 w-5 text-renthus-orange" />
                  </div>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-base">{item.blurb}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <div className="mt-16 text-center">
        <Button variant="cta" size="lg" asChild>
          <Link href="/contato">Vamos conversar</Link>
        </Button>
      </div>
    </InnerMain>
  );
}
