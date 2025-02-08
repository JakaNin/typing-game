import { AudioManager } from "utils/audioManager";
import { useRef, useEffect } from "react";

export const useAudio = () => {
  const audioManagerRef = useRef<AudioManager | null>(null);
  const initSound = () => {
    // AudioManagerインスタンスを作成し、サウンドをプリロード
    audioManagerRef.current = new AudioManager();
    audioManagerRef.current.loadSound("success", "/sounds/typing.mp3");
    audioManagerRef.current.loadSound("error", "/sounds/beep.mp3");
    audioManagerRef.current.loadSound("play_start", "/sounds/taiko_dodon.mp3");
    audioManagerRef.current.loadSound("add_1sec", "/sounds/kotsudumi.mp3");
    audioManagerRef.current.loadSound("crane_flys", "/sounds/bird.mp3");
    audioManagerRef.current.loadSound("cranes_fly", "/sounds/birds.mp3");
  };

  useEffect(() => {
    // サウンドを初期化
    initSound();
  }, []);

  if (!audioManagerRef?.current) return { audioManager: undefined };

  return {
    audioManager: audioManagerRef.current,
  };
};
