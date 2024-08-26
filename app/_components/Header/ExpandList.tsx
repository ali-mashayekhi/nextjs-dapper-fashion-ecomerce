import ExpandCol from "@/app/_components/Header/ExpandCol";

export default function ExpandList({
  expandData,
}: {
  expandData: { title: string; items: string[] }[];
}) {
  return (
    <div className="bg-primary-gray-200 md:absolute md:w-screen md:left-0  md:top-24 justify-start grid duration-500 transition-all grid-rows-[0fr] pt-0 pb-0 group-hover:grid-rows-[1fr] md:group-hover:pt-4 md:group-hover:pb-28 font-semibold">
      <div className="flex flex-col md:flex-row grow mx-auto md:gap-20 max-w-8xl px-4 md:px-10 overflow-hidden">
        {expandData.map((expandCol, index: number) => (
          <ExpandCol
            colData={expandCol}
            key={index}
            lastCol={expandData.length === index + 1}
          />
        ))}
      </div>
    </div>
  );
}
