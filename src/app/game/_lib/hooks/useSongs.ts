import { useRef, useState, useEffect } from "react";
import { SONGS } from "lib/constants/songs";
import type { Song } from "lib/constants/songs";

const getRandomSubarray = (arr: Song[], size: number) => {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
};

const fetchData = async () => {
  return getRandomSubarray(SONGS, SONGS.length);
};

export const useSongs = () => {
  const [phrases, setPhrases] = useState([]); // 追加
  const [phrase, setPhrase] = useState<Song>({
    physical: "",
    logical: "",
    label: null,
    song_number: null,
    author: "",
    meaning: "",
  });

  fetchData()
    .then((phrasesArray) => {
      setPhrases(phrasesArray);
      setPhrase(phrasesArray[countIndex]);
      setRoman(toRoman(phrasesArray[countIndex].physical, CHAR_TABLE));
    })
    .catch(console.error);
};
