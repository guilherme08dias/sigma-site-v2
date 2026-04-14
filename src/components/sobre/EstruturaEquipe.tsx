"use client";

import { motion } from "framer-motion";

const areas = [
  { 
    name: "Suporte Humanizado", 
    desc: "Atendimento de gente para gente. Sem robôs ou chatbots: nossa equipe técnica resolve tudo direto com você.", 
    icon: "support_agent",
    tag: "100% Humano",
    bullets: ["Atendimento via WhatsApp", "Média de resposta: 15min"],
  },
  { 
    name: "Sistemas Adaptativos", 
    desc: "Software que se molda plenamente ao seu modelo de negócio e necessidades específicas.", 
    icon: "code",
    tag: "Flexibilidade",
    bullets: ["Customização total", "Integração nativa"],
  },
  { 
    name: "Treinamento VIP", 
    desc: "Capacitamos sua equipe para extrair a máxima performance da SigmaPDV.", 
    icon: "school",
    tag: "Capacitação",
    bullets: ["Treinamento presencial", "Suporte vitalício"],
  },
  { 
    name: "Comercial Consultivo", 
    desc: "Especialistas focados em projetar a melhor solução de hardware e software para resolver sua dor.", 
    icon: "handshake",
    tag: "Estratégico",
    bullets: ["Foco em ROI", "Diagnóstico preciso", "Parceria de longo prazo"],
  }
];

export default function EstruturaEquipe() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 text-center lg:text-left">
          <h2 className="text-5xl md:text-7xl font-black font-display text-sigma-dark tracking-tighter mb-4">
            Gente que cuida de gente.
          </h2>
          <p className="text-xl text-sigma-dark/50 font-body max-w-3xl leading-relaxed">
            Mais do que tecnologia, entregamos o compromisso de uma equipe especializada em impulsionar o seu negócio.
          </p>
        </div>

        {/* Bento Grid Simétrico de 3 Colunas */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch h-auto lg:h-[750px]">
          
          {/* Coluna 1: Suporte Humanizado (Tall) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-sigma-dark text-white rounded-[3.5rem] p-12 flex flex-col justify-between shadow-2xl relative group overflow-hidden"
          >
             <span className="material-symbols-outlined text-white/5 text-[220px] absolute -top-10 -right-10 pointer-events-none group-hover:scale-105 transition-transform duration-700">support_agent</span>
             
             <div className="z-10">
                <span className="text-sigma-orange font-black font-body text-[10px] uppercase tracking-[0.2em] bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-10 inline-block">Linha de Frente</span>
                <h3 className="text-4xl lg:text-5xl font-black font-display mb-6 tracking-tight leading-none">{areas[0].name}</h3>
                <p className="text-white/60 font-body text-lg mb-10 leading-relaxed">{areas[0].desc}</p>
                
                <div className="space-y-4">
                  {areas[0].bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-bold font-body text-white/40 uppercase tracking-[0.1em]">
                      <div className="w-1.5 h-1.5 rounded-full bg-sigma-orange" />
                      {b}
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="mt-10">
                <span className="text-sigma-orange font-bold font-body text-xs uppercase tracking-widest">{areas[0].tag}</span>
             </div>
          </motion.div>

          {/* Coluna 2: Stacked (Sistemas + Treinamento) */}
          <div className="flex flex-col gap-6">
            
            {/* Sistemas Adaptativos */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 bg-sigma-orange text-white rounded-[3rem] p-10 flex flex-col justify-between shadow-xl relative group overflow-hidden"
            >
               <span className="material-symbols-outlined text-white/10 text-8xl absolute -top-4 -right-4">code</span>
               <div>
                 <h3 className="text-3xl font-black font-display mb-4 leading-tight">{areas[1].name}</h3>
                 <p className="text-white/80 font-body text-base leading-snug">{areas[1].desc}</p>
               </div>
               <div className="flex flex-wrap gap-2">
                  {areas[1].bullets.map((b, i) => (
                    <span key={i} className="text-[9px] font-black uppercase tracking-widest border border-white/30 px-3 py-1 rounded-full">{b}</span>
                  ))}
               </div>
            </motion.div>

            {/* Treinamento VIP */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex-1 bg-sigma-light border border-sigma-dark/5 text-sigma-dark rounded-[3rem] p-10 flex flex-col justify-between shadow-lg relative group overflow-hidden"
            >
               <div className="flex justify-between items-start">
                 <h3 className="text-3xl font-black font-display text-sigma-dark leading-tight">{areas[2].name}</h3>
                 <span className="material-symbols-outlined text-sigma-orange text-3xl">school</span>
               </div>
               <p className="text-sigma-dark/60 font-body text-base leading-snug">{areas[2].desc}</p>
               <div className="flex items-center gap-3">
                 <div className="w-8 h-0.5 bg-sigma-orange/30" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-sigma-dark/30">{areas[2].tag}</span>
               </div>
            </motion.div>
          </div>

          {/* Coluna 3: Comercial Consultivo (Tall) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-sigma-light border border-sigma-dark/5 rounded-[3.5rem] p-12 flex flex-col justify-between shadow-2xl relative group overflow-hidden"
          >
             <div className="space-y-12 z-10 relative">
                <div className="w-16 h-16 rounded-3xl bg-white shadow-md flex items-center justify-center text-sigma-orange">
                   <span className="material-symbols-outlined text-4xl">handshake</span>
                </div>
                
                <div>
                   <h3 className="text-4xl lg:text-5xl font-black font-display text-sigma-dark tracking-tighter leading-none mb-6">
                     {areas[3].name}
                   </h3>
                   <p className="text-sigma-dark/60 font-body text-lg leading-relaxed">
                      {areas[3].desc}
                   </p>
                </div>

                <div className="pt-10 border-t border-sigma-dark/5 space-y-4">
                   {areas[3].bullets.map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                         <div className="size-2 bg-sigma-orange rounded-full" />
                         <span className="text-base font-bold font-body text-sigma-dark/70 tracking-tight">{item}</span>
                      </div>
                   ))}
                </div>
             </div>

             <div className="absolute -right-20 -bottom-20 opacity-[0.03] pointer-events-none transform -rotate-12 group-hover:scale-110 transition-transform duration-[2s]">
                <span className="material-symbols-outlined text-[450px] leading-none">handshake</span>
             </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
