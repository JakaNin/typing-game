export const useScore = (
  correctTypeCount: number,
  typoCount: number,
  totalTime: number,
) => {
  const totalTypeCount = correctTypeCount + typoCount;
  const score = Math.max(correctTypeCount * 10);
  const accuracy =
    Math.round((correctTypeCount / (correctTypeCount + typoCount)) * 100) || 0;
  const keyPressPerSecond =
    Math.round((correctTypeCount / totalTime) * 10) / 10;

  return {
    score,
    keyPressPerSecond,
    accuracy,
    totalTypeCount,
  };
};
