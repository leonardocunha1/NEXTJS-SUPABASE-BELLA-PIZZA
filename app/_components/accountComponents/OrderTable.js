"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { formatCurrency } from "@/utils/helpers";
import { format } from "date-fns";

import { BsThreeDots } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { MdOutlinePending } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

import Modal from "../ui/Modal";
import DetailsOrder from "./DetailsOrder";

export default function OrderTable({ orders, filter }) {
  let orderByPrice;
  if (filter === "lowToHigh") {
    orderByPrice = orders.sort((a, b) => a.finalPrice - b.finalPrice);
  }
  if (filter === "highToLow") {
    orderByPrice = orders.sort((a, b) => b.finalPrice - a.finalPrice);
  }
  if (filter === "normal") {
    orderByPrice = orders;
  }

  return (
    <div className="mt-4 flex min-h-[350px] w-full justify-center">
      <Table>
        <TableCaption>Uma lista dos seus pedidos.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] font-semibold">N° Pedido</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="font-semibold">Método pagamento</TableHead>
            <TableHead className="font-semibold">Valor</TableHead>
            <TableHead className="font-semibold">Detalhes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderByPrice.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>
                {format(new Date(order.created_at), "dd/MMM/yyyy")}
              </TableCell>

              <TableCell>
                {order.status === "pendente" && (
                  <p className="flex items-center gap-2 text-blue-400">
                    <MdOutlinePending /> Pendente
                  </p>
                )}
                {order.status === "confirmado" && (
                  <p className="flex items-center gap-2 text-stone-700">
                    <IoCheckmarkOutline /> Confirmado
                  </p>
                )}
                {order.status === "cancelado" && (
                  <p className="flex items-center gap-2 text-red-600">
                    <MdCancel /> Cancelado
                  </p>
                )}
                {order.status === "finalizado" && (
                  <p className="flex items-center gap-2 text-green-800">
                    <IoCheckmarkDoneSharp /> Finalizado
                  </p>
                )}
              </TableCell>
              <TableCell>
                {order.paymentMethod === "cartao" && (
                  <p className="flex items-center gap-2">
                    <FaRegCreditCard /> Cartão
                  </p>
                )}
                {order.paymentMethod === "pix" && (
                  <p className="flex items-center gap-2">
                    <FaPix /> Pix
                  </p>
                )}
                {order.paymentMethod === "dinheiro" && (
                  <p className="flex items-center gap-2">
                    <BsCashCoin /> Dinheiro
                  </p>
                )}
              </TableCell>
              <TableCell>{formatCurrency(order.finalPrice)}</TableCell>
              <TableCell>
                <Modal>
                  <Modal.Open opens="details">
                    <button>
                      <BsThreeDots />
                    </button>
                  </Modal.Open>

                  <Modal.Window name="details">
                    <DetailsOrder orderItems={order.order_items} />
                  </Modal.Window>
                </Modal>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
