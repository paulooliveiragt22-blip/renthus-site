import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SolutionCTA() {
  return (
    <div className="mt-20 rounded-2xl border border-white/10 bg-renthus-purple-dark/35 px-6 py-10 text-center backdrop-blur-md sm:px-10">
      <p className="text-lg font-medium text-zinc-200">
        Quer aplicar isso no seu negócio?
      </p>
      <p className="mx-auto mt-2 max-w-lg text-sm text-zinc-400">
        Conte-nos seu cenário e montamos um plano sob medida — da prova de
        conceito à operação em produção.
      </p>
      <Button variant="cta" size="lg" className="mt-6" asChild>
        <Link href="/contato">Falar com a Renthus</Link>
      </Button>
    </div>
  );
}
