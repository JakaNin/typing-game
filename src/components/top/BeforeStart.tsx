import Typography from "components/commons/Typography";
import { GameScore } from "types/gameScore";

import RankingList from "../ranking/RankingList";
import GameStartButton from "./GameStartButton";

type Props = {
  ranking: GameScore[];
};

const BeforeStart = ({ ranking }: Props) => {
  return (
    <div className="flex mx-2 sm:mx-20">
      <div className="w-full px-3 sm:px-20 pt-6 sm:pt-10 flex flex-col gap-6 sm:gap-10">
        <Typography
          variant="title1"
          className="text-2xl sm:text-3xl break-words"
        >
          万葉集を学びながら、楽しくタイピングの練習をしましょう！
        </Typography>
        <div className="flex flex-col items-center w-full h-auto bg-[#ffffff40] shadow-m shadow-2xl py-6 sm:py-8 rounded-3xl">
          <div className="flex flex-col items-center mt-3 sm:mt-5 w-full px-3 sm:px-0">
            <Typography
              variant="body2"
              className="text-2xl sm:text-3xl pb-4 sm:pb-8 bg-gradient-to-r from-ap-orange-700 to-ap-orange-500 bg-clip-text text-transparent"
            >
              今日のランキング
            </Typography>
            <div className="w-full sm:w-auto">
              <RankingList ranking={ranking} />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <GameStartButton />
        </div>
      </div>
    </div>
  );
};

export default BeforeStart;
