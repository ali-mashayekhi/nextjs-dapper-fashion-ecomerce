import Image from "next/image";
import IntroImage from "@/public/intro-image.png";
import Link from "next/link";
import Icons from "./UI/Icons/icons";

import "@/app/_styles/intro.css";
import Button from "./UI/Button";

export default function Intro() {
  return (
    <section className="pt-8 pb-14 bg-primary-gray-200 px-10">
      <div className="flex gap-4">
        <div className="flex flex-col items-start justify-between">
          <h1 className=" font-semibold tracking-wide text-left main-title text-5xl leading-[1.4] xl:leading-[1.5] xl:text-6xl">
            Your <br className="hidden xl:block" />
            <span className="text-primary">Ultimate</span> Fashion Destination.
          </h1>
          <p className="text-primary-black-500 font-medium  leading-7 text-left">
            Discover the latest trends in fashion for men, women, and kids.{" "}
            <br className="hidden xl:block" />
            Explore our curated collection of clothing, shoes, and accessories{" "}
            <br className="hidden xl:block" /> that blend style and comfort
            seamlessly.
          </p>
          <Button
            href=""
            className="self-center -translate-x-1/4"
            type="primary"
          >
            Start Exploring
          </Button>

          <div className="flex flex-col gap-5">
            <h3 className="font-semibold">Recent Trends</h3>
            <div className="flex gap-10">
              <div className="bg-white p-3 grow">
                <div className="w-[14.7916vw] aspect-[1.4689] relative mb-4">
                  <Image src="/intro-shoe.png" alt="shoes" fill quality={100} />
                </div>
                <div>
                  <div className="flex">
                    <p className="text-primary-black-400 font-semibold text-xs">
                      Adidas
                    </p>
                    <Icons.heart
                      className="w-[23px] h-[21px] ml-auto"
                      stroke="#141311"
                    />
                  </div>
                  <p className="font-semibold text-sm">Switch Move</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-[2px]">
                      <Icons.star className="w-3 h-3" fill="#EAC612" />
                      <Icons.star className="w-3 h-3" fill="#EAC612" />
                      <Icons.star className="w-3 h-3" fill="#EAC612" />
                      <Icons.star className="w-3 h-3" fill="#EAC612" />
                      <Icons.star className="w-3 h-3" fill="#EAC612" />
                    </div>
                    <p className="text-xs font-medium">2500$</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 grow max-w-[237px]">
                <div className="w-[14.7916vw] aspect-[1.4689] relative mb-4">
                  <Image
                    src="/intro-watch.png"
                    alt="watch"
                    fill
                    quality={100}
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="text-primary-black-400 font-semibold text-xs">
                      Casio
                    </p>
                    <Icons.heart
                      className="w-[23px] h-[21px]"
                      stroke="#141311"
                    />
                  </div>
                  <p className="font-semibold text-sm">Great Smart Watch</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-[2px]">
                      <Icons.star className="w-3 h-3" fill="#EAC612" />
                      <Icons.star className="w-3 h-3" fill="#EAC612" />
                      <Icons.star className="w-3 h-3" fill="#EAC612" />
                      <Icons.star className="w-3 h-3" fill="#EAC612" />
                      <Icons.star className="w-3 h-3" fill="#EAC612" />
                    </div>
                    <p className="text-xs font-medium">1500$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[55%]">
          <Image src={IntroImage} alt="Two women shocasing luxury fashion." />
        </div>
      </div>
    </section>
  );
}
