import AppleStyleHome from "@/components/home/AppleStyleHome";

export const metadata = {
  title: 'SigmaPDV | Automação Comercial, Sistemas de Gestão e Suporte em Chapecó',
  description:
    'Automação comercial completa em Chapecó: sistemas de gestão Uniplus, controle de ponto Secullum, CondFy para condomínios, hardware, suporte técnico e consultoria especializada para o varejo.',
  openGraph: {
    title: 'SigmaPDV | Hub de Tecnologia no Varejo',
    description: 'Soluções avançadas de Sistemas e Automação no Oeste de SC.',
    url: 'https://sigmapdv.com.br',
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <AppleStyleHome />;
}
