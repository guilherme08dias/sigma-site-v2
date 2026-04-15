"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function PresencaRegional() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-20 bg-sigma-light">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-sigma-dark/5 flex flex-col md:flex-row relative"
        >
          <div className="p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center gap-8 z-10 bg-white md:w-1/2">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-sigma-dark mb-4">Presença regional em todo o Oeste Catarinense</h2>
              <p className="text-sigma-dark/70 font-body text-lg leading-relaxed">
                Sediados em <span className="text-sigma-orange font-bold">Chapecó</span>, atendemos mercados, lojas e empresas em toda a região Oeste de Santa Catarina, com suporte local e visitas presenciais quando necessário.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Atendimento presencial em Chapecó e cidades vizinhas",
                "Mais de 100 empresas ativas na região",
                "Equipe técnica local especializada"
              ].map((bullet, i) => (
                <div key={i} className="flex items-center gap-3 text-sigma-dark/80 font-body">
                  <div className="size-6 rounded-full bg-sigma-orange/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[16px] text-sigma-orange font-black">check</span>
                  </div>
                  <span className="text-base font-semibold">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col xl:flex-row gap-4 pt-4">
              <Button size="lg" variant="primary">
                Consultar Especialista
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-sigma-dark flex items-center justify-center overflow-hidden min-h-[250px] sm:min-h-[350px] md:min-h-[400px]">
            <motion.img 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full h-full object-cover" 
              alt="Mapa tecnológico de Santa Catarina com conexões em Chapecó" 
              src="/mapa-sc-hitech.png"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
