import Link from "next/link";
import { InnerMain } from "@/components/layout/InnerMain";
import { PageHeader } from "@/components/layout/PageHeader";
import { AppsMobileShowcase } from "@/components/marketing/AppsMobileShowcase";
import { SolutionCTA } from "@/components/marketing/SolutionCTA";
import { Button } from "@/components/ui/button";

export default function AppsMobilePage() {
  return (
    <InnerMain>
      <PageHeader
        title="Apps mobile"
        description="Do protótipo à loja: construímos aplicativos nativos e híbridos com interface clara, animações conscientes e arquitetura preparada para crescer com o uso."
      />

      <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-gray-600 sm:text-lg">
          Unimos{" "}
          <strong className="font-semibold text-renthus-purple">design intuitivo</strong>{" "}
          e{" "}
          <strong className="font-semibold text-renthus-purple">
            engenharia de performance
          </strong>{" "}
          para que cada tela carregue rápido, guie o usuário sem fricção e suporte
          funcionalidades críticas offline ou com rede instável quando o projeto
          exige.
        </p>
        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/contato">Briefing do seu app</Link>
          </Button>
        </div>
      </section>

      <AppsMobileShowcase />

      <SolutionCTA />
    </InnerMain>
  );
}
