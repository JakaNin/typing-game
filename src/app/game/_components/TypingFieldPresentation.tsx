"use client";

import LastSecond from "./LastSecond";
import CurrentScore from "./CurrentScore";
import ProgressBar from "./ProgressBar";
import SongInfo from "./SongInfo";
import TypingSong from "./TypingSong";
import type { Song } from "lib/constants/songs";
import { useTyping } from "../_lib/hooks/useTyping";
import Result from "./Result";

type Props = {
  songs: Song[];
};

const TypingFieldPresentation = ({ songs }: Props) => {
  const { song, timer, progress, typingChars, result } = useTyping(songs);
  const timeup = timer === 0;
  return (
    <>
      {timeup ? (
        <Result result={result} />
      ) : (
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-row justify-between w-[80%] pb-5">
            <LastSecond lastSecond={timer} />
            <CurrentScore currentScore={result.score} />
          </div>

          <ProgressBar progress={progress} />

          <TypingSong song={song} typingChars={typingChars} />

          <SongInfo song={song} />
        </div>
      )}
    </>
  );
};

export default TypingFieldPresentation;
