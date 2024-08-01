// sempre tem que ser um use client
"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold">Algo deu errado!</h1>
      <p className="text-lg">🍕 {error.message} 😥</p>

      <Link
        className="inline-block bg-orange-500 px-6 py-3 text-lg text-stone-50"
        href="/cardapio"
      >
        Voltar para o cardápio
      </Link>
    </main>
  );
}
