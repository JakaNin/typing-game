import Typography from "components/commons/Typography";
import StarIcon from "components/images/StarIcon";
import type { GameScore } from "types/gameScore";

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
        // const numberOneClass = "text-4xl font-extrabold";
        const score = item.score.toLocaleString();
        return rankNumberOne ? (
          <div key={index + 1} className="w-full px-2 sm:px-0">
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-2 border-b pb-3 sm:pb-1 mb-8 sm:mb-12 border-ap-transparentBlack-300">
              <div className="flex flex-row items-end">
                <div className="grow pl-2 sm:pl-4 pr-4 sm:pr-12 flex flex-row items-end gap-2">
                  <StarIcon className="w-8 h-8 sm:w-10 sm:h-10" gradient />
                  <Typography
                    variant="number1"
                    className="text-3xl sm:text-4xl"
                  >
                    1
                  </Typography>
                  <Typography variant="body2" className="text-2xl sm:text-3xl">
                    位
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="body1"
                    className={`text-3xl sm:text-4xl font-extrabold pr-2 sm:pr-12 break-all`}
                  >
                    {item.name}
                  </Typography>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 pl-0 sm:pl-8 mt-2 sm:mt-0">
                <Typography
                  element="span"
                  variant="body2"
                  className="text-xl sm:text-2xl"
                >
                  スコア :
                </Typography>
                <Typography
                  element="span"
                  variant="number1"
                  className="text-3xl sm:text-4xl"
                >
                  {score}
                </Typography>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center w-full" key={index + 1}>
            <div className="w-full sm:w-[80%] md:w-[70%] px-2 sm:px-0">
              <div className="flex flex-row justify-between gap-2 border-b pb-1 mb-5 border-ap-transparentBlack-300">
                <div className="flex flex-row flex-wrap">
                  <div className="min-w-[50px] sm:w-20">
                    <Typography variant="body2" className="text-xl sm:text-2xl">
                      {index + 1}位
                    </Typography>
                  </div>
                  <div className="max-w-[150px] sm:max-w-none overflow-hidden">
                    <Typography
                      variant="body2"
                      className="text-xl sm:text-2xl break-all"
                    >
                      {item.name}
                    </Typography>
                  </div>
                </div>
                <Typography
                  variant="body2"
                  className="pl-1 sm:pl-12 text-xl sm:text-2xl"
                >
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
