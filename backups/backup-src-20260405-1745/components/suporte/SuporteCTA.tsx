"use client";

import { motion } from "framer-motion";

export default function SuporteCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12 pb-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-sigma-dark rounded-[3rem] py-24 px-8 text-center relative overflow-hidden border border-white/5 shadow-2xl"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#FF6600_1px,transparent_1px)] [background-size:30px_30px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 font-display tracking-tight leading-tight">
            Sua operação em um novo nível de performance
          </h2>
          <p className="text-white/60 font-body text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Já configurou seus equipamentos? Descubra como nossas soluções completas de Hardware e Gestão podem acelerar o crescimento do seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
            <button className="w-full sm:w-auto bg-sigma-orange hover:bg-sigma-orange/90 text-white px-10 py-5 rounded-full font-black text-lg transition-all shadow-lg shadow-sigma-orange/20 hover:-translate-y-1 hover:shadow-sigma-orange/40">
              Ver Catálogo de Hardware
            </button>
            <button className="w-full sm:w-auto border-2 border-white/20 text-white hover:text-sigma-dark bg-transparent px-10 py-5 rounded-full font-black text-lg hover:bg-white transition-all hover:-translate-y-1">
              Explorar Sistemas
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
