import Link from "next/link";

function NotFound() {
  return (
    <div className="mt-4 flex flex-col items-center justify-center space-y-6 text-center">
      <h1 className="text-2xl font-semibold">🍕 Esse pedido não existe 😥</h1>
      <Link
        href="/"
        className="inline-block bg-orange-500 px-6 py-3 text-sm text-stone-50"
      >
        Voltar para o início
      </Link>
    </div>
  );
}

export default NotFound;
