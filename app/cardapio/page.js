import { getCardapio } from "@/utils/data-services";

import ItensCardapioArea from "../_components/itensCardapioComponents/ItensCardapioArea";

export const metadata = {
  title: "Cardápio",
};

export default async function Page() {
  const cardapio = await getCardapio();

  return (
    <div className="flex flex-1 flex-col px-5 py-7">
      <ItensCardapioArea cardapio={cardapio} />
    </div>
  );
}
