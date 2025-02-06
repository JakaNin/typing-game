import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  typeCount: number;
  typoCount: number;
  totalTimeSec: number;
  addRanking: number;
  allScore: number;
  todayScore: number;
};

const GameResult = ({
  typeCount,
  typoCount,
  totalTimeSec,
  addRanking,
  allScore,
  todayScore,
}: Props) => {
  const router = useRouter();
  const [rankingName, setRankingName] = useState("");
  const [ranking, setRanking] = useState<number>(0);
  const [todayRanking, setTodayRanking] = useState<number>(0);
  // ランキング名をセット
  const handleRankingName = (e) => {
    setRankingName(e.target.value);
  };
  // ランキング登録
  const submit = () => {
    // ランキング登録後はランキング名を空にする
    setRankingName("");
    router.push("/ranking");
  };

  useEffect(() => {
    const score = typeCount * 10;
    const position =
      [...allScore, score].sort((a, b) => b - a).indexOf(score) + 1;
    const todayPosition =
      [...todayScore, score].sort((a, b) => b - a).indexOf(score) + 1;
    setRanking(position);
    setTodayRanking(todayPosition);
  }, []);
  // いちおうランキングに平均キーストローク数を登録してる
  const averageKeyStroke = Math.round((typeCount / totalTimeSec) * 10) / 10;
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[rgba(255,255,255,0.25)] shadow-m w-[80%] shadow-xl py-20 px-48 relative">
        <div className="flex flex-row justify-start px-2 pb-10">
          <div className="text-3xl tracking-widest font-bold">
            <span className="text-[#333]">あなたの</span>
            <span className="text-[#B94726]">結果</span>
            <span className="text-[#333]">は、、、</span>
          </div>
        </div>
        <div className="flex flex-col items-center text-[#333]">
          <div className="pb-4">
            <span className="font-extrabold text-8xl pr-3">{todayRanking}</span>
            <span className="font-bold text-6xl">位</span>
          </div>
          <div className="w-[100%] flex flex-col items-center border-b border-[#717171]">
            <div className="pb-6">
              <span className="text-4xl font-bold tracking-wider">
                （{todayScore.length + 1}人中）
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-end pt-6 px-12">
          <div className="text-[#333] flex flex-col items-center font-semibold">
            <p className="text-5xl pb-1 tracking-wider">{typeCount * 10}</p>
            <p>スコア</p>
          </div>
          <div className="text-[#333] flex flex-col items-center font-semibold">
            <div className="pb-1 tracking-widest">
              <span className="text-5xl pr-1">{averageKeyStroke}</span>
              <span className="text-3xl">回</span>
              <span className="text-3xl font-light">/</span>
              <span className="text-3xl">秒</span>
            </div>
            <p className="tracking-wider">平均タイプ数</p>
          </div>
          <div className="text-[#333] flex flex-col items-center font-semibold">
            <div className="pb-1 tracking-widest">
              <span className="text-5xl pr-1">
                {Math.round((typeCount / (typeCount + typoCount)) * 100)}
              </span>
              <span className="text-3xl">%</span>
            </div>
            <p className="tracking-wider">正答率</p>
          </div>
          <div className="text-ap-gray-800 flex flex-col items-center font-semibold">
            <div className="pb-1">
              <span className="text-5xl pr-1 tracking-wider">
                {typeCount + typoCount}
              </span>
              <span className="text-3xl">回</span>
            </div>
            <p className="tracking-wider">総タイプ数</p>
          </div>
          <div className="text-ap-gray-800 flex flex-col items-center font-semibold">
            <div className="pb-1">
              <span className="text-5xl pr-1 tracking-wider">{typoCount}</span>
              <span className="text-3xl">回</span>
            </div>
            <p className="tracking-wider">ミスタイプ</p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 pr-4 pb-4">
          <Link href="/">Reload</Link>
        </div>
      </div>
      <div className="flex flex-row pt-12 w-[60%] justify-center">
        <div className="w-full flex flex-row shadow-xl">
          <input
            className="text-ap-gray-800 w-[70%] grow text-xl pl-8 tracking-wider"
            type="text"
            placeholder="名前を入力してください（８文字）"
            onChange={handleRankingName}
            value={rankingName}
            maxLength={8}
          ></input>
          <button
            className="bg-ap-orange-800 px-12 py-6 text-xl text-white"
            onClick={submit}
          >
            {" "}
            ランキング登録
          </button>
        </div>
      </div>
    </div>
  );
};
export default GameResult;
