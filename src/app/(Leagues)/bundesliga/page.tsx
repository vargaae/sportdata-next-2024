import { filterLeague } from "@/api";
import LeagueTable from "@/components/league-table/LeagueTable";

const Bundesliga = async () => {
  const getBundesliga = await filterLeague("Bundesliga");

  const nd = new Date();
  const dateConvert = nd.toDateString();

  return (
    <section className="px-2 md:px-4 md:w-[600px]">
      <div className="flex justify-between items-center mb-4 md:mb-2">
        <h1 className="px-4 py-0 md:py-1 bg-teal-100 rounded-md text-md md:text-xl font-bold">
          LEAGUES
        </h1>
        <div className="px-4 py-0 md:py-1 bg-slate-600 rounded-md text-textSecondary text-sm">
          <p>{`${dateConvert}`}</p>
        </div>
      </div>
      {getBundesliga.map((data) => (
        <div key={data.id}>
          <LeagueTable matches={data} />
        </div>
      ))}
    </section>
  );
};

export default Bundesliga;
