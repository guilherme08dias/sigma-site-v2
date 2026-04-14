"use client";

import { motion } from "framer-motion";

export default function SuccessStoriesSection() {
  return (
    <section className="py-32 bg-sigma-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sigma-dark font-display">Resultados reais com o nosso hub de soluções</h2>
          <p className="text-lg text-sigma-dark/60 mt-4 max-w-3xl mx-auto font-body">
            Veja como empresas de Chapecó e região transformam seus desafios em eficiência com a tecnologia SigmaPDV.
          </p>
          <div className="mt-6 w-16 h-1 bg-sigma-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Card 1: Grande (Vídeo Case) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            <div className="relative aspect-video w-full">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAoKMkV2wwSWrP8BQzsjtz2cB-yA8AcVbW__RXcKwHyTn4X8rQZLY4ZpgWsUNxEpx-hRuzhJh0N0ky-mOmyJvBTWLrokcEV70rhiIkCJoFTUFpjV6XgHNTYDHHrVu3yp1j1WVdDFfOPcEwSNvccvKxvLrKGrBYmA0Zdee0lFHXLCxWNCYdlhfpMBjt18TJi2m3IGhKM-9wzFC7Pat2zBiZE4IjlzfubIkf7KJ-RAH90VQQuN6Jk1q8qN68yZdLRF-e53WLW5Q3Odg" 
                alt="Vídeo Case Supermercado" 
                className="w-full h-full object-cover rounded-t-3xl" 
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button className="size-20 bg-sigma-orange/90 hover:bg-sigma-orange text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-transform group-hover:scale-110 shadow-xl shadow-sigma-orange/30">
                  <span className="material-symbols-outlined text-4xl ml-1">play_arrow</span>
                </button>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-sigma-dark shadow-sm">
                  📍 Chapecó - SC
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-sigma-dark font-display">Supermercado Aurora</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-sigma-dark/60">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">shopping_basket</span> Varejo Alimentar</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">devices</span> Monitor Touch + Uniplus ERP</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Lateral Superior */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC40rmtZNbi9Q06gDzzcnR0F0EjL6KdvFCCX0EVelej90YzbQ86FS_Rh8FSS1Oy6voyqXIlcXUQAsHUKnDGgXq8Fbu6nQdODk0-MSR3BhsoeY1mfa_kpfYSCkCUN4JCR8nqGgPb7Hbmvku5plGhc2zoudzVDweHyG7gCkWl66dDx-l1Ho9kf63ro5MNVfFkn9EOC8v4dLuuGhHVvandvqtO3HMPN-ktyUZGyAbX5oSpkpUqVMY8MuDPuvDQiOMk2cJIX2B9URpfOqU" 
                alt="Case Restaurante" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-sigma-dark shadow-sm">
                  📍 Concórdia - SC
              </div>
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-lg font-bold text-sigma-dark font-display">Bistrô Garden</h3>
              <div className="mt-2 space-y-1 font-body">
                <p className="text-sm text-sigma-dark/60 font-medium">Segmento: Gastronomia</p>
                <p className="text-sm text-sigma-dark/60">Equipamento: Comanda Mobile</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Lateral Inferior */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXibWBMPtzdOnAabFA0oNoxDTTSD3lIRunfCbFHmFRqc08k0dAZtorRqa8et8tuRXUpUJmKM4XqhdiHqQv4zNsMBeGFikSiMrRBJ0WCoP7JSseKXnHvt3xLm6hUqhrpGFB0THJ-TolmF1fnaF4fz9wMDRI69YTcXbpQwZzhOr5XpTXLr9ucyxTxqxceHvd0QSBPBrbW8Ca0g5fMnI2Julmdnm2qzBIhszqdQ7DP9ohAqAdr_Tljx-opsFjbf_wGEdMifF0sXDsN5k" 
                alt="Case Farmácia" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-sigma-dark shadow-sm">
                  📍 Xanxerê - SC
              </div>
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-lg font-bold text-sigma-dark font-display">Farmácia Viva</h3>
              <div className="mt-2 space-y-1 font-body">
                <p className="text-sm text-sigma-dark/60 font-medium">Segmento: Saúde &amp; Bem-estar</p>
                <p className="text-sm text-sigma-dark/60">Equipamento: Totem Autorizado</p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Grande Inferior (Foto Case) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            <div className="relative h-full min-h-[300px] md:min-h-0 flex flex-col md:flex-row">
              <div className="md:w-1/2 relative overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTUixMz025jMk0Iy51XCv4WmQGuKyDkyk0D3VF8QMq1lDWDKSde6tmxhMOIU2pMuHVQiFaZmguEuBnDGa0TGOY3_pgMZ7ri1cEidOlcZzsQe25tAxJ3nCnu1r4rVw1eMouJprXpR3Xz3wsK7N-nLWzuN6PMWDTcqQ_cQHqPpF_wtuP0agq2Og8jWcnMgpaeiSLcQvnGnEkASDjJX5PsN2UFz52o8kl4tr117yDzZHQ7v5UU-p01uLIypokMzrx-uRiHcfX_VoQ4vs" 
                  alt="Case Loja de Moda" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white">
                <div className="mb-4 inline-block bg-sigma-orange/10 text-sigma-orange px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider self-start font-body">Case de Sucesso</div>
                <h3 className="text-2xl font-bold text-sigma-dark mb-4 font-display">Loja Exclusiva Modas</h3>
                <p className="text-sigma-dark/60 text-sm leading-relaxed mb-6 font-body">
                  Implantação completa de inventário em tempo real e integração com e-commerce, reduzindo perdas em 30% no primeiro trimestre.
                </p>
                <div className="flex flex-col gap-2 border-t border-sigma-dark/5 pt-6">
                  <span className="text-sm text-sigma-dark/60">📍 Chapecó - SC</span>
                  <span className="text-sm font-bold text-sigma-dark">Equipamentos: Coletores de Dados Zebra</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
