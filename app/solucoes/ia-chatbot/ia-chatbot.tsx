import {
  BadgeCheck,
  BellRing,
  Bot,
  CalendarClock,
  Clock,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  UserPlus,
  Workflow,
} from "lucide-react";
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

const clinicPitch = {
  verticals:
    "Clínicas médicas e odontológicas, clínicas de estética, salões de beleza e negócios que trabalham com agendamentos.",
  lead: "Transforme seu WhatsApp na secretária mais eficiente que sua clínica já teve. Com nossa tecnologia de IA e API Oficial da Meta, sua clínica oferece atendimento humanizado e instantâneo 24 horas por dia.",
} as const;

const clinicFeatures = [
  {
    icon: CalendarClock,
    title: "Agendamento e gestão automática",
    text: "O paciente consulta horários, agenda, desmarca ou remarca em segundos, sem intervenção humana.",
  },
  {
    icon: BellRing,
    title: "Redução de faltas (no-show)",
    text: "Disparo automático de lembretes com antecedência para confirmação de presença.",
  },
  {
    icon: UserPlus,
    title: "Resgate e prospecção ativa",
    text: "IA que identifica pacientes inativos para oferecer retornos e capta novos leads qualificados diretamente pelas mensagens.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança total",
    text: "Operamos 100% via API Oficial, garantindo que seu número nunca seja banido e que os dados dos pacientes estejam protegidos.",
  },
] as const;

const practicalBenefits = [
  {
    icon: Clock,
    title: "Disponibilidade 24/7",
    text: "Atenda o paciente que decide marcar uma consulta às 22h.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    text: "A IA entende contextos e responde com empatia, não apenas com comandos numéricos.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    text: "Atenda 10 ou 1.000 pacientes simultaneamente sem aumentar sua equipe.",
  },
  {
    icon: BadgeCheck,
    title: "Conformidade",
    text: "Totalmente integrado às normas da Meta para o setor de saúde.",
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
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <Icon className="h-8 w-8 text-renthus-orange" />
              <h2 className="mt-4 text-lg font-semibold text-renthus-purple">
                {p.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {p.text}
              </p>
            </div>
          );
        })}
      </div>

      <section
        className="mt-20 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10"
        aria-labelledby="ia-chatbot-clinicas-heading"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-renthus-orange">
          Saúde, estética e agenda
        </p>
        <h2
          id="ia-chatbot-clinicas-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-renthus-purple sm:text-3xl"
        >
          {clinicPitch.verticals}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
          {clinicPitch.lead}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {clinicFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-gray-100 bg-renthus-surface/80 p-5 sm:p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm">
                  <Icon className="h-5 w-5 text-renthus-orange" aria-hidden />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-renthus-purple">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section
        className="mt-16"
        aria-labelledby="ia-chatbot-beneficios-praticos"
      >
        <h2
          id="ia-chatbot-beneficios-praticos"
          className="text-center text-2xl font-bold tracking-tight text-renthus-purple sm:text-3xl"
        >
          Benefícios práticos
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {practicalBenefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <Icon
                  className="h-8 w-8 text-renthus-orange"
                  aria-hidden
                />
                <h3 className="mt-4 text-lg font-semibold text-renthus-purple">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <SolutionCTA />
    </InnerMain>
  );
}
