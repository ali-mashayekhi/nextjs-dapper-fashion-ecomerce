import mensImage from "@/public/men-col.png";
import womensImage from "@/public/women-col.png";
import accessoriesImage from "@/public/accessories-col.png";
import shoesImage from "@/public/shoes-col.png";
import Image from "next/image";
import Button from "@/app/_components/UI/Button";

export default function Collection() {
  return (
    <section className="px-10 mb-14">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr,1.030fr] gap-10">
        <div className="flex flex-col gap-11 relative">
          <div className="">
            <Image className="w-full" quality={100} src={mensImage} alt="man" />
            <div className="absolute top-1/4 -translate-y-1/2 left-[63.3846%]">
              <p className="text-base font-medium text-primary-black-500 mb-1">
                Sale 30% Off
              </p>
              <p className="font-semibold text-[40px]">Men&apos;s</p>
              <p className="font-semibold text-[40px] mb-7">Collection</p>
              <Button href="" className="mr-[89px]" type="secondary">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="">
            <div>
              <Image
                className="w-full"
                quality={100}
                src={accessoriesImage}
                alt="accessories"
              />
              <div className="absolute bottom-[7.9710%] left-[63.3846%] text-primary-black-800">
                <p className="font-semibold text-2xl">Branded</p>
                <p className="font-medium text-2xl mb-7">Accessories</p>
                <Button href="" className="mr-[89px]" type="secondary">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-11 relative">
          <div className="">
            <Image
              className="w-full"
              quality={100}
              src={womensImage}
              alt="woman"
            />
            <div className="absolute top-1/4 -translate-y-1/2 left-[4.7761%] text-white">
              <p className="text-base font-medium mb-1 text-primary-black-100">
                Limited Offers
              </p>
              <p className="font-semibold text-[40px]">Women&apos;s</p>
              <p className="font-semibold text-[40px] mb-7">Collection</p>
              <Button href="" className="" type="secondary">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="">
            <Image
              className="w-full"
              quality={100}
              src={shoesImage}
              alt="shoes"
            />
            <div className="absolute bottom-[7.9710%] left-[4.7761%] text-primary-black-800">
              <p className="font-semibold text-7xl ">
                Bran<span className="text-white">ded</span>
              </p>
              <p className="font-medium text-7xl mb-7">
                Shoe<span className="text-white">s</span>
              </p>
              <Button href="" className="" type="secondary">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
