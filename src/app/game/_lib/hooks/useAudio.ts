import { useEffect, useRef } from "react";
import { AudioManager } from "utils/audioManager";

export type AudioType = {
  playStartSound: () => void;
  playSuccessSound: () => void;
  playErrorSound: () => void;
  playAdd1SecSound: () => void;
  playCraneFlySound: () => void;
  playCranesFlySound: () => void;
  playFinishedSound: () => void;
};

export const useAudio = () => {
  const audioManagerRef = useRef<AudioManager | null>(null);

  useEffect(() => {
    const initSound = async () => {
      audioManagerRef.current = new AudioManager();
      const sounds = {
        success: "/sounds/typing.mp3",
        error: "/sounds/beep.mp3",
        play_start: "/sounds/taiko_dodon.mp3",
        add_1sec: "/sounds/kotsudumi.mp3",
        crane_flys: "/sounds/bird.mp3",
        cranes_fly: "/sounds/birds.mp3",
        finished: "/sounds/drop.mp3",
      };

      try {
        // NOTE: 全てのサウンドをロードし、完了後に再生
        await audioManagerRef.current.loadAllSounds(sounds);
        audioManagerRef.current.playSound("play_start");
      } catch (error) {
        console.error("サウンドのロード中にエラーが発生しました:", error);
      }
    };

    initSound();
  }, []);

  const playStartSound = () => {
    audioManagerRef.current?.playSound("play_start");
  };
  const playSuccessSound = () => {
    audioManagerRef.current?.playSound("success");
  };
  const playErrorSound = () => {
    audioManagerRef.current?.playSound("error");
  };
  const playAdd1SecSound = () => {
    audioManagerRef.current?.playSound("add_1sec");
  };
  const playCraneFlySound = () => {
    audioManagerRef.current?.playSound("crane_flys");
  };
  const playCranesFlySound = () => {
    audioManagerRef.current?.playSound("cranes_fly");
  };
  const playFinishedSound = () => {
    audioManagerRef.current?.playSound("finished");
  };

  return {
    playStartSound,
    playSuccessSound,
    playErrorSound,
    playAdd1SecSound,
    playCraneFlySound,
    playCranesFlySound,
    playFinishedSound,
  };
};
