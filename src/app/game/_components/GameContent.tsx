"use client";

import Countdown from "./CountDown";
import { useCountdown } from "../_lib/hooks/useCountDown";

type Props = {
  children: React.ReactNode;
};

const GameContent = ({ children }: Props) => {
  const { countdown, gameStarted } = useCountdown();
  return (
    <div className="flex justify-center items-center">
      {gameStarted ? <>{children}</> : <Countdown countdown={countdown} />}
    </div>
  );
};

export default GameContent;
