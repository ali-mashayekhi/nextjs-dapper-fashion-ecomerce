import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/_styles/globals.css";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dapper",
  description: "Fashion ecomerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
