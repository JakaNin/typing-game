import RankingList from "components/ranking/RankingList";
import { getTodayRanking } from "lib/fetcher/ranking";
import Link from "next/link";

import GameStartButton from "../_components/GameStartButton";

const Ranking = async () => {
  const ranking = await getTodayRanking();

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center p-10 bg-ap-transparentWhite-300 shadow-m w-[80%] shadow-2xl">
        <GameStartButton />
        <div className="flex items-center justify-between gap-6 pb-10">
          <Link href="/ranking">
            <button className="text-xl text-ap-gray-600 underline font-semibold">
              全期間のランキング
            </button>
          </Link>
          <Link href="/ranking/today">
            <button className="text-xl text-ap-orange-700 font-semibold">
              今日のランキング
            </button>
          </Link>
        </div>
        <div className="w-[80%]">
          <RankingList ranking={ranking} />
        </div>
      </div>
    </div>
  );
};

export default Ranking;
