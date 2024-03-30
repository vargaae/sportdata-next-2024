import Image from "next/image";

import { matchesType } from "@/types";

const Live = ({ matches }: { matches: matchesType }) => {
  const imageSrcLive =
    "https://upload.wikimedia.org/wikipedia/commons/2/26/Discord_live_icon.svg";
  const imageLoaderLive = ({}) => {
    return imageSrcLive;
  };

  const nd = new Date(matches?.utcDate);

  function formatFinishTime(nd: Date): Date {
    // I make a copy of the original UTC date of the start time of the football match
    const finishTime = nd;
    // FINISH TIME OF THE MATCH: REGULAR TIME: 90minutes in Football-> Add one and a half hours (in milliseconds)
    finishTime.setUTCHours(finishTime.getUTCHours() + 1);
    finishTime.setUTCMinutes(finishTime.getUTCMinutes() + 30);

    return finishTime;
  }

  const dateConvert =
    nd.toLocaleTimeString("en-UK", {
      hour: "2-digit",
      minute: "2-digit",
    }) +
    " - ~" +
    formatFinishTime(nd).toLocaleTimeString("en-UK", {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="bg-slate-700 hover:bg-slate-800 rounded-md mb-2 flex justify-between items-center px-4 py-0">
      <div className="flex space-x-4">
        <Image
          unoptimized
          loader={imageLoaderLive}
          src={imageSrcLive}
          alt={matches?.competition.name}
          width={30}
          height={30}
        />
        <p className="text-sm text-red-400">{matches?.status}</p>
      </div>
      <p className="text-xs md:text-sm">{dateConvert}</p>
    </div>
  );
};

export default Live;
