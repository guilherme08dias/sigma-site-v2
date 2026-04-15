"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function SistemasCTA() {
  return (
    <section className="py-32 px-6 bg-sigma-light">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-sigma-dark rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 md:p-24 text-center relative overflow-hidden border border-white/5 shadow-2xl"
        >
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-sigma-orange/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-sigma-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-black font-display text-white mb-4 sm:mb-6 leading-tight">Sua empresa merece a melhor tecnologia de gestão.</h2>
            <p className="text-base sm:text-lg text-white/60 font-body leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">Agende agora um diagnóstico gratuito com nossos especialistas em Chapecó e região.</p>
            <div className="flex justify-center w-full">
              <Button size="xl" variant="primary" className="gap-2 sm:gap-3 w-full sm:w-auto h-auto py-4 sm:py-0 px-4 sm:px-8 text-sm sm:text-base whitespace-normal text-center flex-wrap justify-center">
                <span className="material-symbols-outlined text-xl sm:text-2xl flex-shrink-0">chat</span>
                <span>Falar com Consultor via WhatsApp</span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
