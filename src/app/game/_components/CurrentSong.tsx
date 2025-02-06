import Typography from "components/commons/Typography";

const CurrentSong = ({}) => {
  const currentSongClass = "text-3xl tracking-widest text-white";
  return (
    <div>
      <Typography className={currentSongClass}>{"song.logical"}</Typography>
    </div>
  );
};

export default CurrentSong;
