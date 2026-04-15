"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { value: "+7", label: "Anos de Atuação" },
    { value: "+100", label: "Clientes Ativos" },
    { value: "70+", label: "Municípios Atendidos" }
  ];

  return (
    <section className="bg-sigma-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-sigma-dark py-10 md:py-24 px-6 sm:px-8 lg:px-20 rounded-2xl md:rounded-3xl overflow-hidden relative border border-white/5 shadow-2xl">
          <div className="absolute left-0 bottom-0 w-80 h-80 bg-sigma-orange/10 blur-[100px] rounded-full"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 text-left relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col gap-2 sm:gap-4"
              >
                <div className="text-sigma-orange text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight">{stat.value}</div>
                <div className="text-white text-sm sm:text-lg md:text-xl font-bold font-body leading-tight">{stat.label}</div>
                <div className="w-8 sm:w-12 h-1 sm:h-1.5 bg-sigma-orange mt-1 sm:mt-2 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
