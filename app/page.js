import { Suspense } from "react";

import Hero from "./_components/inicioComponents/Hero";
import Infos from "./_components/inicioComponents/Infos";
import Spinner from "./_components/ui/Spinner";
import MaisVendidas from "./_components/inicioComponents/MaisVendidas";
import Benvenuto from "./_components/inicioComponents/Benvenuto";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const revalidate = 60 * 60 * 24;

export default function Home() {
  return (
    <>
      <Hero />
      <Infos />
      <Benvenuto />
      <Suspense fallback={<Spinner />}>
        <MaisVendidas />
      </Suspense>
      <div className="flex items-center justify-center px-10 py-5">
        <Accordion type="single" collapsible className="w-full max-w-3xl">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold tracking-wider">
              <p>
                Um pouco de nós
                <span className="font-bold text-orange-500"> !</span>
              </p>
            </AccordionTrigger>
            <AccordionContent className="leading-6">
              A Pizzaria Bella Pizza foi fundada em 2020 com a missão de trazer
              a autêntica pizza italiana para a cidade de Franca-SP. Nossa
              paixão por culinária traz aos nossos clientes o melhor sabor e
              experiência de uma verdadeira pizza
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-start text-lg font-semibold tracking-wider">
              <p>
                Entregamos no conforto da sua casa
                <span className="font-bold text-orange-500"> !</span>
              </p>
            </AccordionTrigger>
            <AccordionContent className="leading-6">
              Sabemos que nem sempre é possível sair de casa para aproveitar uma
              refeição deliciosa, por isso oferecemos um serviço de entrega
              rápido e eficiente. Faça seu pedido online e nossa equipe se
              certificará de que sua pizza chegue quente e saborosa até a sua
              porta. Entregamos em toda a cidade, garantindo que você possa
              desfrutar da Bella Pizza onde quer que esteja.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold tracking-wider">
              <p>
                Promoções e Descontos
                <span className="font-bold text-orange-500"> !</span>
              </p>
            </AccordionTrigger>
            <AccordionContent className="leading-6">
              Aproveite nossas promoções especiais! Toda terça-feira, todas as
              pizzas têm 20% de desconto. Além disso, na compra de duas pizzas
              grandes, você ganha uma sobremesa grátis. Não perca a chance de
              saborear nossas delícias com preços incríveis!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
