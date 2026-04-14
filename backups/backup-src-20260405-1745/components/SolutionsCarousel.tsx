"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Check, Monitor, Smartphone as SmartphoneIcon, Headset, Package, Gamepad2 } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const slides = [
    {
        id: "automacao",
        badge: "PDV & Varejo",
        title: "Automação comercial para o seu PDV",
        description: "Equipamentos de alta performance que garantem agilidade no checkout e a melhor experiência para o seu cliente.",
        features: ["Equipamentos homologados", "Robustez industrial", "Integração total"],
        cta: "Saber mais",
        icon: <Monitor />,
        href: "/automacao",
        bgAccent: "from-sigma-silver/20 to-sigma-orange/10",
        products: [
            {
                name: "Impressoras térmicas",
                sub: "Essencial para recibos e pedidos",
                img: "/pdv_impressora_termica_1773498992734.png"
            },
            {
                name: "Leitores de código de barras",
                sub: "Agilidade com QR Code e Pix",
                img: "/pdv_leitor_barras_1773499007198.png"
            },
            {
                name: "Balanças eletrônicas",
                sub: "Checkout e etiquetagem",
                img: "/pdv_balanca_eletronica_moderna_1773499021555.png"
            },
            {
                name: "Terminais PDV Android",
                sub: "Modernização e versatilidade",
                img: "/pdv_terminal_android_pos_1773499036958.png"
            }
        ]
    },
    {
        id: "informatica",
        badge: "Infraestrutura TI",
        title: "Infraestrutura de TI profissional",
        description: "Hardware robusto e conectividade estável para suportar o crescimento digital da sua empresa.",
        features: ["Estações de trabalho", "Redes estruturadas", "Alta performance"],
        cta: "Soluções de TI",
        icon: <SmartphoneIcon />,
        href: "/informatica",
        bgAccent: "from-sigma-cyan/10 to-sigma-silver/20",
        products: [
            {
                name: "Microcomputadores e desktop",
                sub: "Workstations para escritório",
                img: "/ti_desktop_corporativo_1773499057398.png"
            },
            {
                name: "Notebooks corporativos",
                sub: "Gestão com mobilidade",
                img: "/ti_notebook_corporativo_1773499073982.png"
            },
            {
                name: "Servidores de alta performance",
                sub: "Hardware NVMe escalável",
                img: "/ti_servidor_performance_1773499090706.png"
            },
            {
                name: "Equipamentos de rede",
                sub: "Conectividade WiFi 6 e VPN",
                img: "/ti_equipamentos_rede_1773499106342.png"
            }
        ]
    },
    {
        id: "servicos",
        badge: "Expertise & Suporte",
        title: "Assessoria técnica e suporte",
        description: "Especialistas qualificados para realizar intervenções técnicas e consultoria fiscal preventiva.",
        features: ["Intervenção técnica autorizada", "Gestão tributária", "Suporte especializado"],
        cta: "Falar com Especialista",
        icon: <Headset />,
        href: "/suporte",
        bgAccent: "from-sigma-cyan/10 to-sigma-orange/10",
        products: [
            {
                name: "Suporte técnico especializado",
                sub: "Atendimento remoto e local",
                img: "/servicos_suporte_tecnico_1773499130032.png"
            },
            {
                name: "Implantação de sistemas",
                sub: "Configuração de ERP e PDV",
                img: "/servicos_implantacao_sistemas_1773499147628.png"
            },
            {
                name: "Intervenção técnica autorizada",
                sub: "Manutenção e lacração fiscal",
                img: "/servicos_intervencao_tecnica_1773499164307.png"
            },
            {
                name: "Backup em nuvem",
                sub: "Cibersegurança empresarial",
                img: "/servicos_backup_nuvem_1773499184111.png"
            }
        ]
    },
    {
        id: "suprimentos",
        badge: "Consumíveis & Acessórios",
        title: "Suprimentos para automação",
        description: "Bobinas térmicas e acessórios de qualidade para que sua operação nunca sofra interrupções.",
        features: ["Qualidade certificada", "Entrega rápida", "Preços competitivos"],
        cta: "Ver Suprimentos",
        icon: <Package />,
        href: "/suprimentos",
        bgAccent: "from-sigma-orange/10 to-sigma-silver/20",
        products: [
            {
                name: "Bobinas térmicas",
                sub: "Suprimento contínuo premium",
                img: "/suprimentos_bobinas_termicas_1773499209671.png"
            },
            {
                name: "Etiquetas adesivas",
                sub: "Automação de estoque e preços",
                img: "/suprimentos_etiquetas_adesivas_1773499226324.png"
            },
            {
                name: "Nobreaks e estabilizadores",
                sub: "Proteção contra quedas de energia",
                img: "/suprimentos_nobreaks_estabilizadores_1773499242750.png"
            },
            {
                name: "Relógio ponto digital",
                sub: "Conformidade e controle",
                img: "/suprimentos_relogio_ponto_digital_moderno_1773499259137.png"
            }
        ]
    },
    {
        id: "gamer",
        badge: "Alta Performance",
        title: "Hardware de alta performance",
        description: "Potência e design em computadores montados sob medida para demandas extremas ou lazer.",
        features: ["Hardware Extreme", "Periféricos Pro", "Montagem Customizada"],
        cta: "Explorar Gamer",
        icon: <Gamepad2 />,
        href: "/gamer",
        bgAccent: "from-sigma-cyan/10 to-sigma-orange/10",
        products: [
            {
                name: "Computadores gamer de elite",
                sub: "Poder para jogos e criação",
                img: "/gamer_pc_elite_1773499279649.png"
            },
            {
                name: "Monitores de alta performance",
                sub: "Experiência fluida 144Hz+",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtTrqHkKMor-f92ufAst-tvzEBLlddAUHkCmrqNdGpKJTYvvsu-_SItoV0FZv0CWhCszpqu79m9cAVLar0FLxJJo3sSE0qJ9JMzgjkUoyrNQmcGTP1Az8CcgPx_xL2iX8hOuxByIguQGCXQ436Nzhf4Aj58MRdmg4MCXYVN7aTSc8L1yWsL2rWxaHi6OR8xEU-z9TsOzbWatkygfdsge4UqyuKSwh2jTau_JMAolcWPOlHEZwkbzqHWZ6f-KXT9z8TrOalcOPVWoM"
            },
            {
                name: "Periféricos e acessórios gamer",
                sub: "Mecânicos e alta precisão",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvo9IOzJokMlAYqp6K5Kyiilf3mM_3bg7bxXoIyJrmrPhrQRiDy-eOZcK7qkPD1kG5JWJulcVcrjmAk6ufHX0RmLeOnjXm9ec6d1WzOJwg5FLSnS5aHLYoX9MgPeTqVZ0BVIscfsZkwOUMRFRlEoeP8FNJtSIQQ0s51C-6foIYapn5VJ8WB3P5HI9eu0k1G2tCa0NRfn6nmRV1CCS-5R5gnsFOGN2hLSIJ9xfYwPTXBTF443YNSP8VxhuxeNY07VnedxXeMO6lymk"
            },
            {
                name: "Cadeiras ergonômicas gamer",
                sub: "Conforto para longas sessões",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu0rQT-T9SeEWCgtATg_B4f8MPTg7CsfsuX0SXu5JMjzdxffNGFM3STaTzoVElX95DTTb3Bdor1PlLmzcFnzn3v7t9E_h43Z_gO-9hvBCdA5NSTgL8F03X5Z38wCTr42lU8fEyFVDsZdj7qVIE9sWJ2Z06n8f15RtjNT5FNUo3biQB6F5qRhcBhPx4NPXfNUjzq5IT3mZ-ZK0E-PsjFMF1YIepNzJv68mqGvZHbLoSjTQISCkngcAQFQzt_02rh77tM56P8Mipu78"
            }
        ]
    }
];

