"use client";

import { SdsInfoCard } from "@/components/ui/SdsInfoCard";

const diferenciais = [
  {
    title: "Atendimento próximo e personalizado",
    desc: "Cada cliente é atendido de forma próxima e estratégica, com soluções pensadas para a realidade do seu negócio.",
    icon: "person_celebrate"
  },
  {
    title: "Suporte técnico especializado",
    desc: "Equipe técnica qualificada, preparada para oferecer suporte contínuo, manutenção e atualizações com agilidade.",
    icon: "engineering"
  },
  {
    title: "Soluções completas e integradas",
    desc: "Integração entre sistemas, equipamentos e serviços, garantindo mais controle, segurança e eficiência operacional.",
    icon: "all_inclusive"
  },
  {
    title: "Experiência no varejo e empresas",
    desc: "Mais de 7 anos de atuação e mais de 100 clientes ativos, com forte conhecimento do mercado regional.",
    icon: "history_edu"
  },
  {
    title: "Parcerias de longo prazo",
    desc: "Mais do que fornecer tecnologia, construímos relações baseadas em confiança, suporte e crescimento conjunto.",
    icon: "handshake"
  }
];

export default function DiferenciaisSection() {
  return (
    <section className="py-32 px-6 lg:px-20 bg-white" id="diferenciais">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Coluna da Esquerda - Título Sticky */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <span className="text-sigma-dark/30 font-bold font-body tracking-widest text-sm uppercase mb-6 block">
            Por que escolher a SigmaPDV
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-sigma-dark leading-[1.1]">
            Nossos diferenciais estrategicamente pensados
          </h2>
          <p className="mt-8 text-sigma-dark/60 text-lg font-body leading-relaxed max-w-sm">
            Unimos tecnologia de ponta com um atendimento humano e próximo para garantir o sucesso do seu negócio.
          </p>
        </div>

        {/* Coluna da Direita - Conteúdo que scrolla */}
        <div className="lg:w-2/3 flex flex-col gap-8">
          {diferenciais.map((item, idx) => (
            <div key={idx} className="group flex flex-col md:flex-row gap-8 p-8 md:p-12 bg-sigma-light rounded-[2.5rem] border border-sigma-dark/5 hover:border-sigma-orange/20 transition-all duration-500 hover:shadow-xl hover:shadow-sigma-orange/5 hover:-translate-y-1">
              <div className="w-20 h-20 shrink-0 bg-white rounded-3xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-sigma-orange text-5xl">
                  {item.icon}
                </span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-sigma-dark mb-4">
                  {item.title}
                </h3>
                <p className="text-sigma-dark/70 text-lg font-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
