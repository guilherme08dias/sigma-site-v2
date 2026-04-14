"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function CorporateHardware() {
  const hardwareItems = [
    {
      icon: "laptop_mac",
      title: "Computadores Corporativos",
      description: "Desktops e minipcs homologados para operação ininterrupta como servidores de PDV ou retaguarda."
    },
    {
      icon: "router",
      title: "Infraestrutura de Rede",
      description: "Switches, roteadores e access points de nível empresarial para garantir conectividade sem falhas."
    },
    {
      icon: "qr_code_scanner",
      title: "Leitores e Periféricos",
      description: "Leitores de código de barras omnidirecionais, gavetas de dinheiro e teclados programáveis."
    },
    {
      icon: "settings_suggest",
      title: "Soluções Personalizadas",
      description: "Desenvolvemos projetos sob medida para demandas específicas, garantindo que a tecnologia se adapte perfeitamente ao seu modelo de negócio."
    }
  ];

  return (
    <section className="pt-[calc(4rem+2.5rem)] pb-16 bg-sigma-dark text-white relative overflow-hidden rounded-t-[3rem] -mt-10 z-20">
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="299.5" stroke="#00E5E5" strokeDasharray="10 10"/>
          <circle cx="300" cy="300" r="200" stroke="#FF6600" strokeWidth="2"/>
          <path d="M300 0V600M0 300H600" stroke="#00E5E5" strokeOpacity="0.5"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-4">
            <span className="text-sigma-cyan font-bold font-body tracking-widest uppercase text-sm">Mais Soluções</span>
            <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-white mt-2 mb-6">Infraestrutura Completa</h2>
            <p className="text-lg text-white/60 font-body leading-relaxed mb-8">
              Muito além do caixa: a SigmaPDV fornece e instala toda a base tecnológica necessária para sua loja funcionar com 100% de disponibilidade, segurança e performance.
            </p>
            <a 
              href="https://wa.me/554989022868?text=Ol%C3%A1%21+Gostaria+de+uma+consultoria+técnica+sobre+infraestrutura+de+TI+que+vi+no+site."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-8 h-14 bg-sigma-cyan text-sigma-dark font-bold hover:bg-sigma-cyan/90 shadow-lg shadow-sigma-cyan/20 w-full md:w-auto transition-all"
            >
              Falar com consultor de TI
            </a>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
            {hardwareItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-sigma-orange transition-all hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-sigma-orange group-hover:bg-sigma-orange group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-sm font-body text-white/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
