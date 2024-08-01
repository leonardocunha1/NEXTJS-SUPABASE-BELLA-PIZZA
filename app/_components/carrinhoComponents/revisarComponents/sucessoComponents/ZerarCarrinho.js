"use client";

import { useCarrinho } from "@/app/_contexts/CarrinhoContext";
import { useEffect } from "react";

function ZerarCarrinho() {
  const { dispatch } = useCarrinho();

  useEffect(() => {
    dispatch({ type: "carrinho/limpar" });
  }, [dispatch]);

  return <div></div>;
}

export default ZerarCarrinho;
