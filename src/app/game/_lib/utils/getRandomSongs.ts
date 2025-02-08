import type { Song } from "lib/constants/songs";

export const getRandomSongs = (arr: Song[], size?: number) => {
  if (!size) size = arr.length;
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
};
