"use client";

import { Lobster } from "next/font/google";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import waves1 from "@/public/waves-1.svg";
import boneco from "@/public/boneco.png";

import Button from "../ui/Button";

const lobster = Lobster({ subsets: ["latin"], display: "swap", weight: "400" });

function Hero() {
  const { scrollY } = useScroll();

  const yHero = useTransform(scrollY, [0, 200], [0, -150]);
  const opacityHero = useTransform(scrollY, [0, 300, 500], [1, 1, 0]);
  const yText = useTransform(scrollY, [0, 200], [0, 30]);
  const scaleText = useTransform(scrollY, [0, 300], [1, 1.2]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative flex border-t-8 border-orange-500 p-5 pb-20 sm:min-h-[500px] sm:bg-center md:min-h-[700px]">
        <div className="z-20 mx-auto flex w-full max-w-7xl flex-col items-center justify-around sm:flex-row">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ scale: scaleText, y: yText }}
            className="mb-4 flex flex-col items-center sm:mb-0 sm:items-start sm:pr-2"
          >
            <h1
              className={`${lobster.className} mb-4 text-center text-6xl font-bold sm:text-start sm:text-7xl md:text-8xl lg:text-9xl`}
            >
              Bella Pizza
            </h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-center text-lg sm:text-left"
            >
              Onde a tradição encontra o forno a lenha.
            </motion.p>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-6"
            >
              <Button href="/cardapio" type="link">
                Peça Agora!
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ opacity: opacityHero, y: yHero }}
            className="w-52 sm:w-72 md:w-96 2xl:ml-16"
          >
            <Image
              src={boneco}
              alt="Imagem boneco hero"
              layout="responsive"
              width={150}
              height={150}
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-0 z-10 w-full"
        >
          <Image src={waves1} alt="waves-hero" className="w-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
