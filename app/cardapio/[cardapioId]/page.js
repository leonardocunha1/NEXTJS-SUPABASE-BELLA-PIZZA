import { getCardapio, getCardapioById } from "@/utils/data-services";

import CardapioItemArea from "@/app/_components/itemCardapioComponents/CardapioItemArea";

export async function generateMetadata({ params }) {
  const item = await getCardapioById(params.cardapioId);
  const { name } = item;

  return {
    title: `${name}`,
  };
}

// isso foi feito para gerar as páginas estáticas de cada pizza
export async function generateStaticParams() {
  const items = await getCardapio();
  const itemspizza = items.filter((item) => item.category === "Pizza");

  const ids = itemspizza.map((pizza) => ({
    cardapioId: String(pizza.id),
  }));
  //   console.log(ids);
  return ids;
}

export default async function Page({ params }) {
  const { cardapioId } = params;
  const cardapioItem = await getCardapioById(cardapioId);

  return <CardapioItemArea cardapioItem={cardapioItem} />;
}
