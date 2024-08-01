import Spinner from "@/app/_components/ui/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-primary-200 text-xl">
        Redirecionando para o seu pedido...
      </p>
    </div>
  );
}
