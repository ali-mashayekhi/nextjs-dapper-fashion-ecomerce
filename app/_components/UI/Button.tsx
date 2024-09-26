import Link from "next/link";
import { ReactNode } from "react";

export default function Button({
  href,
  children,
  className,
  type,
}: {
  href: string;
  children: ReactNode;
  className: string;
  type: "primary" | "secondary";
}) {
  return (
    <Link
      className={`bg-primary-black-800 text-white inline-block ${
        type === "primary"
          ? "px-6 py-2 font-semibold text-sm"
          : "px-8 py-3 text-base font-normal"
      } ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}
