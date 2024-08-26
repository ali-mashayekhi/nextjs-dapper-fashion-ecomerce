"use client";

import NavItem from "@/app/_components/Header/NavItem";
import Icons from "@/app/_components/UI/Icons/icons";
import Link from "next/link";

export default function NavList({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) {
  const navItems = [
    { title: "HOME", href: "/", expandable: false, expandItems: [] },
    {
      title: "SHOP",
      href: "",
      expandable: true,
      expandItems: [
        {
          title: "SHOP BY CATEGORY",
          items: [
            "Men",
            "Women",
            "Kids",
            "Watches",
            "Shoes",
            "Luxury attire",
            "Accessories",
          ],
        },
        {
          title: "COLLECTIONS",
          items: ["Featured", "New Arrival", "Deal of the Day", "Best Seller"],
        },
        {
          title: "TAGS",
          items: [
            "Trends",
            "Bags",
            "Shorts",
            "Shirts",
            "Trousers",
            "Flats",
            "Jerkin",
          ],
        },
      ],
    },
    {
      title: "BLOGS",
      href: "",
      expandable: true,
      expandItems: [
        {
          title: "BLOGS BY CATEGORY",
          items: ["Men", "Women", "Brands", "Watches", "Shoes", "Accessories"],
        },
      ],
    },
  ];

  return (
    <div
      className={`grid bg-primary-gray-200 md:bg-none h-screen md:h-auto md:w-auto md:flex absolute left-0 top-0 md:static duration-700 ${
        isOpen ? "grid-cols-[1fr] z-50" : "grid-cols-[0fr]"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-12 items-center overflow-x-hidden md:overflow-x-visible relative md:static">
        <div
          className="absolute visible md:hidden top-5 right-5"
          onClick={() => setIsOpen((prev: boolean) => !prev)}
        >
          <Icons.close className="w-6 h-6" />
        </div>
        <Link
          href=""
          className="h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 bg-primary-black-800 rounded-full flex items-center justify-center hover:bg-primary duration-300 absolute right-5 top-[70px] md:static"
        >
          <Icons.search className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" />
        </Link>
        <div className="flex flex-col md:flex-row md:gap-6 lg:gap-12 mt-[68px] md:mt-0 items-center pb-8 md:pb-0">
          {navItems.map((item, index) => {
            return <NavItem data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
