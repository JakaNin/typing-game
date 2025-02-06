import { useSpring } from "@react-spring/web";
// import { useAudio } from "./useAudio";

export const useCrane = (typeCount: number, opacity: number) => {
  // const { audioManager } = useAudio()

  const craneShow = typeCount === 100;
  const twoCranesShow = typeCount === 200;
  const threeCranesShow = typeCount === 300;
  const fourCranesShow = typeCount === 400;
  const fiveCranesShow = typeCount === 500;
  const sixCranesShow = typeCount === 600;

  const craneFlying = typeCount % 100 === 0;

  // if (craneFlying && craneShow) audioManager?.playSound("crane_flys")
  // if (craneFlying && !craneShow) audioManager?.playSound("cranes_fly")

  const initAnimatedprops = useSpring({
    from: { bottom: "90%", right: "0%", opacity: 0 },
    to: async (next) => {
      if (opacity === 1) {
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
  });

  const sixCranesProps = useSpring({
    from: { bottom: "0%", right: "100%", opacity: 0 },
    to: async (next) => {
      if (sixCranesShow) {
        await next({ bottom: "100%", right: "0%", opacity: 1 });
      } else {
        await next({ opacity: 0 });
      }
    },
    config: { duration: 800 },
  });

  return {
    initAnimatedprops,
    craneProps,
    twoCranesProps,
    threeCranesProps,
    fourCranesProps,
    fiveCranesProps,
    sixCranesProps,
  };
};
