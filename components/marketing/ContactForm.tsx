"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contato@renthus.com.br";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const subject = `Contato site — ${name || "Visitante"}`;
    const body = `${message}\n\n---\n${name}\n${email}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl space-y-5 rounded-2xl border border-white/10 bg-gradient-to-br from-renthus-purple-light/[0.08] via-renthus-purple-dark/[0.45] to-[#07030c] p-6 shadow-card backdrop-blur-md sm:p-8"
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-white/10 bg-[#0f0716]/60 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:border-renthus-orange/50 focus:outline-none focus:ring-2 focus:ring-renthus-orange/25"
          placeholder="Seu nome"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-white/10 bg-[#0f0716]/60 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:border-renthus-orange/50 focus:outline-none focus:ring-2 focus:ring-renthus-orange/25"
          placeholder="voce@empresa.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-lg border border-white/10 bg-[#0f0716]/60 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:border-renthus-orange/50 focus:outline-none focus:ring-2 focus:ring-renthus-orange/25"
          placeholder="Conte-nos sobre seu projeto ou dúvida."
        />
      </div>
      <Button type="submit" variant="cta" size="lg" className="w-full sm:w-auto">
        <Send className="h-4 w-4" />
        Enviar por e-mail
      </Button>
      {sent ? (
        <p className="text-sm text-renthus-orange" role="status">
          Abrimos seu cliente de e-mail. Se nada abrir, escreva para{" "}
          <a href={`mailto:${contactEmail}`} className="underline">
            {contactEmail}
          </a>
          .
        </p>
      ) : (
        <p className="text-xs text-zinc-500">
          Ao enviar, seu app de e-mail será aberto com a mensagem pronta para{" "}
          {contactEmail}.
        </p>
      )}
    </form>
  );
}
