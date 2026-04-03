import type { Metadata } from "next";
import { InnerMain } from "@/components/layout/InnerMain";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/marketing/ContactForm";

export const metadata: Metadata = {
  title: "Contato — Renthus Tecnologia",
  description:
    "Fale com a Renthus: projetos web, chatbots, ERP, apps e soluções de IA.",
};

export default function ContatoPage() {
  return (
    <InnerMain>
      <PageHeader
        title="Contato"
        description="Conte-nos o desafio — retornamos com próximos passos, prazos realistas e uma proposta alinhada ao seu estágio de maturidade digital."
      />
      <div className="mt-14">
        <ContactForm />
      </div>
    </InnerMain>
  );
}
