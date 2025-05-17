import RankingList from "components/ranking/RankingList";
import { SchemaOrgBreadcrumb } from "components/SchemaOrg";
import { getAllRanking } from "lib/fetcher/ranking";
import Link from "next/link";

import GameStartButton from "./_components/GameStartButton";

const Ranking = async () => {
  const ranking = await getAllRanking();
  return (
    <>
      <SchemaOrgBreadcrumb
        items={[
          { name: "ホーム", url: "https://manyo-typing.com" },
          { name: "ランキング", url: "https://manyo-typing.com/ranking" },
        ]}
      />
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center p-5 sm:p-10 bg-ap-transparentWhite-300 shadow-m w-[95%] sm:w-[90%] md:w-[80%] shadow-2xl rounded-3xl mx-2 sm:mx-0">
          <GameStartButton />
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pb-6 sm:pb-10 mt-4 sm:mt-0">
            <Link href="/ranking">
              <button className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-ap-orange-700 to-ap-orange-500 bg-clip-text text-transparent">
                全期間のランキング
              </button>
            </Link>
            <Link href="/ranking/today">
              <button className="text-lg sm:text-xl text-ap-gray-600 underline font-semibold">
                今日のランキング
              </button>
            </Link>
          </div>
          <div className="w-full sm:w-[90%]">
            <RankingList ranking={ranking} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ranking;
