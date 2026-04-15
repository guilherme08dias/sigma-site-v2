"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className}>
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.13 6.742 3.046 9.378L1.054 31.29l6.118-1.96A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.312 22.594c-.39 1.1-1.932 2.014-3.17 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.974-7.826-6.81-8.064-7.126-.23-.316-1.932-2.574-1.932-4.908s1.222-3.48 1.656-3.96c.434-.478.948-.598 1.264-.598.316 0 .632.004.908.016.292.014.684-.11 1.07.816.39.944 1.326 3.236 1.444 3.472.118.236.196.51.04.826-.158.316-.236.512-.472.79-.236.276-.496.618-.71.828-.236.236-.482.492-.208.964.276.472 1.226 2.022 2.632 3.276 1.812 1.616 3.338 2.118 3.81 2.354.472.236.748.196 1.024-.118.276-.316 1.186-1.382 1.502-1.858.316-.478.632-.394 1.066-.236.434.158 2.724 1.284 3.19 1.52.466.236.776.354.894.55.118.196.118 1.128-.272 2.228Z"/>
    </svg>
  );
}

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!open) setShowBubble(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!showBubble || open) return;

    const hideTimer = setTimeout(() => {
      setShowBubble(false);
    }, 8000);

    return () => clearTimeout(hideTimer);
  }, [showBubble, open]);

  useEffect(() => {
    if (open) {
      setShowBubble(false);
      return;
    }

    const interval = setInterval(() => {
      if (!open) {
        setShowBubble(true);
        setTimeout(() => setShowBubble(false), 8000);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [open]);

  const contacts = [
    {
      label: "Suporte Técnico",
      number: "5549991161576",
      message: "Olá! Preciso de suporte técnico.",
      icon: "support_agent",
      color: "#25D366",
    },
    {
      label: "Comercial",
      number: "554989022868",
      message: "Olá Rodrigo! Gostaria de informações comerciais sobre as soluções da SigmaPDV.",
      icon: "storefront",
      color: "#128C7E",
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-2xl border border-sigma-dark/5 p-5 mb-2 w-72"
          >
            <p className="text-sigma-dark font-display font-bold text-base mb-4 tracking-tight">
              Como podemos ajudar?
            </p>
            <div className="flex flex-col gap-3">
              {contacts.map((contact, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${contact.number}?text=${encodeURIComponent(contact.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-sigma-dark/5 hover:border-[#25D366]/30 bg-sigma-light hover:bg-[#25D366]/5 transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${contact.color}15` }}
                  >
                    <span
                      className="material-symbols-outlined text-xl"
                      style={{ color: contact.color }}
                    >
                      {contact.icon}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sigma-dark font-display tracking-tight text-sm">
                      {contact.label}
                    </span>
                    <span className="text-xs text-sigma-dark/50 font-body">
                      Abrir no WhatsApp
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-sigma-dark/30 group-hover:text-[#25D366] transition-colors ml-auto text-lg">
                    arrow_forward
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-end gap-3">
        <AnimatePresence>
          {showBubble && !open && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-2xl rounded-br-sm shadow-lg border border-sigma-dark/5 px-3 py-2 sm:px-4 sm:py-3 max-w-[180px] sm:max-w-[200px] cursor-pointer"
              onClick={() => { setShowBubble(false); setOpen(true); }}
            >
              <p className="text-xs font-bold text-[#25D366] font-display tracking-tight mb-0.5">SigmaPDV</p>
              <p className="text-sm text-sigma-dark font-body leading-snug">
                Dúvidas sobre sistemas ou equipamentos? Chama a gente!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setOpen(!open)}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shrink-0 ${
            open
              ? "bg-sigma-dark shadow-sigma-dark/30"
              : "bg-[#25D366] shadow-[#25D366]/40 hover:shadow-[#25D366]/60"
          }`}
          aria-label="Abrir WhatsApp"
        >
          {open ? (
            <span className="material-symbols-outlined text-white text-3xl">close</span>
          ) : (
            <WhatsAppIcon className="w-8 h-8 text-white" />
          )}
        </button>
      </div>
    </div>
  );
}
