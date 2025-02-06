import { toRoman } from "utils/typing";
import { useEffect, useState, useRef, useMemo } from "react";
import { CHAR_TABLE } from "lib/constants/typingData";
import type { Song } from "lib/constants/songs";

export const useTyping = (songs: Song[], gameStarted) => {
  const [userInput, setUserInput] = useState("");
  const [correctChars, setCorrectChars] = useState(0);
  const [countIndex, setCountIndex] = useState(0);
  const [typeCount, setTypeCount] = useState(0);
  const [correctTypeCount, setCorrectTypeCount] = useState(0);
  const [typeRomanCount, setTypeRomanCount] = useState(0);
  const [typoCount, setTypoCount] = useState(0);
  const [romanInput, setRomanInput] = useState("");
  const [roman, setRoman] = useState("");
  const [correctRoman, setCorrectRoman] = useState(1);
  const [success, setSuccess] = useState(false);

  const audioManagerRef = useRef({
    playSound: (type: string) => console.log(`Playing ${type} sound`),
  });

  const song = songs[countIndex];
  const phrasePhysical = useMemo(() => song.physical.replace(/ /g, ""), [song]);
  const currentChar = phrasePhysical[correctChars];
  const currentRoman = roman[0];

  const handleKeyPress = (event: KeyboardEvent) => {
    if (!gameStarted) return;

    // ローマ字の対応シーケンスを取得
    const validSequences = CHAR_TABLE[currentChar] || [];
    const nextInput = userInput + event.key.toUpperCase();

    if (validSequences.some((seq) => seq.startsWith(nextInput))) {
      audioManagerRef.current.playSound("success");

      setTypeCount((type) => type + 1);
      setUserInput(nextInput);

      let nextRoman = true;
      validSequences.forEach((element) => {
        const latestInput = nextInput.slice(-1);
        let lenDiff = 0;
        if (
          element.length &&
          validSequences[0].length &&
          latestInput !== currentRoman
        ) {
          lenDiff = element.length - validSequences[0].length;
        }
        if (nextRoman && element[typeRomanCount] === latestInput) {
          nextRoman = false;
          setTypeRomanCount((chars) => chars + 1);
          setCorrectTypeCount((chars) => chars + 1);
          setRoman(roman.substring(1 - lenDiff));
          if (
            currentChar === "ち" &&
            latestInput === "C" &&
            nextInput.length === 1
          ) {
            setRoman(`${element[typeRomanCount + 1]}${roman.substring(1)}`);
          }
        }
      });

      setRomanInput((input) => input + event.key.toUpperCase());
      setCorrectRoman((chars) => chars + 1);

      if (validSequences.includes(nextInput)) {
        setUserInput("");
        setCorrectChars((chars) => chars + currentChar.length);
        setTypeRomanCount(0);

        if (correctChars + currentChar.length === phrasePhysical.length) {
          setCountIndex((index) => index + 1);
          if (songs[countIndex + 1]) {
            setRoman(toRoman(songs[countIndex + 1].physical, CHAR_TABLE));
          } else {
            setSuccess(true);
          }
        }
      }
    } else {
      setTypoCount((type) => type + 1);
      setCorrectTypeCount(0);
      audioManagerRef.current.playSound("error");
    }
  };

  useEffect(() => {
    if (!success) {
      window.addEventListener("keydown", handleKeyPress);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [success, handleKeyPress]);

  let displayIndex = 0;
  let charCount = 0;
  while (charCount < correctChars && displayIndex < song.physical.length) {
    if (song.physical[displayIndex] !== " ") {
      charCount++;
    }
    displayIndex++;
  }
  const typedPart = song.physical.substring(0, displayIndex);
  const remainingPart = song.physical.substring(displayIndex);
  const nextChar = roman[0];
  const romanQ = roman.substring(1);

  return {
    countIndex,
    typeCount,
    typoCount,
    correctTypeCount,
    roman,
    romanInput,
    correctRoman,
    typedPart,
    remainingPart,
    nextChar,
    romanQ,
    song,
  };
};
