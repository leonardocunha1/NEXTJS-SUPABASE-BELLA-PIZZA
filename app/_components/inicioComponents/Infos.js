"use client";

import { TbClockHour4Filled } from "react-icons/tb";
import { RiMapPinFill } from "react-icons/ri";
import { FaPhoneFlip } from "react-icons/fa6";

import { motion } from "framer-motion";

function Infos() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-5 px-3 py-5 text-sm sm:flex-row xl:gap-10 2xl:gap-32">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w- flex w-60 flex-col items-center rounded-2xl border border-orange-600 bg-stone-50 px-5 py-4"
      >
        <TbClockHour4Filled className="mb-1 h-8 w-8 text-orange-500" />
        <p className="font-bold">Terça - Domingo</p>
        <p>18:00 - 23:00</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w- flex w-60 flex-col items-center rounded-2xl border border-orange-600 bg-stone-50 px-5 py-4"
      >
        <RiMapPinFill className="mb-1 h-8 w-8 text-orange-500" />
        <p className="text-center font-bold">Rua dos X 654</p>
        <p>Centro - Franca/SP</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w- flex w-60 flex-col items-center rounded-2xl border border-orange-600 bg-stone-50 px-5 py-4"
      >
        <FaPhoneFlip className="mb-1 h-6 w-6 text-orange-500" />
        <p className="font-bold">(16) 99999-9999</p>
        <p className="text-center">Apenas Whatsapp</p>
      </motion.div>
    </div>
  );
}

export default Infos;
