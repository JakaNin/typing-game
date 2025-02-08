import TypingKanaPart from "./TypingKanaPart";
import CurrentSong from "./CurrentSong";
import TypingRoman from "./TypingRoman";
import type { Song } from "lib/constants/songs";

type Props = {
  song: Song;
  typingChars: {
    typedRoman: string;
    remainingRoman: string;
    typedKana: string;
    remainingKana: string;
  };
};

const TypingSong = ({ song, typingChars }: Props) => {
  return (
    <div className="bg-ap-transparentBlack-700 w-[80%] h-full font-sans">
      <div className="py-20 px-10">
        <div className="text-center py-8 flex flex-col gap-5">
          <TypingKanaPart typingChars={typingChars} />
          <CurrentSong song={song} />
          <TypingRoman typingChars={typingChars} />
        </div>
      </div>
    </div>
  );
};

export default TypingSong;
