"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function HeroAutomacao() {
  return (
    <section className="relative overflow-hidden bg-sigma-light min-h-[auto] md:min-h-[100dvh] flex items-center justify-center pt-28 pb-16 lg:pt-20 lg:pb-16 rounded-b-[2rem] md:rounded-b-[3rem] z-10 w-full">
      
      {/* Mobile-only Blurred Background */}
      <div className="absolute inset-0 z-0 block lg:hidden">
        <img 
          src="/sobrenos-bg.jpg" 
          alt="Fundo Mobile" 
          className="w-full h-full object-cover object-center blur-[4px] scale-105 opacity-80" 
        />
        {/* Overlay clara para garantir leitura do texto preto */}
        <div className="absolute inset-0 bg-white/75" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10 flex flex-col justify-center text-center lg:text-left"
          >
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-sigma-dark/30 mb-2 block">
              Automação Comercial
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[4.5vw] xl:text-[4rem] font-black font-display tracking-tight text-sigma-dark mb-4 leading-[1.1] flex-1">
              <span className="text-sigma-orange">Performance</span> e <span className="text-sigma-orange">precisão</span><br className="hidden md:block" /> para a sua empresa
            </h1>
            <p className="text-lg md:text-xl text-sigma-dark/60 font-body leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Soluções completas de hardware integradas ao ecossistema SigmaPDV para otimizar seu ponto de venda e aumentar sua lucratividade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full">
              <Button size="lg" variant="primary" className="h-auto py-4 sm:py-0 sm:h-14 px-6 sm:px-8 text-base sm:text-lg w-full sm:w-auto whitespace-normal text-center justify-center">
                Ver Equipamentos
                <span className="material-symbols-outlined ml-2 flex-shrink-0">arrow_forward</span>
              </Button>
              <Button size="lg" variant="outline" className="h-auto py-4 sm:py-0 sm:h-14 px-6 sm:px-8 text-base sm:text-lg w-full sm:w-auto bg-white/50 lg:bg-transparent border-sigma-dark/20 text-sigma-dark whitespace-normal text-center justify-center">
                Falar com Especialista
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center w-full"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-[30rem] lg:h-[30rem] bg-sigma-orange/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-sigma-dark/5 bg-white w-full">
              <img 
                src="/sobrenos-bg.jpg" 
                alt="Infraestrutura e Tecnologia SigmaPDV" 
                className="w-full h-[45vh] lg:h-[70vh] min-h-[350px] max-h-[700px] object-cover" 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
