"use client";

import { HiArrowSmRight } from "react-icons/hi";

import { register } from "swiper/element/bundle";

register();

import "swiper/css";
import Image from "next/image";
import Link from "next/link";

export default function Slider({ bestSellersPizzas }) {
  return (
    <div className="mx-auto max-w-60 md:max-w-xl lg:max-w-5xl">
      <swiper-container
        space-between="10"
        loop="true"
        pagination="true"
        pagination-clickable="true"
        autoplay-delay="3000"
        autoplay-disable-on-interaction="true"
        breakpoints='{"640": {"slidesPerView": 1, "spaceBetween": 20}, "768": {"slidesPerView": 2, "spaceBetween": 40}, "1024": {"slidesPerView": 3, "spaceBetween": 1}}'
        style={{
          "--swiper-pagination-color": "#fdba74",
          "--swiper-pagination-bullet-size": "10px",
          // "--swiper-pagination-bullet-inactive-color": "#999999",
          // "--swiper-pagination-bullet-inactive-opacity": "1",
          //   "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        {bestSellersPizzas.map((pizza) => {
          return (
            <swiper-slide key={pizza.name}>
              <div className="flex h-80 max-w-64 flex-col items-center rounded-2xl border border-orange-600 bg-stone-50 p-4 shadow-xl">
                <div className="relative w-36 flex-1">
                  <Image
                    src={pizza.image_url}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={pizza.name}
                  />
                </div>
                <div className="relative mt-4 flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="mb-3 text-center text-base font-bold text-stone-950">
                      {pizza.name}
                    </h3>
                    <p className="text-center">{pizza.description}</p>
                  </div>
                  <Link
                    href={`/cardapio/${pizza.productId}`}
                    className="absolute bottom-0 right-0 flex items-center underline decoration-orange-600 underline-offset-4"
                  >
                    <HiArrowSmRight className="text-orange-600" />
                    <p className="text-orange-600">Saiba mais</p>
                  </Link>
                </div>
              </div>
            </swiper-slide>
          );
        })}
      </swiper-container>
    </div>
  );
}
