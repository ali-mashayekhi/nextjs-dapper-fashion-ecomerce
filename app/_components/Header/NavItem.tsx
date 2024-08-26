import Link from "next/link";
import ExpandList from "@/app/_components/Header/ExpandList";
import Icons from "../UI/Icons/icons";

export default function NavItem({
  data,
}: {
  data: {
    title: string;
    href: string;
    expandable: boolean;
    expandItems: {
      title: string;
      items: string[];
    }[];
  };
}) {
  return (
    <div
      className={`group w-screen md:w-auto px-6 md:px-0 py-2 md:py-0 border-b-[1px] md:border-none border-primary-black-300`}
    >
      <Link
        href={data.href}
        className=" group-hover:text-primary md:group-hover:h-24 flex items-center font-semibold duration-300 group"
      >
        <span className="md:relative md:before:content-[''] md:before:absolute md:before:block md:before:w-full md:before:left-0 md:before:-bottom-2 md:before:h-[2px] md:before:bg-primary md:before:scale-x-0 md:before:transform md:before:duration-300 md:before:ease-out md:before:group-hover:scale-x-150">
          {data.title}
        </span>
        {data.expandable && (
          <Icons.downArrow className="w-6 h-6 md:hidden ml-auto" />
        )}
      </Link>

      {data.expandable && <ExpandList expandData={data.expandItems} />}
    </div>
  );
}
