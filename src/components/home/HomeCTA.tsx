import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="bg-sigma-dark py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6 font-display">Pronto para levar seu negócio ao próximo nível?</h2>
        <p className="mx-auto max-w-2xl text-gray-400 mb-10 font-body">Fale com nossos especialistas e descubra a solução ideal para transformar sua empresa hoje.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild variant="primary" size="lg">
            <Link href="/sistemas">
              Agendar Demo
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href="https://wa.me/554989022868" target="_blank" rel="noopener noreferrer">
              Falar com Vendas
              <MessageCircle className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
