import { useEffect, useState } from "react";

const INITIAL_COUNTDOWN = 3;
export const useCountdown = () => {
  const [countdown, setCountdown] = useState(INITIAL_COUNTDOWN);
  const gameStarted = countdown === 0;

  useEffect(() => {
    if (countdown > 0) {
      const timerId = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [countdown]);

  return {
    countdown,
    gameStarted,
  };
};
