import Typography from "components/commons/Typography";

type Props = {
  typingChars: {
    typedRoman: string;
    remainingRoman: string;
    typedKana: string;
    remainingKana: string;
  };
};

const TypingKanaPart = ({ typingChars }: Props) => {
  const typedPartClass = "text-xl text-ap-gray-700 tracking-widest";
  const remainingPartClass = "text-xl text-white tracking-widest";

  const typedKana = typingChars.typedKana;
  const remainingKana = typingChars.remainingKana;
  return (
    <div>
      <Typography element="span" className={typedPartClass}>
        {typedKana}
      </Typography>
      <Typography element="span" className={remainingPartClass}>
        {remainingKana}
      </Typography>
    </div>
  );
};

export default TypingKanaPart;
