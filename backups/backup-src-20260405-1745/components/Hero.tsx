"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-sigma-light pt-16 pb-20 lg:pt-24 lg:pb-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 space-y-8 z-10"
                    >
                        {/* Tagline */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sigma-silver/50 text-xs font-medium text-sigma-dark shadow-sm">
                            <span className="size-2 rounded-full bg-sigma-orange animate-pulse"></span>
                            Nova Atualização v4.0 Disponível
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-sigma-dark leading-[1.1]">
                            A Excelência em <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sigma-orange to-orange-500">
                                Automação Comercial
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                            Soluções completas de gestão unificando compliance fiscal, controle de estoque e hardware de alta performance para negócios modernos.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-sigma-orange hover:bg-sigma-orange-hover shadow-xl shadow-sigma-orange/25 transition-all transform hover:-translate-y-0.5">
                                Explorar Soluções
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-sigma-dark bg-white border border-sigma-silver hover:bg-gray-50 transition-all">
                                Ver Hardware
                            </a>
                        </div>

                        {/* Gray Skeletons */}
                        <div className="pt-8 flex items-center gap-8 text-gray-400 grayscale opacity-70">
                            <div className="h-8 w-24 bg-current opacity-20 rounded"></div>
                            <div className="h-8 w-24 bg-current opacity-20 rounded"></div>
                            <div className="h-8 w-24 bg-current opacity-20 rounded"></div>
                            <div className="h-8 w-24 bg-current opacity-20 rounded"></div>
                        </div>
                    </motion.div>

                    {/* Right Image Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative rounded-2xl p-2">
                            {/* Background Glows */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-sigma-orange/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

                            <div className="relative z-10 transform lg:translate-x-8 lg:scale-110">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9JmwkZh3SUwgcWrTGycKZ7emJW58wSwWPccumlNov0sfe20X0kQnwyj956ds3c-4nFmT8rAB7I5DGBmyiX2BBSQNf_9R4dm9baBBMtK1z4OPZeAjswUitRTxNsvB--z5oryi4QNHf-CJf3giDsp3znNVRWofLU5Rrmtya3cjjD4Ai-pyCFUc6Mcknaf2JSy3nAzbPhjfufJm6DO2Vb11Qjdu8zawIZ6Qpk717jdqCYsjIRbxRqKe-bxt5nj6EOuqurTXr9oKIIt0"
                                    alt="Terminal POS Moderno"
                                    className="rounded-xl shadow-2xl border border-white/50 object-cover h-[500px] w-full"
                                    style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px" }}
                                />

                                {/* Floating Badge */}
                                <div
                                    className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-gray-100 flex items-center gap-4 max-w-xs animate-bounce"
                                    style={{ animationDuration: "3s" }}
                                >
                                    <div className="size-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-sigma-dark">Sistema Online</p>
                                        <p className="text-xs text-gray-500">99.9% Uptime Garantido</p>
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
