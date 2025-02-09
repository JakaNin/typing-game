import type { Song } from "lib/constants/songs";
import { CHAR_TABLE } from "lib/constants/typingData";
import { useState } from "react";
import { toRoman } from "utils/typing";

import { fixCurrentKana } from "../utils/fixCurrentKana";

const getTypedKana = (kanaPart: string, correctKanaCount: number) => {
  let displayIndex = 0;
  let charCount = 0;
  while (charCount < correctKanaCount && displayIndex < kanaPart.length) {
    if (kanaPart[displayIndex] !== " ") {
      charCount++;
    }
    displayIndex++;
  }
  const typedKana = kanaPart.substring(0, displayIndex);
  const remainingKana = kanaPart.substring(displayIndex);
  return { typedKana, remainingKana };
};

export const useCharacterManager = (song: Song) => {
  const kanaPart = song.physical;
  const formattedKanaPart = kanaPart.replace(/ /g, "");
  const initialRoman = toRoman(formattedKanaPart, CHAR_TABLE);

  const [correctKanaCount, setCorrectKanaCount] = useState(0);

  const [typedRoman, setTypedRoman] = useState("");
  const [remainingRoman, setRemainingRoman] = useState(initialRoman);

  // 現在入力が求められているローマ字
  const currentRoman = remainingRoman[0];

  const currentKana = fixCurrentKana(formattedKanaPart, correctKanaCount);

  const { typedKana, remainingKana } = getTypedKana(
    formattedKanaPart,
    correctKanaCount,
  );

  return {
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
  };
};
