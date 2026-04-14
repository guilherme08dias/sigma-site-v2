"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Headphones, ShieldCheck, Download, Ticket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

// CountUp Hook for numbers
function useCountUp(end: number, duration: number = 2000, startWhen: boolean = true) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startWhen) return;

        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // easeOutExpo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeProgress * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration, startWhen]);

    return count;
}

const stats = [
    { prefix: "+", num: 15, suffix: " Anos", label: "de mercado e expertise comprovada" },
    { prefix: "", num: 500, suffix: " Clientes", label: "empresas confiam em nossas soluções" },
    { prefix: "", num: 73, suffix: " Cidades", label: "alcance de atendimento técnico regional" },
    { prefix: "+", num: 370, suffix: " Sistemas", label: "ativos operando todos os dias" },
];

export function IndicatorsAndSupport() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="bg-sigma-light py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Indicators Block */}
                <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 border-b border-gray-200 pb-24">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-sigma-cyan tracking-tighter mb-4 font-display drop-shadow-sm">
                                {stat.prefix}
                                <NumberDisplay value={stat.num} startWhen={isInView} />
                                <span className="text-2xl md:text-3xl text-sigma-dark">{stat.suffix}</span>
                            </div>
                            <p className="text-base text-gray-500 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Support Grid Block */}
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sigma-cyan/10 text-xs font-bold text-sigma-dark uppercase mb-6 tracking-wide border border-sigma-cyan/20">
                            <span className="size-2 rounded-full bg-sigma-cyan animate-pulse"></span>
                            Central de Atendimento
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-sigma-dark mb-6 font-display">
                            Suporte Técnico <span className="text-transparent bg-clip-text bg-gradient-to-r from-sigma-cyan to-sigma-orange">Ágil e Humano</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Sabemos que seu negócio não pode parar. Nossa equipe de especialistas está pronta para resolver qualquer demanda técnica com agilidade e precisão.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
                    >
                        {/* Card 1 */}
                        <div className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col">
                            <div className="size-14 rounded-xl bg-gradient-to-br from-sigma-orange/20 to-sigma-orange/5 text-sigma-orange flex items-center justify-center mb-6 border border-sigma-orange/20 group-hover:scale-110 transition-transform">
                                <Headphones className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-sigma-dark mb-2">Suporte Remoto</h3>
                            <p className="text-gray-500 text-sm mb-6 flex-grow">Acesso rápido via AnyDesk e TeamViewer para solução imediata.</p>
                            <Button asChild variant="ghost" className="w-full">
                                <Link href="/suporte">
                                    Acessar Portal <ArrowRight />
                                </Link>
                            </Button>
                        </div>

                        {/* Card 2 */}
                        <div className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col">
                            <div className="size-14 rounded-xl bg-gradient-to-br from-sigma-cyan/20 to-sigma-cyan/5 text-sigma-cyan flex items-center justify-center mb-6 border border-sigma-cyan/20 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-sigma-dark mb-2">WhatsApp Direto</h3>
                            <p className="text-gray-500 text-sm mb-6 flex-grow">Fale diretamente com os técnicos responsáveis pela sua região.</p>
                            <Button asChild variant="subtle" className="border-sigma-cyan/70 text-sigma-cyan hover:bg-sigma-cyan/5 font-bold w-full">
                                <a href="https://wa.me/554989022868" target="_blank" rel="noopener noreferrer">
                                    Iniciar Chat <ArrowRight />
                                </a>
                            </Button>
                        </div>

                        {/* Card 3 */}
                        <div className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col">
                            <div className="size-14 rounded-xl bg-gradient-to-br from-sigma-cyan/20 to-sigma-cyan/5 text-sigma-cyan flex items-center justify-center mb-6 border border-sigma-cyan/20 group-hover:scale-110 transition-transform">
                                <Download className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-sigma-dark mb-2">Drivers e Manuais</h3>
                            <p className="text-gray-500 text-sm mb-6 flex-grow">Biblioteca completa de instaladores para impressoras e periféricos.</p>
                            <Button asChild variant="subtle" className="border-sigma-cyan/70 text-sigma-cyan hover:bg-sigma-cyan/5 w-full">
                                <Link href="/suporte/downloads">
                                    Ver Repositório <ArrowRight />
                                </Link>
                            </Button>
                        </div>

                        {/* Card 4 */}
                        <div className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col">
                            <div className="size-14 rounded-xl bg-gradient-to-br from-sigma-orange/20 to-sigma-orange/5 text-sigma-orange flex items-center justify-center mb-6 border border-sigma-orange/20 group-hover:scale-110 transition-transform">
                                <Ticket className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-sigma-dark mb-2">Abertura de Chamados</h3>
                            <p className="text-gray-500 text-sm mb-6 flex-grow">Sistema de tickets para acompanhamento de intervenções e T.I.</p>
                            <Button asChild variant="subtle" className="border-sigma-orange/70 text-sigma-orange hover:bg-sigma-orange/5 w-full">
                                <Link href="/suporte/chamados">
                                    Abrir Chamado <ArrowRight />
                                </Link>
                            </Button>
                        </div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
}

// Separated component so hooks aren't blocked
function NumberDisplay({ value, startWhen }: { value: number; startWhen: boolean }) {
    const count = useCountUp(value, 2000, startWhen);
    return <>{count}</>;
}
