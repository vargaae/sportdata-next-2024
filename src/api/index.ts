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

export const getLeaguesFootball = async () => {
  const matchData = await fetch(
    "https://api.football-data.org/v4/competitions",
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
  const getData = filterLeague?.slice().filter(
    (item) => item.competition.name === filterData
    // (item) => item.competition.code === filterData
  );
  return getData;
};
export const filterLeagueFinished = async (filterData: string) => {
  const getLeague = await getMatchesFootballFinished();
  const filterLeague: matchesType[] = getLeague?.matches;
  const getData = filterLeague?.slice().filter(
    (item) => item.competition.name === filterData
    // (item) => item.competition.code === filterData
  );
  return getData;
};

export const filterFinishedMatches = async (filterData: string) => {
  const getMatches = await getMatchesFootball();
  const filterMatches: matchesType[] = getMatches?.matches;
  const getFinishedMatchesData = filterMatches?.filter(
    (item) => item.status === "FINISHED"
    // (item) => item.status === filterData
  );
  return getFinishedMatchesData;
};

export const getNewsInfo = async () => {
  const newsData = await fetch(
    `https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API_KEY}&q=sport&pageSize=7`,
    { next: { revalidate: 30 } }
  );
  return newsData.json();
};
