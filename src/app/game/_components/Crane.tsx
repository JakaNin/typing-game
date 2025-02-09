import { animated } from "@react-spring/web";
import Image from "next/image";

import type { AnimationProps } from "../_lib/hooks/useAnimation";

type Props = {
  animation: AnimationProps;
};
const Crane = ({ animation }: Props) => {
  const {
    craneProps,
    twoCranesProps,
    threeCranesProps,
    fourCranesProps,
    fiveCranesProps,
    moreCranesProps,
  } = animation;
  return (
    <>
      <animated.div
        style={craneProps}
        className="absolute bottom-0 right-0 z-50"
      >
        <Image src="/images/crane.svg" alt="crane" width={80} height={80} />
      </animated.div>
      <animated.div
        style={twoCranesProps}
        className="absolute bottom-0 right-0 z-50"
      >
        <Image
          src="/images/two_cranes.svg"
          alt="two_cranes"
          width={80}
          height={80}
        />
      </animated.div>
      <animated.div
        style={threeCranesProps}
        className="absolute bottom-0 right-0 z-50"
      >
        <Image
          src="/images/three_cranes.svg"
          alt="three_cranes"
          width={80}
          height={80}
        />
      </animated.div>
      <animated.div
        style={fourCranesProps}
        className="absolute bottom-0 right-0 z-50"
      >
        <Image
          src="/images/four_cranes.svg"
          alt="four_cranes"
          width={80}
          height={80}
        />
      </animated.div>
      <animated.div
        style={fiveCranesProps}
        className="absolute bottom-0 right-0 z-50"
      >
        <Image
          src="/images/five_cranes.svg"
          alt="five_cranes"
          width={80}
          height={80}
        />
      </animated.div>
      <animated.div
        style={moreCranesProps}
        className="absolute bottom-0 right-0 z-50"
      >
        <Image
          src="/images/six_cranes.svg"
          alt="six_cranes"
          width={80}
          height={80}
        />
      </animated.div>
    </>
  );
};

export default Crane;
