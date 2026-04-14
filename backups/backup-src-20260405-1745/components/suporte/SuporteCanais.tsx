"use client";

import { motion } from "framer-motion";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className}>
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.13 6.742 3.046 9.378L1.054 31.29l6.118-1.96A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.312 22.594c-.39 1.1-1.932 2.014-3.17 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.974-7.826-6.81-8.064-7.126-.23-.316-1.932-2.574-1.932-4.908s1.222-3.48 1.656-3.96c.434-.478.948-.598 1.264-.598.316 0 .632.004.908.016.292.014.684-.11 1.07.816.39.944 1.326 3.236 1.444 3.472.118.236.196.51.04.826-.158.316-.236.512-.472.79-.236.276-.496.618-.71.828-.236.236-.482.492-.208.964.276.472 1.226 2.022 2.632 3.276 1.812 1.616 3.338 2.118 3.81 2.354.472.236.748.196 1.024-.118.276-.316 1.186-1.382 1.502-1.858.316-.478.632-.394 1.066-.236.434.158 2.724 1.284 3.19 1.52.466.236.776.354.894.55.118.196.118 1.128-.272 2.228Z"/>
    </svg>
  );
}

export default function SuporteCanais() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 mb-16">
        <span className="material-symbols-outlined text-sigma-cyan text-4xl">support_agent</span>
        <h2 className="text-3xl md:text-4xl font-black font-display tracking-tight text-sigma-dark">Canais de Suporte</h2>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-[2rem] p-12 md:p-16 border border-sigma-dark/5 shadow-lg shadow-sigma-dark/5 text-center flex flex-col items-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <div className="w-24 h-24 bg-[#25D366]/10 rounded-3xl mb-8 flex items-center justify-center">
          <WhatsAppIcon className="w-12 h-12 text-[#25D366]" />
        </div>
        
        <h3 className="text-3xl md:text-4xl font-black mb-6 font-display tracking-tight text-sigma-dark">WhatsApp Direto</h3>
        <p className="text-sigma-dark/70 mb-12 text-xl max-w-2xl font-body leading-relaxed">
          Precisa de auxílio agora? Fale diretamente com nossos técnicos via WhatsApp para uma resposta ágil e eficiente.
        </p>
        
        <a 
          href="https://wa.me/5549991161576?text=Olá!%20Preciso%20de%20suporte%20técnico."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-lg bg-[#25D366] hover:bg-[#20BE5A] text-white py-5 rounded-full font-black text-lg shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center gap-4 hover:-translate-y-1"
        >
          <WhatsAppIcon className="w-6 h-6 text-white" />
          Chamar via WhatsApp
        </a>
        

      </motion.div>
    </section>
  );
}
