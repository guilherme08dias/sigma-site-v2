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
                <span className="font-bold text-sigma-dark font-body text-sm uppercase tracking-wider">Por que investir:</span>
                <p className="text-sigma-dark/70 font-body text-base leading-relaxed mt-1">{indicadaPara}</p>
              </div>
              <div>
                <span className="font-bold text-sigma-dark font-body text-sm uppercase tracking-wider">Diferenciais Sigma:</span>
                <p className="text-sigma-dark/70 font-body text-base leading-relaxed mt-1">{pontosPositivos}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const peripherals = [
  {
    title: "Leitores de Alta Performance",
    category: "Check-out Ágil",
    description: "Tecnologia de ponta para leitura de códigos 1D e 2D (QR Code) com precisão industrial, garantindo fluidez total na frente de caixa.",
    features: ["Leitura de Boletos e Danfes", "Modelos com e sem fio", "Resistência a quedas e impactos"],
    icon: "barcode_scanner",
    indicadaPara: "Operações de varejo, farmácias e supermercados que precisam de rapidez absoluta no registro de produtos e pagamentos.",
    pontosPositivos: "Integração plug-and-play, alta sensibilidade mesmo para códigos danificados e ergonomia planejada para longas jornadas."
  },
  {
    title: "Nobreaks e Estabilizadores",
    category: "Segurança de Dados",
    description: "Proteção essencial para sua infraestrutura. Evite a perda de vendas e danos ao hardware causados por quedas ou oscilações de energia.",
    features: ["Autonomia em quedas de luz", "Filtro de linha integrado", "Modelos de 600VA a 3000VA"],
    icon: "battery_charging_full",
    indicadaPara: "Todos os estabelecimentos comerciais que desejam proteger seu investimento em servidores e computadores de PDV.",
    pontosPositivos: "Gerenciamento inteligente de carga, saída estabilizada e proteção contra surtos de tensão na rede elétrica."
  },
  {
    title: "Gavetas e Módulos SAT",
    category: "Gestão e Fiscal",
    description: "Componentes robustos para o fechamento de venda seguro e transmissão fiscal obrigatória em tempo real com máxima confiabilidade.",
    features: ["Aço reforçado e chaves", "Conexão RJ12 ou USB", "Homologados pela SEFAZ"],
    icon: "payments",
    indicadaPara: "Comércios que lidam com fluxo de dinheiro em espécie e precisam cumprir as exigências fiscais de transmissão de cupons.",
    pontosPositivos: "Mecânica de abertura suave, divisórias removíveis para cédulas e moedas, e integração nativa com o sistema SigmaPDV."
  },
  {
    title: "Computadores de Performance",
    category: "Infraestrutura PDV",
    description: "CPUs de alta durabilidade projetadas para operar 24/7 em ambientes comerciais, com processamento rápido para evitar filas.",
    features: ["Processadores de última geração", "SSD de alta velocidade", "Múltiplas conexões seriais"],
    icon: "desktop_windows",
    indicadaPara: "Frentes de caixa de alto fluxo e servidores de retaguarda que exigem estabilidade absoluta.",
    pontosPositivos: "Baixo consumo de energia, chassi reforçado e facilidade de manutenção."
  },
  {
    title: "Notebooks Corporativos",
    category: "Gestão Móvel",
    description: "Leveza e potência para que você leve a gestão da sua empresa para qualquer lugar, com segurança e bateria de longa duração.",
    features: ["Telas Full HD Anti-reflexo", "Segurança biométrica", "Leves e ultrafinos"],
    icon: "laptop_mac",
    indicadaPara: "Proprietários e gestores que precisam acessar relatórios e sistemas Sigma de forma remota ou em trânsito.",
    pontosPositivos: "Performance multitarefa, conectividade Wi-Fi 6 e design profissional e resistente."
  },
  {
    title: "Microcomputadores (Mini PCs)",
    category: "Compactividade Total",
    description: "O poder de um computador completo em uma caixa que cabe na palma da mão. Ideal para balcões com espaço reduzido.",
    features: ["Montagem VESA (atrás do monitor)", "Silencioso e discreto", "Alto desempenho em pouco espaço"],
    icon: "developer_board",
    indicadaPara: "Quiosques, balcões de atendimento e PDVs compactos onde o espaço é um recurso valioso.",
    pontosPositivos: "Integração visual limpa, aquecimento reduzido e baixo custo de manutenção."
  }
];

