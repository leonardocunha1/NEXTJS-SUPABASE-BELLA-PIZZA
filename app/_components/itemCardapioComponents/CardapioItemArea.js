import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import CardapioItem from "./CardapioItem";

function CardapioItemArea({ cardapioItem }) {
  if (cardapioItem.category !== "Pizza" || !cardapioItem.availability) {
    throw new Error("Esse produto não pode ser exibido ou está indisponível");
  }

  return (
    <div className="relative flex flex-1 items-center justify-center">
      <Link
        className="absolute left-4 top-4 flex items-center gap-2 text-base duration-300 hover:text-orange-400"
        href="/cardapio"
      >
        <FaArrowLeftLong />
        <p>Voltar</p>
      </Link>

      <div className="flex w-full max-w-3xl flex-col p-2 sm:flex-row">
        <div className="relative mx-auto h-52 w-52 md:h-80 md:w-80">
          <Image
            src={cardapioItem.image_url}
            fill
            className="object-contain"
            alt={cardapioItem.name}
          />
        </div>

        <CardapioItem cardapioItem={cardapioItem} />
      </div>
    </div>
  );
}

export default CardapioItemArea;
