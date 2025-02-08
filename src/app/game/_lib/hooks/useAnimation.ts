import { SpringValue, useSpring } from "@react-spring/web";
import { type AudioType } from "./useAudio";
import { useState, useEffect, useRef } from "react";

export type SpringProps = {
  bottom: SpringValue<string>;
  right: SpringValue<string>;
  opacity: SpringValue<number>;
};

export type AnimationProps = {
  flowerProps: SpringProps;
  craneProps: SpringProps;
  twoCranesProps: SpringProps;
  threeCranesProps: SpringProps;
  fourCranesProps: SpringProps;
  fiveCranesProps: SpringProps;
  moreCranesProps: SpringProps;
};

export const useAnimation = (
  typeCount: number,
  justAdded1Sec: boolean,
  audio: AudioType,
) => {
  const [craneShow, setCraneShow] = useState(false);
  const [twoCranesShow, setTwoCranesShow] = useState(false);
  const [threeCranesShow, setThreeCranesShow] = useState(false);
  const [fourCranesShow, setFourCranesShow] = useState(false);
  const [fiveCranesShow, setFiveCranesShow] = useState(false);
  const [moreCranesShow, setMoreCranesShow] = useState(false);
  const audioRef = useRef(audio);

  useEffect(() => {
    if (typeCount === 100) setCraneShow(true);
    if (typeCount === 200) setTwoCranesShow(true);
    if (typeCount === 300) setThreeCranesShow(true);
    if (typeCount === 400) setFourCranesShow(true);
    if (typeCount === 500) setFiveCranesShow(true);
    if (typeCount >= 600 && typeCount % 100 === 0) setMoreCranesShow(true);
    if (typeCount % 100 === 0) {
      if (typeCount === 100) {
        audioRef.current.playCraneFlySound();
      } else {
        audioRef.current.playCranesFlySound();
      }
    }
  }, [typeCount]);

  const flowerProps = useSpring({
    from: { bottom: "90%", right: "0%", opacity: 0 },
    to: async (next) => {
      if (justAdded1Sec) {
        await next({ bottom: "100%", right: "0%", opacity: 1 });
      } else {
        await next({ bottom: "90%", right: "0%", opacity: 0 });
      }
    },
  });

  const craneProps = useSpring({
    from: { bottom: "0%", right: "100%", opacity: 0 },
    to: async (next) => {
      if (craneShow) {
        await next({ bottom: "100%", right: "0%", opacity: 1 });
      } else {
        await next({ opacity: 0 });
      }
    },
    config: { duration: 800 },
    onRest: () => {
      if (craneShow) setCraneShow(false);
    },
  });
  const twoCranesProps = useSpring({
    from: { bottom: "0%", right: "100%", opacity: 0 },
    to: async (next) => {
      if (twoCranesShow) {
        await next({ bottom: "100%", right: "0%", opacity: 1 });
      } else {
        await next({ opacity: 0 });
      }
    },
    config: { duration: 800 },
    onRest: () => {
      if (twoCranesShow) setTwoCranesShow(false);
    },
  });
  const threeCranesProps = useSpring({
    from: { bottom: "0%", right: "100%", opacity: 0 },
    to: async (next) => {
      if (threeCranesShow) {
        await next({ bottom: "100%", right: "0%", opacity: 1 });
      } else {
        await next({ opacity: 0 });
      }
    },
    config: { duration: 800 },
    onRest: () => {
      if (threeCranesShow) setThreeCranesShow(false);
    },
  });
  const fourCranesProps = useSpring({
    from: { bottom: "0%", right: "100%", opacity: 0 },
    to: async (next) => {
      if (fourCranesShow) {
        await next({ bottom: "100%", right: "0%", opacity: 1 });
      } else {
        await next({ opacity: 0 });
      }
    },
    config: { duration: 800 },
    onRest: () => {
      if (fourCranesShow) setFourCranesShow(false);
    },
  });
  const fiveCranesProps = useSpring({
    from: { bottom: "0%", right: "100%", opacity: 0 },
    to: async (next) => {
      if (fiveCranesShow) {
        await next({ bottom: "100%", right: "0%", opacity: 1 });
      } else {
        await next({ opacity: 0 });
      }
    },
    config: { duration: 800 },
    onRest: () => {
      if (fiveCranesShow) setFiveCranesShow(false);
    },
  });
  const moreCranesProps = useSpring({
    from: { bottom: "0%", right: "100%", opacity: 0 },
    to: async (next) => {
      if (moreCranesShow) {
        await next({ bottom: "100%", right: "0%", opacity: 1 });
      } else {
        await next({ opacity: 0 });
      }
    },
    config: { duration: 800 },
    onRest: () => {
      if (moreCranesShow) setMoreCranesShow(false);
    },
  });
  return {
    flowerProps,
    craneProps,
    twoCranesProps,
    threeCranesProps,
    fourCranesProps,
    fiveCranesProps,
    moreCranesProps,
  };
};
