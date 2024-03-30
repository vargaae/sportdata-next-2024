import Image from "next/image";
import { matchesType } from "@/types";

const Matches = ({ matches }: { matches: matchesType }) => {
  const imageLoaderHome = `${matches?.homeTeam?.crest!}`;
  // Refactor it to one function: const src = `${API}/user/photo/${blog.postedBy.username}`; <Image loader={() => src} src={src} width={20} height={20}/>
  const imageLoaderAway = ({}) => {
    return `${matches?.awayTeam?.crest!}`;
  };
  const getDate = new Date(matches?.utcDate).toLocaleTimeString("en-UK", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="grid grid-cols-3">
      <div className="w-full flex items-center">
        <div className="w-[20px] h-[20px] relative mr-2">
          <Image
            unoptimized
            loader={() => imageLoaderHome}
            src={imageLoaderHome}
            alt={matches?.homeTeam?.name!}
            fill
            className="object-cover"
          />
        </div>
        <p className="text-sm">{matches?.homeTeam?.name}</p>
      </div>
      <div className="px-2 m-auto flex justify-center items-center bg-slate-600 rounded-md">
        {matches?.status == "FINISHED" ? (
          <p className="py-1 text-teal-400 text-xs">
            {matches?.score?.fullTime.home} : {matches.score?.fullTime.away}
          </p>
        ) : (
          <p className="py-1 text-teal-400 text-xs">Match's start: {getDate}</p>
        )}
      </div>
      <div className="w-full flex items-center justify-end">
        <p className="text-sm text-right">{matches.awayTeam?.name}</p>
        <div className="w-[20px] h-[20px] relative ml-2">
          <Image
            unoptimized
            loader={imageLoaderAway}
            src={matches?.awayTeam?.crest!}
            alt={matches.awayTeam?.name!}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Matches;
