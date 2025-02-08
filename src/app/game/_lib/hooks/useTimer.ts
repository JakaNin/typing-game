import { useState, useEffect, useRef } from "react";
import type { AudioType } from "./useAudio";

const START_TIME = 60;
export const useTimer = (audio: AudioType) => {
  const [timer, setTimer] = useState(START_TIME);
  const [totalTime, setTotalTime] = useState(timer);
  const audioRef = useRef(audio);

  useEffect(() => {
    // タイマーを開始
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval); // インターバルをクリア
          audioRef.current.playFinishedSound();
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000); // 1秒ごとに更新
    return () => clearInterval(interval);
  }, []);

  return {
    timer,
    setTimer,
    totalTime,
    setTotalTime,
  };
};
