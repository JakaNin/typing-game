import type { GameScore } from "types/gameScore";
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
    next: { revalidate: 1 },
  };
  try {
    const response = await fetch(url, options);

    const data = await response.json();

    if (Array.isArray(data)) {
      return data as GameScore[];
    } else if (data && typeof data === "object" && "message" in data) {
      console.error("APIエラー応答:", data);
      // エラーオブジェクトが返された場合は空配列を返す
      return [];
    } else {
      console.error("不明なAPI応答形式:", data);
      return [];
    }
  } catch (error) {
    console.error("ランキング取得エラー:", error);
    return [];
  }
};

export const getAllRanking = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/ranking`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 1 },
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

export const getRankingCount = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/ranking/count`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 120 },
  };
  try {
    const response = await fetch(url, options);
    const data: { count: number } = await response.json();
    return data.count;
  } catch (error) {
    return 0;
  }
};

export const getTodayRankingCount = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/ranking/today/count`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 120 },
  };
  try {
    const response = await fetch(url, options);
    const data: { count: number } = await response.json();
    return data.count;
  } catch (error) {
    return 0;
  }
};
