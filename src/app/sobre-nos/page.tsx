import SobreHero from "@/components/sobre/SobreHero";
import ManifestoSection from "@/components/sobre/ManifestoSection";
import MissaoVisaoValores from "@/components/sobre/MissaoVisaoValores";
import EstruturaEquipe from "@/components/sobre/EstruturaEquipe";
import StatsSection from "@/components/sobre/StatsSection";
import DiferenciaisSection from "@/components/sobre/DiferenciaisSection";
import SegmentosSection from "@/components/sobre/SegmentosSection";
import PresencaRegional from "@/components/sobre/PresencaRegional";
import CtaFechamento from "@/components/sobre/CtaFechamento";

export const metadata = {
  title: 'Sobre a SigmaPDV | Automação Comercial e Sistemas de Gestão em Chapecó',
  description:
    'Conheça a história da SigmaPDV, empresa de automação comercial e sistemas de gestão em Chapecó, especializada em soluções para mercados, lojas, restaurantes e condomínios, com foco em suporte próximo e consultivo.',
  openGraph: {
    title: 'Sobre a SigmaPDV',
    description: 'Conheça a história e estrutura da SigmaPDV em Chapecó e região.',
    url: 'https://sigmapdv.com.br/sobre-nos',
  },
  alternates: {
    canonical: '/sobre-nos',
  },
};

export default function SobreNosPage() {
  return (
    <>
      <SobreHero />
      <ManifestoSection />
      <MissaoVisaoValores />
      <EstruturaEquipe />
      <StatsSection />
      <DiferenciaisSection />
      <SegmentosSection />
      <PresencaRegional />
      <CtaFechamento />
    </>
  );
}
