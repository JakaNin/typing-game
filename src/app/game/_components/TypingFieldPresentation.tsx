"use client";

import type { Song } from "lib/constants/songs";

import { useTyping } from "../_lib/hooks/useTyping";
import Crane from "./Crane";
import CurrentScore from "./CurrentScore";
import LastSecond from "./LastSecond";
import ProgressBar from "./ProgressBar";
import Result from "./Result";
import SongInfo from "./SongInfo";
import TypingSong from "./TypingSong";

type Props = {
  songs: Song[];
};

const TypingFieldPresentation = ({ songs }: Props) => {
  const { song, timer, progress, typingChars, result, animation } =
    useTyping(songs);
  const timeup = timer === 0;
  return (
    <>
      {timeup ? (
        <Result result={result} />
      ) : (
        <div className="w-full flex flex-col items-center relative">
          <Crane animation={animation} />
          <div className="flex flex-row justify-between w-[80%] pb-5">
            <LastSecond lastSecond={timer} />
            <CurrentScore currentScore={result.score} />
          </div>

          <ProgressBar progress={progress} />

          <TypingSong
            song={song}
            typingChars={typingChars}
            flower={animation.flowerProps}
          />

          <SongInfo song={song} />
        </div>
      )}
    </>
  );
};

export default TypingFieldPresentation;
