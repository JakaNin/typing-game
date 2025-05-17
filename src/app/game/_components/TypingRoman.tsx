import Typography from "components/commons/Typography";
import { twMerge } from "tailwind-merge";

type Props = {
  typingChars: {
    typedRoman: string;
    remainingRoman: string;
    typedKana: string;
    remainingKana: string;
  };
};

const TypingRoman = ({ typingChars }: Props) => {
  const divClass = " whitespace-pre-wrap break-all";
  const commonClass = "tracking-wide text-xl";
  const inputtedClass = "text-ap-gray-700";
  const nextCharClass = "bg-gradient-to-r from-ap-orange-700 to-ap-orange-500 bg-clip-text text-transparent";
  const remainingClass = "text-white";

  const typedRoman = typingChars.typedRoman;
  const nextRoman = typingChars.remainingRoman[0];
  const remainingRoman = typingChars.remainingRoman.slice(1);

  return (
    <div className={divClass}>
      <Typography
        element="span"
        className={twMerge(commonClass, inputtedClass)}
      >
        {typedRoman}
      </Typography>
      <Typography
        element="span"
        className={twMerge(commonClass, nextCharClass)}
      >
        {nextRoman}
      </Typography>
      <Typography
        element="span"
        className={twMerge(commonClass, remainingClass)}
      >
        {remainingRoman}
      </Typography>
    </div>
  );
};

export default TypingRoman;
