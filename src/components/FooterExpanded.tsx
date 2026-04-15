"use client";

import { useState } from "react";
import { MapPin, Phone, Instagram, ChevronDown } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";

function FooterAccordion({ title, children }: { title: string; children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-white/10 lg:border-none">
            {/* Mobile: Botão sanfona | Desktop: Título estático */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full py-4 lg:py-0 lg:mb-6 lg:cursor-default"
                aria-expanded={open}
            >
                <h4 className="text-white font-bold tracking-wide text-sm uppercase">{title}</h4>
                <ChevronDown
                    className={`w-4 h-4 text-white/40 transition-transform duration-300 lg:hidden ${open ? "rotate-180" : ""}`}
                />
            </button>

            {/* Mobile: Conteúdo colapsável | Desktop: Sempre visível */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out lg:!max-h-[500px] lg:!opacity-100 lg:!pb-0 ${
                    open ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
                }`}
            >
                {children}
            </div>
        </div>
    );
}

export function FooterExpanded() {
    return (
        <footer className="bg-sigma-dark pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Footer Links Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-12 mb-16">

                    {/* Brand Col - Sempre visível */}
                    <div className="lg:col-span-2 pb-8 mb-4 border-b border-white/10 lg:border-none lg:pb-0 lg:mb-0">
                        <div className="mb-6">
                            <Logo variant="negative" />
                        </div>
                        <p className="text-white/60 mb-8 max-w-sm leading-relaxed text-sm">
                            Há mais de 7 anos transformando a gestão de empresas através da tecnologia em Chapecó e região.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/sigmapdv/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-sigma-orange hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Soluções */}
                    <FooterAccordion title="Soluções">
                        <ul className="space-y-3">
                            <li><Link href="/automacao-comercial" className="text-white/60 hover:text-sigma-orange transition-colors text-sm">Automação Comercial</Link></li>
                            <li><Link href="/sistemas" className="text-white/60 hover:text-sigma-orange transition-colors text-sm">Sistemas de Gestão</Link></li>
                            <li><Link href="/automacao-comercial#perifericos" className="text-white/60 hover:text-sigma-orange transition-colors text-sm">Equipamentos e PDV</Link></li>
                            <li><Link href="/suporte" className="text-white/60 hover:text-sigma-orange transition-colors text-sm">Suporte Técnico</Link></li>
                        </ul>
                    </FooterAccordion>

                    {/* A Empresa */}
                    <FooterAccordion title="A Empresa">
                        <ul className="space-y-3">
                            <li><Link href="/sobre-nos" className="text-white/60 hover:text-sigma-orange transition-colors text-sm">Sobre Nós</Link></li>
                            <li><Link href="/sobre-nos#diferenciais" className="text-white/60 hover:text-sigma-orange transition-colors text-sm">Diferenciais</Link></li>
                            <li><Link href="/suporte#canais" className="text-white/60 hover:text-sigma-orange transition-colors text-sm">Canais de Atendimento</Link></li>
                        </ul>
                    </FooterAccordion>

                    {/* Contato */}
                    <FooterAccordion title="Contato">
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/60 text-sm">
                                <MapPin className="w-5 h-5 shrink-0 text-sigma-orange mt-0.5" />
                                <span>Av. São Pedro, 1234E - São Cristovão, Chapecó - SC</span>
                            </li>
                            <li>
                                <a href="tel:5549991161576" className="flex items-center gap-3 text-white/60 hover:text-sigma-orange transition-colors text-sm">
                                    <Phone className="w-5 h-5 shrink-0 text-sigma-orange" />
                                    <span>(49) 99116-1576</span>
                                </a>
                            </li>
                        </ul>
                    </FooterAccordion>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs">
                        &copy; {new Date().getFullYear()} SigmaPDV Automação Comercial. Todos os direitos reservados.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-xs text-white/30">
                        <Link href="/sobre-nos" className="hover:text-sigma-orange transition-colors">Sobre a SigmaPDV</Link>
                        <Link href="/suporte" className="hover:text-sigma-orange transition-colors">Central de Suporte</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
