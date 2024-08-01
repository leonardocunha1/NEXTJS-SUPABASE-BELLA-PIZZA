"use client";

import { useCarrinho } from "@/app/_contexts/CarrinhoContext";
import { formatCurrency } from "@/utils/helpers";

import Button from "../ui/Button";
import ButtonCarrinho from "./ButtonCarrinho";
import ItemArea from "../ui/ItemArea";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

export default function CarrinhoLayout() {
  const { carrinho, dispatch } = useCarrinho();
  const totalPrice = carrinho.reduce((acc, item) => acc + item.totalPrice, 0);

  function handleAdicionarQuantidade(idUnique) {
    dispatch({
      type: "carrinho/incrementar",
      payload: {
        idUnique,
      },
    });
  }

  function handleRetirarQuantidade(idUnique) {
    if (carrinho.find((item) => item.idUnique === idUnique).quantidade === 1) {
      dispatch({
        type: "carrinho/remover",
        payload: {
          idUnique,
        },
      });
    } else {
      dispatch({
        type: "carrinho/decrementar",
        payload: {
          idUnique,
        },
      });
    }
  }
  // é necessário usar key no framer motion para que ele saiba que é um novo item e faça a animação de entrada e saída corretamente
  return (
    <ItemArea>
      <div className="w-full">
        <h1 className="mb-5 text-center text-3xl font-bold text-orange-500">
          <span className="text-stone-700">Seu</span> Carrinho 🛒
        </h1>
        <AnimatePresence mode="wait">
          {carrinho.length > 0 && (
            <>
              <motion.ul
                exit={{ y: -30, opacity: 0 }}
                key="list"
                className="w-full"
              >
                <AnimatePresence>
                  {carrinho.map((item) => (
                    <motion.li
                      layout
                      exit={{ y: -30, opacity: 0 }}
                      className="mb-3 flex items-center justify-between"
                      key={item.idUnique}
                    >
                      <div>
                        <p className="font-semibold">
                          {item.name} (x{item.quantidade})
                        </p>
                        {item.observacoes && (
                          <p className="italic text-stone-500">
                            <span>Observações: </span>
                            {item.observacoes}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <p>{formatCurrency(item.totalPrice)}</p>
                        <div className="flex items-center gap-2">
                          <ButtonCarrinho
                            onClick={() =>
                              handleRetirarQuantidade(item.idUnique)
                            }
                          >
                            -
                          </ButtonCarrinho>
                          <p>{item.quantidade}</p>
                          <ButtonCarrinho
                            onClick={() =>
                              handleAdicionarQuantidade(item.idUnique)
                            }
                          >
                            +
                          </ButtonCarrinho>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </motion.ul>

              <motion.div
                exit={{ y: -30, opacity: 0 }}
                className="mt-3 flex w-full items-center justify-end gap-3"
                key="list"
              >
                <p className="text-lg font-semibold text-stone-900">
                  Total: {formatCurrency(totalPrice)}
                </p>
                <Link href="/carrinho/revisar">
                  <Button>Revisar compra</Button>
                </Link>
              </motion.div>
            </>
          )}

          {carrinho.length === 0 && (
            <motion.div
              key="fallback"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="grid items-center justify-center text-lg italic text-stone-500"
            >
              Carrinho vazio
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ItemArea>
  );
}
