import { Bot, MessageCircle, Workflow } from "lucide-react";
import { InnerMain } from "@/components/layout/InnerMain";
import { PageHeader } from "@/components/layout/PageHeader";
import { SolutionCTA } from "@/components/marketing/SolutionCTA";

const points = [
  {
    icon: MessageCircle,
    title: "Onde seu cliente já está",
    text: "Experiência nativa no WhatsApp e widgets na web, com histórico e contexto preservados entre canais.",
  },
  {
    icon: Workflow,
    title: "Fluxos que evoluem",
    text: "Do FAQ ao pedido completo: ramificações, validação de dados e gatilhos para CRM, ERP ou planilhas.",
  },
  {
    icon: Bot,
    title: "IA com contexto do negócio",
    text: "Respostas alinhadas à sua operação — com limites claros, tom de voz da marca e escala para humano quando necessário.",
  },
] as const;

export default function IaChatbotPage() {
  return (
    <InnerMain>
      <PageHeader
        title="IA & Chatbot"
        description="Automatize conversas sem perder o toque humano. Integramos linguagem natural, regras de negócio e sistemas que você já usa."
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
