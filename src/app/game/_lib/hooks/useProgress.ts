import { useState, useEffect, useRef } from "react";
import type { Dispatch, SetStateAction } from "react";
import { type AudioType } from "./useAudio";

export const useProgress = (
  setTimer: Dispatch<SetStateAction<number>>,
  setTotalTime: Dispatch<SetStateAction<number>>,
  audio: AudioType,
) => {
  const [correctTypeCount, setCorrectTypeCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const [justAdded1Sec, setJustAdded1Sec] = useState(false);
  const justAdd1Sec = () => {
    setJustAdded1Sec(true);
    setTimeout(() => {
      setJustAdded1Sec(false);
    }, 2000);
  };

  const typedCorrectly = correctTypeCount > 0;
  const maxCount = correctTypeCount % 25 === 0;
  const fillingCount = 4;
  const audioRef = useRef(audio);

  useEffect(() => {
    if (!typedCorrectly) return;
    if (maxCount) {
      justAdd1Sec();
      audioRef.current.playAdd1SecSound();
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
    justAdded1Sec,
  };
};
