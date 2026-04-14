"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, MonitorSmartphone, LineChart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function SmartManagement() {
    return (
        <section className="bg-sigma-dark py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,102,0,0.05),transparent_40%)]"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8 font-display">
                            Gestão empresarial inteligente e segurança para o seu negócio
                        </h2>
                        <p className="text-lg text-gray-300 mb-12 leading-relaxed font-body">
                            Sistemas ERP completos que centralizam sua gestão fiscal, estoque e financeiro em uma única plataforma integrada e segura.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sigma-orange">
                                    <MonitorSmartphone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 font-display">ERP modular focado em resultados reais</h3>
                                    <p className="text-gray-400 font-body">ERP modular para varejo com controle total de estoque, financeiro e emissão de NF-e/NFC-e.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sigma-orange">
                                    <BadgeCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 font-display">Gestão de jornada e acesso 100% legal</h3>
                                    <p className="text-gray-400 font-body">Gestão de jornada em conformidade com a Portaria 671/MTP e controle de acesso inteligente.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sigma-orange">
                                    <LineChart className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 font-display">Dados estratégicos em tempo real</h3>
                                    <p className="text-gray-400 font-body">Dashboards em nuvem para monitoramento de vendas e indicadores via smartphone ou tablet.</p>
                                </div>
                            </div>
                        </div>

                        <Button asChild variant="primary">
                            <Link href="/sistemas">
                                Solicitar Demonstração Uniplus/Secullum
                                <ArrowRight />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[600px] hidden lg:block"
                    >
                        {/* 3D Mockup Composition Elements mimicking code.html */}
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[120%] h-full">
                            {/* Phone Mockup */}
                            <div className="absolute left-[10%] top-[40%] w-[180px] h-[360px] bg-sigma-dark rounded-3xl border-[6px] border-white/10 shadow-2xl z-30 overflow-hidden flex flex-col items-center">
                                <div className="w-16 h-4 bg-white/10 -mt-1 rounded-b-xl absolute top-0 z-40"></div>
                                <div className="w-full h-full bg-black/20 p-4 pt-8 flex flex-col gap-4">
                                    <div className="w-full h-24 bg-sigma-orange/20 rounded-xl border border-sigma-orange/30 flex items-center justify-center">
                                        <span className="text-sigma-orange font-bold">R$ 1.250,00</span>
                                    </div>
                                    <div className="w-full h-8 bg-white/10 rounded-md"></div>
                                    <div className="w-full h-8 bg-white/10 rounded-md"></div>
                                </div>
                            </div>

                            {/* Tablet Mockup */}
                            <div className="absolute right-[10%] top-[20%] w-[450px] h-[320px] bg-sigma-dark rounded-3xl border-[6px] border-white/10 shadow-2xl z-20 overflow-hidden">
                                <div className="w-full h-full bg-black/20 p-6">
                                    <div className="w-full flex justify-between mb-6">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-sigma-orange"></div>
                                            <div className="w-3 h-3 rounded-full bg-sigma-orange/50"></div>
                                            <div className="w-3 h-3 rounded-full bg-sigma-cyan"></div>
                                        </div>
                                    </div>
                                    <div className="w-full h-48 bg-sigma-dark/50 rounded-xl flex items-end p-4 gap-4 border border-white/10">
                                        <div className="w-8 h-[40%] bg-sigma-cyan/50 rounded-t-sm"></div>
                                        <div className="w-8 h-[60%] bg-sigma-cyan/70 rounded-t-sm"></div>
                                        <div className="w-8 h-[90%] bg-sigma-cyan rounded-t-sm shadow-[0_0_15px_rgba(0,229,229,0.5)]"></div>
                                        <div className="w-8 h-[30%] bg-sigma-cyan/40 rounded-t-sm"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard Panel */}
                            <div className="absolute right-[15%] bottom-[15%] w-[400px] h-[220px] bg-sigma-dark/90 rounded-3xl border border-white/10 shadow-2xl z-40 overflow-hidden backdrop-blur-md">
                                <div className="w-full h-10 bg-white/10 flex items-center px-4">
                                    <div className="w-32 h-2 bg-gray-500 rounded-full"></div>
                                </div>
                                <div className="p-6 flex flex-col gap-4">
                                    <div className="w-full h-2 bg-white/10 rounded-full"></div>
                                    <div className="w-[80%] h-2 bg-white/10 rounded-full"></div>
                                    <div className="w-full h-2 bg-white/10 rounded-full"></div>
                                    <div className="w-[60%] h-2 bg-white/10 rounded-full"></div>
                                    <div className="flex items-end gap-2 mt-4 pt-4 border-t border-white/10">
                                        <div className="w-4 h-8 bg-sigma-cyan/50"></div>
                                        <div className="w-4 h-12 bg-sigma-cyan"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
