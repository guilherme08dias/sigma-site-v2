"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AccordionDetails({ indicadaPara, pontosPositivos }: { indicadaPara: string; pontosPositivos: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sigma-orange font-bold font-body text-base hover:underline transition-all cursor-pointer"
        aria-expanded={open}
      >
        <span className="material-symbols-outlined text-lg transition-transform duration-300" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
          expand_more
        </span>
        {open ? "Ver menos" : "Ver mais"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-5 space-y-4">
              <div>
                <span className="font-bold text-sigma-dark font-body text-sm uppercase tracking-wider">Indicada para:</span>
                <p className="text-sigma-dark/70 font-body text-base leading-relaxed mt-1">{indicadaPara}</p>
              </div>
              <div>
                <span className="font-bold text-sigma-dark font-body text-sm uppercase tracking-wider">Pontos positivos:</span>
                <p className="text-sigma-dark/70 font-body text-base leading-relaxed mt-1">{pontosPositivos}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const hardwareItems = [
  {
    title: "Henry Prisma Super Fácil R02",
    description: "Homologado conforme Portarias 1510/2009 e 671/2021. Equipamento robusto com gerenciamento de até 15.000 colaboradores e Web Server embarcado para configuração sem necessidade de softwares externos.",
    features: ["Biometria (500 DPI) e Proximidade", "Memória para 8 milhões de registros", "Impressora térmica com guilhotina"],
    image: "/henry.png",
    indicadaPara: "Indústrias e empresas com ambientes de uso intenso que exigem alta durabilidade mecânica e facilidade de acesso via rede para o RH.",
    pontosPositivos: "Mecânica reforçada para ciclos pesados, interface Web intuitiva para gestão rápida pelo navegador e excelente suporte nacional."
  },
  {
    title: "Control iD iDClass Bio",
    description: "Design compacto e robusto em total conformidade com a Portaria 671/2021 e certificado pelo Inmetro. Equipado com leitor biométrico de alta precisão e interface touchscreen intuitiva.",
    features: ["Biometria e Senha", "Impressora Seiko com Guilhotina", "Capacidade: 15.000 Digitais"],
    image: "/idclass.png",
    indicadaPara: "Empresas de todos os portes que buscam segurança jurídica total, facilidade de uso para o colaborador e alta velocidade de impressão.",
    pontosPositivos: "Certificação Inmetro, autonomia para bobinas de 400m (+10.000 tickets) e sincronização automática em nuvem (iDCloud)."
  },
  {
    title: "Control iD iDFace",
    description: "O terminal de reconhecimento facial mais moderno do mercado. Com design inovador e algoritmo de alta performance, permite identificação ultra-rápida com total segurança e higiene.",
    features: ["Duas Câmeras Full HD 1080p", "Proteção IP65 (Chuva e Poeira)", "Interfone SIP Integrado"],
    image: "/idface.png",
    indicadaPara: "Condomínios, clínicas e empresas que buscam um controle de acesso sem contato, com alta segurança e funcionamento perfeito em qualquer iluminação.",
    pontosPositivos: "Detecção de 'rosto vivo' (evita fraudes com fotos), leitura mesmo com máscara e software web embarcado para gestão via navegador."
  },
  {
    title: "Catraca Henry Pedestal Inox",
    description: "Eleve o padrão do seu acesso com o acabamento sofisticado em aço inox escovado. A união perfeita entre beleza e robustez, garantindo durabilidade excepcional em qualquer ambiente.",
    features: ["Estrutura em Aço Inox Escovado", "Design Compacto e Elegante", "Alta resistência à corrosão"],
    image: "/catraca_henry.png",
    indicadaPara: "Recepções de alto padrão, clubes, academias e portarias que buscam um equipamento esteticamente premium e de fácil manutenção.",
    pontosPositivos: "Longevidade extrema garantida pelo material, visual que valoriza o estabelecimento e mecânica suave para fluxos constantes."
  }
];

export default function HardwarePonto() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Manifesto Header Layout (Same as Thermal Printers) */}
        <div className="mb-24">
          <span className="text-sigma-dark/30 font-bold font-body tracking-widest uppercase text-sm block mb-6">Controle e Segurança Integrada</span>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-sigma-dark font-display tracking-tight leading-[1.2]">
                Relógios de Ponto<br /> e Acesso Inteligente
              </h2>
            </div>
            
            <div className="hidden lg:block w-px h-28 bg-sigma-orange/40 self-center"></div>
            
            <div className="lg:w-1/2 text-left">
              <p className="text-lg text-sigma-dark/60 font-body leading-relaxed max-w-lg">
                Equipamentos homologados e de alta durabilidade para registrar a jornada da sua equipe e garantir controle absoluto do acesso físico.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights tag */}
        <div className="mb-12 flex flex-wrap items-center gap-4">
          <div className="bg-sigma-orange/10 text-sigma-orange px-4 py-1.5 rounded-full text-sm font-bold border border-sigma-orange/20">
            Hardware Oficial
          </div>
          <p className="text-sigma-dark/50 text-sm font-body">
            Trabalhamos com a linha completa de equipamentos <strong>Control iD</strong>, <strong>Henry</strong> e integração nativa com <strong>Secullum</strong>.
          </p>
        </div>

        {/* The Grid Setup */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {hardwareItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden border border-sigma-dark/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="aspect-square bg-white p-8 lg:p-10 flex items-center justify-center overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain z-10 mix-blend-multiply" 
                />
              </div>
              
              {/* Text and Actions Container */}
              <div className="p-10 lg:p-12 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 font-display text-sigma-dark tracking-tight group-hover:text-sigma-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sigma-dark/70 font-body text-lg leading-relaxed mb-8">
                    {item.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-4 pt-6 border-t border-sigma-dark/5">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-base text-sigma-dark/80 font-body font-medium">
                        <span className="material-symbols-outlined text-sigma-orange text-xl">check_circle</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Accordion Component */}
                  <AccordionDetails
                    indicadaPara={item.indicadaPara}
                    pontosPositivos={item.pontosPositivos}
                  />
                </div>

                {/* WhatsApp Action Button */}
                <a
                  href={`https://wa.me/554989022868?text=Ol%C3%A1%21+Tenho+interesse+no+equipamento+de+ponto+${encodeURIComponent(item.title)}+que+vi+no+site+da+Sigma.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-12 w-full py-4 px-6 rounded-full border-2 border-sigma-orange text-sigma-orange font-bold hover:bg-sigma-orange hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Falar com um consultor técnico
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
