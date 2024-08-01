import Image from "next/image";
import TitleMini from "../ui/TitleMini";
import pizza2 from "@/public/pizza2.png";

function Benvenuto() {
  return (
    <div className="relative overflow-hidden px-10 py-5 2xl:px-0">
      <div className="mb-3 flex flex-col items-center">
        <div className="mt-1 h-2 w-36 bg-orange-500"></div>
        <TitleMini>Benvenuto!</TitleMini>
        <div className="mt-1 h-2 w-36 bg-orange-500"></div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center lg:flex-row lg:justify-center lg:gap-5">
        <div className="mt-3 w-60 sm:w-64 md:w-72 xl:w-96 2xl:ml-16 2xl:w-[450px]">
          <Image src={pizza2} quality={70} alt="Pizza deliciosa" />
        </div>
        <div className="z-20 mt-3 flex flex-col gap-3 leading-6 lg:w-1/2">
          <p>
            Na <span className="font-bold text-orange-500">Bella Pizza</span>,
            nossa missão é proporcionar uma experiência gastronômica
            inesquecível, combinando receitas tradicionais italianas com um
            toque de modernidade. Cada pizza é preparada com ingredientes
            selecionados, massas artesanais e aquele sabor especial que só a
            Bella Pizza tem.
          </p>
          <div>
            <p className="mb-2">Nossos Destaques:</p>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>
                <span className="font-bold">Pizzas Clássicas</span>: Desfrute
                das nossas deliciosas Margherita, Calabresa, Quatro Queijos e
                muitas outras.
              </li>
              <li>
                <span className="font-bold">Pizzas Especiais</span>: Experimente
                combinações únicas e inovadoras, como a Pizza de Parma com
                Rúcula e a nossa exclusiva Pizza Bella.
              </li>
              <li>
                <span className="font-bold">Ingredientes Frescos</span>:
                Utilizamos apenas os melhores ingredientes, frescos e de alta
                qualidade, para garantir o sabor e a satisfação em cada pedaço.
              </li>
              <li>
                <span className="font-bold">Ambiente Aconchegante</span>: Nossa
                pizzaria oferece um espaço acolhedor e familiar, perfeito para
                reunir amigos e familiares.
              </li>
            </ul>
          </div>
          <p>
            Seja para um jantar romântico, uma reunião de amigos ou uma
            celebração em família, a Bella Pizza é o lugar ideal. Venha nos
            visitar e descubra porque somos a pizzaria preferida da cidade!
          </p>
          <p className="text-center font-bold text-orange-500">
            Faça Parte da Família Bella Pizza!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benvenuto;
