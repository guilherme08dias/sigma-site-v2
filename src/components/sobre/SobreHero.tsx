"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function SobreHero() {
  return (
    <section className="relative min-h-[auto] md:min-h-[90vh] flex items-center justify-center pt-20 md:pt-28 pb-12 md:pb-16 lg:py-24 px-6 lg:px-20 overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem] z-20 w-full bg-white">
      
      {/* Mobile-only Blurred Background */}
      <div className="absolute inset-0 z-0 block lg:hidden">
        <img 
          src="/fachada da loja.png" 
          alt="Visão da Fachada SigmaPDV Desktop" 
          className="w-full h-full object-cover object-center blur-[6px] scale-105 opacity-80" 
        />
        {/* Overlay clara para garantir leitura do texto preto */}
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Elementos Decorativos Sutis de Fundo (Apenas Desktop) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sigma-orange/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 z-0 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Coluna da Esquerda: Conteúdo */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-1 sm:gap-8 text-left items-start"
        >
          <p className="text-base font-bold tracking-[0.2em] font-body">
            <span className="text-sigma-dark">Sigma</span>
            <span className="text-sigma-orange">PDV</span>
          </p>

          <h1 className="text-sigma-dark text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] sm:leading-[1.05] font-display tracking-tight max-w-[90vw] lg:max-w-none">
            Sistemas que funcionam. <br className="hidden sm:block lg:hidden" />
            <span className="text-sigma-orange inline-block mt-1 sm:mt-0 lg:block">Suporte que resolve.</span>
          </h1>

          <p className="text-sigma-dark/80 font-semibold lg:font-normal text-lg lg:text-xl max-w-xl leading-relaxed font-body">
            Esqueça as dores de cabeça com o frente de caixa. Na SigmaPDV, somos a base operacional de centenas de empresas locais, construindo essa confiança através de automação robusta, gestão precisa e suporte humano que nunca deixa sua equipe na mão.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 pt-4 w-full sm:w-auto">
            <Button size="lg" variant="primary" className="w-full sm:w-auto whitespace-normal h-auto py-4 sm:py-3 text-center justify-center">
              Nossa História
            </Button>
            <Button size="lg" variant="outline" className="border-sigma-dark/20 bg-white/40 lg:bg-transparent hover:bg-white hover:border-sigma-orange text-sigma-dark w-full sm:w-auto whitespace-normal h-auto py-4 sm:py-3 text-center justify-center transition-all bg-blend-overlay">
              Falar com Especialista
            </Button>
          </div>
        </motion.div>
        
        {/* Coluna da Direita: Card de Imagem (Hidden no Mobile) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group hidden lg:block"
        >
          <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-sigma-dark/5 shadow-2xl relative">
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
