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
    next: { revalidate: 10 },
  };
  try {
    const response = await fetch(url, options);
    const ranking: GameScore[] = await response.json();
    return ranking;
  } catch (error) {
    console.error("Error fetching today's ranking: ", error);
    return [];
  }
};

export const getAllRanking = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/ranking`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 10 },
  };
  try {
    const response = await fetch(url, options);
    const ranking: GameScore[] = await response.json();
    return ranking;
  } catch (error) {
    console.error("Error fetching today's ranking: ", error);
    return [];
  }
};
