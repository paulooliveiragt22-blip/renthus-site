import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 text-center text-sm text-zinc-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between sm:text-left">
        <p>
          © {new Date().getFullYear()} Renthus Tecnologia. Todos os direitos
          reservados.
        </p>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="/sobre" className="hover:text-renthus-orange transition-colors">
            Sobre
          </Link>
          <Link href="/contato" className="hover:text-renthus-orange transition-colors">
            Contato
          </Link>
          <Link
            href="/solucoes/ia-chatbot"
            className="hover:text-renthus-orange transition-colors"
          >
            Soluções
          </Link>
        </nav>
      </div>
    </footer>
  );
}
