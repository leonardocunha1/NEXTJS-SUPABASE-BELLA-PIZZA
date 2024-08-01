"use client";

import { fetchCepData } from "@/app/_lib/actions";
import { useForm } from "react-hook-form";
import ResumoEndereco from "./ResumoEndereco";
import { useState } from "react";

function EnderecoForm({ cepError, cepData, setCepError, setCepData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit({ cep, numero }) {
    setIsLoading(true);
    const { data, error } = await fetchCepData(cep, numero);
    setIsLoading(false);
    if (error) {
      setCepError(error);
      setCepData(null);
    } else {
      setCepData(data);
      setCepError(null);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        id="cep"
        name="cep"
        disabled={isLoading}
        placeholder="Digite seu CEP"
        {...register("cep", {
          required: "Campo obrigatório",
          pattern: {
            value: /^[0-9]{8}$/,
            message: "CEP inválido",
          },
        })}
        className="mt-4 w-full rounded-md border border-stone-300 p-2 focus:outline-none focus:ring focus:ring-orange-500"
      />
      {errors.cep && (
        <p className="text-sm text-red-500">{errors.cep.message}</p>
      )}
      {cepError && <p className="text-sm text-red-500">{cepError}</p>}
      <input
        type="number"
        id="numero"
        name="numero"
        disabled={isLoading}
        placeholder="Número da casa"
        {...register("numero", {
          required: "Campo obrigatório",
          min: {
            value: 1,
            message: "Número inválido",
          },
        })}
        className="mt-2 w-full rounded-md border border-stone-300 p-2 focus:outline-none focus:ring focus:ring-orange-500"
      />
      {errors.numero && (
        <p className="text-sm text-red-500">{errors.numero.message}</p>
      )}
      <button
        type="submit"
        className="mt-2 inline-block w-full rounded-md bg-orange-500 p-2 font-semibold tracking-wider text-white duration-300 hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50 sm:mt-5"
        disabled={isLoading}
      >
        {isLoading ? "Buscando CEP..." : "Buscar CEP"}
      </button>
      {cepData && <ResumoEndereco cepData={cepData} />}
    </form>
  );
}

export default EnderecoForm;
