import type { GameScore } from "app/types/gameScore";
import { createSearchParams } from "utils/createUrlWithParams";

export const getTodayRanking = async (
  params: { limit?: number } | undefined = {},
) => {
  "use server";
  const searchParams = createSearchParams(params);
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/ranking/today?${searchParams}`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(url, options);
  const ranking: GameScore[] = await response.json();
  return ranking;
};

export const getAllRanking = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/ranking`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(url, options);
  const ranking: GameScore[] = await response.json();
  return ranking;
};
