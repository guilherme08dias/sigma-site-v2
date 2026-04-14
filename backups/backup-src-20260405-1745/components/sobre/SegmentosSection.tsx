"use client";

import { SdsInfoCard } from "@/components/ui/SdsInfoCard";

const segmentos = [
  {
    title: "Supermercados e minimercados",
    phrase: "Automação completa de frente de caixa, controle de estoque e integração com balanças e etiquetas.",
    icon: "storefront"
  },
  {
    title: "Lojas de varejo",
    phrase: "Gestão de produtos, vendas e clientes para moda, eletrônicos, agro e diversos segmentos do varejo.",
    icon: "shopping_bag"
  },
  {
    title: "Bares, restaurantes e food service",
    phrase: "Soluções para comandas, delivery, balcão e gestão de cozinha com integração fiscal.",
    icon: "restaurant"
  },
  {
    title: "Condomínios e portarias",
    phrase: "Controle de acesso, portaria remota e gestão de visitantes com a plataforma CondFy e parceiros.",
    icon: "location_city"
  }
];

export default function SegmentosSection() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-sigma-light" id="quem-atendemos">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sigma-dark/30 font-bold font-body tracking-widest text-sm uppercase mb-6 block">Quem atendemos hoje</span>
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-sigma-dark">Segmentos que crescem com a SigmaPDV</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segmentos.map((card, idx) => (
            <SdsInfoCard
              key={idx}
              title={card.title}
              description={card.phrase}
              icon={card.icon}
              delay={idx * 0.1}
              className="bg-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
