"use client";

import { useCarrinho } from "@/app/_contexts/CarrinhoContext";
import { createPedido } from "@/app/_lib/actions";
import { formatCurrency } from "@/utils/helpers";
import { useState } from "react";
import { toast } from "react-toastify";
import EnderecoForm from "./revisarComponents/EnderecoForm";
import RevisarItens from "./revisarComponents/RevisarItens";
import MetodoPagamento from "./revisarComponents/MetodoPagamento";
import SubmitButtonCreatePedido from "./revisarComponents/SubmitButtonCreatePedido";
import { useRouter } from "next/navigation";
import ItemArea from "../ui/ItemArea";

function RevisarLayout({ entrega }) {
  const { carrinho } = useCarrinho();
  const router = useRouter();

  const [isDelivery, setIsDelivery] = useState(false);
  const [cepData, setCepData] = useState(null);
  const [cepError, setCepError] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("cartao");
  const [troco, setTroco] = useState(null);

  const totalPrice = carrinho.reduce((acc, item) => acc + item.totalPrice, 0);
  const finalPrice = isDelivery ? totalPrice + Number(entrega) : totalPrice;
  const endereco = `${cepData?.logradouro}, ${cepData?.numero} - ${cepData?.bairro}, ${cepData?.localidade} - ${cepData?.uf}`;

  const pedidoData = {
    isDelivery,
    paymentMethod,
    troco,
    endereco,
    cepData,
    carrinho,
  };

  const createOrderWithData = createPedido.bind(null, pedidoData);

  const create = async (formData) => {
    try {
      const result = await createOrderWithData(formData);
      if (result?.message) {
        toast.error(result.message);
      } else {
        // toast.success("Pedido criado com sucesso!");
        router.push(`/carrinho/revisar/${result.orderId}`);
      }
    } catch (error) {
      toast.error(`Erro inesperado ao criar pedido: ${error.message}`);
    }
  };

  if (carrinho.length === 0) {
    return (
      <div className="grid items-center justify-center text-3xl font-semibold">
        Carrinho vazio 😢
      </div>
    );
  }

  return (
    <ItemArea>
      <h3 className="text-center text-xl font-bold text-stone-700 sm:text-2xl md:text-3xl">
        Revise seu <span className="text-orange-500">pedido!</span>
      </h3>

      <ul className="mt-5 flex w-full flex-col gap-y-3">
        {carrinho.map((item) => (
          <RevisarItens key={item.idUnique} item={item} />
        ))}
      </ul>

      <div className="mt-3 w-full">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="delivery"
            name="delivery"
            value="delivery"
            onChange={() => setIsDelivery(!isDelivery)}
            className="h-4 w-4 accent-orange-400 focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-2"
          />
          <label htmlFor="delivery" className="font-extralight italic">
            Entrega (+{formatCurrency(Number(entrega))})
          </label>
        </div>

        {isDelivery && (
          <EnderecoForm
            cepError={cepError}
            cepData={cepData}
            setCepData={setCepData}
            setCepError={setCepError}
          />
        )}

        <MetodoPagamento
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          setTroco={setTroco}
        />

        {paymentMethod === "dinheiro" && (
          <input
            type="number"
            name="troco"
            placeholder="Quanto de troco precisa?"
            className="mt-2 w-full rounded-md border border-stone-300 p-2 focus:outline-none focus:ring focus:ring-orange-500"
            onChange={(e) => setTroco(Number(e.target.value))}
          />
        )}
        <p className="mt-3 text-end text-lg font-bold">
          Total: {formatCurrency(finalPrice)}
        </p>
      </div>
      <form action={create} className="w-full">
        <input type="hidden" name="finalPrice" value={finalPrice} />
        <SubmitButtonCreatePedido pendingLabel="Criando pedido...">
          Finalizar Pedido
        </SubmitButtonCreatePedido>
      </form>
    </ItemArea>
  );
}

export default RevisarLayout;
