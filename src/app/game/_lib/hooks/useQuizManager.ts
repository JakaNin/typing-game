import { useState } from "react";
import type { Song } from "lib/constants/songs";

export const useQuizManager = (songs: Song[]) => {
  const [countIndex, setCountIndex] = useState(0);
  const song = songs[countIndex];
  return {
    countIndex,
    setCountIndex,
    song,
  };
};
