"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function SecullumSection() {
  const plans = [
    {
      name: "Ponto Web",
      tag: "Solução Cloud",
      price: "Sob consulta",
      features: ["Gestão na nuvem", "App para colaborador", "Geolocalização"],
      highlight: true
    },
    {
      name: "Ponto Offline",
      price: "Sob consulta",
      features: ["Servidor local", "Alta disponibilidade", "Redundância de dados"],
      highlight: false
    },
    {
      name: "Secullum Acesso",
      price: "Sob consulta",
      features: ["Controle de portas", "Fluxo de visitantes", "Integração de Hardware"],
      highlight: false
    }
  ];

  const topics = [
    { icon: "gavel", title: "Portaria 671", desc: "Total legalidade" },
    { icon: "face", title: "Biometria Facial", desc: "Reconhecimento IA" },
    { icon: "groups", title: "Gestão de RH", desc: "Processos ágeis" },
    { icon: "security", title: "Segurança", desc: "Acesso controlado" }
  ];

  return (
    <section className="bg-sigma-dark py-32 px-6 relative z-10 overflow-hidden" id="secullum">
      <div className="max-w-7xl mx-auto">
        
        {/* Row 1: Image + Content (Alternated Order) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute inset-0 bg-sigma-cyan/20 blur-[100px] rounded-full scale-75 -z-10 pointer-events-none"></div>
            <img 
              alt="Secullum Ponto e Gestão de Acesso" 
              className="relative z-10 w-full rounded-[2.5rem] shadow-2xl border border-white/10" 
              src="/Secullum-bg.jpeg"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sigma-orange font-bold font-body tracking-widest text-sm uppercase mb-4 block">Controle e Acesso</span>
            <h2 className="text-4xl md:text-5xl leading-tight font-black font-display tracking-tight text-white mb-6">Inteligência em Controle de Jornada e Acesso</h2>
            <p className="text-white/70 font-body text-xl leading-relaxed max-w-xl">Cuidar da sua equipe e da segurança da sua empresa exige precisão e as ferramentas certas. Com a tecnologia Secullum, você simplifica o controle de ponto e jornada em total conformidade com a Portaria 671, eliminando burocracias no RH. Mais do que registrar horários, nossa solução traz inteligência e segurança máxima para o fluxo de pessoas. Garanta uma gestão transparente e moderna, onde a praticidade do aplicativo se une ao controle absoluto da sua operação.</p>
          </motion.div>
        </div>

        {/* Row 2: Topic Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 relative z-10"
        >
          {topics.map((topic, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 h-full hover:border-sigma-orange/30 transition-all group">
              <span className="material-symbols-outlined text-sigma-orange text-3xl group-hover:scale-110 transition-transform">{topic.icon}</span>
              <div>
                <h3 className="font-bold font-display text-white text-lg">{topic.title}</h3>
                <p className="text-sm font-body text-white/50">{topic.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Row 3: Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 relative z-10">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white/5 backdrop-blur-sm p-10 rounded-3xl flex flex-col h-full transition-all duration-300 hover:-translate-y-2 relative text-white ${plan.highlight ? 'border-2 border-sigma-orange shadow-[0_0_30px_rgba(255,102,0,0.2)]' : 'border border-white/10'}`}
            >
              {plan.tag && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sigma-orange text-white px-6 py-2 rounded-full text-xs font-bold font-body uppercase tracking-widest shadow-lg shadow-sigma-orange/20">{plan.tag}</span>
              )}
              <h4 className="text-2xl font-bold mb-4 font-display">{plan.name}</h4>
              <div className="text-4xl font-black mb-8 font-display tracking-tight">{plan.price}</div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-white/70 font-body">
                    <span className="material-symbols-outlined text-sigma-orange text-2xl">check_circle</span> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center relative z-10">
          <Button size="xl" variant="primary">
            Agendar Demonstração Técnica
          </Button>
        </div>
      </div>
    </section>
  );
}
