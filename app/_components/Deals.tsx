"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

export default function Deals() {
  return (
    <section className="bg-primary-gray-200 py-11 flex flex-col items-center">
      <h2 className="text-[44px] font-semibold text-center mb-5">
        DEALS OF THE DAY
      </h2>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={121}
        initialSlide={1}
        className="mb-11"
      >
        <SwiperSlide className="max-w-[304px]">
          <div className="p-2">
            <div className="relative w-full aspect-[1.1803]">
              <Image
                src="/premium-sweatshirt.png"
                alt="a white sweatshirt"
                quality={100}
                fill
                className=""
              />
            </div>
            <p className="font-semibold text-2xl text-center">ACCESSORIES</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-w-[304px]">
          <div className="p-2">
            <div className="relative w-full aspect-[1.1803]">
              <Image
                src="/premium-sweatshirt.png"
                alt="a white sweatshirt"
                quality={100}
                fill
                className=""
              />
            </div>
            <p className="font-semibold text-2xl text-center">ACCESSORIES</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-w-[304px]">
          <div className="p-2">
            <div className="relative w-full aspect-[1.1803]">
              <Image
                src="/premium-sweatshirt.png"
                alt="a white sweatshirt"
                quality={100}
                fill
                className=""
              />
            </div>
            <p className="font-semibold text-2xl text-center">ACCESSORIES</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
