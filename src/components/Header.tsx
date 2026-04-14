"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Logo from "@/components/Logo";

const NAV_LINKS = [
    { name: "Início", href: "/" },
    { 
      name: "Automação", 
      href: "/automacao-comercial",
      submenu: [
        { name: "Impressoras Térmicas", href: "/automacao-comercial#impressoras" },
        { name: "Leitores e Periféricos", href: "/automacao-comercial#perifericos" },
        { name: "Relógios de Ponto", href: "/automacao-comercial#ponto" },
        { name: "Controle de Acesso", href: "/automacao-comercial#acesso" },
      ]
    },
    { 
      name: "Sistemas", 
      href: "/sistemas",
      submenu: [
        { name: "Sistemas de Gestão (Uniplus)", href: "/sistemas#uniplus" },
        { name: "Controle de Ponto (Secullum)", href: "/sistemas#secullum" },
        { name: "Gestão de Condomínios (Condfy)", href: "/sistemas#condfy" },
      ]
    },
    { name: "Suporte", href: "/suporte" },
    { name: "Sobre Nós", href: "/sobre-nos" },
];

function NavItem({ link }: { link: any }) {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
    };

    if (!link.submenu) {
        return (
            <Link
                href={link.href}
                className="text-sm font-semibold text-sigma-dark hover:text-sigma-orange transition-colors py-8"
            >
                {link.name}
            </Link>
        );
    }

    return (
        <div 
            className="relative h-full flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                href={link.href}
                className="flex items-center gap-1 text-sm font-semibold text-sigma-dark hover:text-sigma-orange transition-colors h-full px-2"
            >
                {link.name}
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180 text-sigma-orange' : ''}`} />
            </Link>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-0 top-full pt-2 min-w-[280px] z-[100]"
                    >
                        <div className="bg-white border border-sigma-silver/30 shadow-[0_15px_50px_rgba(0,0,0,0.12)] rounded-2xl p-2 backdrop-blur-xl">
                            <div className="flex flex-col">
                                {link.submenu.map((sub: any) => (
                                    <Link
                                        key={sub.name}
                                        href={sub.href}
                                        className="px-4 py-3 text-[13px] font-bold text-sigma-dark/60 hover:text-sigma-orange hover:bg-sigma-light rounded-xl transition-all"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {sub.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-sigma-silver/30 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 group">
                        <Logo heightClass="h-10 md:h-14" className="group-hover:scale-[1.02] transition-transform duration-300" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {NAV_LINKS.map((link) => (
                            <NavItem key={link.name} link={link} />
                        ))}
                    </nav>

                    {/* Action CTAs */}
                    <div className="flex items-center gap-4">
                        <Button 
                            asChild 
                            variant="primary" 
                            size="sm" 
                            className="hidden md:inline-flex"
                        >
                            <a
                                href="https://wa.me/554989022868?text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fale Conosco
                            </a>
                        </Button>

                        <button
                            className="lg:hidden p-2 text-sigma-dark hover:text-sigma-orange"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen
                                ? <X className="w-6 h-6" />
                                : <Menu className="w-6 h-6" />
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden bg-white border-t border-sigma-silver/30 overflow-hidden"
                    >
                        <div className="px-6 py-6 space-y-4">
                            {NAV_LINKS.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="block text-lg font-bold text-sigma-dark hover:text-sigma-orange transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.submenu && (
                                        <div className="pl-4 mt-2 mb-4 space-y-3 border-l-2 border-sigma-orange/10">
                                            {link.submenu.map((sub: any) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    className="block text-sm font-semibold text-sigma-dark/50 hover:text-sigma-orange"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Button 
                                asChild 
                                variant="primary"
                                className="w-full mt-2"
                            >
                                <a
                                    href="https://wa.me/554989022868?text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Fale Conosco pelo WhatsApp
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
