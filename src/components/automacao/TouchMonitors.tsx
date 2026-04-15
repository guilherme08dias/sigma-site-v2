"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function TouchMonitors() {
  const images = [
    { 
      src: "/pdv-completo.png", 
      alt: "PDV Montado Sigma",
      description: "Configuração Dual-Monitor: PDV integrado com monitores profissionais para o operador e para o cliente."
    },
    { 
      src: "/ctm1560of.jpg", 
      alt: "Monitor Operador CTM-1560 OF",
      description: "Monitor de 15,6\" para o Operador: Toque ultra-rápido para máxima agilidade no caixa."
    },
    { 
      src: "/ctm1010of.jpg", 
      alt: "Monitor Cliente CTM-1010 OF",
      description: "Monitor de 10,1\" para o Cliente: Transparência e interatividade no momento do pagamento."
    }
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <section className="pt-[calc(4rem+3rem)] pb-16 bg-white -mt-[3rem]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="mb-24">
          <span className="text-sigma-dark/30 font-bold font-body tracking-widest uppercase text-sm block mb-6">Tecnologia Custom</span>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-sigma-dark font-display tracking-tight leading-[1.2]">
                Monitores Touchscreen:<br /> Interatividade e Robustez no PDV
              </h2>
            </div>
            
            <div className="hidden lg:block w-px h-28 bg-sigma-orange/40 self-center"></div>
            
            <div className="lg:w-1/2 text-left">
              <p className="text-lg text-sigma-dark/60 leading-relaxed font-body max-w-lg">
                Monitores profissionais CUSTOM desenvolvidos para uso intenso em PDVs modernos, com alta durabilidade, resposta rápida ao toque e integração total ao ecossistema SigmaPDV.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-wrap items-center gap-4">
          <div className="bg-sigma-orange/10 text-sigma-orange px-4 py-1.5 rounded-full text-sm font-bold border border-sigma-orange/20">
            Destaques da Categoria
          </div>
          <p className="text-sigma-dark/50 text-sm font-body">
            Trabalhamos com a linha completa de monitores e soluções <strong>Custom</strong>, referência mundial em tecnologia para automação.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-sigma-light rounded-[2.5rem] overflow-hidden shadow-sm border border-sigma-dark/5"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Galeria Interativa */}
            <div className="bg-white p-6 md:p-10 flex flex-col gap-6">
              {/* Imagem Principal */}
              <div className="flex flex-col gap-4">
                <div className="aspect-[16/11] bg-white rounded-3xl overflow-hidden relative border border-sigma-dark/5 shadow-inner flex items-center justify-center">
                  <motion.img 
                    key={activeImage.src}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    src={activeImage.src} 
                    alt={activeImage.alt} 
                    className="w-full h-full object-contain p-4" 
                  />
                </div>
                {/* Legenda Dinâmica */}
                <motion.p 
                  key={`desc-${activeImage.src}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sigma-dark/50 text-sm font-body font-medium italic text-center px-4"
                >
                  {activeImage.description}
                </motion.p>
              </div>
              
              {/* Miniaturas */}
              <div className="grid grid-cols-3 gap-4">
                {images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all bg-white group flex items-center justify-center ${
                      activeImage.src === img.src 
                        ? 'border-sigma-orange ring-4 ring-sigma-orange/10 shadow-lg scale-95' 
                        : 'border-transparent hover:border-sigma-orange/30 hover:scale-105'
                    }`}
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-contain p-2 transition-transform group-hover:scale-110" 
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center bg-transparent">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 font-display text-sigma-dark tracking-tight">Ecrãs Profissionais · Gestão Visual do PDV</h3>
              <ul className="space-y-6 flex-1">
                <li className="flex items-start gap-4 p-4 rounded-3xl transition-colors hover:bg-sigma-orange/5">
                  <span className="material-symbols-outlined text-sigma-orange p-3 bg-sigma-orange/10 rounded-2xl">monitor</span>
                  <div>
                    <h4 className="font-bold text-sigma-dark font-body text-lg">Custom CTM-1560 OF (15,6") · Operador</h4>
                    <p className="text-sm font-body text-sigma-dark/60 leading-relaxed">Resolução Full HD e tela touch PCAP. A ferramenta principal de vendas com resposta rápida ao toque para o operador.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-3xl transition-colors hover:bg-sigma-orange/5">
                  <span className="material-symbols-outlined text-sigma-orange p-3 bg-sigma-orange/10 rounded-2xl">aspect_ratio</span>
                  <div>
                    <h4 className="font-bold text-sigma-dark font-body text-lg">Custom CTM-1010 OF (10,1") · Cliente</h4>
                    <p className="text-sm font-body text-sigma-dark/60 leading-relaxed">Monitor de alta definição sem toque, ideal para exibição de itens da compra, promoções e interação visual com o cliente.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-3xl transition-colors hover:bg-sigma-orange/5">
                  <span className="material-symbols-outlined text-sigma-orange p-3 bg-sigma-orange/10 rounded-2xl">point_of_sale</span>
                  <div>
                    <h4 className="font-bold text-sigma-dark font-body text-lg">Solução de PDV Integrada</h4>
                    <p className="text-sm font-body text-sigma-dark/60 leading-relaxed">Configuração completa de frente de loja focada em máxima interatividade, robustez e agilidade operacional.</p>
                  </div>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-10">
                <a
                  href="https://wa.me/554989022868?text=Ol%C3%A1%21+Gostaria+de+um+or%C3%A7amento+para+o+conjunto+de+monitores+touch+e+cliente+Custom."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-12 h-16 bg-sigma-orange text-white font-bold text-lg flex items-center justify-center shadow-xl shadow-sigma-orange/20 hover:bg-sigma-orange/90 transition-all hover:scale-105 active:scale-95 w-full lg:w-auto"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
