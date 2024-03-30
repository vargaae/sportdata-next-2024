import Image from "next/image";

import { matchesType } from "@/types";

const Live = ({ matches }: { matches: matchesType }) => {
  // const imageLoaderLive = `{https://upload.wikimedia.org/wikipedia/commons/2/26/Discord_live_icon.svg}`;
  const imageLoader = ({}) => {
    return "https://upload.wikimedia.org/wikipedia/commons/2/26/Discord_live_icon.svg";
  };

  let finishTime = new Date(matches?.utcDate);
  // FINISH TIME OF THE MATCH: REGULAR TIME: 90minutes in Football-> Add one and a half hours (in milliseconds)
  finishTime.setUTCHours(finishTime.getUTCHours() + 1);
  finishTime.setUTCMinutes(finishTime.getUTCMinutes() + 30);

  const nd = new Date(matches?.utcDate);
  const dateConvert =
    nd.toLocaleTimeString("en-UK", {
      hour: "2-digit",
      minute: "2-digit",
    }) +
    " - ~" +
    finishTime.toLocaleTimeString("en-UK", {
      hour: "2-digit",
      minute: "2-digit",
    })

  return (
    <div className="bg-slate-700 hover:bg-slate-800 rounded-md mb-2 flex justify-between items-center px-4 py-0">
      <div className="flex space-x-4">
        <Image
          unoptimized
          loader={imageLoader}
          src="https://upload.wikimedia.org/wikipedia/commons/2/26/Discord_live_icon.svg"
          alt={matches?.competition.name}
          width={20}
          height={20}
        />
        <p className="text-sm text-red-400">{matches?.status}</p>
      </div>
      <p className="text-xs md:text-sm">{dateConvert}</p>
    </div>
  );
};

export default Live;
