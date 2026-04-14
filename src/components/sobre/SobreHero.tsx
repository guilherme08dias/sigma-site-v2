"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function SobreHero() {
  return (
    <section className="relative bg-white min-h-[90vh] flex items-center lg:py-24 pt-32 pb-20 px-6 lg:px-20 overflow-hidden rounded-b-[3rem] z-20">
      {/* Elementos Decorativos Sutis de Fundo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sigma-orange/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 z-0"></div>
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Coluna da Esquerda: Conteúdo */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <p className="text-base font-bold tracking-[0.2em] font-body">
            <span className="text-sigma-dark">Sigma</span>
            <span className="text-sigma-orange">PDV</span>
          </p>

          <h1 className="text-sigma-dark text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] font-display tracking-tight flex flex-col gap-1">
            <span>Sistemas que funcionam.</span>
            <span className="text-sigma-orange">Suporte que resolve.</span>
          </h1>

          <p className="text-sigma-dark/70 text-lg lg:text-xl max-w-xl leading-relaxed font-body">
            Esqueça as dores de cabeça com o frente de caixa. Na SigmaPDV, somos a base operacional de centenas de empresas locais, construindo essa confiança através de automação robusta, gestão precisa e suporte humano que nunca deixa sua equipe na mão.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <Button size="lg" variant="primary">
              Nossa História
            </Button>
            <Button size="lg" variant="outline" className="border-sigma-dark/10 hover:border-sigma-orange text-sigma-dark">
              Falar com Especialista
            </Button>
          </div>
        </motion.div>
        
        {/* Coluna da Direita: Card de Imagem */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="h-[500px] lg:h-[650px] w-full rounded-[2.5rem] overflow-hidden border border-sigma-dark/5 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-t from-sigma-dark/20 via-transparent to-transparent z-10 pointer-events-none"></div>
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Fachada da loja SigmaPDV em Chapecó" 
              src="/fachada da loja.png"
            />
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