export function SolutionsCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });
        }
    };

    return (
        <section className="relative bg-sigma-light overflow-hidden group/carousel">
            {/* Navigation Buttons */}
            <button
                onClick={scrollLeft}
                aria-label="Previous Slide"
                className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-14 h-14 rounded-full bg-white/80 border border-sigma-silver/20 text-sigma-orange backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-lg focus:outline-none active:scale-95"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={scrollRight}
                aria-label="Next Slide"
                className="hidden md:flex absolute right-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-14 h-14 rounded-full bg-white/80 border border-sigma-silver/20 text-sigma-orange backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-lg focus:outline-none active:scale-95"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Snap Scroll Container */}
            <div
                ref={scrollRef}
                className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-none"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {slides.map((slide, i) => (
                    <div key={slide.id} className="w-full min-w-full snap-start py-24 border-t border-sigma-silver/10 flex-shrink-0">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8">
                            <div className="grid lg:grid-cols-2 gap-20 items-center">

                                {/* Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sigma-orange/10 text-xs font-bold text-sigma-orange uppercase mb-6 tracking-wide">
                                        {slide.badge}
                                    </div>
                                    <h2 className="text-4xl font-bold tracking-tight text-sigma-dark mb-6 font-display">{slide.title}</h2>
                                    <p className="text-xl text-sigma-dark/60 mb-10 leading-relaxed font-body">
                                        {slide.description}
                                    </p>

                                    <ul className="space-y-6 mb-10">
                                        {slide.features.map((feature, j) => (
                                            <li key={j} className="flex items-center gap-4">
                                                <div className="flex-shrink-0 size-8 rounded-full bg-sigma-orange flex items-center justify-center shadow-lg shadow-sigma-orange/20">
                                                    <Check className="w-4 h-4 text-white" />
                                                </div>
                                                <span className="text-lg text-sigma-dark font-medium font-body">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                        <Button asChild variant="primary" className="bg-sigma-dark shadow-gray-900/10 hover:bg-black">
                                            <Link href={slide.href}>
                                                {slide.cta}
                                                {slide.icon}
                                            </Link>
                                        </Button>
                                        {i < slides.length - 1 && (
                                            <div className="flex items-center gap-2 text-sigma-orange text-sm font-medium animate-pulse">
                                                Passe para o lado para ver nossas soluções
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        )}
                                    </div>
                                </motion.div>

                                {/* Product/Hardware Grid */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="relative"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-tr ${slide.bgAccent} rounded-3xl blur-3xl transform rotate-3`}></div>

                                    <div className="relative grid grid-cols-2 gap-6">
                                        {/* Column 1 (Offset Top) */}
                                        <div className="space-y-6 mt-12">
                                            {[slide.products[0], slide.products[1]].map((product, k) => (
                                                <div key={k} className="bg-white p-6 rounded-3xl shadow-xl border border-sigma-dark/5 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                                                    <div className="aspect-square bg-white rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group">
                                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                                        <img
                                                            src={product.img}
                                                            alt={product.name}
                                                            className="object-contain w-[80%] h-[80%] group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    </div>
                                                    <h3 className="font-bold text-sigma-dark text-lg font-display">{product.name}</h3>
                                                    <p className="text-sm text-sigma-dark/60 mt-1">{product.sub}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Column 2 (Standard) */}
                                        <div className="space-y-6">
                                            {[slide.products[2], slide.products[3]].map((product, k) => (
                                                <div key={k} className="bg-white p-6 rounded-3xl shadow-xl border border-sigma-dark/5 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                                                    <div className="aspect-square bg-white rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group">
                                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                                        <img
                                                            src={product.img}
                                                            alt={product.name}
                                                            className="object-contain w-[80%] h-[80%] group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    </div>
                                                    <h3 className="font-bold text-sigma-dark text-lg font-display">{product.name}</h3>
                                                    <p className="text-sm text-sigma-dark/60 mt-1">{product.sub}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
