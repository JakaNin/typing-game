import Typography from "components/commons/Typography";
import type { Song } from "lib/constants/songs";

type Props = {
  song: Song;
};

const CurrentSong = ({ song }: Props) => {
  const currentSongClass = "text-3xl tracking-widest text-white";
  return (
    <div>
      <Typography className={currentSongClass}>{song.logical}</Typography>
    </div>
  );
};

export default CurrentSong;
