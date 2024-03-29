import { matchesType } from "@/types";
import React from "react";

const Status = ({
  matchesList,
  matchesListFinished,
}: {
  matchesList: matchesType[];
  matchesListFinished: matchesType[];
}) => {
  return (
    <div>
      {matchesList?.map((matches: any) => (
        <div key={matches.id}>
          <h2 className="font-bold">
            {matches?.homeTeam?.name}- {matches?.awayTeam?.name}{" "}
          </h2>
          <h5>
            ( {matches?.status} - {matches?.utcDate} )
          </h5>{" "}
        </div>
      ))}
    </div>
  );
};

export default Status;
