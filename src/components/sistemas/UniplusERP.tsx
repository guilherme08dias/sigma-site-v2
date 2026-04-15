"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function UniplusERP() {
  const plans = [
    {
      name: "Básico",
      price: "Sob consulta",
      features: ["Gestão Fiscal", "Emissão de NF-e", "Relatórios Básicos"],
      highlight: false
    },
    {
      name: "Avançado",
      price: "Sob consulta",
      features: ["Tudo no Básico", "Automação de Vendas", "Controle de Estoque", "Suporte Premium"],
      highlight: true
    },
    {
      name: "Personalizado",
      price: "Sob consulta",
      features: ["Soluções Customizadas", "API de Integração", "Consultoria Especializada"],
      highlight: false
    }
  ];

  const topics = [
    { icon: "receipt_long", title: "Fiscal", desc: "Conformidade total" },
    { icon: "settings_suggest", title: "Operacional", desc: "Eficiência máxima" },
    { icon: "shopping_cart", title: "Vendas", desc: "Resultados ágeis" },
    { icon: "language", title: "Acesso Web", desc: "Gestão por navegador" }
  ];

  return (
    <section className="bg-sigma-dark py-20 md:py-32 px-4 sm:px-6 relative z-10" id="uniplus">
      <div className="max-w-7xl mx-auto">
        
        {/* Row 1: Content + Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sigma-orange font-bold font-body tracking-widest text-sm uppercase mb-4 block">Gestão Empresarial</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-black font-display tracking-tight text-white mb-6">Uniplus ERP: Gestão Modular que Evolui com seu Negócio</h1>
            <p className="text-white/70 font-body text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
              O Uniplus Web leva todo o poder da gestão empresarial para o seu navegador. Desenvolvido para ser o coração do seu negócio, ele integra vendas, estoque e financeiro em uma plataforma modular acessível de qualquer dispositivo — PC, Mac, Tablet ou Smartphone. Com Dashboards personalizáveis e total segurança fiscal, o Uniplus elimina o retrabalho e garante controle absoluto da sua operação, seja em um mercado, restaurante ou prestadora de serviços. Simplifique processos complexos e foque no que realmente importa: o crescimento estratégico da sua empresa.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sigma-orange/20 rounded-full blur-[100px] pointer-events-none"></div>
            <img 
              alt="Uniplus ERP Dashboard" 
              className="relative z-10 w-full rounded-[2.5rem] shadow-2xl border border-white/10" 
              src="/uniplus-bg.jpeg"
            />
          </motion.div>
        </div>

        {/* Row 2: Topic Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24"
        >
          {topics.map((topic, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-5 sm:p-6 rounded-3xl bg-white/5 border border-white/10 h-full hover:border-sigma-orange/30 transition-all group">
              <span className="material-symbols-outlined text-sigma-orange text-3xl group-hover:scale-110 transition-transform">{topic.icon}</span>
              <div>
                <h3 className="font-bold font-display text-white text-base sm:text-lg mb-1 sm:mb-0">{topic.title}</h3>
                <p className="text-xs sm:text-sm font-body text-white/50 leading-relaxed">{topic.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Row 3: Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white/5 backdrop-blur-sm p-6 sm:p-10 rounded-3xl flex flex-col h-full transition-all duration-300 hover:-translate-y-2 relative text-white ${plan.highlight ? 'border-2 border-sigma-orange shadow-[0_0_30px_rgba(255,102,0,0.2)]' : 'border border-white/10'}`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sigma-orange text-white px-6 py-2 rounded-full text-xs font-bold font-body uppercase tracking-widest shadow-lg shadow-sigma-orange/20">Mais Popular</span>
              )}
              <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-display">{plan.name}</h4>
              <div className="text-3xl sm:text-4xl font-black mb-6 sm:mb-8 font-display tracking-tight leading-none">{plan.price}</div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 sm:gap-4 text-white/70 font-body text-sm sm:text-base">
                    <span className="material-symbols-outlined text-sigma-orange text-xl sm:text-2xl">check_circle</span> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="xl" variant="primary" className="w-full sm:w-auto h-auto py-4 sm:py-0 px-6 sm:px-8 text-sm sm:text-base whitespace-normal text-center">
            Agendar Demonstração Técnica
          </Button>
        </div>
      </div>
    </section>
  );
}
