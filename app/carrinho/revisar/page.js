import RevisarLayout from "@/app/_components/carrinhoComponents/RevisarLayout";
import { getSettings } from "@/utils/data-services";

export const metadata = {
  title: "Revisar Pedido",
};

async function Page() {
  const { entrega } = await getSettings();

  return <RevisarLayout entrega={entrega} />;
}

export default Page;
