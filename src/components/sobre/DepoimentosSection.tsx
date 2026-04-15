"use client";

import { motion } from "framer-motion";

const depoimentos = [
  {
    name: "Ricardo Mendes",
    label: "Supermercado - Chapecó",
    phrase: "Conseguimos padronizar todos os caixas e reduzir erros no fechamento diário com o apoio da SigmaPDV.",
    time: "10:15",
    color: "#dcf8c6" // Verde claro do WhatsApp
  },
  {
    name: "Ana Cláudia",
    label: "Loja de Confecções - Oeste",
    phrase: "O controle de estoque ficou muito mais simples e hoje conseguimos enxergar exatamente o que gira na loja.",
    time: "14:32",
    color: "#fff" // Branco
  },
  {
    name: "Carlos Eduardo",
    label: "Rede de Restaurantes",
    phrase: "A equipe técnica está sempre por perto quando precisamos. Isso faz diferença na operação do dia a dia.",
    time: "09:47",
    color: "#dcf8c6"
  }
];

export default function DepoimentosSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-20 bg-sigma-light/30 overflow-hidden" id="depoimentos">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16">
          <span className="text-sigma-dark/30 font-bold font-body tracking-widest text-sm uppercase mb-6 block">
            Relatos de Sucesso
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-sigma-dark">
            O que dizem quem confia na Sigma
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {depoimentos.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-end gap-3">
                {/* Espaço para Foto */}
                <div className="w-12 h-12 bg-white rounded-full border-2 border-sigma-orange/20 overflow-hidden shadow-sm shrink-0">
                  <div className="w-full h-full bg-sigma-dark/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sigma-dark/30 text-2xl">person</span>
                  </div>
                </div>

                {/* Balão de Fala */}
                <div 
                  className={`relative p-6 rounded-[1.5rem] rounded-bl-none shadow-md border border-sigma-dark/5 flex flex-col gap-2 group hover:-translate-y-1 transition-transform`}
                  style={{ backgroundColor: item.color }}
                >
                  <p className="text-xs font-black text-sigma-orange font-display tracking-tight leading-none mb-1">
                    {item.name}
                  </p>
                  <p className="text-xs text-sigma-dark/40 font-body mb-2 leading-none italic">
                    {item.label}
                  </p>
                  <p className="text-sigma-dark/80 text-[1.05rem] font-body leading-relaxed">
                    "{item.phrase}"
                  </p>
                  
                  {/* Footer do Balão (Hora + Checks) */}
                  <div className="flex items-center justify-end gap-1 mt-1 opacity-40 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-medium font-body">{item.time}</span>
                    <span className="material-symbols-outlined text-xs text-[#34B7F1]">done_all</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
