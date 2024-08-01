import { auth } from "@/auth";
import { getOrderItemsUserId } from "@/utils/data-services";
import OrderTable from "../_components/accountComponents/OrderTable";
import Filter from "../_components/accountComponents/Filter";

export const metadata = {
  title: "Minha conta",
};

export default async function Page({ searchParams }) {
  const session = await auth();
  const name = session.user.name.split(" ")[0];
  const filter = searchParams?.orderByPrice ?? "normal";

  const orderItemsPerOrder = await getOrderItemsUserId();
  console.log(orderItemsPerOrder);

  if (!session) {
    return (
      <p className="text-center text-3xl font-semibold">Você não está logado</p>
    );
  }

  return (
    <div className="flex-1 p-10">
      <p className="mb-2 text-center text-3xl tracking-wide">
        Olá, <span className="font-semibold">{name}</span>
      </p>

      {orderItemsPerOrder.length === 0 ? (
        <p className="mt-4 text-center text-2xl">
          Você ainda não fez nenhum pedido.
        </p>
      ) : (
        <>
          <p className="text-center text-5xl font-semibold tracking-wide text-orange-500">
            Seus Pedidos
          </p>
          <Filter />
          <OrderTable orders={orderItemsPerOrder} filter={filter} />
        </>
      )}
    </div>
  );
}
