"use client";

import { useState } from "react";
import { useCarrinho } from "@/app/_contexts/CarrinhoContext";

import Button from "../ui/Button";
import ButtonItemCardapio from "./ButtonItemCardapio";

import { formatCurrency } from "@/utils/helpers";
import { toast } from "react-toastify";

function CardapioItemInfos({ cardapioItem, bordaPricePizza }) {
  const [borda, setBorda] = useState(false);
  const [bordaPrice, setBordaPrice] = useState(bordaPricePizza);
  const [size, setSize] = useState("Clássica");
  const [observacoes, setObservacoes] = useState("");
  const [priceItem, setPriceItem] = useState(cardapioItem.price);
  const { carrinho, dispatch } = useCarrinho();

  function handlePizzaClassica() {
    setBordaPrice(8);
    setSize("Clássica");
    setPriceItem(cardapioItem.price);
    setBorda(false);
  }

  function handlePizzaBroto() {
    setBordaPrice(4);
    setSize("Broto");
    setPriceItem(cardapioItem.price / 2);
    setBorda(false);
  }

  const finalPrice = borda ? priceItem + bordaPrice : priceItem;

  function handleAddToCart() {
    const idUnique = `${cardapioItem.id}-${size}-${borda}-${observacoes}`;

    const item = {
      id: cardapioItem.id,
      idUnique,
      name: `${cardapioItem.name} - ${size} - ${borda ? "Com Borda" : "Sem borda"}`,
      quantidade: 1,
      preco: finalPrice,
      borda,
      size,
      observacoes,
    };

    // o find retorna o item se ele existir, se não, retorna undefined
    const itemExiste = carrinho.find((item) => item.idUnique === idUnique);

    if (itemExiste) {
      dispatch({
        type: "carrinho/atualizar",
        payload: {
          ...itemExiste,
          quantidade: itemExiste.quantidade + 1,
        },
      });
    } else {
      dispatch({
        type: "carrinho/adicionar",
        payload: item,
      });
    }

    toast.success(`${cardapioItem.name} - ${size} adicionada ao carrinho`);
    setObservacoes("");
    setBorda(false);
    setSize("Clássica");
  }
  //   console.log(carrinho);

  return (
    <>
      <div>
        <p className="mb-3">Selecione o tamanho</p>
        <div className="space-x-3">
          <ButtonItemCardapio
            onChangePizza={handlePizzaClassica}
            size={size}
            tipo="Clássica"
          >
            Clássica
          </ButtonItemCardapio>
          <ButtonItemCardapio
            onChangePizza={handlePizzaBroto}
            size={size}
            tipo="Broto"
          >
            Broto
          </ButtonItemCardapio>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <input
          type="checkbox"
          checked={borda}
          onChange={() => setBorda(!borda)}
          className="h-4 w-4 accent-orange-400 focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-2"
        />
        <span className="font-light italic">
          Borda (+{formatCurrency(bordaPrice)})
        </span>
      </div>

      <textarea
        id="observacoes"
        name="observacoes"
        // rows="4"
        value={observacoes}
        onChange={(e) => setObservacoes(e.target.value)}
        className="h-10 w-36 max-w-96 rounded-lg border border-orange-500 bg-stone-100 p-2 placeholder-stone-400 transition-all duration-300 focus:h-20 focus:w-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
        placeholder="Observações..."
      ></textarea>

      <div className="mt-4 flex items-center gap-3">
        <p className="text-center text-xl font-semibold">
          {formatCurrency(finalPrice)}
        </p>
        <Button onClick={handleAddToCart} font="font-semibold">
          Adicionar ao carrinho
        </Button>
      </div>
    </>
  );
}

export default CardapioItemInfos;
