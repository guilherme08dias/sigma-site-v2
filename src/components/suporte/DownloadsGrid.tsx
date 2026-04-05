"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DownloadsGrid() {
  const [secullumOpen, setSecullumOpen] = useState(false);
  const [driversOpen, setDriversOpen] = useState(false);

  const secullumFiles = [
    {
      name: "Instalador do Secullum Ponto Offline",
      link: "https://www.secullum.com.br/SecullumPontoOffline-setup.exe",
      icon: "install_desktop",
    },
    {
      name: "Atualizador do Secullum Ponto Offline",
      link: "https://www.secullum.com.br/at-ponto-offline.exe",
      icon: "system_update_alt",
    },
    {
      name: "Agente de Comunicação (Windows)",
      link: "https://www.secullum.com.br/PontoWebComunicacaoSetup.exe",
      icon: "wifi_tethering",
    },
  ];

  const drivers = [
    {
      name: "Elgin i8",
      link: "https://d2u2qhufg0q9tn.cloudfront.net/assets/arquivos/imgCard_2a2228fd-72b1-4b99-8b66-8177650aaef5_i8_Windows%20Driver_V7.17.rar",
      icon: "print",
    },
    {
      name: "Elgin i9",
      link: "https://d2u2qhufg0q9tn.cloudfront.net/assets/arquivos/manual_4ce638a5-22e5-4a0d-a820-0108152ced91_ELGIN%20Printer%20Driver_v-1.7.6.rar",
      icon: "print",
    },
    {
      name: "Epson TM-T20X",
      link: "https://ftp.epson.com/latin/drivers/pos/APD_607R1_T20X_WM.zip",
      icon: "print",
    },
    {
      name: "Bematech MP-4200",
      link: "https://d2u2qhufg0q9tn.cloudfront.net/assets/arquivos/manual_bfd3aadb-fc10-4525-aa53-bb39c1a48a17_ELGIN%20Printer%20Driver_v-1.7.7.zip",
      icon: "print",
    },
    {
      name: "Elgin L42PRO",
      link: "https://d2u2qhufg0q9tn.cloudfront.net/assets/arquivos/imgCard_7c0b58ab-800a-42ac-a345-4e300179d18a_ELGIN_2022.1.exe",
      icon: "print",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 mb-16">
        <span className="material-symbols-outlined text-sigma-cyan text-4xl">download</span>
        <h2 className="text-3xl md:text-4xl font-black font-display tracking-tight text-sigma-dark">Downloads</h2>
      </div>
      
      <div className="flex flex-col gap-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setSecullumOpen(!secullumOpen)}
            className={`w-full flex justify-between items-center px-8 py-6 rounded-3xl border transition-all duration-300 ${
              secullumOpen
                ? "bg-sigma-orange text-white border-sigma-orange shadow-md"
                : "bg-white border-sigma-dark/5 hover:border-sigma-orange/30 shadow-sm hover:shadow-md"
            }`}
          >
            <span className="flex items-center gap-4">
              <span className={`material-symbols-outlined text-2xl ${secullumOpen ? "text-white" : "text-sigma-orange"}`}>schedule</span>
              <span className={`font-bold font-display tracking-tight text-lg ${secullumOpen ? "text-white" : "text-sigma-dark"}`}>
                Secullum Ponto
              </span>
            </span>
            <span className={`material-symbols-outlined transition-transform duration-300 ${secullumOpen ? "rotate-180 text-white" : "text-sigma-dark/40"}`}>
              expand_more
            </span>
          </button>

          <AnimatePresence>
            {secullumOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-3 pt-4">
                  {secullumFiles.map((file, idx) => (
                    <a
                      key={idx}
                      href={file.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center px-6 py-5 rounded-2xl bg-white border border-sigma-dark/5 hover:border-sigma-orange/30 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-md"
                    >
                      <span className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-sigma-orange text-xl">{file.icon}</span>
                        <span className="font-bold text-sigma-dark font-display tracking-tight text-sm md:text-base">{file.name}</span>
                      </span>
                      <span className="material-symbols-outlined text-sigma-dark/40 group-hover:text-sigma-orange transition-colors">download</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <button
            onClick={() => setDriversOpen(!driversOpen)}
            className={`w-full flex justify-between items-center px-8 py-6 rounded-3xl border transition-all duration-300 ${
              driversOpen
                ? "bg-sigma-cyan text-sigma-dark border-sigma-cyan shadow-md"
                : "bg-white border-sigma-dark/5 hover:border-sigma-cyan/30 shadow-sm hover:shadow-md"
            }`}
          >
            <span className="flex items-center gap-4">
              <span className={`material-symbols-outlined text-2xl ${driversOpen ? "text-sigma-dark" : "text-sigma-cyan"}`}>print</span>
              <span className="font-bold font-display tracking-tight text-lg text-sigma-dark">
                Driver de Impressoras
              </span>
            </span>
            <span className={`material-symbols-outlined transition-transform duration-300 ${driversOpen ? "rotate-180 text-sigma-dark" : "text-sigma-dark/40"}`}>
              expand_more
            </span>
          </button>

          <AnimatePresence>
            {driversOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-3 pt-4">
                  {drivers.map((driver, idx) => (
                    <a
                      key={idx}
                      href={driver.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center px-6 py-5 rounded-2xl bg-white border border-sigma-dark/5 hover:border-sigma-cyan/30 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-md"
                    >
                      <span className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-sigma-cyan text-xl">{driver.icon}</span>
                        <span className="font-bold text-sigma-dark font-display tracking-tight text-sm md:text-base">{driver.name}</span>
                      </span>
                      <span className="material-symbols-outlined text-sigma-dark/40 group-hover:text-sigma-cyan transition-colors">download</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
