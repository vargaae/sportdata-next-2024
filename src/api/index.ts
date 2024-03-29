import { apiOptions, matchesType } from "@/types";

const options: apiOptions = {
  next: { revalidate: 30 },
  headers: {
    "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY,
    "Content-Type": "application/json",
  },
};
export const getMatchesFootball = async () => {
  const matchData = await fetch(
    "https://api.football-data.org/v4/matches",
    options
  );
  return matchData.json();
};

const todayDate = new Date();
const getDateMonth = new Date(todayDate.getTime());
getDateMonth.setDate(todayDate.getDate() - 1);
const year = getDateMonth.getFullYear();
const month = String(getDateMonth.getMonth() + 1).padStart(2, "0");
const day = String(getDateMonth.getDate()).padStart(2, "0");

const yesterday = [year, month, day].join("-");

export const getMatchesFootballFinished = async () => {
  const matchData = await fetch(
    `https://api.football-data.org/v4/matches?date=${yesterday}`,
    options
  );
  return matchData.json();
};

export const filterLeague = async (filterData: string) => {
  const getLeague = await getMatchesFootball();
  const filterLeague: matchesType[] = getLeague?.matches;
  const getData = filterLeague.filter(
    (item) => item.competition.name === filterData
  );
  return getData;
};
