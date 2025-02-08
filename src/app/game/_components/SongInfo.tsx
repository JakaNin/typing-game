import { Song } from "lib/constants/songs";
import Typography from "components/commons/Typography";

type Props = {
  song: Song;
};

const SongInfo = ({ song }: Props) => {
  return (
    <div className="flex flex-row justify-end gap-5 w-[80%] pt-5">
      <Typography variant="body2">第{song.label}巻 </Typography>
      <Typography variant="body2">{song.song_number}番歌</Typography>
      <Typography variant="body2">{song.author}</Typography>
    </div>
  );
};

export default SongInfo;
