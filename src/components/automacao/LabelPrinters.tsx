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

export default function LabelPrinters() {
  const regularPrinters = [
    {
      title: "Elgin L42 PRO FULL",
      description: "A impressora Elgin L42 PRO FULL traz as mesmas vantagens e força mecânica da consagrada L42 PRO, mas já conta de fábrica com placa de rede integrada. Imprime etiquetas térmicas e por ribbon.",
      features: ["Tripla Conectividade: USB, Ethernet e Serial", "Resolução: 203 dpi", "Software Bartender UltraLite incluso"],
      image: "/l42profull.png",
      indicadaPara: "Supermercados, hospitais, atacados e indústrias que exigem instalação da impressora em rede (via cabo) e impressão a partir de múltiplos computadores do estoque.",
      pontosPositivos: "Integração instantânea em rede sem necessidade de placas adicionais, compatível com linguagens de programação do mercado (ZPL, EPL) e amplo suporte técnico em todo o Brasil."
    },
    {
      title: "Argox OS-214plus",
      description: "Sendo um dos modelos de maior sucesso da Argox, a OS-214plus é uma impressora de etiquetas de médio volume, prática e eficiente. Com design robusto e eletrônica avançada, é ideal para o varejo.",
      features: ["Método: Transferência Térmica e Térmica Direta", "Velocidade: até 102 mm/s", "Resolução: 203 dpi"],
      image: "/argoxos214.png",
      indicadaPara: "Lojas de roupas, farmácias, pequenos estoques e locais que precisam de uma impressora de etiquetas confiável e de fácil manutenção.",
      pontosPositivos: "Grande durabilidade do mecanismo de impressão, fácil carregamento de ribbons/etiquetas e compatibilidade com emulações PPLA e PPLB (fácil integração)."
    }
  ];

  const featuredPrinter = {
    title: "Zebra ZT231 · Evolução Industrial",
    description: "A Zebra ZT231 redefine o padrão industrial com sua nova tela touch colorida de 4,3 polegadas e design compacto. Oferece alta velocidade de impressão e inteligência integrada para máxima produtividade.",
    features: ["Alta Velocidade: até 305 mm/s (12 ips)", "Interface: Tela touch colorida de 4.3\"", "Conexão: USB, Serial, Ethernet e Bluetooth"],
    image: "/zebrazt231.png",
    indicadaPara: "Centros logísticos, indústrias e distribuidoras que necessitam de alta produtividade, facilidade de uso via interface touch e mínima manutenção em ambiente pesado.",
    pontosPositivos: "Velocidade superior da categoria, configuração intuitiva via tela touch (ZT231), estrutura metálica durável e suporte avançado para ribbons de grande metragem (450m)."
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="mb-24">
          <span className="text-sigma-dark/30 font-bold font-body tracking-widest uppercase text-sm block mb-6">Organização e Controle</span>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-sigma-dark font-display tracking-tight leading-[1.2]">
                Impressoras de etiquetas<br /> para organização e controle
              </h2>
            </div>
            
            <div className="hidden lg:block w-px h-28 bg-sigma-orange/40 self-center"></div>
            
            <div className="lg:w-1/2 text-left">
              <p className="text-lg text-sigma-dark/60 font-body leading-relaxed max-w-lg">
                Modelos térmicos profissionais para impressão de etiquetas adesivas com código de barras, gôndola, estoque e identificação de produtos, prontos para integrar com o ecossistema SigmaPDV.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-wrap items-center gap-4">
          <div className="bg-sigma-orange/10 text-sigma-orange px-4 py-1.5 rounded-full text-sm font-bold border border-sigma-orange/20">
            Destaques da Categoria
          </div>
          <p className="text-sigma-dark/50 text-sm font-body">
            Trabalhamos com toda a linha de produtos <strong>Elgin</strong>, <strong>Zebra</strong> e <strong>Argox</strong> para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Cards regulares: Elgin L42 e Bematech L42 */}
          {regularPrinters.map((printer, index) => (
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
                  href={`https://wa.me/554989022868?text=Ol%C3%A1%21+Tenho+interesse+no+modelo+${encodeURIComponent(printer.title)}+que+vi+no+site+da+Sigma.`}
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

          {/* Card destaque: Zebra ZT230 — horizontal full-width */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group md:col-span-2 bg-white rounded-3xl overflow-hidden border border-sigma-dark/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-stretch md:gap-10"
          >
            <div className="min-h-[280px] md:w-1/2 bg-white overflow-hidden relative flex items-center justify-center p-10">
              <img 
                src={featuredPrinter.image} 
                alt={featuredPrinter.title} 
                className="w-full h-full object-contain z-10" 
              />
            </div>
            
            <div className="md:w-1/2 p-10 px-8 lg:py-12 lg:px-8 flex flex-col justify-center">
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 font-display text-sigma-dark tracking-tight group-hover:text-sigma-orange transition-colors">
                  {featuredPrinter.title}
                </h3>
                <p className="text-sigma-dark/70 font-body text-lg leading-relaxed mb-8">
                  {featuredPrinter.description}
                </p>
                
                <div className="space-y-4 pt-6 border-t border-sigma-dark/5">
                  {featuredPrinter.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-base text-sigma-dark/80 font-body font-medium">
                      <span className="material-symbols-outlined text-sigma-orange text-xl">check_circle</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <AccordionDetails
                  indicadaPara={featuredPrinter.indicadaPara}
                  pontosPositivos={featuredPrinter.pontosPositivos}
                />
              </div>

              <a
                href={`https://wa.me/554989022868?text=Ol%C3%A1%21+Tenho+interesse+no+modelo+industrial+${encodeURIComponent(featuredPrinter.title)}+que+vi+no+site+da+Sigma.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 w-full md:w-auto md:self-end py-4 px-8 rounded-full border-2 border-sigma-orange text-sigma-orange font-bold hover:bg-sigma-orange hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Falar com um consultor técnico
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
