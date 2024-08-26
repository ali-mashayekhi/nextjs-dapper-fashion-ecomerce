import Icons from "@/app/_components/UI/Icons/icons";
import Link from "next/link";

export default function AccountNavList() {
  return (
    <div className="flex gap-4 sm:gap-6 lg:gap-12 ">
      <Link
        href=""
        className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 bg-primary-black-800 rounded-full flex items-center justify-center hover:bg-primary duration-300"
      >
        <Icons.heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" />
      </Link>
      <Link
        href=""
        className="md:bg-white md:px-1 md:rounded-3xl md:w-32 flex justify-between items-center group"
      >
        <div className="grow text-center font-semibold group-hover:text-primary duration-300 hidden md:block">
          Cart
        </div>
        <div className="h-8 w-8 sm:h-9 sm:w-9 bg-primary-black-800 rounded-full flex items-center justify-center group-hover:bg-primary duration-300">
          <Icons.shoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </Link>
      <Link
        href=""
        className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 bg-primary-black-800 rounded-full flex items-center justify-center hover:bg-primary duration-300"
      >
        <Icons.user className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" />
      </Link>
    </div>
  );
}
