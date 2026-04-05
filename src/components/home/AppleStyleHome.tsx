"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  Rocket, ArrowRight, MonitorSmartphone, BadgeCheck, LineChart,
  Smartphone, QrCode, Cloud, Headphones, ShieldCheck, Download, Ticket, MessageCircle,
  Monitor, Headset, Package, Gamepad2, Maximize2, X
} from "lucide-react";

function ProductList({ primaryProducts, moreProducts }: { primaryProducts: string[], moreProducts: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 mb-6">
      <ul className="space-y-2 text-sm text-sigma-dark/80 font-body">
        {primaryProducts.map((item) => (
          <li key={item} className="flex gap-2 items-start">
            <span className="mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-sigma-orange" />
            <span className="leading-snug">{item}</span>
          </li>
        ))}
      </ul>

      {moreProducts.length > 0 && (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="text-sm font-bold text-sigma-orange hover:underline focus:outline-none transition-colors"
          >
            {isOpen ? "Ver menos" : "Ver mais produtos"}
          </button>

          {isOpen && (
            <ul className="mt-3 space-y-2 text-sm text-sigma-dark/70 font-body transition-all">
              {moreProducts.map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span className="mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-sigma-dark/30" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default function AppleStyleHome() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen font-body flex flex-col selection:bg-sigma-orange selection:text-white">

      {/* =========================================
          HERO
          ========================================= */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative h-[calc(100vh-80px)] w-full flex items-center bg-sigma-light overflow-hidden z-20"
      >
        {/* Hero Background Image - Full Screen */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <img
            src="/hero-bg.png"
            alt="SigmaPDV Background"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-6 max-w-2xl px-2"
          >

            <h1 className="text-5xl md:text-7xl font-black text-sigma-dark font-display flex flex-col leading-[1.1] tracking-tight">
              <span className="mb-2 text-sigma-dark">
                Sigma<span className="text-sigma-orange">PDV</span>
              </span>
              <span className="text-2xl md:text-3xl font-semibold text-sigma-dark/90 mt-2">
                Automação Comercial <span className="text-sigma-orange">de Alta Performance</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-sigma-dark font-medium font-body leading-relaxed max-w-xl drop-shadow-sm">
              Somos referência em tecnologia e automação comercial na região Oeste de Santa Catarina. Nossa missão é entregar soluções completas e suporte técnico especializado para trazer mais organização, controle e crescimento ao seu PDV.
            </p>

            <div className="flex flex-wrap gap-5 pt-8 pb-4">
              <Button asChild variant="primary" size="lg" className="rounded-full px-8 shadow-xl shadow-sigma-orange/20">
                <Link href="/sistemas">Ver Sistemas de Gestão <Rocket className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-white/5 hover:bg-white/20 backdrop-blur-md border-sigma-dark/20 text-sigma-dark px-8 hover:border-sigma-orange hover:text-sigma-orange transition-all duration-300">
                <Link href="/automacao-comercial">Equipamentos para PDV</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* =========================================
          PILARES
          ========================================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-sigma-light pb-32 pt-24 relative z-10 -mt-20 rounded-t-[4rem] border-t border-white/50 shadow-[0_-20px_40px_rgba(0,0,0,0.03)]"
      >

        {/* Mover Faixa de Logos para cá (Apple Style Transition) */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
          <p className="text-center text-[10px] md:text-xs font-bold text-sigma-dark/30 uppercase tracking-[0.4em] mb-12">
            Equipamentos e Softwares de alta performance
          </p>
          <div className="relative overflow-hidden">
            {/* Gradiente esquerdo */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-sigma-light to-transparent z-10 pointer-events-none" />
            {/* Gradiente direito */}
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-sigma-light to-transparent z-10 pointer-events-none" />

            {/* Container único: logos + clone, animação move -50% (= 1 cópia) */}
            <div className="animate-marquee-loop flex gap-24 w-max">
              {[
                /* Ordem: intercala marcas de hardware, software e parceiros */
                "UNIPLUS", "INTELBRAS", "AMD", "SECULLUM", "GIGABYTE", "FOURTECH",
                "CONDFY", "ADATA", "ELGIN", "intel", "ASUS", "CUSTOM",
                /* clone exato para loop contínuo */
                "UNIPLUS", "INTELBRAS", "AMD", "SECULLUM", "GIGABYTE", "FOURTECH",
                "CONDFY", "ADATA", "ELGIN", "intel", "ASUS", "CUSTOM",
              ].map((name, i) => (
                <img
                  key={`logo-${i}`}
                  src={`/logos-loop/${name}.png`}
                  alt={name}
                  className="h-14 md:h-20 w-auto object-contain shrink-0"
                  aria-hidden={i >= 12 ? true : undefined}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-sigma-dark font-display tracking-tight">Os Pilares do nosso Hub</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: "point_of_sale", title: "Automação Comercial", desc: "Implantação de sistemas e soluções para mercados, lojas e empresas, focadas em controle, agilidade e eficiência operacional." },
              { icon: "analytics", title: "Sistemas e Software de Gestão", desc: "Soluções para gestão empresarial, frente de caixa, controle de vendas, estoque e relatórios." },
              { icon: "router", title: "Equipamentos e Infraestrutura", desc: "Fornecimento e instalação de equipamentos para automação comercial, garantindo integração total com os sistemas." },
              { icon: "support_agent", title: "Suporte Técnico Especializado", desc: "Atendimento próximo e contínuo, com equipe técnica preparada para suporte, manutenção e atualizações." },
              { icon: "fingerprint", title: "Controle de Ponto e Gestão de Acessos", desc: "Soluções para controle de jornada, acessos e gestão de colaboradores." },
              { icon: "help_outline", title: "Ficou em dúvida?", desc: "Converse com nossa equipe especializada e descubra qual combinação de sistemas, equipamentos e serviços faz mais sentido para o seu negócio.", linkText: "Falar com um especialista", href: "https://wa.me/555186302711?text=Ol%C3%A1%21+Gostaria+de+uma+consultoria+para+o+meu+neg%C3%B3cio." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-sigma-dark/5 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="size-14 rounded-2xl bg-sigma-light mb-6 flex items-center justify-center text-sigma-orange">
                  <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-sigma-dark mb-3 font-display">{feature.title}</h3>
                <p className="text-sigma-dark/70 leading-relaxed text-sm flex-grow">{feature.desc}</p>
                {feature.linkText && feature.href && (
                  <div className="mt-6 pt-2">
                    <Link href={feature.href} className="inline-flex items-center text-sm font-bold text-sigma-orange hover:text-sigma-orange/80 transition-colors">
                      {feature.linkText} <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* =========================================
          MÓDULO 1: SISTEMAS E GESTÃO
          ========================================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white py-32 border-y border-sigma-light"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-sigma-dark mb-6 font-display">
                  Gestão empresarial inteligente e segurança para o seu negócio
                </h2>
                <p className="text-lg text-sigma-dark/60 leading-relaxed font-body">
                  Três plataformas que organizam a gestão do seu negócio, da operação de PDV ao controle de jornada e acesso, com implantação e suporte completos pela SigmaPDV.
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <MonitorSmartphone className="flex-shrink-0 w-8 h-8 text-sigma-orange mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-sigma-dark font-display mb-1">Uniplus · Gestão e PDV integrados</h3>
                    <p className="text-sigma-dark/60 font-body">ERP modular para varejo com frente de caixa, fiscal, estoque e financeiro centralizados em uma única solução.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <BadgeCheck className="flex-shrink-0 w-8 h-8 text-sigma-orange mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-sigma-dark font-display mb-1">Secullum · Jornada e controle de acesso</h3>
                    <p className="text-sigma-dark/60 font-body">Sistemas para registro de ponto e controle de acesso em conformidade com a legislação e com relatórios confiáveis.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <LineChart className="flex-shrink-0 w-8 h-8 text-sigma-orange mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-sigma-dark font-display mb-1">CondFy · Portarias e condomínios</h3>
                    <p className="text-sigma-dark/60 font-body">Plataforma para gestão de acessos, visitantes e portarias, trazendo mais segurança e organização para condomínios e estruturas similares.</p>
                  </div>
                </div>
              </div>
              <Button asChild variant="primary" className="rounded-full">
                <Link href="/sistemas">
                  Ver detalhes dos sistemas <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="h-[500px] lg:h-[600px] w-full bg-sigma-light rounded-3xl border border-sigma-dark/5 flex items-center justify-center overflow-hidden relative shadow-sm hover:shadow-xl transition-all duration-300 group">
              <img
                src="/sistemas_hero.jpg"
                alt="Sistemas de Gestão"
                className="object-cover w-full h-full transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* =========================================
          MÓDULO 2: HARDWARE E AUTOMAÇÃO (Novo Grid)
          ========================================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-sigma-light py-32"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2 text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-sigma-dark font-display tracking-tight">
                Equipamentos e Serviços sob medida
              </h2>
            </div>

            {/* Divisória Vertical Laranja (Apenas Desktop) */}
            <div className="hidden lg:block w-px h-28 bg-sigma-orange/40 self-center"></div>

            <div className="lg:w-1/2 text-left">
              <p className="text-lg text-sigma-dark/60 leading-relaxed font-body max-w-lg">
                Nossa estrutura atende todas as frentes da sua empresa: da automação do caixa à infraestrutura de redes e suporte técnico de TI.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bloco Destaque: Automação (Full Width no md) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 group bg-white rounded-3xl p-10 lg:p-14 flex flex-col md:flex-row items-center gap-12 shadow-sm border border-sigma-dark/5 hover:shadow-xl transition-all duration-300"
            >
              <div className="md:w-1/2 flex flex-col items-start space-y-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-sigma-orange/10 text-xs font-bold text-sigma-orange uppercase tracking-wider">
                  PDV e Varejo
                </span>
                <h3 className="text-3xl font-bold text-sigma-dark font-display">Automação comercial para o seu PDV</h3>
                <p className="text-sigma-dark/70 text-lg leading-relaxed font-body">
                  Equipamentos de alta performance que garantem agilidade no checkout e a melhor experiência para o seu cliente.
                </p>
                <ProductList
                  primaryProducts={[
                    "Impressoras térmicas",
                    "Leitores de código de barras",
                    "Gavetas de caixa",
                    "Pin pads"
                  ]}
                  moreProducts={[
                    "Display cliente",
                    "Terminais de consulta",
                    "Painel de senha",
                    "Bobinas e ribbons"
                  ]}
                />
                <div className="pt-4 mt-auto">
                  <Button asChild variant="primary" className="rounded-full shadow-lg shadow-sigma-orange/20">
                    <Link href="/automacao-comercial">Saber mais <Monitor className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 w-full h-[320px] md:h-[450px] bg-white rounded-3xl flex items-center justify-center border border-sigma-dark/5 relative overflow-hidden">
                <img
                  src="/automacao_hero.JPG"
                  alt="Automação Comercial"
                  className="object-cover w-full h-full transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Grid 2x2 para os demais */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-10 flex flex-col justify-between shadow-sm border border-sigma-dark/5 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <span className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-sigma-cyan/10 text-xs font-bold text-sigma-cyan uppercase tracking-wider">
                  Infraestrutura TI
                </span>
                <h3 className="text-2xl font-bold text-sigma-dark font-display mb-4">Infraestrutura de TI profissional</h3>
                <p className="text-sigma-dark/70 leading-relaxed font-body mb-4">
                  Hardware robusto e conectividade estável para suportar o crescimento digital da sua empresa.
                </p>
                <ProductList
                  primaryProducts={[
                    "Computadores e notebooks",
                    "Processadores e placas-mãe",
                    "Memórias e armazenamento (HD/SSD)",
                    "Monitores e periféricos"
                  ]}
                  moreProducts={[
                    "Teclados e mouse",
                    "Impressoras corporativas e multifuncionais",
                    "Storage e soluções de backup",
                    "Nobreaks e estabilizadores"
                  ]}
                />
              </div>
              <div className="w-full h-[280px] bg-white rounded-3xl mb-8 flex items-center justify-center border border-sigma-dark/5 overflow-hidden">
                <img
                  src="/infrati_hero.jpg"
                  alt="Infraestrutura TI"
                  className="object-cover w-full h-full transition-transform duration-500"
                />
              </div>
              <Button asChild variant="primary" className="rounded-full w-full shadow-sm">
                <a href="https://wa.me/555186302711?text=Ol%C3%A1%21+Gostaria+de+um+or%C3%A7amento+para+equipamentos+de+infraestrutura+de+TI.">Solicitar Orçamento</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-10 flex flex-col justify-between shadow-sm border border-sigma-dark/5 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <span className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-sigma-dark/5 text-xs font-bold text-sigma-dark uppercase tracking-wider">
                  Expertise e Suporte
                </span>
                <h3 className="text-2xl font-bold text-sigma-dark font-display mb-4">Assessoria técnica e suporte</h3>
                <p className="text-sigma-dark/70 leading-relaxed font-body mb-4">
                  Especialistas qualificados para realizar intervenções técnicas e consultoria fiscal preventiva.
                </p>
                <ProductList
                  primaryProducts={[
                    "Implantação de sistemas de automação comercial",
                    "Fornecimento e instalação de equipamentos",
                    "Suporte técnico especializado",
                    "Projetos de automação corporativa"
                  ]}
                  moreProducts={[
                    "Manutenção de computadores e periféricos",
                    "Projetos de melhoria de rede",
                    "Contratos de suporte contínuo",
                    "Treinamentos para equipes de operação"
                  ]}
                />
              </div>
              <div className="w-full h-[280px] bg-white rounded-3xl mb-8 flex items-center justify-center border border-sigma-dark/5 overflow-hidden">
                <img
                  src="/suporte_hero.jpg"
                  alt="Assessoria técnica e suporte"
                  className="object-cover w-full h-full transition-transform duration-500"
                />
              </div>
              <Button asChild variant="primary" className="rounded-full w-full shadow-sm">
                <Link href="/suporte">Falar com Especialista</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl p-10 flex flex-col justify-between shadow-sm border border-sigma-dark/5 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <span className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-sigma-orange/10 text-xs font-bold text-sigma-orange uppercase tracking-wider">
                  Consumíveis e Acessórios
                </span>
                <h3 className="text-2xl font-bold text-sigma-dark font-display mb-4">Suprimentos para automação</h3>
                <p className="text-sigma-dark/70 leading-relaxed font-body mb-4">
                  Bobinas térmicas e acessórios de qualidade para que sua operação nunca sofra interrupções.
                </p>
                <ProductList
                  primaryProducts={[
                    "Bobinas e ribbons",
                    "Etiquetas para códigos de barras",
                    "Suprimentos para impressoras térmicas",
                    "Toners e cartuchos"
                  ]}
                  moreProducts={[
                    "Mídias para backup (HD externo, pendrive)",
                    "Suprimentos para impressoras de etiquetas",
                    "Kits de limpeza para equipamentos",
                    "Organização e acondicionamento de suprimentos"
                  ]}
                />
              </div>
              <div className="w-full h-[280px] bg-white rounded-3xl mb-8 flex items-center justify-center border border-sigma-dark/5 overflow-hidden">
                <img
                  src="/suprimentos_hero.jpg"
                  alt="Suprimentos para automação"
                  className="object-cover w-full h-full transition-transform duration-500"
                />
              </div>
              <Button asChild variant="primary" className="rounded-full w-full shadow-sm bg-sigma-orange hover:bg-sigma-orange/90 border-0">
                <a href="https://wa.me/555186302711?text=Ol%C3%A1%21+Preciso+de+um+or%C3%A7amento+para+suprimentos+de+automa%C3%A7%C3%A3o.">Solicitar Orçamento</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl p-10 flex flex-col justify-between shadow-sm border border-sigma-dark/5 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <span className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-sigma-cyan/10 text-xs font-bold text-sigma-cyan uppercase tracking-wider">
                  Alta Performance
                </span>
                <h3 className="text-2xl font-bold text-sigma-dark font-display mb-4">Hardware de alta performance</h3>
                <p className="text-sigma-dark/70 leading-relaxed font-body mb-4">
                  Potência e design em computadores montados sob medida para demandas extremas ou lazer.
                </p>
                <ProductList
                  primaryProducts={[
                    "PCs personalizados gamer",
                    "Consoles PlayStation, Xbox e Nintendo Switch",
                    "Monitores gamer",
                    "Teclados e mouses gamer"
                  ]}
                  moreProducts={[
                    "Headsets gamer",
                    "Controles e periféricos",
                    "Cadeiras gamer",
                    "Upgrades de máquinas existentes"
                  ]}
                />
              </div>
              <div className="w-full h-[280px] bg-white rounded-3xl mb-8 flex items-center justify-center border border-sigma-dark/5 overflow-hidden">
                <img
                  src="/gamer_hero.jpg"
                  alt="Hardware de alta performance"
                  className="object-cover w-full h-full transition-transform duration-500"
                />
              </div>
              <Button asChild variant="primary" size="lg" className="w-full bg-sigma-cyan text-sigma-dark hover:bg-sigma-cyan/90 shadow-sm border-0">
                <a href="https://wa.me/555186302711?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+linha+Gamer+da+Sigma.">Explorar Gamer</a>
              </Button>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* =========================================
          MÓDULO 3: CONDFY
          ========================================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white py-32 border-y border-sigma-light"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 h-[600px] w-full bg-sigma-light rounded-3xl border border-sigma-dark/5 flex justify-center items-center overflow-hidden">
              <img src="/condfy.svg" alt="CondFy" className="w-full h-full object-contain p-8 md:p-12 drop-shadow-2xl" />
            </div>
            <div className="space-y-12 order-1 lg:order-2">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sigma-orange/10 text-sigma-orange text-xs font-bold uppercase tracking-wider mb-6 font-display">
                  Solução para Condomínios
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold font-display text-sigma-dark tracking-tight mb-6">
                  CondFy: controle inteligente de acesso para condomínios
                </h2>
                <p className="text-lg font-body text-sigma-dark/60 leading-relaxed">
                  Gestão moderna de portaria, acessos e visitantes com app completo para moradores e administração.
                </p>
              </div>
              <ul className="space-y-8">
                <li className="flex gap-6">
                  <Smartphone className="flex-shrink-0 w-7 h-7 text-[#564493] mt-1" />
                  <p className="text-sigma-dark/80">Abertura de portas e portões pelo app, com histórico de acessos em tempo real.</p>
                </li>
                <li className="flex gap-6">
                  <QrCode className="flex-shrink-0 w-7 h-7 text-[#564493] mt-1" />
                  <p className="text-sigma-dark/80">Convites via QR Code ou chave virtual para visitantes, com mais segurança e menos filas.</p>
                </li>
                <li className="flex gap-6">
                  <Cloud className="flex-shrink-0 w-7 h-7 text-[#564493] mt-1" />
                  <p className="text-sigma-dark/80">Plataforma em nuvem, escalável para condomínios de pequeno a grande porte.</p>
                </li>
              </ul>
              <Button asChild variant="primary" size="lg">
                <Link href="/condominios">
                  Ver solução CondFy para condomínios <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* =========================================
          MÓDULO 4: SUPORTE TÉCNICO
          ========================================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-sigma-light py-32"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sigma-cyan/10 text-xs font-bold text-sigma-cyan uppercase mb-6 tracking-wider">
              Central de Atendimento
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-sigma-dark font-display max-w-xl">
                  Suporte Técnico Ágil e Humano
                </h2>
              </div>

              {/* Divisória Vertical Laranja (Apenas Desktop) */}
              <div className="hidden lg:block w-px h-32 bg-sigma-orange/40 self-center"></div>

              <div className="lg:w-1/2 flex items-center">
                <p className="text-xl text-sigma-dark/70 leading-relaxed font-body max-w-lg italic">
                  "Sabemos que seu negócio não pode parar. Nossa equipe de especialistas está pronta para resolver qualquer demanda técnica com agilidade e precisão."
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-12 grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Headphones,
                  title: "Suporte Remoto",
                  desc: "Acesso rápido com AnyDesk ou TeamViewer para solução imediata.",
                  linkText: "Acessar Suporte",
                  href: "/suporte"
                },
                {
                  icon: ShieldCheck,
                  title: "WhatsApp Direto",
                  desc: "Chat em tempo real com técnicos especialistas na sua região.",
                  linkText: "Falar com Técnico",
                  href: "/suporte"
                },
                {
                  icon: Download,
                  title: "Drivers e Manuais",
                  desc: "Biblioteca completa de instaladores para sua automação.",
                  linkText: "Ver Centrais",
                  href: "/suporte"
                }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] flex flex-col justify-between items-start shadow-sm border border-sigma-dark/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-full">
                    <div className="size-14 rounded-2xl bg-sigma-light mb-6 flex items-center justify-center text-sigma-dark group-hover:text-sigma-orange transition-colors duration-300">
                      <card.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-sigma-dark mb-3 font-display">{card.title}</h3>
                    <p className="text-sigma-dark/60 mb-8 font-body text-sm leading-relaxed">{card.desc}</p>
                  </div>
                  <Button
                    asChild
                    className="rounded-full px-6 font-bold w-full h-14 border-2 border-sigma-orange bg-transparent text-sigma-orange hover:bg-sigma-orange hover:text-white transition-all duration-300 shadow-none hover:shadow-lg hover:shadow-sigma-orange/30 group/btn"
                  >
                    <Link href={card.href} className="flex items-center justify-center">
                      {card.linkText}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-32 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            <div className="lg:w-1/2 text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-sigma-dark font-display tracking-tight">
                Cases de sucesso que impulsionam resultados
              </h2>
            </div>

            {/* Divisória Vertical Laranja (Apenas Desktop) */}
            <div className="hidden lg:block w-px h-28 bg-sigma-orange/40 self-center"></div>

            <div className="lg:w-1/2 text-left">
              <p className="text-lg text-sigma-dark/60 font-body max-w-lg">
                Grandes empresas da região confiam na SigmaPDV para integrar sistemas, equipamentos e suporte técnico em uma operação única e eficiente.
              </p>
            </div>
          </div>

          {/* Logos Marquee Loop - Sincronizado com Pilar Hub (Sem Título) */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 mt-0">
            <div className="relative overflow-hidden">
              {/* Gradientes Laterais para Suavizar o Corte (Igual ao Pilar) */}
              <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              <div className="animate-marquee-loop flex gap-24 w-max">
                {[
                  "UNIPLUS", "INTELBRAS", "AMD", "SECULLUM", "GIGABYTE", "FOURTECH",
                  "CONDFY", "ADATA", "ELGIN", "intel", "ASUS", "CUSTOM",
                  "UNIPLUS", "INTELBRAS", "AMD", "SECULLUM", "GIGABYTE", "FOURTECH",
                  "CONDFY", "ADATA", "ELGIN", "intel", "ASUS", "CUSTOM"
                ].map((name, i) => (
                  <img
                    key={`case-logo-${i}`}
                    src={`/logos-loop/${name}.png`}
                    alt={name}
                    className="h-14 md:h-20 w-auto object-contain opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer shrink-0"
                    aria-hidden={i >= 12 ? true : undefined}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
            {/* Case: Brasão (Destaque Grande) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => setSelectedImage("/cases/case-brasao.jpeg")}
              className="md:col-span-2 md:row-span-2 rounded-[2.5rem] overflow-hidden group relative shadow-lg cursor-pointer hover:shadow-2xl transition-all"
            >
              <img src="/cases/case-brasao.jpeg" alt="Brasão" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-sigma-dark/90 via-sigma-dark/40 to-transparent flex flex-col justify-end">
                <h3 className="text-2xl font-black font-display text-white mb-1">Rede Brasão</h3>
                <p className="text-white/70 font-body text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sigma-orange"></span>
                  Chapecó e Xaxim, SC
                </p>
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 flex items-center justify-center">
                <Maximize2 className="text-white/80 opacity-0 group-hover:opacity-100 transition-all w-12 h-12" />
              </div>
            </motion.div>

            {/* Case: Alberti (Horizontal) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onClick={() => setSelectedImage("/cases/case-alberti.jpeg")}
              className="md:col-span-2 md:row-span-1 rounded-[2.5rem] overflow-hidden group relative shadow-md cursor-pointer hover:shadow-xl transition-all"
            >
              <img src="/cases/case-alberti.jpeg" alt="Alberti" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 p-6 pt-16 bg-gradient-to-t from-sigma-dark/90 via-sigma-dark/40 to-transparent flex flex-col justify-end">
                <h3 className="text-xl font-bold font-display text-white">Supermercado Alberti</h3>
                <p className="text-white/70 font-body text-xs flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sigma-orange"></span>
                  Guatambu, SC
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Maximize2 className="text-white/80 opacity-0 group-hover:opacity-100 transition-all w-8 h-8" />
              </div>
            </motion.div>

            {/* Case: Cristo Rei */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => setSelectedImage("/cases/case-cristorei.jpg")}
              className="md:col-span-1 md:row-span-1 rounded-[2.5rem] overflow-hidden group relative shadow-md cursor-pointer hover:shadow-xl transition-all"
            >
              <img src="/cases/case-cristorei.jpg" alt="Cristo Rei" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 p-5 pt-12 bg-gradient-to-t from-sigma-dark/80 to-transparent">
                <h3 className="text-base font-bold font-display text-white">Cristo Rei</h3>
                <p className="text-white/60 font-body text-[10px]">Chapecó, SC</p>
              </div>
            </motion.div>

            {/* Case: CompreTudo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => setSelectedImage("/cases/case-compretudo.jpg")}
              className="md:col-span-1 md:row-span-1 rounded-[2.5rem] overflow-hidden group relative shadow-md cursor-pointer hover:shadow-xl transition-all"
            >
              <img src="/cases/case-compretudo.jpg" alt="CompreTudo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 p-5 pt-12 bg-gradient-to-t from-sigma-dark/80 to-transparent">
                <h3 className="text-base font-bold font-display text-white">CompreTudo</h3>
                <p className="text-white/60 font-body text-[10px]">Serra Alta, SC</p>
              </div>
            </motion.div>

            {/* Galeria Técnica 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={() => setSelectedImage("/suporte_hero.jpg")}
              className="md:col-span-1 md:row-span-1 rounded-[2.5rem] overflow-hidden group relative shadow-md cursor-pointer hover:shadow-xl transition-all"
            >
              <img src="/suporte_hero.jpg" alt="Equipe Técnica" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-sigma-dark/70 to-transparent">
                <p className="text-white/80 text-[10px] font-bold uppercase tracking-wider">Suporte Especializado</p>
              </div>
            </motion.div>

            {/* Galeria Técnica 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={() => setSelectedImage("/sistemas_hero.jpg")}
              className="md:col-span-1 md:row-span-1 rounded-[2.5rem] overflow-hidden group relative shadow-md cursor-pointer hover:shadow-xl transition-all"
            >
              <img src="/sistemas_hero.jpg" alt="Tecnologia Sigma" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-sigma-dark/70 to-transparent">
                <p className="text-white/80 text-[10px] font-bold uppercase tracking-wider">Gestão e PDV</p>
              </div>
            </motion.div>

            {/* CTA Bento */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="md:col-span-2 md:row-span-1 bg-sigma-cyan rounded-[2.5rem] p-10 flex flex-col justify-center items-start group shadow-sm hover:shadow-xl transition-all"
            >
              <h4 className="text-2xl font-black font-display text-sigma-dark leading-tight mb-4">Sua empresa pode ser o próximo case de sucesso.</h4>
              <Link href="https://wa.me/554933220000" className="inline-flex items-center text-sm font-bold bg-sigma-dark text-white px-6 py-3 rounded-full hover:bg-sigma-dark/90 transition-all">
                Conhecer soluções <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Lightbox / Visualizador de Imagens */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-sigma-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl w-full h-full flex items-center justify-center px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold p-2"
              >
                FECHAR <X className="w-6 h-6" />
              </button>
              
              <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/5 bg-sigma-dark flex items-center justify-center">
                <img 
                  src={selectedImage} 
                  alt="Visualização" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          CONTATO COMERCIAL (Fechamento da Home)
          ========================================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white pt-16 pb-32"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="bg-sigma-dark p-10 lg:p-14 rounded-[2rem] shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sigma-orange/10 to-transparent z-0 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="max-w-xl">
                <h2 className="text-3xl lg:text-4xl font-bold font-display text-white tracking-tight mb-4">
                  Pronto para falar com o time comercial da Sigma<span className="text-sigma-orange">PDV</span>?
                </h2>
                <p className="text-base lg:text-lg text-white/70 font-body leading-relaxed">
                  Converse com um consultor e descubra quais sistemas, equipamentos e serviços fazem mais sentido para o seu negócio.
                </p>
              </div>

              <Button asChild size="lg" variant="primary">
                <a href="https://wa.me/554933220000" target="_blank" rel="noopener noreferrer">
                  Falar com o time comercial
                  <MessageCircle className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

    </main>
  );
}
