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
    <section className="bg-sigma-dark py-32 px-6 rounded-b-[3rem] relative z-10 overflow-hidden" id="condfy">
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
            <h2 className="text-4xl md:text-5xl leading-tight font-black font-display tracking-tight text-white mb-6">CondFy: Gestão Inteligente para Condomínios e Portarias</h2>
            <p className="text-white/70 font-body text-xl leading-relaxed max-w-xl">
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
            <div className="absolute inset-0 bg-sigma-orange/20 blur-[100px] rounded-full scale-75 -z-10 pointer-events-none"></div>
            <img 
              alt="Aplicativo CondFy rodando em smartphone para gestão de condomínios em Chapecó" 
              className="relative z-10 w-full rounded-[2.5rem] shadow-2xl border border-white/10" 
              src="/condfy_mockup.png"
            />
            {/* Floating logo or decoration */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white p-6 rounded-3xl shadow-xl z-20 flex items-center justify-center rotate-12 hidden md:flex">
              <img src="/condfy.svg" alt="Logotipo do Sistema CondFy para Controle de Acesso Condominial" className="w-full h-full object-contain" />
            </div>
          </motion.div>
        </div>

        {/* Row 2: Topic Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 h-full hover:border-sigma-orange/30 transition-all group">
              <span className="material-symbols-outlined text-sigma-orange text-3xl group-hover:scale-110 transition-transform">{feature.icon}</span>
              <div>
                <h3 className="font-bold font-display text-white text-lg">{feature.title}</h3>
                <p className="text-sm font-body text-white/50">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="flex justify-center relative z-10">
          <Button size="xl" variant="primary">
            Agendar Demonstração Técnica
          </Button>
        </div>
      </div>
    </section>
  );
}
