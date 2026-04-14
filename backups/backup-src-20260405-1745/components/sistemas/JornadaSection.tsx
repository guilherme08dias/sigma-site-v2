"use client";

import { motion } from "framer-motion";

export default function JornadaSection() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Análise da infraestrutura e necessidades fiscais."
    },
    {
      number: "02",
      title: "Implantação",
      description: "Instalação e migração segura de dados."
    },
    {
      number: "03",
      title: "Treinamento",
      description: "Capacitação técnica da equipe (VIP ou Remoto)."
    },
    {
      number: "04",
      title: "Suporte",
      description: "Acompanhamento contínuo e monitoramento 24h."
    }
  ];

  return (
    <section className="bg-sigma-light pt-[calc(8rem+3rem)] pb-32 px-6 -mt-[3rem]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-sigma-orange font-bold font-body tracking-widest text-sm uppercase mb-4 block">Metodologia</span>
          <h2 className="text-3xl md:text-4xl font-black font-display tracking-tight text-sigma-dark">Jornada de Implantação</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-white text-sigma-orange border border-sigma-dark/5 flex items-center justify-center text-3xl font-black font-display tracking-tight mb-8 shadow-sm group-hover:bg-sigma-orange group-hover:text-white group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-sigma-orange/20 transition-all duration-300">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold font-display tracking-tight text-sigma-dark mb-4">{step.title}</h3>
              <p className="text-sigma-dark/70 font-body text-base leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
