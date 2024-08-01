import { formatCurrency } from "@/utils/helpers";

function RevisarItens({ item }) {
  return (
    <li key={item.idUnique} className="flex justify-between gap-3 border-b">
      <p className="mb-2 font-semibold">
        {item.name} <span>(x{item.quantidade})</span>
      </p>
      <p>{formatCurrency(item.totalPrice)}</p>
    </li>
  );
}

export default RevisarItens;
