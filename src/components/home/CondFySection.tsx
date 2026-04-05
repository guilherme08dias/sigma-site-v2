"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, QrCode, Cloud, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function CondFySection() {
    return (
        <section className="bg-sigma-light py-24 md:py-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Coluna Esquerda: Texto e Conteúdo */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sigma-orange/10 border border-sigma-orange/20 text-sigma-orange text-xs font-bold uppercase tracking-wider mb-6 font-body">
                            Solução para Condomínios
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-sigma-dark mb-6 leading-tight">
                            CondFy: controle inteligente de acesso para condomínios
                        </h2>
                        
                        <p className="text-base md:text-lg font-body text-sigma-dark/80 mb-10 leading-relaxed">
                            Gestão moderna de portaria, acessos e visitantes com app completo para moradores e administração.
                        </p>

                        <ul className="space-y-6 mb-10">
                            <li className="flex gap-4">
                                <div className="flex-shrink-0 size-10 rounded-xl bg-white border border-sigma-dark/10 flex items-center justify-center text-sigma-orange shadow-sm">
                                    <Smartphone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-body text-sigma-dark/90 leading-snug">
                                        Abertura de portas e portões pelo app, com histórico de acessos em tempo real.
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="flex-shrink-0 size-10 rounded-xl bg-white border border-sigma-dark/10 flex items-center justify-center text-sigma-orange shadow-sm">
                                    <QrCode className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-body text-sigma-dark/90 leading-snug">
                                        Convites via QR Code ou chave virtual para visitantes, com mais segurança e menos filas.
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="flex-shrink-0 size-10 rounded-xl bg-white border border-sigma-dark/10 flex items-center justify-center text-sigma-orange shadow-sm">
                                    <Cloud className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-body text-sigma-dark/90 leading-snug">
                                        Plataforma em nuvem, escalável para condomínios de pequeno a grande porte.
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <Button asChild variant="primary">
                            <Link href="/condominios">
                                Ver solução CondFy para condomínios
                                <ArrowRight />
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Coluna Direita: Mockup Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* Card do Mockup seguindo o SDS (rounded-3xl, bg-sigma-dark) */}
                        <div className="relative w-full max-w-[340px] aspect-[9/18] bg-sigma-dark rounded-[3rem] border-[8px] border-white/10 shadow-2xl p-6 overflow-hidden flex flex-col">
                            {/* Notch do Celular */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white/10 rounded-b-2xl z-20"></div>
                            
                            {/* Conteúdo Simulado do App */}
                            <div className="mt-8 flex-1 flex flex-col gap-6">
                                <div className="flex justify-between items-center">
                                    <div className="size-10 rounded-full bg-white/10 border border-white/5 flex items-center justify-center">
                                        <div className="size-6 rounded-full bg-sigma-orange"></div>
                                    </div>
                                    <div className="h-4 w-20 bg-white/10 rounded-full"></div>
                                </div>

                                <div className="p-4 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-3">
                                    <h4 className="text-white font-display text-sm font-semibold tracking-tight">Acesso pelo app</h4>
                                    <div className="space-y-3">
                                        {/* Simulação de botões de abertura */}
                                        <div className="w-full h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center px-4 gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-sigma-cyan" />
                                            <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                                        </div>
                                        <div className="w-full h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center px-4 gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-sigma-cyan" />
                                            <div className="h-2 w-20 bg-white/20 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto p-4 rounded-3xl bg-sigma-orange/10 border border-sigma-orange/20">
                                    <div className="h-2 w-full bg-sigma-orange/30 rounded-full mb-2"></div>
                                    <div className="h-2 w-2/3 bg-sigma-orange/30 rounded-full"></div>
                                </div>
                                
                                <div className="h-14 w-full bg-sigma-orange rounded-2xl flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-sigma-orange/20">
                                    ABRIR PORTÃO PRINCIPAL
                                </div>
                            </div>
                        </div>

                        {/* Elemento Decorativo Flutuante */}
                        <div className="absolute -bottom-6 -left-6 md:-left-12 p-6 rounded-3xl bg-white border border-sigma-dark/10 shadow-xl z-20 max-w-[200px] hidden md:block">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="size-8 rounded-lg bg-sigma-cyan/10 flex items-center justify-center text-sigma-cyan">
                                    <QrCode className="w-4 h-4" />
                                </div>
                                <span className="text-xs font-bold text-sigma-dark font-display">Convite QR</span>
                            </div>
                            <div className="h-1.5 w-full bg-sigma-light rounded-full mb-1.5"></div>
                            <div className="h-1.5 w-2/3 bg-sigma-light rounded-full"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
