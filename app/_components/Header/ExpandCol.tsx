import Link from "next/link";
import ExpandItem from "@/app/_components/Header/ExpandItem";

export default function ExpandCol({
  colData,
  lastCol = true,
}: {
  colData: { title: string; items: string[] };
  lastCol: boolean;
}) {
  return (
    <ul
      className={`flex flex-col gap-1 md:gap-4 py-2 md:py-0 border-b-[1px] border-b-primary-black-300 md:border-none ${
        lastCol ? "border-none" : "border-b-[1px]"
      }`}
    >
      <li>
        <Link href="">{colData.title}</Link>
      </li>
      {colData.items.map((itemData, index) => (
        <ExpandItem itemData={itemData} key={index} />
      ))}
    </ul>
  );
}
