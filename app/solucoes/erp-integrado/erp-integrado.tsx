import { BarChart3, Link2, Package } from "lucide-react";
import { InnerMain } from "@/components/layout/InnerMain";
import { PageHeader } from "@/components/layout/PageHeader";
import { SolutionCTA } from "@/components/marketing/SolutionCTA";

const points = [
  {
    icon: Package,
    title: "Operação centralizada",
    text: "Pedidos, estoque e cadastros alinhados — menos planilha paralela e menos retrabalho entre setores.",
  },
  {
    icon: Link2,
    title: "Integrações nativas",
    text: "Conectamos canais de venda, chatbot e gateways de pagamento para o dado fluir até quem decide.",
  },
  {
    icon: BarChart3,
    title: "Visibilidade em tempo real",
    text: "Indicadores e alertas para acompanhar gargalos, margem e saúde do caixa sem esperar fechamento manual.",
  },
] as const;

export default function ErpIntegradoPage() {
  return (
    <InnerMain>
      <PageHeader
        title="ERP integrado"
        description="Gestão completa pensada para quem vende nos canais digitais: do primeiro clique no WhatsApp até a nota e o financeiro."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {points.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-renthus-purple-light/[0.08] via-renthus-purple-dark/[0.45] to-[#07030c] p-6 backdrop-blur-md"
            >
              <Icon className="h-8 w-8 text-renthus-orange" />
              <h2 className="mt-4 text-lg font-semibold text-zinc-100">
                {p.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {p.text}
              </p>
            </div>
          );
        })}
      </div>

      <SolutionCTA />
    </InnerMain>
  );
}
