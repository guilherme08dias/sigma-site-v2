import UniplusERP from "@/components/sistemas/UniplusERP";
import SecullumSection from "@/components/sistemas/SecullumSection";
import CondFySection from "@/components/sistemas/CondFySection";
import JornadaSection from "@/components/sistemas/JornadaSection";
import SistemasCTA from "@/components/sistemas/SistemasCTA";

export const metadata = {
  title: 'Sistemas de Gestão SigmaPDV | Uniplus ERP, Secullum Ponto e CondFy',
  description:
    'Plataforma completa de sistemas para empresas: Uniplus ERP para gestão fiscal, estoque e financeiro, Secullum para ponto e controle de acesso e CondFy para gestão condominial, com implantação e suporte pela SigmaPDV.',
};

export default function SistemasPage() {
  return (
    <>
      <UniplusERP />
      <SecullumSection />
      <CondFySection />
      <JornadaSection />
      <SistemasCTA />
    </>
  );
}
