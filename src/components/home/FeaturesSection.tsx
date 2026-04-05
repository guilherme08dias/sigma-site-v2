"use client";

import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-sigma-light border-y border-sigma-silver/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sigma-dark font-display">Os Pilares do nosso Hub</h2>
          <div className="mt-4 w-16 h-1 bg-sigma-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "point_of_sale", title: "Automação Comercial", desc: "Implantação de sistemas e soluções para mercados, lojas e empresas, focadas em controle, agilidade e eficiência operacional." },
            { icon: "analytics", title: "Sistemas e Software de Gestão", desc: "Soluções para gestão empresarial, frente de caixa, controle de vendas, estoque e relatórios." },
            { icon: "router", title: "Equipamentos e Infraestrutura", desc: "Fornecimento e instalação de equipamentos para automação comercial, garantindo integração total com os sistemas." },
            { icon: "support_agent", title: "Suporte Técnico Especializado", desc: "Atendimento próximo e contínuo, com equipe técnica preparada para suporte, manutenção e atualizações." },
            { icon: "fingerprint", title: "Controle de Ponto e Gestão de Acessos", desc: "Soluções para controle de jornada, acessos e gestão de colaboradores." }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-sigma-dark/5 group"
            >
              <div className="size-16 rounded-2xl bg-sigma-orange/10 flex items-center justify-center text-sigma-orange mb-8 group-hover:bg-sigma-orange group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-sigma-dark mb-4 font-display">{feature.title}</h3>
              <p className="text-sigma-dark/60 leading-relaxed font-body">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
