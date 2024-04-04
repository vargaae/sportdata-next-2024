import Image from "next/image";
import { matchesType } from "@/types";

const Matches = ({ matches }: { matches: matchesType }) => {
  const getDate = new Date(matches?.utcDate).toLocaleTimeString("en-UK", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="grid grid-cols-3">
      {matches?.status == "FINISHED" ? (
        <>
          <div className="w-full flex items-center">
            <div className="w-[20px] h-[20px] relative mr-2"></div>
            <p className="text-sm">{matches?.homeTeam?.name}</p>
          </div>
          <div className="px-2 m-auto flex justify-center items-center bg-slate-600 rounded-md">
            <p className="py-1 text-teal-400 text-xs">
              {matches?.score?.fullTime?.home} :{" "}
              {matches?.score?.fullTime?.away}
            </p>
          </div>
          <div className="w-full flex items-center justify-end">
            <p className="text-sm text-right">{matches.awayTeam?.name}</p>
            <div className="w-[20px] h-[20px] relative ml-2"></div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex items-center">
            <div className="w-[20px] h-[20px] relative mr-2">
              <Image
                unoptimized
                src={matches?.homeTeam?.crest!}
                alt={matches?.homeTeam?.name!}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm">{matches?.homeTeam?.name}</p>
          </div>
          <div className="px-2 m-auto flex justify-center items-center bg-slate-600 rounded-md">
            <p className="py-1 text-teal-400 text-xs">Match start: {getDate}</p>
          </div>
          <div className="w-full flex items-center justify-end">
            <p className="text-sm text-right">{matches.awayTeam?.name}</p>
            <div className="w-[20px] h-[20px] relative ml-2">
              <Image
                unoptimized
                src={matches?.awayTeam?.crest!}
                alt={matches?.awayTeam?.name!}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Matches;
