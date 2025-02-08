import { useState, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";

export const useProgress = (
  setTimer: Dispatch<SetStateAction<number>>,
  setTotalTime: Dispatch<SetStateAction<number>>,
) => {
  const [correctTypeCount, setCorrectTypeCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const typedCorrectly = correctTypeCount > 0;
  const maxCount = correctTypeCount % 25 === 0;
  const fillingCount = 4;
  useEffect(() => {
    if (!typedCorrectly) return;

    if (maxCount) {
      setProgress(0);
      setTimer((timer) => timer + 1);
      setTotalTime((totalTime) => totalTime + 1);
    } else {
      setProgress((p) => p + fillingCount);
    }
  }, [correctTypeCount, maxCount, setTimer, setTotalTime, typedCorrectly]);

  return {
    correctTypeCount,
    setCorrectTypeCount,
    progress,
    setProgress,
  };
};
