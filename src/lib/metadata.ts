import type { Metadata } from "next";

export const siteMetadata: Metadata = {
    title: {
        template: "%s | SigmaPDV - Automação, Informática e Linha Gamer",
        default: "SigmaPDV - Automação, Informática e Linha Gamer",
    },
    description: "Soluções completas em Automação Comercial, Suporte Técnico de Impressoras Fiscais e Setups Gamer de Alta Performance.",
    keywords: [
        "Automação", "Impressora não fiscal", "Balanças", "Pinpad", "Terminal de consulta",
        "Gamer", "PC Gamer", "Placa de Vídeo", "Cadeira Gamer", "Monitor 144Hz",
        "Serviços", "Intervenção técnica", "Assessoria empresarial", "Implantação de sistema"
    ],
    openGraph: {
        title: "SigmaPDV - Automação, Informática e Linha Gamer",
        description: "Soluções completas em Automação Comercial, Suporte Técnico de Impressoras Fiscais e Setups Gamer de Alta Performance.",
        url: "https://sigmapdv.com.br",
        siteName: "SigmaPDV",
        images: [
            {
                url: "https://sigmapdv.com.br/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "SigmaPDV OpenGraph",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "SigmaPDV - Automação, Informática e Linha Gamer",
        description: "Soluções completas em Automação Comercial, Suporte Técnico de Impressoras Fiscais e Setups Gamer de Alta Performance.",
    },
};
