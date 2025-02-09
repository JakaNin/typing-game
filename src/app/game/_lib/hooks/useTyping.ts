import type { Song } from "lib/constants/songs";
import { CHAR_TABLE } from "lib/constants/typingData";
import { useState } from "react";
import { toRoman } from "utils/typing";

import { useAnimation } from "./useAnimation";
import { useAudio } from "./useAudio";
import { useCharacterManager } from "./useCharcterManager";
import { useKeyPressHandler } from "./useKeyPressHandler";
import { useProgress } from "./useProgress";
import { useQuizManager } from "./useQuizManager";
import { useScore } from "./useScore";
import { useTimer } from "./useTimer";

export const useTyping = (songs: Song[]) => {
  const audio = useAudio();
  const { timer, setTimer, totalTime, setTotalTime } = useTimer(audio);
  const { song, countIndex, setCountIndex } = useQuizManager(songs);
  const {
    correctKanaCount,
    setCorrectKanaCount,
    formattedKanaPart,
    typedKana,
    remainingKana,
    typedRoman,
    setTypedRoman,
    remainingRoman,
    setRemainingRoman,
    currentRoman,
    currentKana,
  } = useCharacterManager(song);

  const {
    progress,
    setProgress,
    correctTypeCount,
    setCorrectTypeCount,
    justAdded1Sec,
  } = useProgress(setTimer, setTotalTime, audio);

  const [input, setInput] = useState("");
  const [typoCount, setTypoCount] = useState(0);
  // 対応するローマ字シーケンスを取得
  const validSequences = CHAR_TABLE[currentKana] || [];

  const initQuiz = () => {
    // ローマ字を初期化
    setTypedRoman("");
    // 正解文字数を初期化
    setCorrectKanaCount(0);
  };

  const initInput = () => {
    setInput("");
  };

  const onCorrectType = (
    latestInput: string,
    currentInputCombination: string,
  ) => {
    audio.playSuccessSound();
    setCorrectTypeCount((c) => c + 1);
    // ユーザーのローマ字入力を更新
    setTypedRoman((c) => `${c}${latestInput}`);
    setInput(currentInputCombination);
    validSequences.map((seq) => {
      // TI => CHI などより長い入力の場合、diffを計算
      const longerInputCase = latestInput !== currentRoman;
      const lengthDiff = longerInputCase
        ? seq.length - validSequences[0].length
        : 0;

      if (seq[input.length] == latestInput) {
        setRemainingRoman(remainingRoman.substring(1 - lengthDiff));
        if (
          currentKana == "ち" &&
          latestInput == "C" &&
          currentInputCombination.length == 1
        ) {
          setRemainingRoman(
            `${seq[input.length + 1]}${remainingRoman.substring(1)}`,
          );
        }
      }
    });

    // 完全なマッチの場合、次の文字へ
    if (validSequences.includes(currentInputCombination)) {
      initInput();
      setCorrectKanaCount((c) => c + currentKana.length);

      const typedKanaCount = correctKanaCount + currentKana.length;
      const songFinished = formattedKanaPart.length === typedKanaCount;
      if (songFinished) {
        initQuiz();
        setCountIndex((c) => c + 1);
        setRemainingRoman(toRoman(songs[countIndex + 1].physical, CHAR_TABLE));
      }
    }
  };

  const onTypo = () => {
    // タイポの場合
    audio.playErrorSound();
    setTypoCount((c) => c + 1);
    setCorrectTypeCount(0)
    setProgress(0);
  };

  useKeyPressHandler(input, validSequences, timer, onCorrectType, onTypo);

  const { score, keyPressPerSecond, accuracy, totalTypeCount } = useScore(
    correctTypeCount,
    typoCount,
    totalTime,
  );
  const animation = useAnimation(correctTypeCount, justAdded1Sec, audio);

  return {
    song,
    progress,
    timer,
    typingChars: {
      typedRoman,
      remainingRoman,
      typedKana,
      remainingKana,
    },
    result: {
      score,
      keyPressPerSecond,
      accuracy,
      totalTypeCount,
      typoCount,
    },
    animation,
  };
};
