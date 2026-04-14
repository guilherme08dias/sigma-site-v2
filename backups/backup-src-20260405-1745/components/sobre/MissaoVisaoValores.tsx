"use client";

import { motion } from "framer-motion";

export default function MissaoVisaoValores() {
  const items = [
    {
      title: "Missão",
      description: "Prover um hub de serviços de alta performance que aumente a lucratividade e a segurança operacional de nossos parceiros de maneira ética e legal."
    },
    {
      title: "Visão",
      description: "Ser a referência absoluta no Oeste Catarinense em excelência técnica, qualidade de atendimento e máxima confiabilidade em soluções para o varejo."
    },
    {
      title: "Valores",
      description: "Suporte ágil e presente, comprometimento inabalável com o resultado do cliente, ética inegociável e inovação contínua nas operações de suporte técnico."
    }
  ];

  const parentVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, when: "beforeChildren" } 
    }
  };

  const typewriterVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.012 } 
    }
  };

  const letterVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <section className="py-20 px-6 lg:px-20 bg-white overflow-visible">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Coluna da Esquerda - Título Sticky */}
        <div className="lg:w-1/3 lg:sticky lg:top-40 h-fit mb-12 lg:mb-0">
          <span className="text-sigma-dark/30 font-bold font-body tracking-widest text-sm uppercase mb-6 block">
            A base da SigmaPDV
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-sigma-dark leading-[1.1] mb-8">
            Nossos Pilares Institucionais
          </h2>
          <div className="w-20 h-2 bg-sigma-orange rounded-full"></div>
        </div>

        {/* Coluna da Direita - Conteúdo (Missão, Visão, Valores) */}
        <div className="lg:w-2/3 flex flex-col">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={parentVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              className="flex flex-col justify-center min-h-[60vh] py-16 border-b border-sigma-dark/5 last:border-none"
            >
              <h3 className="text-5xl lg:text-8xl font-black text-sigma-dark font-display tracking-tight mb-8">
                {item.title}
              </h3>
              
              <motion.p 
                variants={typewriterVariant}
                className="text-2xl lg:text-3xl text-sigma-dark/70 font-body leading-tight lg:leading-snug max-w-2xl font-medium"
              >
                {item.description.split("").map((char, charIdx) => (
                  <motion.span key={charIdx} variants={letterVariant}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
