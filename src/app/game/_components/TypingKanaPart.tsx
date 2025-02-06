import Typography from "components/commons/Typography";

const TypingKanaPart = ({}) => {
  const typedPartClass = "text-xl text-ap-gray-700 tracking-widest";
  const remainingPartClass = "text-xl text-white tracking-widest";
  return (
    <div>
      <Typography element="span" className={typedPartClass}>
        {"typedPart"}
      </Typography>
      <Typography element="span" className={remainingPartClass}>
        {"remainingPart"}
      </Typography>
    </div>
  );
};

export default TypingKanaPart;
