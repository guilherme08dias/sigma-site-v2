"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { name: "Início", href: "/" },
    { name: "Automação Comercial", href: "/automacao-comercial" },
    { name: "Sistemas", href: "/sistemas" },
    { name: "Suporte", href: "/suporte" },
    { name: "Sobre Nós", href: "/sobre-nos" },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full transition-colors duration-300 bg-background border-b border-neutral-700/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm font-bold text-white text-xl tracking-tighter">
                                Σ
                            </div>
                            <span className="font-heading font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                                Sigma<span className="text-foreground/60 font-medium">PDV</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-8"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />

                        <a
                            href="https://wa.me/554989022868?text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-neutral-900 bg-primary hover:bg-primary-dark rounded-sm transition-colors"
                        >
                            Fale Conosco
                        </a>

                        <button
                            className="lg:hidden p-2 text-foreground/80 hover:text-foreground"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen
                                ? <X className="w-6 h-6" aria-hidden="true" />
                                : <Menu className="w-6 h-6" aria-hidden="true" />
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
                        className="lg:hidden bg-background border-b border-neutral-700/50 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/554989022868?text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full px-4 py-3 mt-6 text-sm font-bold text-neutral-900 bg-primary hover:bg-primary-dark rounded-sm transition-colors"
                            >
                                Fale Conosco pelo WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
