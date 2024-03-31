"use client";

import { usePathname } from "next/navigation";

import { filterLeague } from "@/api";
import LeagueTable from "@/components/league-table/LeagueTable";

export default async function LeaguesComponent() {
  const pathname = usePathname();
  const leagueWithSpace = pathname.slice(1);
  const league = leagueWithSpace.replace("%20", " ");

  // const getEnglishLeague = await filterLeague("Premier League");
  // const getLeagueByCode = await filterLeague("CPD");
  const getLeague = await filterLeague(league);

  return (
    <div className="w-[600px]">
      {getLeague.map((data) => (
        <div key={data.id}>
          <LeagueTable matches={data} />
        </div>
      ))}
    </div>
  );
}