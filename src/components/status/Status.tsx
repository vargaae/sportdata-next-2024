"use client";

import { matchesType } from "@/types";
import React, { useState } from "react";
import LeagueTable from "../league-table/LeagueTable";

const Status = ({
  matchesList,
  matchesListFinished,
}: {
  matchesList: matchesType[];
  matchesListFinished: matchesType[];
}) => {
  const [statusMatch, setStatusMatch] = useState<string>("TODAY");

  return (
    <div>
      <div className="flex space-x-4 mb-2 md:mb-4">
        <button
          onClick={() => setStatusMatch("TODAY")}
          className={`px-2 py-1 text-primary text-xs md:text-sm rounded-md ${
            statusMatch === "TODAY"
              ? "bg-teal-400 font-semibold"
              : "bg-slate-500 font-regular"
          }`}
        >
          today
        </button>
        <button
          onClick={() => setStatusMatch("LIVE")}
          className={`px-2 py-1 text-primary text-xs md:text-sm rounded-md ${
            statusMatch === "LIVE"
              ? "bg-teal-400 font-semibold"
              : "bg-slate-500 font-regular"
          }`}
        >
          live
        </button>
        <button
          onClick={() => setStatusMatch("FINISHED")}
          className={`px-2 py-1 text-primary text-sm rounded-md ${
            statusMatch === "FINISHED"
              ? "bg-teal-400 font-semibold"
              : "bg-slate-500 font-regular"
          }`}
        >
          finished
        </button>
      </div>
      <div className="w-full">
        {statusMatch === "FINISHED"
          ? matchesList?.map((matches) => (
              <div key={matches.id}>
                {matches.status === "FINISHED" && (
                  <>
                    <LeagueTable matches={matches} />
                    <div>
                      <h2 className="font-bold">
                        {matches?.homeTeam?.name}- {matches?.awayTeam?.name}{" "}
                      </h2>
                      <h5>
                        ( {matches?.status} - {matches?.utcDate} )
                      </h5>
                    </div>
                  </>
                )}
              </div>
            ))
          : null}
        {statusMatch === "FINISHED"
          ? matchesListFinished?.map((matches) => (
              <div key={matches.id}>
                {matches.status === "FINISHED" && (
                  <>
                    <LeagueTable matches={matches} />
                    <div>
                      <h2 className="font-bold">
                        {matches?.homeTeam?.name}- {matches?.awayTeam?.name}{" "}
                      </h2>
                      <h5>
                        ( {matches?.status} - {matches?.utcDate} )
                      </h5>
                    </div>
                  </>
                )}
              </div>
            ))
          : null}
        {statusMatch === "TODAY"
          ? matchesList?.map((matches) => (
              <div key={matches.id}>
                {matches.status ===
                  ("TIMED" ||
                    "SCHEDULED" ||
                    "LIVE" ||
                    "IN_PLAY" ||
                    "PAUSED") && (
                  <>
                    <LeagueTable matches={matches} />
                    <div>
                      <h2 className="font-bold">
                        {matches?.homeTeam?.name}- {matches?.awayTeam?.name}{" "}
                      </h2>
                      <h5>
                        ( {matches?.status} - {matches?.utcDate} )
                      </h5>
                    </div>
                  </>
                )}
              </div>
            ))
          : null}
        {statusMatch === "LIVE"
          ? matchesList?.map((matches) => (
              <div key={matches.id}>
                {matches.status === ("LIVE" || "IN_PLAY" || "PAUSED") && (
                  <>
                    <LeagueTable matches={matches} />
                    <div>
                      <h2 className="font-bold">
                        {matches?.homeTeam?.name}- {matches?.awayTeam?.name}{" "}
                      </h2>
                      <h5>
                        ( {matches?.status} - {matches?.utcDate} )
                      </h5>
                    </div>
                  </>
                )}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Status;