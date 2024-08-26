import Link from "next/link";

export default function ExpandItem({ itemData }: { itemData: string }) {
  return (
    <li className="font-normal hover:font-semibold duration-300">
      <Link href="">{itemData}</Link>
    </li>
  );
}
