import Typography from "components/commons/Typography";
import { twMerge } from "tailwind-merge";

const TypingRoman = ({}) => {
  const divClass = " whitespace-pre-wrap break-all";
  const commonClass = "tracking-wide text-xl";
  const inputtedClass = "text-ap-gray-700";
  const nextCharClass = "text-ap-orange-700";
  const remainingClass = "text-white";
  return (
    <div className={divClass}>
      <Typography
        element="span"
        className={twMerge(commonClass, inputtedClass)}
      >
        {"romanInput"}
      </Typography>
      <Typography
        element="span"
        className={twMerge(commonClass, nextCharClass)}
      >
        {"nextChar"}
      </Typography>
      <Typography
        element="span"
        className={twMerge(commonClass, remainingClass)}
      >
        {"romanQ"}
      </Typography>
    </div>
  );
};

export default TypingRoman;
