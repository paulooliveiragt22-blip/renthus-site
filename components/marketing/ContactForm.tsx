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
      className="mx-auto max-w-xl space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-renthus-orange/50 focus:outline-none focus:ring-2 focus:ring-renthus-orange/20"
          placeholder="Seu nome"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-renthus-orange/50 focus:outline-none focus:ring-2 focus:ring-renthus-orange/20"
          placeholder="voce@empresa.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-renthus-orange/50 focus:outline-none focus:ring-2 focus:ring-renthus-orange/20"
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
          <a href={`mailto:${contactEmail}`} className="font-medium underline">
            {contactEmail}
          </a>
          .
        </p>
      ) : (
        <p className="text-xs text-gray-500">
          Ao enviar, seu app de e-mail será aberto com a mensagem pronta para{" "}
          {contactEmail}.
        </p>
      )}
    </form>
  );
}
