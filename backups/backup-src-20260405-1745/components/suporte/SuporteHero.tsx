"use client";

import { motion } from "framer-motion";

export default function SuporteHero() {
  return (
    <section className="bg-sigma-dark pt-32 pb-24 relative overflow-hidden rounded-b-[3rem] z-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#FF6600_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-6"
        >
          Suporte Técnico e Downloads
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-white/70 font-body leading-relaxed max-w-2xl mx-auto"
        >
          Centralizamos nesta página todas as ferramentas necessárias para sua operação. Encontre instaladores de sistemas, drivers de impressoras e o acesso remoto preferencial para que nosso suporte possa atendê-lo com agilidade.
        </motion.p>
      </div>
    </section>
  );
}
