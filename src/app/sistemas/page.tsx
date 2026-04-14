import UniplusERP from "@/components/sistemas/UniplusERP";
import SecullumSection from "@/components/sistemas/SecullumSection";
import CondFySection from "@/components/sistemas/CondFySection";

import JornadaSection from "@/components/sistemas/JornadaSection";
import SistemasCTA from "@/components/sistemas/SistemasCTA";
import Script from "next/script";

export const metadata = {
  title: 'Sistemas de Gestão SigmaPDV | Uniplus ERP, Secullum Ponto e CondFy',
  description:
    'Plataforma completa de sistemas para empresas: Uniplus ERP para gestão fiscal, estoque e financeiro, Secullum para ponto e controle de acesso e CondFy para gestão condominial, com implantação e suporte pela SigmaPDV.',
  openGraph: {
    title: 'Sistemas de Gestão SigmaPDV',
    description: 'Conheça o Uniplus ERP, Secullum Ponto e CondFy. Implantação e suporte garantidos.',
    url: 'https://sigmapdv.com.br/sistemas',
  },
  alternates: {
    canonical: '/sistemas',
  },
};

export default function SistemasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Sistemas de Gestão SigmaPDV (Uniplus, Secullum, CondFy)",
    "operatingSystem": "Web, Windows, Android, iOS",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    }
  };

  return (
    <>
      <Script
        id="json-ld-sistemas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div id="uniplus">
        <UniplusERP />
      </div>
      <div id="secullum">
        <SecullumSection />
      </div>
      <div id="condfy">
        <CondFySection />
      </div>
      <JornadaSection />
      <SistemasCTA />
    </>
  );
}
