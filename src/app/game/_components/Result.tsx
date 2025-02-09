import Button from "components/commons/Button";
import Typography from "components/commons/Typography";
import ReloadIcon from "components/images/ReloadIcon";
import Link from "next/link";

import { useSubmit } from "../_lib/hooks/useSubmit";

type Result = {
  score: number;
  keyPressPerSecond: number;
  accuracy: number;
  totalTypeCount: number;
  typoCount: number;
};

const Ranking = ({
  rank,
  demominator,
}: {
  rank: number;
  demominator: number;
}) => {
  return (
    <>
      <div className="flex flex-row  justify-start px-2 pb-10">
        <div className="text-3xl tracking-widest font-bold">
          <Typography element="span">あなたの</Typography>
          <Typography element="span" className="text-ap-orange-800">
            結果
          </Typography>
          <Typography element="span">は、、、</Typography>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="pb-4">
          <Typography element="span" className="font-extrabold text-8xl pr-3">
            {rank}
          </Typography>
          <Typography element="span" className="font-bold text-6xl">
            位
          </Typography>
        </div>
        <div className="w-[100%] flex flex-col items-center border-b border-ap-gray-500">
          <div className="pb-6">
            <Typography
              element="span"
              className="text-4xl font-bold tracking-wider"
            >
              （{demominator}人中）
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};
const ResultDetail = ({
  score,
  keyPressPerSecond,
  accuracy,
  totalTypeCount,
  typoCount,
}: Result) => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-between items-end pt-6 px-12">
        <div className="flex flex-col items-center">
          <Typography variant="body2" className="text-5xl pb-1 tracking-wider">
            {score}
          </Typography>
          <Typography variant="body2" className="text-base">
            スコア
          </Typography>
        </div>
        <div className="flex flex-col items-center">
          <div className="pb-1">
            <Typography
              element="span"
              variant="body2"
              className="text-5xl pr-1"
            >
              {keyPressPerSecond}
            </Typography>
            <Typography element="span" variant="body2" className="text-3xl">
              回
            </Typography>
            <Typography
              element="span"
              variant="body2"
              className="text-3xl font-light"
            >
              /
            </Typography>
            <Typography element="span" variant="body2" className="text-3xl">
              秒
            </Typography>
          </div>
          <Typography variant="body2" className="text-base">
            平均タイプ数
          </Typography>
        </div>
        <div className="flex flex-col items-center font-semibold">
          <div className="pb-1">
            <Typography
              element="span"
              variant="body2"
              className="text-5xl pr-1"
            >
              {accuracy}
            </Typography>
            <Typography element="span" variant="body2" className="text-3xl">
              %
            </Typography>
          </div>
          <Typography variant="body2" className="text-base">
            正答率
          </Typography>
        </div>
        <div className="flex flex-col items-center">
          <div className="pb-1">
            <Typography
              element="span"
              variant="body2"
              className="text-5xl pr-1 tracking-wider"
            >
              {totalTypeCount}
            </Typography>
            <Typography element="span" variant="body2" className="text-3xl">
              回
            </Typography>
          </div>
          <Typography variant="body2" className="text-base">
            総タイプ数
          </Typography>
        </div>
        <div className="flex flex-col items-center">
          <div className="pb-1">
            <Typography
              element="span"
              variant="body2"
              className="text-5xl pr-1 tracking-wider"
            >
              {typoCount}
            </Typography>
            <Typography element="span" variant="body2" className="text-3xl">
              回
            </Typography>
          </div>
          <Typography variant="body2" className="text-base">
            ミスタイプ
          </Typography>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 pr-4 pb-4">
        <Link href="/">
          <Button variant="text" className="flex items-center gap-1">
            <ReloadIcon className="w-5 h-5" fill="ap-orange-700" />
            <Typography variant="subtitle1" className="text-xl">
              もう一度あそぶ
            </Typography>
          </Button>
        </Link>
      </div>
    </>
  );
};

type Props = {
  result: Result;
};

const GameResult = ({ result }: Props) => {
  const { score, keyPressPerSecond, accuracy, totalTypeCount, typoCount } =
    result;
  const { playerName, setPlayerName, handleSubmit, submitted } =
    useSubmit(result);
  return (
    <div className="flex flex-col items-center w-full">
      <div className="bg-ap-transparentWhite-300 shadow-m w-[80%] shadow-xl py-20 px-48 relative">
        <Ranking rank={1} demominator={1} />
        <ResultDetail
          score={score}
          keyPressPerSecond={keyPressPerSecond}
          accuracy={accuracy}
          totalTypeCount={totalTypeCount}
          typoCount={typoCount}
        />
      </div>
      <div className="flex pt-12 w-[70%] justify-center">
        <div className="w-full flex justify-center gap-4">
          <input
            className="text-ap-black w-2/3 text-xl pl-8 py-4 tracking-wider shadow-white-blur rounded-full"
            type="text"
            placeholder="名前を入力してください(最大８文字)"
            maxLength={8}
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            disabled={submitted}
          ></input>
          <Button
            variant="primary"
            className="px-6"
            onClick={handleSubmit}
            disabled={submitted}
          >
            {submitted ? "登録済" : "ランキング登録"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default GameResult;