export default function PerifericosEssenciais() {
  return (
    <section className="py-16 bg-sigma-light">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Manifesto Header Layout */}
        <div className="mb-24">
          <span className="text-sigma-dark/30 font-bold font-body tracking-widest uppercase text-sm block mb-6">Ecossistema de Automação</span>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-sigma-dark font-display tracking-tight leading-[1.2]">
                Periféricos que completam<br /> sua frente de caixa
              </h2>
            </div>
            
            <div className="hidden lg:block w-px h-28 bg-sigma-orange/40 self-center"></div>
            
            <div className="lg:w-1/2 text-left">
              <p className="text-lg text-sigma-dark/60 font-body leading-relaxed max-w-lg">
                Mais do que computadores, entregamos todo o ecossistema necessário para uma operação de PDV fluida, segura e de alto desempenho.
              </p>
            </div>
          </div>
        </div>

        {/* Category tag */}
        <div className="mb-12 flex flex-wrap items-center gap-4">
          <div className="bg-sigma-orange/10 text-sigma-orange px-4 py-1.5 rounded-full text-sm font-bold border border-sigma-orange/20">
            Acessórios Indispensáveis
          </div>
          <p className="text-sigma-dark/50 text-sm font-body">
            Trabalhamos com as melhores marcas: <strong>Datalogic</strong>, <strong>NHS</strong>, <strong>Dell</strong>, <strong>Lenovo</strong>, <strong>Intelbras</strong> e <strong>Gertec</strong>.
          </p>
        </div>

        {/* The Grid Setup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {peripherals.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-sigma-dark/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Icon Container (Substituting generic images with professional icons for high-level peripherals) */}
              <div className="h-48 bg-white border-b border-sigma-dark/5 flex items-center justify-center relative overflow-hidden group-hover:bg-sigma-orange/[0.03] transition-colors">
                <span className="material-symbols-outlined text-7xl text-sigma-orange/20 group-hover:text-sigma-orange/90 transition-all duration-500 transform group-hover:scale-110">
                  {item.icon}
                </span>
                <div className="absolute bottom-4 left-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sigma-dark/20">{item.category}</span>
                </div>
              </div>
              
              <div className="p-8 lg:p-10 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 font-display text-sigma-dark tracking-tight group-hover:text-sigma-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sigma-dark/70 font-body text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                  
                  <div className="space-y-3 pt-6 border-t border-sigma-dark/5">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-sigma-dark/80 font-body font-medium">
                        <span className="material-symbols-outlined text-sigma-orange text-lg">check_circle</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <AccordionDetails
                    indicadaPara={item.indicadaPara}
                    pontosPositivos={item.pontosPositivos}
                  />
                </div>

                <a
                  href={`https://wa.me/554989022868?text=Ol%C3%A1%21+Tenho+interesse+na+linha+de+${encodeURIComponent(item.title)}+que+vi+no+site+da+Sigma.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 w-full py-3.5 px-6 rounded-full border-2 border-sigma-orange text-sigma-orange font-bold hover:bg-sigma-orange hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  Consultar modelos
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer info/callout */}
        <div className="mt-12 p-8 rounded-[2rem] bg-sigma-dark text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-sigma-dark/20">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold font-display mb-2">Precisa de um periférico específico?</h4>
            <p className="text-white/60 font-body text-sm">Trabalhamos com todo o catálogo das principais marcas de automação do Brasil.</p>
          </div>
          <a 
            href="https://wa.me/554989022868?text=Ol%C3%A1%21+Preciso+de+um+equipamento+espec%C3%ADfico+de+automa%C3%A7%C3%A3o+que+n%C3%A3o+est%C3%A1+listado+no+site."
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-8 py-4 rounded-full bg-sigma-orange text-white font-bold hover:scale-105 transition-transform"
          >
            Falar com televendas
          </a>
        </div>

      </div>
    </section>
  );
}
