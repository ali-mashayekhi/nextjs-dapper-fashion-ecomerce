"use client";

import NavList from "@/app/_components/Header/NavIList";
import logo from "@/public/logo.svg";
import AccountNavList from "@/app/_components/Header/AccountList";
import Image from "next/image";
import Link from "next/link";
import Icons from "../UI/Icons/icons";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary-gray-200 relative">
      <div className="max-w-8xl mx-auto px-4 md:px-10 h-20 md:h-24 flex justify-between items-center">
        <NavList isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="flex gap-4 items-center sm:gap-6 md:gap-0">
          <div
            className="md:hidden -translate-y-[2px] z-10"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Icons.menu />
          </div>
          <Link href="/">
            <Image src={logo} alt="logo" className="w-28 md:w-36" />
          </Link>
        </div>

        <AccountNavList />
      </div>
    </header>
  );
}
