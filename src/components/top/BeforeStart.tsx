import { GameScore } from "app/types/gameScore";
import Typography from "components/commons/Typography";

import RankingList from "../ranking/RankingList";
import GameStartButton from "./GameStartButton";

type Props = {
  ranking: GameScore[];
};

const BeforeStart = ({ ranking }: Props) => {
  return (
    <div className="flex mx-20">
      <div className="w-full pl-20 pr-20 pt-10 flex flex-col gap-10">
        <Typography variant="title1" className="text-3xl">
          万葉集を学びながら、楽しくタイピングの練習をしましょう！
        </Typography>
        <div className="flex flex-col items-center w-full h-auto bg-[#ffffff40] shadow-m shadow-2xl py-8">
          <div className=" flex flex-col items-center mt-5">
            <Typography
              variant="body2"
              className="text-3xl text-ap-orange-700 pb-8"
            >
              今日のランキング
            </Typography>
            <RankingList ranking={ranking} />
          </div>
        </div>
        <GameStartButton />
      </div>
    </div>
  );
};

export default BeforeStart;
