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
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-20 bg-sigma-light" id="o-que-fazemos">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-sigma-dark/30 font-bold font-body tracking-widest uppercase text-sm block mb-6">O que fazemos</span>
          <div className="flex flex-col lg:flex-row items-center gap-12 text-left">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-sigma-dark font-display tracking-tight leading-[1.2]">
                Além da tecnologia: entregamos<br /> 
                <span className="text-sigma-orange font-black">resultado e eficiência</span>
              </h2>
            </div>
            
            <div className="hidden lg:block w-px h-28 bg-sigma-orange/40 self-center"></div>
            
            <div className="lg:w-1/2">
              <p className="text-lg text-sigma-dark/60 font-body leading-relaxed max-w-lg">
                Nosso trabalho vai além da implantação de tecnologia: entregamos organização, controle e eficiência, com atendimento próximo e suporte especializado para cada etapa do negócio.
              </p>
            </div>
          </div>
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
