import { type GameScore } from "types/gameScore";

export const getRankingPosition = (
  ranking: GameScore[],
  targetScore: number,
) => {
  // ソート用に一時的な配列を作成
  const tempRanking = [...ranking, { score: targetScore }];

  tempRanking.sort((a, b) => b.score - a.score);

  // targetScoreが何位にあるか（+1で順位に変換）
  const position =
    tempRanking.findIndex((item) => item.score === targetScore) + 1;

  // 100位以内の場合は順位を返し、それ以外はnull
  return position <= 100 ? position : null;
};
