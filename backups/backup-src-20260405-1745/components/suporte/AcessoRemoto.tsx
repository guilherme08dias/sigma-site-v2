"use client";

import { motion } from "framer-motion";

export default function AcessoRemoto() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-20">
      <div className="flex items-center gap-4 mb-16">
        <span className="material-symbols-outlined text-sigma-cyan text-4xl">settings_remote</span>
        <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-sigma-dark">Acesso Remoto</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-10 md:p-12 border border-sigma-dark/5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden flex flex-col items-center text-center"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-[#EF443B]"></div>
          <div className="absolute top-4 right-4 bg-[#EF443B]/10 text-[#EF443B] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Preferencial
          </div>
          
          <div className="w-20 h-20 bg-sigma-light rounded-2xl shadow-sm flex items-center justify-center mb-8 mt-4 group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-[#EF443B] text-4xl">bolt</span>
          </div>
          
          <h3 className="text-3xl font-bold mb-4 font-display text-sigma-dark tracking-tight">AnyDesk</h3>
          
          <p className="text-sigma-dark/70 font-body mb-10 max-w-sm text-lg leading-relaxed flex-grow">
            Ferramenta oficial para suporte remoto. Rápida, segura e otimizada para conexões imediatas.
          </p>
          
          <a 
            href="https://download.anydesk.com/AnyDesk.exe"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-full border border-[#EF443B] text-[#EF443B] font-bold transition-all relative overflow-hidden group-hover:text-white text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">Baixar AnyDesk <span className="material-symbols-outlined text-xl">download</span></span>
            <div className="absolute inset-0 bg-[#EF443B] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-10 md:p-12 border border-sigma-dark/5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden flex flex-col items-center text-center"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-sigma-cyan"></div>
          <div className="absolute top-4 right-4 bg-sigma-cyan/10 text-sigma-cyan text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Alternativa
          </div>
          
          <div className="w-20 h-20 bg-sigma-light rounded-2xl shadow-sm flex items-center justify-center mb-8 mt-4 group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-sigma-cyan text-4xl">cast_connected</span>
          </div>
          
          <h3 className="text-3xl font-bold mb-4 font-display text-sigma-dark tracking-tight">TeamViewer</h3>
          
          <p className="text-sigma-dark/70 font-body mb-10 max-w-sm text-lg leading-relaxed flex-grow">
            Opção alternativa testada e homologada para conexões secundárias ou restrições de rede.
          </p>
          
          <a 
            href="https://download.teamviewer.com/download/TeamViewerQS_x64.exe"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-full border border-sigma-cyan text-sigma-dark font-bold transition-all relative overflow-hidden group-hover:text-sigma-dark text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">Baixar TeamViewer QS <span className="material-symbols-outlined text-xl">download</span></span>
            <div className="absolute inset-0 bg-sigma-cyan transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
