"use server";

import { auth, signIn, signOut } from "@/auth";
import { supabase } from "@/utils/supabase/supabase";
import { format } from "date-fns";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google", { redirectTo: "/" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function createPedido(pedidoData, formData) {
  const session = await auth();
  if (!session)
    throw new Error("Você precisa estar logado para realizar essa função");

  //   if (
  //     pedidoData.paymentMethod === "dinheiro" &&
  //     Number(pedidoData.troco) >= Number(formData.get("finalPrice"))
  //   ) {
  //     return { message: "O troco deve ser menor que o valor total do pedido." };
  //   }

  if (pedidoData.isDelivery && !pedidoData.cepData) {
    return {
      message:
        "Para entrega você precisa fornecer um endereço válido/Pesquise por um CEP.",
    };
  }

  const newPedido = {
    usuarioId: session.user.usuarioId,
    status: "pendente",
    finalPrice: Number(formData.get("finalPrice")),
    deliveryType: pedidoData.isDelivery ? "entrega" : "retirada",
    paymentMethod: pedidoData.paymentMethod,
    changeFor:
      pedidoData.paymentMethod === "dinheiro" ? pedidoData.troco : null,
    deliveryAddress: pedidoData.isDelivery ? pedidoData.endereco : null,
  };

  const { data, error } = await supabase
    .from("orders")
    .insert([newPedido])
    .select("id")
    .single();

  if (error) {
    return { message: "Erro ao criar pedido" };
  }

  const orderId = data.id;
  //   console.log(data);

  const newOrderItems = pedidoData.carrinho.map((item) => ({
    orderId,
    productId: item.id,
    quantity: item.quantidade,
    priceUnity: item.preco,
    size: item?.size,
    borda: item?.borda,
    observation: item?.observacoes,
  }));

  //   console.log(newOrderItems);

  const { error: orderItemsError } = await supabase
    .from("order_items")
    .insert(newOrderItems);

  if (orderItemsError) {
    // console.log(orderItemsError);
    return { message: "Erro ao adicionar itens do pedido" };
  }

  //   revalidatePath("/");

  //   redirect(`/carrinho/revisar/${orderId}`);
  return { orderId };
}

export async function fetchCepData(cep, numero) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    if (data.erro) {
      return { error: "CEP não encontrado" };
    }
    return { data: { ...data, numero } };
  } catch (error) {
    // console.error(error);
    return { error: "Erro ao buscar CEP" };
  }
}
