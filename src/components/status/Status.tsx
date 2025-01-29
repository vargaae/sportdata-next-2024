"use client";

import { matchesType } from "@/types";
import React, { useEffect, useState } from "react";
import LeagueTable from "../league-table/LeagueTable";

const Status = ({
  matchesList,
  matchesListFinished,
}: {
  matchesList: matchesType[];
  matchesListFinished: matchesType[];
}) => {
  const [statusMatch, setStatusMatch] = useState<string>("FINISHED");

  useEffect(() => {
    if (matchesList == null) setStatusMatch("FINISHED")

  }, [])
  
  return (
    <div>
      <div className="flex space-x-4 mb-2 md:mb-4">
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
      </div>
      <div className="w-full">
        {statusMatch === "FINISHED"
          ? matchesList?.toReversed().map((matches) => (
              <div key={matches.id}>
                {matches.status === "FINISHED" && (
                  <LeagueTable matches={matches} />
                )}
              </div>
            ))
          : null}
        {statusMatch === "FINISHED"
          ? matchesListFinished?.toReversed().map((matches) => (
              <div key={matches.id}>
                {matches.status === "FINISHED" && (
                  <LeagueTable matches={matches} />
                )}
              </div>
            ))
          : null}
        {statusMatch === "TODAY"
          ? matchesList?.map((matches) => (
              <div key={matches.id}>
                {matches.status === "TIMED" && (
                  <LeagueTable matches={matches} />
                )}
              </div>
            ))
          : null}
        {statusMatch === "TODAY"
          ? matchesList?.map((matches) => (
              <div key={matches.id}>
                {matches.status === "SCHEDULED" && (
                  <LeagueTable matches={matches} />
                )}
              </div>
            ))
          : null}
        {statusMatch === "TODAY"
          ? matchesList?.map((matches) => (
              <div key={matches.id}>
                {matches.status === "LIVE" && <LeagueTable matches={matches} />}
              </div>
            ))
          : null}
        {statusMatch === "TODAY"
          ? matchesList?.map((matches) => (
              <div key={matches.id}>
                {matches.status === "IN_PLAY" && (
                  <LeagueTable matches={matches} />
                )}
              </div>
            ))
          : null}
        {statusMatch === "TODAY"
          ? matchesList?.map((matches) => (
              <div key={matches.id}>
                {matches.status === "PAUSED" && (
                  <LeagueTable matches={matches} />
                )}
              </div>
            ))
          : null}
        {statusMatch === "LIVE"
          ? matchesList?.map((matches) => (
              <div key={matches.id}>
                {matches.status === "LIVE" && <LeagueTable matches={matches} />}
              </div>
            ))
          : null}
        {statusMatch === "LIVE"
          ? matchesList?.map((matches) => (
              <div key={matches.id}>
                {matches.status === "IN_PLAY" && (
                  <LeagueTable matches={matches} />
                )}
              </div>
            ))
          : null}
        {statusMatch === "LIVE"
          ? matchesList?.map((matches) => (
              <div key={matches.id}>
                {matches.status === "PAUSED" && (
                  <LeagueTable matches={matches} />
                )}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Status;
