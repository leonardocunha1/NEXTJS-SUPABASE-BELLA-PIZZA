import { formatCurrency } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import AddSobremesasOuBebidas from "./AddSobremesasOuBebidas";
import { motion } from "framer-motion";

function ItensCardapio({ item }) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className={`relative flex h-60 w-full items-center px-4 shadow-xl sm:h-80 sm:w-60 sm:flex-col sm:py-3 ${item.availability ? "" : "grayscale"}`}
      key={item.id}
    >
      <div className="relative h-32 w-32">
        <Image
          src={item.image_url}
          fill
          className={`rounded-full object-contain sm:border-4 sm:border-orange-500 ${item.category === "Pizza" ? "" : "p-2"}`}
          alt={item.name}
        />
      </div>
      <div className="w-full text-center">
        <h2 className="my-3 font-bold">{item.name}</h2>
        <p className="text-center">{item.description}</p>
      </div>
      <div className="absolute bottom-3 right-5 mt-auto flex items-center sm:gap-3">
        <p className="text-center font-bold">{formatCurrency(item.price)}</p>

        {item.category === "Pizza" ? (
          <Link href={`${item.availability ? `/cardapio/${item.id}` : ""} `}>
            <FaCartPlus
              className={`h-6 w-6 text-orange-500 duration-500 ${!item.availability ? "cursor-not-allowed" : "hover:text-orange-300"}`}
            />
          </Link>
        ) : (
          <AddSobremesasOuBebidas item={item} />
        )}
      </div>
      {!item.availability && (
        <p className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 -rotate-12 text-lg font-bold uppercase text-red-500">
          Indisponível
        </p>
      )}
    </motion.li>
  );
}

export default ItensCardapio;
