import { matchesType } from "@/types";
import Competition from "../competition/Competition";
import Matches from "../matches/Matches";

const LeagueTable = ({ matches }: { matches: matchesType }) => {
  return (
    <div className="py-3 px-2 md:px-3 rounded-md flex flex-col bg-[rgb(45,59,87)] text-primary mb-2">
      <Competition matches={matches} />
      <Matches matches={matches} />
    </div>
  );
};

export default LeagueTable;
