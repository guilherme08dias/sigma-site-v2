import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import { FooterExpanded } from "@/components/FooterExpanded";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SigmaPDV | Sistemas de Gestão e Automação Comercial no Oeste SC",
  description: "Soluções completas em automação comercial para o varejo. Sistemas de gestão, equipamentos PDV, controle de condomínio e suporte técnico em Chapecó e região.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SigmaPDV",
              "image": "https://sigmapdv.com.br/logo.png",
              "@id": "https://sigmapdv.com.br",
              "url": "https://sigmapdv.com.br",
              "telephone": "+555186302711",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chapecó",
                "addressRegion": "SC",
                "addressCountry": "BR"
              },
              "description": "Sistemas de Gestão e Automação Comercial no Oeste de SC."
            })
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <FooterExpanded />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}
