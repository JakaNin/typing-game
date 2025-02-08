import { SONGS } from "lib/constants/songs";
import { getRandomSongs } from "../_lib/utils/getRandomSongs";
import TypingFieldPresentation from "./TypingFieldPresentation";

const TypingField = async ({}) => {
  const songs = getRandomSongs(SONGS);
  return <TypingFieldPresentation songs={songs} />;
};

export default TypingField;
