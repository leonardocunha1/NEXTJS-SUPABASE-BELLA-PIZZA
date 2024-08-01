"use client";
import { motion } from "framer-motion";
import { useFormStatus } from "react-dom";

function SubmitButtonCreatePedido({ children, pendingLabel }) {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      className="mt-5 inline-block w-full rounded-md bg-orange-500 p-2 font-semibold tracking-wider text-white duration-300 hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
      animate={{
        // aqui usou o keyframes para animar o botão
        scale: pending ? [1, 1.1, 1] : 1,
        boxShadow: pending ? "0 0 10px rgba(255, 165, 0, 0.7)" : "none",
      }}
      transition={{
        duration: 1,
        repeat: Infinity, // Repetição infinita
        repeatType: "loop", // Tipo de repetição
      }}
    >
      {pending ? pendingLabel : children}
    </motion.button>
  );
}

export default SubmitButtonCreatePedido;
