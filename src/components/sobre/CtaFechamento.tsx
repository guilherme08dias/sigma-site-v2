"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function CtaFechamento() {
  return (
    <section className="relative py-32 px-6 lg:px-20 bg-sigma-dark overflow-hidden">
      {/* Elementos Decorativos */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-sigma-orange/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sigma-cyan/10 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-10"
        >
          <span className="text-white/30 font-bold font-body tracking-widest text-sm uppercase">
            Próximo passo
          </span>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight text-white leading-[1.05]">
            Pronto para ser{" "}
            <span className="text-white">Sigma</span>
            <span className="text-sigma-orange">PDV</span>?
          </h2>

          <p className="text-xl md:text-2xl text-white/60 font-body leading-relaxed max-w-2xl">
            Junte-se a mais de 100 empresas que já transformaram sua operação com tecnologia confiável, suporte presente e soluções que realmente funcionam.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <a
              href="https://wa.me/554989022868?text=Olá!%20Gostaria%20de%20conhecer%20as%20soluções%20SigmaPDV."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="primary" className="rounded-full px-10 shadow-lg shadow-sigma-orange/30">
                Falar com um Especialista
              </Button>
            </a>
            <a href="/suporte">
              <Button size="lg" variant="outline" className="rounded-full px-10 border-white/20 text-white hover:border-sigma-cyan hover:text-sigma-cyan">
                Acessar Suporte
              </Button>
            </a>
          </div>

          {/* Indicadores de Confiança */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/10 mt-4"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-sigma-orange text-2xl">verified</span>
              <span className="text-white/50 text-sm font-body">+7 anos de mercado</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-sigma-cyan text-2xl">groups</span>
              <span className="text-white/50 text-sm font-body">+100 clientes ativos</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-sigma-orange text-2xl">location_on</span>
              <span className="text-white/50 text-sm font-body">70+ municípios atendidos</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
