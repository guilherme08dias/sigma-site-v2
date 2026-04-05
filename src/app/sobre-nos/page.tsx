import SobreHero from "@/components/sobre/SobreHero";
import ManifestoSection from "@/components/sobre/ManifestoSection";
import MissaoVisaoValores from "@/components/sobre/MissaoVisaoValores";
import StatsSection from "@/components/sobre/StatsSection";
import DiferenciaisSection from "@/components/sobre/DiferenciaisSection";
import SegmentosSection from "@/components/sobre/SegmentosSection";
import DepoimentosSection from "@/components/sobre/DepoimentosSection";
import CtaFechamento from "@/components/sobre/CtaFechamento";

export const metadata = {
  title: 'Sobre a SigmaPDV | Automação Comercial e Sistemas de Gestão em Chapecó',
  description:
    'Conheça a história da SigmaPDV, empresa de automação comercial e sistemas de gestão em Chapecó, especializada em soluções para mercados, lojas, restaurantes e condomínios, com foco em suporte próximo e consultivo.',
};

export default function SobreNosPage() {
  return (
    <>
      <SobreHero />
      <ManifestoSection />
      <MissaoVisaoValores />
      <StatsSection />
      <DiferenciaisSection />
      <SegmentosSection />
      <DepoimentosSection />
      <CtaFechamento />
    </>
  );
}
