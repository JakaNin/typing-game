import TypingKanaPart from "./TypingKanaPart";
import CurrentSong from "./CurrentSong";
import TypingRoman from "./TypingRoman";

const TypingSong = ({}) => {
  return (
    <div className="bg-ap-transparentBlack-700 w-[80%] h-full font-sans">
      <div className="py-20 px-10">
        <div className="text-center py-8 flex flex-col gap-5">
          <TypingKanaPart />
          <CurrentSong />
          <TypingRoman />
        </div>
      </div>
    </div>
  );
};

export default TypingSong;
