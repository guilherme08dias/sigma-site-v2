"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Rocket } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(/hero-bg.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >


      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full pt-16 pb-20">
        <div className="max-w-3xl" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h1 className="font-display flex flex-col leading-tight">
                <span className="text-7xl lg:text-8xl font-black text-white tracking-tighter">SigmaPDV</span>
                <span className="text-3xl lg:text-4xl font-semibold text-white/80 mt-2">
                  O <span className="text-sigma-orange">hub de soluções</span> para sua empresa
                </span>
              </h1>
              <p className="text-lg text-white/90 max-w-xl leading-relaxed font-normal font-body">
                Temos a solução exata que sua empresa precisa para crescer com segurança. Seja com sistemas de gestão inteligentes, equipamentos de ponta ou suporte técnico especializado, cuidamos de tudo para você focar no que realmente importa.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-5">
              <Button asChild variant="primary" size="lg">
                <Link href="/sistemas">
                  Ver Sistemas de Gestão
                  <Rocket className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/automacao">
                  Equipamentos para PDV
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
