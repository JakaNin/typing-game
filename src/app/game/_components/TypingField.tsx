import LastSecond from "./LastSecond";
import CurrentScore from "./CurrentScore";
import ProgressBar from "./ProgressBar";
import SongInfo from "./SongInfo";
import TypingSong from "./TypingSong";
import { SONGS } from "lib/constants/songs";
import { getRandomSongs } from "../_lib/utils/getRandomSongs";

const TypingField = async ({}) => {
  const songs = getRandomSongs(SONGS);
  const song = songs[0];
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-row justify-between w-[80%] pb-5">
        <LastSecond lastSecond={10} />
        <CurrentScore currentScore={10000} />
      </div>

      <ProgressBar progress={70} />

      <TypingSong />

      <SongInfo song={song} />
    </div>
  );
};

export default TypingField;
