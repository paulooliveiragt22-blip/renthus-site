import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { InnerMain } from "@/components/layout/InnerMain";
import {
  exclusaoDadosContent,
  getWhatsAppExclusaoUrl,
} from "@/lib/legal/exclusao-dados-content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Exclusão de Dados — Renthus",
  description:
    "Solicite a exclusão dos seus dados pessoais conforme a LGPD. Renthus Tecnologia da Informação Ltda.",
};

const steps = [
  {
    n: 1,
    title: "Envie sua solicitação",
    body: "Entre em contato conosco pelo WhatsApp ou e-mail informando que deseja excluir seus dados. Identifique-se com o nome e o número de telefone ou e-mail cadastrado na plataforma.",
  },
  {
    n: 2,
    title: "Confirmação de identidade",
    body: "Para sua segurança, poderemos solicitar uma confirmação de identidade antes de processar a exclusão, garantindo que apenas o titular dos dados possa solicitar a remoção.",
  },
  {
    n: 3,
    title: "Processamento em até 15 dias úteis",
    body: "Após a confirmação, seus dados serão excluídos ou anonimizados em até 15 dias úteis. Você receberá uma confirmação quando o processo for concluído.",
  },
] as const;

const excluidos = [
  "Dados de cadastro (nome, e-mail, telefone);",
  "Histórico de pedidos e transações;",
  "Mensagens e conversas no chatbot;",
  "Preferências e configurações da conta;",
  "Dados de localização armazenados.",
] as const;

export default function ExclusaoDeDadosPage() {
  const waExclusao = getWhatsAppExclusaoUrl();

  return (
    <InnerMain className="pb-28">
      <article className="mx-auto max-w-3xl">
        <header className="mb-10 border-b border-white/10 pb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-renthus-orange">
            Seus dados
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Solicitação de Exclusão de Dados
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-zinc-500">
            Conforme exigido pela LGPD (Lei 13.709/2020) e pelos requisitos da
            plataforma Meta · {exclusaoDadosContent.empresaLegal} · CNPJ{" "}
            {exclusaoDadosContent.cnpj}
          </p>
        </header>

        <p className="mb-10 text-base leading-relaxed text-zinc-400">
          A Renthus respeita seu direito à privacidade e ao controle sobre seus
          dados pessoais. Se você deseja solicitar a exclusão dos seus dados da
          nossa plataforma, siga as instruções abaixo.
        </p>

        <h2 className="mb-5 border-l-[3px] border-renthus-orange pl-3.5 font-semibold tracking-tight text-zinc-100">
          Como solicitar a exclusão
        </h2>
        <div className="mb-12 flex flex-col gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6"
            >
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-renthus-orange/20",
                  "bg-renthus-orange/10 font-semibold text-sm text-renthus-orange"
                )}
              >
                {s.n}
              </div>
              <div>
                <h3 className="font-semibold text-zinc-100">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 border-l-[3px] border-renthus-orange pl-3.5 font-semibold tracking-tight text-zinc-100">
          O que será excluído
        </h2>
        <ul className="mb-10 list-disc space-y-2 pl-5 text-sm text-zinc-400 marker:text-renthus-orange">
          {excluidos.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="mb-4 border-l-[3px] border-renthus-orange pl-3.5 font-semibold tracking-tight text-zinc-100">
          O que pode ser retido
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-zinc-400">
          Alguns dados podem ser retidos por obrigação legal, mesmo após a
          solicitação de exclusão:
        </p>
        <ul className="mb-10 list-disc space-y-2 pl-5 text-sm text-zinc-400 marker:text-renthus-orange">
          <li>
            Registros financeiros e fiscais — retidos por{" "}
            <strong className="font-medium text-zinc-200">5 anos</strong>{" "}
            conforme legislação tributária;
          </li>
          <li>
            Logs de acesso — retidos por{" "}
            <strong className="font-medium text-zinc-200">6 meses</strong>{" "}
            conforme Marco Civil da Internet;
          </li>
          <li>Dados necessários para defesa em processos judiciais em curso.</li>
        </ul>

        <div className="mb-10 rounded-xl border border-renthus-orange/15 bg-renthus-orange/[0.04] p-5 sm:p-6">
          <p className="text-sm leading-relaxed text-zinc-400">
            A exclusão dos dados é{" "}
            <strong className="font-medium text-zinc-200">irreversível</strong>.
            Após a confirmação, sua conta será encerrada e não será possível
            recuperar o histórico de pedidos ou avaliações.
          </p>
        </div>

        <h2 className="mb-5 border-l-[3px] border-renthus-orange pl-3.5 font-semibold tracking-tight text-zinc-100">
          Entre em contato
        </h2>
        <div className="mb-12 flex flex-col gap-4 rounded-2xl border border-renthus-orange/20 bg-renthus-orange/[0.06] p-6 sm:p-8">
          <div>
            <h3 className="font-semibold text-zinc-100">
              Solicitar exclusão de dados
            </h3>
            <p className="mt-1 text-sm text-zinc-500">
              {exclusaoDadosContent.horarioAtendimento}
            </p>
          </div>
          <div className="flex flex-wrap items-start gap-3">
            <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#25D366]" />
            <div>
              <a
                href={waExclusao}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-renthus-orange hover:underline"
              >
                {exclusaoDadosContent.telefoneExibicao}
              </a>
              <p className="text-xs text-zinc-500">WhatsApp — forma mais rápida</p>
            </div>
          </div>
          <div className="flex flex-wrap items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-renthus-orange" />
            <div>
              <a
                href={`mailto:${exclusaoDadosContent.emailPrivacidade}`}
                className="font-medium text-renthus-orange hover:underline"
              >
                {exclusaoDadosContent.emailPrivacidade}
              </a>
              <p className="text-xs text-zinc-500">
                E-mail — {exclusaoDadosContent.emailPrazoResposta}
              </p>
            </div>
          </div>
          <a
            href={waExclusao}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex w-fit items-center justify-center gap-2 rounded-xl px-7 py-3.5",
              "bg-[#25D366] text-sm font-semibold text-white transition hover:bg-[#1eb358]"
            )}
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar via WhatsApp
          </a>
        </div>

        <h2 className="mb-4 border-l-[3px] border-renthus-orange pl-3.5 font-semibold tracking-tight text-zinc-100">
          Mais informações
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-zinc-400">
          Para entender como tratamos seus dados, consulte nossa{" "}
          <Link
            href="/privacidade"
            className="font-medium text-renthus-orange hover:underline"
          >
            Política de Privacidade
          </Link>{" "}
          completa ou entre em contato com nosso Encarregado de Dados (DPO)
          pelo e-mail{" "}
          <strong className="font-medium text-zinc-200">
            {exclusaoDadosContent.emailPrivacidade}
          </strong>
          .
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          Você também pode registrar reclamações junto à{" "}
          <strong className="font-medium text-zinc-200">
            Autoridade Nacional de Proteção de Dados (ANPD)
          </strong>{" "}
          em{" "}
          <a
            href={exclusaoDadosContent.anpdUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-renthus-orange hover:underline"
          >
            www.gov.br/anpd
          </a>
          .
        </p>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} {exclusaoDadosContent.empresaLegal} ·
            CNPJ {exclusaoDadosContent.cnpj} ·{" "}
            <Link href="/termos" className="text-renthus-orange hover:underline">
              Termos de Uso
            </Link>{" "}
            ·{" "}
            <Link
              href="/privacidade"
              className="text-renthus-orange hover:underline"
            >
              Privacidade
            </Link>
          </p>
        </div>
      </article>
    </InnerMain>
  );
}
