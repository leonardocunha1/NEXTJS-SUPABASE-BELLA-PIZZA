import { getSettings } from "@/utils/data-services";
import CardapioItemInfos from "./CardapioItemInfos";

async function CardapioItem({ cardapioItem }) {
  const { bordaPrice } = await getSettings();
  return (
    <div className="mt-3 flex flex-col items-center gap-3">
      <h1 className="text-center text-3xl font-bold">{cardapioItem.name}</h1>
      <p className="text-center">{cardapioItem.description}</p>
      <CardapioItemInfos
        cardapioItem={cardapioItem}
        bordaPricePizza={bordaPrice}
      />
    </div>
  );
}

export default CardapioItem;
