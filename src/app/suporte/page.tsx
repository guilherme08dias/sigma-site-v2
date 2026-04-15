import SuporteHero from "@/components/suporte/SuporteHero";
import AcessoRemoto from "@/components/suporte/AcessoRemoto";
import DownloadsGrid from "@/components/suporte/DownloadsGrid";
import SuporteCanais from "@/components/suporte/SuporteCanais";
import SuporteCTA from "@/components/suporte/SuporteCTA";

export const metadata = {
  title: 'Suporte Técnico SigmaPDV | Acesso Remoto, Chamados e Atendimento Rápido',
  description:
    'Canal de suporte SigmaPDV com acesso remoto, abertura de chamados, emissão de boletos e links para manuais e drivers, focado em atendimento ágil ao varejo.',
};

export default function SuportePage() {
  return (
    <div className="bg-sigma-light">
      <SuporteHero />
      <div id="canais">
        <SuporteCanais />
      </div>
      <AcessoRemoto />
      <DownloadsGrid />
      <SuporteCTA />
    </div>
  );
}
