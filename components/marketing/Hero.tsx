"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative px-4 pb-24 pt-32 sm:px-6 sm:pb-32 sm:pt-40"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm"
        >
          <Sparkles className="h-3.5 w-3.5 text-renthus-orange" />
          Inteligência artificial para o seu negócio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-zinc-100 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Inovação que transforma{" "}
          <span className="text-gradient-hero-tech">Tecnologia</span>
          <br className="hidden sm:block" /> em resultados reais
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl"
        >
          Sites, chatbots, ERP e soluções de IA sob medida. Uma stack moderna,
          segura e pensada para escalar com a Renthus.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button variant="cta" size="lg" asChild>
            <a href="#chat-ia">Conheça a IA Renthus</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#solucoes">Ver soluções</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
