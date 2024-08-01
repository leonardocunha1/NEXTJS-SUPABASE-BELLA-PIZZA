"use client";

import { useCarrinho } from "@/app/_contexts/CarrinhoContext";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";

function AddSobremesasOuBebidas({ item }) {
  const { carrinho, dispatch } = useCarrinho();

  function handleAddtoCart() {
    if (!item.availability) {
      return;
    }

    const itemCart = {
      idUnique: item.id,
      id: item.id,
      name: item.name,
      quantidade: 1,
      preco: item.price,
    };

    const itemExiste = carrinho.find(
      (item) => item.idUnique === itemCart.idUnique,
    );

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
        payload: itemCart,
      });
    }

    toast.success(`${item.name} adicionado(a) ao carrinho`);
  }

  return (
    <button onClick={handleAddtoCart}>
      <FaCartPlus
        className={`h-6 w-6 text-orange-500 duration-500 ${!item.availability ? "cursor-not-allowed" : "cursor-pointer hover:text-orange-300"}`}
      />
    </button>
  );
}

export default AddSobremesasOuBebidas;
