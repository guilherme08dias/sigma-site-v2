"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SdsInfoCardProps {
  icon: string | LucideIcon;
  title: string;
  description?: string;
  className?: string;
  delay?: number;
}

export function SdsInfoCard({ 
  icon: Icon, 
  title, 
  description, 
  className = "", 
  delay = 0 
}: SdsInfoCardProps) {
  const isLucideIcon = typeof Icon !== "string";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`bg-sigma-light rounded-3xl p-6 md:p-8 flex flex-col gap-4 border border-sigma-dark/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full ${className}`}
    >
      {/* Ícone em chip */}
      <div className="size-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-sigma-orange group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
        {isLucideIcon ? (
          <Icon className="w-6 h-6" />
        ) : (
          <span className="material-symbols-outlined text-2xl">{Icon}</span>
        )}
      </div>

      {/* Título e Descrição */}
      <div className="space-y-2">
        <h3 className="text-base md:text-lg font-bold font-display text-sigma-dark tracking-tight leading-tight">
          {title}
        </h3>
        {description && (
          <p className="text-sm md:text-[15px] text-sigma-dark/70 leading-relaxed font-body">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
