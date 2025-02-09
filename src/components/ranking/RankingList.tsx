import type { GameScore } from "app/types/gameScore";
import Typography from "components/commons/Typography";
import StarIcon from "components/images/StarIcon";

type Props = {
  ranking: GameScore[];
};

const Ranking = async ({ ranking }: Props) => {
  if (ranking.length === 0)
    return <Typography variant="body2">データがありません</Typography>;
  return (
    <div className="w-full">
      {ranking.map((item, index) => {
        const rankNumberOne = index === 0;
        const numberOneClass = "text-6xl font-extrabold";
        const score = item.score.toLocaleString();
        return rankNumberOne ? (
          <div key={index + 1}>
            <div className="flex flex-row justify-between items-end gap-2 border-b pb-1 mb-12 border-ap-transparentBlack-300">
              <div className="flex flex-row items-end">
                <div className="grow pl-4 pr-12 flex flex-row items-end gap-2">
                  <StarIcon className="w-10 h-10" fill="ap-orange-600" />
                  <Typography variant="number1">1</Typography>
                  <Typography variant="body2" className="text-3xl">
                    位
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="body1"
                    className={`${numberOneClass} pr-12`}
                  >
                    {item.name}
                  </Typography>
                </div>
              </div>
              <div className="flex items-center gap-4 pl-8">
                <Typography element="span" variant="body2" className="text-2xl">
                  スコア :
                </Typography>
                <Typography
                  element="span"
                  variant="number1"
                  className="text-4xl"
                >
                  {score}
                </Typography>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center" key={index + 1}>
            <div className="w-[70%]">
              <div className="flex flex-row justify-between gap-2 border-b pb-1 mb-5 border-ap-transparentBlack-300">
                <div className="flex flex-row">
                  <div className="w-20">
                    <Typography variant="body2" className="text-2xl">
                      {index + 1}位
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="body2" className="text-2xl">
                      {item.name}
                    </Typography>
                  </div>
                </div>
                <Typography variant="body2" className="pl-12 text-2xl">
                  {score}
                </Typography>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ranking;
