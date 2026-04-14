import HeroAutomacao from "@/components/automacao/HeroAutomacao";
import TouchMonitors from "@/components/automacao/TouchMonitors";
import SelfServiceKiosk from "@/components/automacao/SelfServiceKiosk";
import ThermalPrinters from "@/components/automacao/ThermalPrinters";
import LabelPrinters from "@/components/automacao/LabelPrinters";
import CorporateHardware from "@/components/automacao/CorporateHardware";
import PerifericosEssenciais from "@/components/automacao/PerifericosEssenciais";
import HardwarePonto from "@/components/sistemas/HardwarePonto";

export const metadata = {
  title: 'Automação Comercial SigmaPDV | Impressoras, Monitores Touch e Hardware para Varejo',
  description:
    'Monitores touch, impressoras térmicas e de etiquetas, leitores e infraestrutura de rede selecionados para mercados, lojas e restaurantes. Automação comercial integrada aos sistemas da SigmaPDV, com suporte local em Chapecó.',
  openGraph: {
    title: 'Automação Comercial SigmaPDV',
    description: 'Hardware completo para varejo: impressoras, monitores touch, e totens.',
    url: 'https://sigmapdv.com.br/automacao-comercial',
  },
  alternates: {
    canonical: '/automacao-comercial',
  },
};

import Script from "next/script";

export default function AutomacaoComercialPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Monitores Touch para Automação Comercial",
    "description": "Linha de monitores touch para PDV e automação comercial, ideais para caixas, balcões e frentes de loja no varejo do Oeste Catarinense.",
    "category": "Monitores Touch",
    "brand": {
      "@type": "Brand",
      "name": "SigmaPDV"
    },
    "url": "https://sigmapdv.com.br/automacao-comercial",
    "image": "https://sigmapdv.com.br/monitores_custom.png",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BRL",
      "lowPrice": "0.0",
      "highPrice": "0.0",
      "offerCount": "0",
      "availability": "https://schema.org/InStoreOnly",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "BRL",
        "price": "0.0"
      }
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Modelo de negociação",
        "value": "Valores sob consulta, de acordo com projeto e tipo de estabelecimento."
      },
      {
        "@type": "PropertyValue",
        "name": "Aplicações",
        "value": "PDV de supermercados, lojas, restaurantes e operações de varejo em geral."
      }
    ]
  };

  return (
    <>
      <Script
        id="json-ld-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroAutomacao />
      <TouchMonitors />
      <SelfServiceKiosk />
      <div id="impressoras">
        <ThermalPrinters />
        <LabelPrinters />
      </div>
      <div id="perifericos">
        <PerifericosEssenciais />
      </div>
      <div id="ponto">
        <HardwarePonto />
      </div>
      <div id="acesso">
        <CorporateHardware />
      </div>
    </>
  );
}
