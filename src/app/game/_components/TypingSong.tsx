import TypingKanaPart from "./TypingKanaPart";
import CurrentSong from "./CurrentSong";
import TypingRoman from "./TypingRoman";
import type { Song } from "lib/constants/songs";
import type { SpringProps } from "../_lib/hooks/useAnimation";
import { animated } from "@react-spring/web";
import Image from "next/image";

type Props = {
  song: Song;
  typingChars: {
    typedRoman: string;
    remainingRoman: string;
    typedKana: string;
    remainingKana: string;
  };
  flower: SpringProps;
};

const TypingSong = ({ song, typingChars, flower }: Props) => {
  return (
    <>
      <div className="bg-ap-transparentBlack-700 w-[80%] h-full font-sans relative">
        <div className="py-20 px-10">
          <div className="text-center py-8 flex flex-col gap-5">
            <TypingKanaPart typingChars={typingChars} />
            <CurrentSong song={song} />
            <TypingRoman typingChars={typingChars} />
          </div>
        </div>
        <animated.div style={flower} className="absolute right-0 bottom-[90%]">
          <Image
            src="/images/flowers.svg"
            alt="flowers"
            width={80}
            height={80}
          />
        </animated.div>
      </div>
    </>
  );
};

export default TypingSong;
