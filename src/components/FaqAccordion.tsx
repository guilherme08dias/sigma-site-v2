"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        category: "Sistemas & Gestão",
        q: "O sistema Uniplus atende o meu tipo de negócio?",
        a: "Sim. O Uniplus é modular e customizável. Atendemos supermercados, restaurantes, farmácias, confecções, materiais de construção e lojas de conveniência com módulos específicos para cada setor."
    },
    {
        category: "Sistemas & Gestão",
        q: "O software funciona se a internet cair?",
        a: "Temos soluções híbridas (Uniplus Desktop) que continuam operando o Frente de Caixa (PDV) offline, sincronizando os dados automaticamente assim que a conexão é restabelecida."
    },
    {
        category: "Suporte Técnico",
        q: "Qual o horário de atendimento do suporte?",
        a: "Nosso suporte remoto funciona de Segunda a Sexta das 08:30 às 18:00, e aos Sábados das 08:30 às 12:00. Clientes com contratos SLA Premium possuem acesso estendido."
    },
    {
        category: "Assistência Física",
        q: "Vocês realizam intervenção em impressoras fiscais?",
        a: "Sim. Somos Assistência Técnica Credenciada (Interventora) para lacração, manutenção e cessação de uso de impressoras fiscais das marcas Bematech, Elgin, Epson, entre outras."
    },
    {
        category: "Hardware Corporativo",
        q: "Vocês alugam equipamentos ou apenas vendem?",
        a: "Trabalhamos predominantemente com venda, mas possuímos projetos de comodato e locação de hardware (HaaS) para projetos específicos e implantações de longo prazo."
    },
    {
        category: "Informática Geral",
        q: "Vocês formatam computadores que não foram comprados na Sigma?",
        a: "Sim. Nossa assistência técnica de informática atende manutenção preventiva e corretiva, formatação, backup e upgrades mesmo em equipamentos adquiridos em outras lojas."
    }
];

export function FaqAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

    const toggleOpen = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="bg-sigma-light py-24 border-t border-gray-200/50">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-sigma-dark mb-4 drop-shadow-sm font-display">
                        Dúvidas frequentes sobre automação e tecnologia
                    </h2>
                    <p className="text-xl text-gray-500 font-body">
                        Tudo o que você precisa saber sobre a nossa operação técnica.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                className={`border rounded-3xl transition-all duration-300 overflow-hidden font-body ${isOpen ? 'border-sigma-orange/30 bg-sigma-orange/5 shadow-sm' : 'border-gray-200 bg-white hover:border-sigma-silver'}`}
                            >
                                <button
                                    onClick={() => toggleOpen(i)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                                >
                                    <div className="pr-4">
                                        <span className="text-xs font-bold text-sigma-orange uppercase tracking-wider block mb-1 font-body">
                                            {faq.category}
                                        </span>
                                        <span className={`text-lg font-bold transition-colors font-display ${isOpen ? 'text-sigma-orange' : 'text-sigma-dark'}`}>
                                            {faq.q}
                                        </span>
                                    </div>
                                    <div className={`flex-shrink-0 size-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-sigma-orange text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-sigma-orange/10 mt-2">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
