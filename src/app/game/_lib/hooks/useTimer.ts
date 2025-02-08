import { useState, useEffect } from "react";

const START_TIME = 60;
export const useTimer = () => {
  const [timer, setTimer] = useState(START_TIME);
  const [totalTime, setTotalTime] = useState(timer);

  useEffect(() => {
    // タイマーを開始
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval); // インターバルをクリア
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
