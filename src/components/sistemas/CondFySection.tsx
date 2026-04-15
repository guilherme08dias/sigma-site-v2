"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function CondFySection() {
  const features = [
    {
      icon: "architecture",
      title: "Soluções sob medida",
      description: "Projetos configurados conforme sua estrutura."
    },
    {
      icon: "apartment",
      title: "Multimodelo de Portaria",
      description: "Presencial, remota ou autoatendimento."
    },
    {
      icon: "settings_suggest",
      title: "Implantação VIP",
      description: "Visita técnica e configuração personalizada."
    },
    {
      icon: "hub",
      title: "Alta Integração",
      description: "Compatível com +60 equipamentos."
    }
  ];

  return (
    <section className="bg-sigma-dark py-20 md:py-32 px-4 sm:px-6 rounded-b-[2rem] md:rounded-b-[3rem] relative z-10 overflow-hidden" id="condfy">
      <div className="max-w-7xl mx-auto">
        
        {/* Row 1: Content + Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1"
          >
            <span className="text-sigma-orange font-bold font-body tracking-widest text-sm uppercase mb-4 block">Gestão Condominial</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-black font-display tracking-tight text-white mb-6">CondFy: Gestão Inteligente para Condomínios e Portarias</h2>
            <p className="text-white/70 font-body text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
              O CondFy é uma plataforma em nuvem desenvolvida para transformar a gestão de condomínios e o controle de acesso. Pensada para adaptar-se a diferentes modelos de operação, a solução elimina planos engessados e permite que cada projeto seja configurado sob medida para cada estrutura residencial ou corporativa. Seja para portaria remota, presencial ou autoatendimento, o sistema integra segurança e operacional em uma interface simples, garantindo eficiência e tranquilidade para moradores e gestores.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 relative"
          >
            <div className="relative z-10 w-full h-[300px] sm:h-[400px] md:h-[500px] bg-white/5 rounded-[2.5rem] border border-white/10 flex justify-center items-center overflow-hidden">
              <img 
                src="/condfy.svg" 
                alt="Logotipo CondFy - Sistema de Gestão Inteligente para Condomínios" 
                className="w-full h-full object-contain p-8 md:p-12 drop-shadow-2xl" 
              />
            </div>
          </motion.div>
        </div>

        {/* Row 2: Topic Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 relative z-10"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-5 sm:p-6 rounded-3xl bg-white/5 border border-white/10 h-full hover:border-sigma-orange/30 transition-all group">
              <span className="material-symbols-outlined text-sigma-orange text-3xl group-hover:scale-110 transition-transform">{feature.icon}</span>
              <div>
                <h3 className="font-bold font-display text-white text-base sm:text-lg mb-1 sm:mb-0">{feature.title}</h3>
                <p className="text-xs sm:text-sm font-body text-white/50 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="flex justify-center relative z-10 w-full">
          <Button size="xl" variant="primary" className="w-full sm:w-auto h-auto py-4 sm:py-0 px-6 sm:px-8 text-sm sm:text-base whitespace-normal text-center">
            Agendar Demonstração Técnica
          </Button>
        </div>
      </div>
    </section>
  );
}
