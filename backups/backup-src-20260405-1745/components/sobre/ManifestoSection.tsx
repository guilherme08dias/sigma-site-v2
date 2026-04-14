"use client";

import { motion } from "framer-motion";
import { SdsInfoCard } from "@/components/ui/SdsInfoCard";

export default function ManifestoSection() {
  const solutions = [
    {
      title: "Automação Comercial",
      desc: "Implantação de sistemas e soluções para mercados, lojas e empresas, focadas em controle, agilidade e eficiência operacional.",
      icon: "point_of_sale"
    },
    {
      title: "Sistemas e Software de Gestão",
      desc: "Soluções para gestão empresarial, frente de caixa, controle de vendas, estoque e relatórios.",
      icon: "analytics"
    },
    {
      title: "Equipamentos e Infraestrutura",
      desc: "Fornecimento e instalação de equipamentos para automação comercial, garantindo integração total com os sistemas.",
      icon: "router"
    },
    {
      title: "Suporte Técnico Especializado",
      desc: "Atendimento próximo e contínuo, com equipe técnica preparada para suporte, manutenção e atualizações.",
      icon: "support_agent"
    },
    {
      title: "Controle de Ponto e Gestão de Acessos",
      desc: "Soluções para controle de jornada, acessos e gestão de colaboradores.",
      icon: "fingerprint"
    },
    {
      title: "Automação Residencial e Corporativa",
      desc: "Projetos de automação e tecnologia aplicados a ambientes residenciais e empresariais.",
      icon: "home_iot_device"
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-20 bg-sigma-light" id="o-que-fazemos">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-sigma-dark mb-4">O que fazemos</h2>
            <div className="w-20 h-1.5 bg-sigma-orange rounded-full"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 flex flex-col gap-8"
          >
            <p className="text-2xl lg:text-3xl font-body tracking-tight text-sigma-dark/90 leading-snug">
              Nosso trabalho vai além da implantação de tecnologia: entregamos <span className="text-sigma-orange font-black">organização, controle e eficiência</span>, com atendimento próximo e suporte especializado para cada etapa do negócio.
            </p>
            <p className="text-xl text-sigma-dark/60 font-body leading-relaxed">
              Mais do que tecnologia, construímos parcerias de longo prazo, focadas em segurança, crescimento e resultados reais para nossos clientes.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <SdsInfoCard 
              key={idx}
              title={item.title}
              description={item.desc}
              icon={item.icon}
              delay={idx * 0.1}
              className="bg-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
