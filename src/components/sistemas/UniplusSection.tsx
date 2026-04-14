"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
    { icon: 'receipt_long', title: 'Fiscal', subtitle: 'Emissão ideal de NF-e' },
    { icon: 'precision_manufacturing', title: 'Operacional', subtitle: 'Eficiência máxima' },
    { icon: 'shopping_cart', title: 'Vendas', subtitle: 'Controle ágil' },
    { icon: 'a_b_c', title: 'Módulo', subtitle: 'Gestão Exclusiva' },
]

const plans = [
    {
        name: 'Básico',
        price: 'Sob consulta',
        features: ['Gestão de NF-e', 'Emissão Fiscal', 'Controle Financeiro'],
        popular: false,
    },
    {
        name: 'Avançado',
        price: 'Sob consulta',
        features: ['Todas do Básico', 'Automação de Vendas', 'Controle de Estoque', 'Suporte Especializado'],
        popular: true,
    },
    {
        name: 'Personalizado',
        price: 'Sob consulta',
        features: ['Soluções Customizadas', 'API de Integração', 'Consultoria Especializada'],
        popular: false,
    },
]

export function UniplusSection() {
    return (
        <section className="bg-sigma-dark py-24 lg:py-32 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sigma-orange/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Text & Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-sigma-orange uppercase mb-6 tracking-wide">
                            Gestão Financeira
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 font-sans">
                            Uniplus ERP: Gestão Modular que Evolui com seu Negócio
                        </h2>

                        <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
                            A solução definitiva para sua gestão fiscal e operacional, agora com integração total via web. Adaptável a qualquer dispositivo e segmento, oferecendo máxima eficiência e mobilidade.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-12">
                            {features.map((feature, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors">
                                    <span className="material-symbols-outlined text-sigma-orange">{feature.icon}</span>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">{feature.title}</h4>
                                        <p className="text-gray-400 text-xs">{feature.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-sigma-orange/20 blur-3xl rounded-full transform rotate-12" />
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#FFD1B3] aspect-[4/3] flex items-center justify-center p-8">
                            {/* Usando uma imagem temporária/mock baseado no briefing até que a imagem final chegue. No html havia referências de mockups*/}
                            <Image
                                src="/uniplus-bg.jpeg"
                                alt="Uniplus ERP Interface"
                                width={800}
                                height={600}
                                className="object-contain w-full h-full drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Plan Cards Row */}
                <div className="mt-24">
                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                    >
                        {plans.map((plan, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ y: -8 }}
                                className={`relative flex flex-col bg-white/5 backdrop-blur-sm rounded-[24px] p-8 transition-all duration-300 ${plan.popular
                                        ? 'border-2 border-sigma-orange shadow-[0_0_30px_rgba(255,102,0,0.15)] z-10'
                                        : 'border border-white/10 hover:border-white/20'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sigma-orange text-white text-xs font-bold uppercase tracking-wide py-1.5 px-4 rounded-full shadow-lg">
                                        Mais Popular
                                    </div>
                                )}

                                <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
                                <div className="text-3xl font-bold text-white mb-8">{plan.price}</div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feat, j) => (
                                        <li key={j} className="flex items-start gap-3 text-gray-300">
                                            <span className="material-symbols-outlined text-sigma-orange text-sm mt-1">check_circle</span>
                                            <span className="text-sm leading-relaxed">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="mt-12 text-center">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-sigma-orange hover:bg-sigma-orange-hover shadow-lg shadow-sigma-orange/20 transition-colors"
                        >
                            Agendar Demonstração Técnica
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    )
}
