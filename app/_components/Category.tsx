"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import menImage from "@/public/men-cat.png";
import womenImage from "@/public/women-cat.png";
import watchImage from "@/public/watches-cat.png";
import accessoriesImage from "@/public/accessories-cat.png";
import shoesImage from "@/public/shoes-cat.png";
import Image from "next/image";

import "swiper/css";

export default function Category() {
  return (
    <section className="mb-11">
      <h2 className="font-semibold text-center text-[44px] mb-10">
        SHOP BY CATEGORY
      </h2>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        initialSlide={2}
        loop
        className="mySwiper"
      >
        <SwiperSlide className="max-w-[390px]">
          <Image src={accessoriesImage} alt="a bag" className="mb-11" />
          <p className="font-semibold text-2xl text-center">ACCESSORIES</p>
        </SwiperSlide>
        <SwiperSlide className="max-w-[390px]">
          <Image src={womenImage} alt="a woman" className="mb-11" />
          <p className="font-semibold text-2xl text-center">WOMEN</p>
        </SwiperSlide>
        <SwiperSlide className="max-w-[390px]">
          <Image src={menImage} alt="a man" className="mb-11" />
          <p className="font-semibold text-2xl text-center">MEN</p>
        </SwiperSlide>
        <SwiperSlide className="max-w-[390px]">
          <Image src={watchImage} alt="a watch" className="mb-11" />
          <p className="font-semibold text-2xl text-center">WATCH</p>
        </SwiperSlide>
        <SwiperSlide className="max-w-[390px]">
          <Image src={shoesImage} alt="shoes" className="mb-11" />
          <p className="font-semibold text-2xl text-center">SHOES</p>
        </SwiperSlide>
        <SwiperSlide className="max-w-[390px]">
          <Image src={menImage} alt="a man" className="mb-11" />
          <p className="font-semibold text-2xl text-center">MEN</p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
