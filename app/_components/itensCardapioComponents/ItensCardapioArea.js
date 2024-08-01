"use client";

import ItensCardapio from "./ItensCardapio";
import { useState } from "react";
import { motion } from "framer-motion";

function ItensCardapioArea({ cardapio }) {
  const [tipoProduto, setTipoProduto] = useState("Todos");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 8;

  const handleClick = (categoria) => {
    setTipoProduto(categoria);
    setPaginaAtual(1); // Resetar para a primeira página ao mudar a categoria
  };

  const pizzas = cardapio.filter((product) => product.category === "Pizza");
  const sobremesas = cardapio.filter(
    (product) => product.category === "Sobremesa",
  );
  const bebidas = cardapio.filter((product) => product.category === "Bebida");
  const cardapioOrdenado = [...pizzas, ...sobremesas, ...bebidas];

  const produtosFiltrados =
    tipoProduto === "Todos"
      ? cardapioOrdenado
      : cardapio.filter((product) => product.category === tipoProduto);

  const indiceUltimoItem = paginaAtual * itensPorPagina;
  const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
  const itensPaginados = produtosFiltrados.slice(
    indicePrimeiroItem,
    indiceUltimoItem,
  );
  const totalPaginas = Math.ceil(produtosFiltrados.length / itensPorPagina);

  const handleProximaPagina = () => {
    setPaginaAtual((prev) => Math.min(prev + 1, totalPaginas));
  };

  const handlePaginaAnterior = () => {
    setPaginaAtual((prev) => Math.max(prev - 1, 1));
  };

  const tabs = [
    { label: "Todos", categoria: "Todos" },
    { label: "Pizzas", categoria: "Pizza" },
    { label: "Sobremesas", categoria: "Sobremesa" },
    { label: "Bebidas", categoria: "Bebida" },
  ];

  return (
    <>
      <div className="relative mx-auto w-full max-w-xl flex-col items-center justify-around space-y-2 rounded-full text-center tracking-wider sm:flex sm:flex-row sm:space-y-0 sm:border sm:border-orange-500">
        {tabs.map((tab) => (
          <div key={tab.categoria} className="relative flex-1 rounded-full">
            {tipoProduto === tab.categoria && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 z-0 rounded-full bg-orange-500"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <p
              className={`relative z-10 flex-1 rounded-full duration-300 hover:cursor-pointer hover:bg-orange-500 sm:border-orange-500 ${tipoProduto === tab.categoria && "font-bold"} `}
              onClick={() => handleClick(tab.categoria)}
            >
              {tab.label}
            </p>
          </div>
        ))}
      </div>
      <motion.ul
        // esse key é importante. Se o tipoProduto mudar, o React vai renderizar um novo componente e o Framer Motion vai animar a saída do anterior e a entrada do novo
        key={tipoProduto}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="mx-auto grid grid-cols-1 place-items-center gap-1 sm:mt-4 sm:grid-cols-2 sm:gap-5 md:max-w-2xl lg:max-w-5xl lg:grid-cols-3 xl:grid-cols-4 2xl:max-w-7xl"
      >
        {itensPaginados.map((item) => (
          <ItensCardapio key={item.id} item={item} />
        ))}
      </motion.ul>

      <div className="mt-5 flex flex-1 items-end justify-center">
        <div className="flex items-center">
          <button
            className="mx-2 rounded border bg-orange-500 px-4 py-2 text-white disabled:opacity-50"
            onClick={handlePaginaAnterior}
            disabled={paginaAtual === 1}
          >
            Anterior
          </button>
          <button
            className="mx-2 rounded border bg-orange-500 px-4 py-2 text-white disabled:opacity-50"
            onClick={handleProximaPagina}
            disabled={paginaAtual === totalPaginas}
          >
            Próxima
          </button>
          <div className="text-center">
            Página {paginaAtual} de {totalPaginas}
          </div>
        </div>
      </div>
    </>
  );
}

export default ItensCardapioArea;
