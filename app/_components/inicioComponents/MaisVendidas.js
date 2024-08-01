import { getBestSellersPizzas } from "@/utils/data-services";

import Slider from "./Slider";
import TitleMini from "../ui/TitleMini";

async function MaisVendidas() {
  const bestSellersPizzas = await getBestSellersPizzas();
  //   console.log(bestSellersPizzas);

  return (
    <>
      <div className="max-w-full p-8">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-1 mt-1 h-2 w-36 bg-orange-500"></div>
          <TitleMini>Mais Vendidas</TitleMini>
          <div className="mt-1 h-2 w-36 bg-orange-500"></div>
        </div>
        <Slider bestSellersPizzas={bestSellersPizzas} />
      </div>
    </>
  );
}

export default MaisVendidas;
