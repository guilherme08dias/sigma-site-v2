"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

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

export default function ThermalPrinters() {
  const printers = [
    {
      title: "Epson TM-T20X",
      description: "Impressora térmica Epson TM‑T20X, ideal para emissão de cupons em pontos de venda com ótimo custo‑benefício. Velocidade de impressão em torno de 200 mm/s e operação silenciosa, perfeita para comércio e serviços.",
      features: ["Velocidade: 200mm/s", "Guilhotina inclusa: auto-corte", "Interface: USB e Serial ou Ethernet"],
      image: "/epson-t20x.png",
      indicadaPara: "Comércios locais, restaurantes, farmácias e pontos de venda com volume moderado de atendimento que precisam de uma impressora térmica confiável.",
      pontosPositivos: "Baixo consumo de energia, impressão nítida, recursos de monitoramento de status e manutenção que reduzem paradas inesperadas."
    },
    {
      title: "Bematech MP-4200 TH",
      description: "Impressora térmica Bematech MP‑4200 TH, projetada para alto volume de cupons. Velocidade de até 250–300 mm/s, guilhotina automática e grande durabilidade de cabeça térmica, ideal para frentes de caixa intensas.",
      features: ["Velocidade: 250mm/s", "Fácil integração (Qualquer PDV)", "Sistema de Recuperação em caso de erro"],
      image: "/bematech-mp4200.png",
      indicadaPara: "Supermercados, lojas de conveniência, bares, restaurantes e operações de varejo com grande fluxo de clientes que exigem agilidade na impressão de cupons.",
      pontosPositivos: "Sistema Easy Recovery para destravar atolamentos abrindo a tampa, múltiplas interfaces de conexão (USB, Serial, Ethernet) e sensores de papel que aumentam a segurança da operação."
    },
    {
      title: "Elgin i9",
      description: "Impressora térmica Elgin i9, referência no varejo brasileiro para emissão de cupons NFC‑e e não fiscais. Oferece velocidade de impressão em torno de 300 mm/s e alta robustez para uso contínuo.",
      features: ["Velocidade: 300mm/s", "Interface: USB, Ethernet ou Serial", "Sensor de fim de papel e tampa aberta"],
      image: "/elgin-i9.png",
      indicadaPara: "Redes de varejo, supermercados, lojas de médio e grande porte e negócios que precisam de filas rápidas e alto desempenho na emissão de documentos fiscais.",
      pontosPositivos: "Longa vida útil da cabeça térmica e da guilhotina, compatibilidade com diversos sistemas de automação comercial e suporte a bobinas de até 80 mm."
    },
    {
      title: "Elgin i8",
      description: "Impressora térmica Elgin i8, modelo compacto para frentes de caixa com pouco espaço físico. Velocidade de até 250 mm/s, guilhotina automática e ótimo equilíbrio entre desempenho e economia.",
      features: ["Velocidade: 250mm/s", "Fácil carga de papel (Drop-in)", "Design elegante e funcional"],
      image: "/elgin-i8.png",
      indicadaPara: "PDVs compactos, balcões de atendimento, quiosques e operações que precisam de uma impressora térmica rápida em espaços reduzidos.",
      pontosPositivos: "Suporta bobinas de até 80 mm, boa durabilidade da cabeça térmica e da guilhotina, além de opções de conexão como USB, Ethernet e Serial para facilitar a integração."
    }
  ];

  return (
    <section className="py-16 bg-sigma-light">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="mb-24">
          <span className="text-sigma-dark/30 font-bold font-body tracking-widest uppercase text-sm block mb-6">Impressão de Alta Performance</span>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-sigma-dark font-display tracking-tight leading-[1.2]">
                Impressoras Térmicas<br /> Epson, Bematech e Elgin
              </h2>
            </div>
            
            <div className="hidden lg:block w-px h-28 bg-sigma-orange/40 self-center"></div>
            
            <div className="lg:w-1/2 text-left">
              <p className="text-lg text-sigma-dark/60 font-body leading-relaxed max-w-lg">
                Rapidez, confiabilidade e design sofisticado para emissão de cupons fiscais e recibos no seu estabelecimento.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-wrap items-center gap-4">
          <div className="bg-sigma-orange/10 text-sigma-orange px-4 py-1.5 rounded-full text-sm font-bold border border-sigma-orange/20">
            Destaques da Categoria
          </div>
          <p className="text-sigma-dark/50 text-sm font-body">
            Trabalhamos com a linha completa de equipamentos <strong>Epson</strong>, <strong>Elgin</strong>, <strong>Bematech</strong> e outras marcas líderes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {printers.map((printer, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden border border-sigma-dark/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="aspect-square bg-white p-8 lg:p-10 flex items-center justify-center overflow-hidden relative">
                <img 
                  src={printer.image} 
                  alt={printer.title} 
                  className="w-full h-full object-contain z-10" 
                />
              </div>
              
              <div className="p-10 lg:p-12 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 font-display text-sigma-dark tracking-tight group-hover:text-sigma-orange transition-colors">
                    {printer.title}
                  </h3>
                  <p className="text-sigma-dark/70 font-body text-lg leading-relaxed mb-8">
                    {printer.description}
                  </p>
                  
                  <div className="space-y-4 pt-6 border-t border-sigma-dark/5">
                    {printer.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-base text-sigma-dark/80 font-body font-medium">
                        <span className="material-symbols-outlined text-sigma-orange text-xl">check_circle</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <AccordionDetails
                    indicadaPara={printer.indicadaPara}
                    pontosPositivos={printer.pontosPositivos}
                  />
                </div>

                <a
                  href={`https://wa.me/554989022868?text=Ol%C3%A1%21+Tenho+interesse+na+impressora+${encodeURIComponent(printer.title)}+que+vi+no+site+da+Sigma.`}
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
