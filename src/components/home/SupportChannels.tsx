"use client";

import { motion } from "framer-motion";

/**
 * @deprecated Este componente foi substituído pela versão mais moderna e oficial
 * presente em src/components/IndicatorsAndSupport.tsx ("Suporte Técnico Ágil e Humano").
 * Removido da Home por decisão de design/produto.
 */
export default function SupportChannels() {
  return (
    <section className="bg-sigma-light py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-sigma-dark mb-4">Suporte técnico especializado à sua disposição</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Atendimento consultivo e ágil para garantir a continuidade total da sua operação.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.0 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col h-full group"
          >
            <div className="aspect-[4/3] bg-gray-50 rounded-lg mb-6 overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjl6ocKDhD7Nzjr0gorI4Z6gTUarS8IzXB-wE5wtPI6KNrvU3HYYjMwYwdQ7Cve6mqBNJYIkBDL5Z-1RZ1mwkIWO-C9mzmNPIF66lgidsX3Dvmzm-9Njx8Suh_35q5NtbeA_Ahx9IV1Pfstz3jPEcFQGOFtmi9RXBZuvcjXT1InKYuwsuXWJwLrkoad7xNao-t8n2k90LuEmz87YPY6E3LtvDT1YMm1F-VexuisdrTzReb8M8i6H--3cJ8yu-dhahkiofoWIBRnMM" alt="Suporte" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Acesso remoto</h3>
            <button className="mt-auto w-full py-3 px-4 rounded-lg border border-gray-200 font-semibold hover:border-sigma-orange text-sigma-dark hover:text-sigma-orange transition-all flex items-center justify-center gap-2">
              Baixar Acesso <span className="material-symbols-outlined text-lg">download</span>
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col h-full group"
          >
            <div className="aspect-[4/3] bg-gray-50 rounded-lg mb-6 overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9wf287hEh8MfldxfLsZPGPmgd9o3KIK9hx8vYkW4ztDs6XJyF0SeNti3z8GdfPFoPFyHWjy8DT9hfze1G2b7HQfwkSxYt_MvLzhnqYxAkfJzuKUCb-cGBFWsAZMGWolcGa36RPFvOYau1u8V9WNu3kXXWr9_7covZq7lnMpfCX6yAxt0LG4aFvLcHH3lEdRC1LvGUGnyA6qrNaZwQiWcUG31fSjnag6KttRROi2OqAehEwBG7xJYvSIVt3NA6bXAv832SQSI88XQ" alt="Whats" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp direto</h3>
            <button className="mt-auto w-full py-3 px-4 rounded-lg border border-gray-200 font-semibold hover:border-sigma-orange text-sigma-dark hover:text-sigma-orange transition-all flex items-center justify-center gap-2">
              Falar Agora <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col h-full group"
          >
            <div className="aspect-[4/3] bg-gray-50 rounded-lg mb-6 overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4DZnmAD_iZykHh2mKh0YINga98VHAUQQE3bFD18aPyzq8nQ9gV0bBSdVZ8QYP_BZCX5v57tkkzJvOLL__HEeQL4FMCZkpPfNtsxdh38ZTmrB9fKs45I3YXfpQADObR-8Ett5TEi9nEdIC0m6AJy3KeY_K7Syxuqdb-tRlQ9GMHeTXrRe45BHdgCGCKpe0GmHHLx0DKx-C034aldB5XVSVYPGB_KZuOeGsNdeRSCbLXgeocnPP-AkPdGLUpB8i07GLgegQyIB3jXk" alt="Manual" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Drivers e manuais</h3>
            <button className="mt-auto w-full py-3 px-4 rounded-lg border border-gray-200 font-semibold hover:border-sigma-orange text-sigma-dark hover:text-sigma-orange transition-all flex items-center justify-center gap-2">
              Acessar Base <span className="material-symbols-outlined text-lg">folder_open</span>
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col h-full group"
          >
            <div className="aspect-[4/3] bg-gray-50 rounded-lg mb-6 flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-sigma-orange">confirmation_number</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Ticket de suporte</h3>
            <button className="mt-auto w-full py-3 px-4 rounded-lg border border-gray-200 font-semibold hover:border-sigma-orange text-sigma-dark hover:text-sigma-orange transition-all flex items-center justify-center gap-2">
              Abrir Chamado <span className="material-symbols-outlined text-lg">open_in_new</span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
