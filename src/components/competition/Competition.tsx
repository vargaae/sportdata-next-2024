import Image from "next/image";

import { matchesType } from "@/types";

const Competition = ({ matches }: { matches: matchesType }) => {
  // const imageLoader = ({}) => {
  //   return `${matches?.competition?.emblem}`;
  // };
  const nd = new Date(matches?.utcDate);
  const dateConvert =
    nd.toLocaleDateString() +
    " " +
    nd.toLocaleTimeString("en-UK", {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="bg-slate-600 hover:bg-slate-700 rounded-md mb-4 flex justify-between items-center px-4 py-1">
      <div className="flex space-x-4">
        <Image
          unoptimized
          src={matches?.competition?.emblem}
          alt={matches?.competition?.name}
          width={20}
          height={20}
        />
        <p className="text-sm text-teal-400">{matches?.competition?.name}</p>
      </div>
      <p className="text-xs md:text-sm">{dateConvert}</p>
    </div>
  );
};

export default Competition;
