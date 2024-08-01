"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const CarrinhoContext = createContext();

// const initialCart = () => {
//   const cart = localStorage.getItem("carrinho");
//   return cart ? JSON.parse(cart) : [];
// };

// const initialState = () => ({
//   carrinho: initialCart(),
// });

const initialState = {
  carrinho: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "carrinho/adicionar":
      return {
        ...state,
        carrinho: [
          ...state.carrinho,
          {
            ...action.payload,
            totalPrice: action.payload.preco * action.payload.quantidade,
          },
        ],
      };

    case "carrinho/remover":
      return {
        ...state,
        carrinho: state.carrinho.filter(
          (item) => item.idUnique !== action.payload.idUnique,
        ),
      };

    case "carrinho/atualizar": {
      const updatedCarrinho = state.carrinho.map((item) =>
        item.idUnique === action.payload.idUnique
          ? {
              ...action.payload,
              totalPrice: action.payload.preco * action.payload.quantidade,
            }
          : item,
      );

      return {
        ...state,
        carrinho: updatedCarrinho,
      };
    }

    case "carrinho/incrementar": {
      const updatedCarrinho = state.carrinho.map((item) =>
        item.idUnique === action.payload.idUnique
          ? {
              ...item,
              quantidade: item.quantidade + 1,
              totalPrice: item.preco * (item.quantidade + 1),
            }
          : item,
      );
      return {
        ...state,
        carrinho: updatedCarrinho,
      };
    }

    case "carrinho/decrementar": {
      const updatedCarrinho = state.carrinho.map((item) =>
        item.idUnique === action.payload.idUnique
          ? {
              ...item,
              quantidade: item.quantidade - 1,
              totalPrice: item.preco * (item.quantidade - 1),
            }
          : item,
      );
      return {
        ...state,
        carrinho: updatedCarrinho,
      };
    }

    case "carrinho/limpar": {
      return {
        ...state,
        carrinho: [],
      };
    }

    default: {
      throw new Error(`Unknown action type: ${action.type}`);
    }
  }
}

function CarrinhoProvider({ children }) {
  //   const [{ carrinho }, dispatch] = useReducer(reducer, {}, initialState);
  const [{ carrinho }, dispatch] = useReducer(reducer, initialState);

  //   useEffect(() => {
  //     localStorage.setItem("carrinho", JSON.stringify(carrinho));
  //   }, [carrinho]);

  return (
    <CarrinhoContext.Provider value={{ carrinho, dispatch }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

function useCarrinho() {
  const context = useContext(CarrinhoContext);

  if (!context) {
    throw new Error(
      "O useCarrinho precisa ser usado dentro de um CarrinhoProvider",
    );
  }

  return context;
}

export { CarrinhoProvider, useCarrinho };
