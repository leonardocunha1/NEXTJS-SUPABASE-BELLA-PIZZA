import Link from "next/link";

function NotFound() {
  return (
    <div className="mt-4 flex flex-1 flex-col items-center justify-center space-y-6 text-center">
      <h1 className="text-2xl font-semibold">
        🍕 Essa página não pôde ser encontrada 😥
      </h1>
      <Link
        href="/"
        className="inline-block bg-orange-500 px-6 py-3 text-sm text-stone-50"
      >
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
