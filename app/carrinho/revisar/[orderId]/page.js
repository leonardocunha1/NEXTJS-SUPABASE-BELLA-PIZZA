import ConfettiClient from "@/app/_components/carrinhoComponents/revisarComponents/sucessoComponents/ConfettiClient";
import TextArea from "@/app/_components/carrinhoComponents/revisarComponents/sucessoComponents/TextArea";
import ZerarCarrinho from "@/app/_components/carrinhoComponents/revisarComponents/sucessoComponents/ZerarCarrinho";
import { getOrdersByOrderId, getSettings } from "@/utils/data-services";
import { formatCurrency } from "@/utils/helpers";
import { format, isToday } from "date-fns";
import { Calistoga } from "next/font/google";

export const metadata = {
  title: "Sucesso",
};

const calistoga = Calistoga({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

async function Page({ params }) {
  const { orderId } = params;
  const data = await getOrdersByOrderId(orderId);
  const settings = await getSettings();
  //   console.log(data);

  if (!isToday(new Date(data.created_at))) {
    return (
      <div>
        <div className="flex flex-col items-center justify-center px-4 py-12">
          <h1
            className={`${calistoga.className} text-center text-3xl font-semibold`}
          >
            Pedido feito em outro dia
          </h1>
          <TextArea>
            Não é possível ver informações de pedidos feitos em outros dias.
          </TextArea>
        </div>
      </div>
    );
  }

  return (
    <div>
      <ConfettiClient show={true} />
      <ZerarCarrinho />
      <div className="flex flex-col items-center justify-center px-4 py-12">
        <h1
          className={`${calistoga.className} text-center text-3xl font-semibold`}
        >
          Pedido criado com sucesso!
        </h1>
        <TextArea>
          Seu pedido foi criado com sucesso no dia{" "}
          {format(new Date(data.created_at), "dd/MMM/yyyy")} às{" "}
          {format(new Date(data.created_at), "k:m")} e logo logo entrará em
          produção.
        </TextArea>

        <TextArea>
          Obrigado por escolher a{" "}
          <span className="font-semibold text-orange-500">
            Pizzaria Bella Pizza!
          </span>
        </TextArea>

        <TextArea>
          O número do seu pedido é{" "}
          <span className="font-semibold">{orderId}</span>{" "}
        </TextArea>

        <TextArea>
          O tempo médio de espera é de{" "}
          <span className="font-semibold">{settings.tempoEspera} minutos</span>
        </TextArea>

        <TextArea>
          O valor total do seu pedido foi{" "}
          <span className="font-semibold">
            {formatCurrency(data.finalPrice)}
          </span>
        </TextArea>
      </div>
    </div>
  );
}

export default Page;
