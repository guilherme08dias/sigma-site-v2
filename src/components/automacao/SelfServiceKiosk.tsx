"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SelfServiceKiosk() {
  const images = [
    { 
      src: "/kiosk-mk11-principal.png", 
      alt: "Kiosk MK 11 Elgin - Vista Principal",
      description: "Design Moderno e Compacto: O MK 11 se integra perfeitamente a qualquer ambiente de varejo."
    },
    { 
      src: "/kiosk-mk11-impressora.png", 
      alt: "Impressora Kiosk MK 11",
      description: "Impressão Ágil: Saída frontal de 250mm/s para máxima produtividade e troca rápida de papel."
    },
    { 
      src: "/kiosk-mk11-lateral.png", 
      alt: "Design Lateral Kiosk MK 11",
      description: "Interface e Design: Tela touch capacitiva de 11.6\" com perfil ultra-compacto."
    }
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="mb-24">
          <span className="text-sigma-dark/30 font-bold font-body tracking-widest uppercase text-sm block mb-6">Autoatendimento</span>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-sigma-dark font-display tracking-tight leading-[1.2]">
                Terminais de <br /> Autoatendimento
              </h2>
            </div>
            
            <div className="hidden lg:block w-px h-28 bg-sigma-orange/40 self-center"></div>
            
            <div className="lg:w-1/2 text-left">
              <p className="text-lg text-sigma-dark/60 leading-relaxed font-body max-w-lg">
                Reduza filas e modernize sua operação com as melhores soluções de autoatendimento, com destaque para a linha MK 11 da Elgin — compacta, robusta e versátil.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-wrap items-center gap-4">
          <div className="bg-sigma-orange/10 text-sigma-orange px-4 py-1.5 rounded-full text-sm font-bold border border-sigma-orange/20">
            Destaques da Categoria
          </div>
          <p className="text-sigma-dark/50 text-sm font-body">
            O <strong>Kiosk MK 11</strong> é a escolha ideal para pequenos e médios estabelecimentos que buscam inovação.
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
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 font-display text-sigma-dark tracking-tight">Variações e Especificações</h3>
              <ul className="space-y-6 flex-1">
                <li className="flex items-start gap-4 p-4 rounded-3xl transition-colors hover:bg-sigma-orange/5">
                  <span className="material-symbols-outlined text-sigma-orange p-3 bg-sigma-orange/10 rounded-2xl">android</span>
                  <div>
                    <h4 className="font-bold text-sigma-dark font-body text-lg">Kiosk MK 11 · Android</h4>
                    <p className="text-sm font-body text-sigma-dark/60 leading-relaxed">Versão otimizada para ecossistemas Android. Ideal para apps de cardápio digital e consultas rápidas.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-3xl transition-colors hover:bg-sigma-orange/5">
                  <span className="material-symbols-outlined text-sigma-orange p-3 bg-sigma-orange/10 rounded-2xl">settings_input_component</span>
                  <div>
                    <h4 className="font-bold text-sigma-dark font-body text-lg">Kiosk MK 11 · Celeron J6412</h4>
                    <p className="text-sm font-body text-sigma-dark/60 leading-relaxed">Poder de processamento Intel para sistemas Windows e Linux. Máxima compatibilidade e performance.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-3xl transition-colors hover:bg-sigma-orange/5">
                  <span className="material-symbols-outlined text-sigma-orange p-3 bg-sigma-orange/10 rounded-2xl">print</span>
                  <div>
                    <h4 className="font-bold text-sigma-dark font-body text-lg">Hardware All-in-One</h4>
                    <p className="text-sm font-body text-sigma-dark/60 leading-relaxed">Impressora de 250mm/s, leitor com sensor de presença e tela de 11.6" integrados em um só corpo.</p>
                  </div>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-10">
                <a
                  href="https://wa.me/554989022868?text=Ol%C3%A1%21+Gostaria+de+um+or%C3%A7amento+para+o+terminal+de+autoatendimento+Kiosk+MK+11."
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
