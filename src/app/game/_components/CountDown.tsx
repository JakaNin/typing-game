import Typography from "components/commons/Typography";
import { toKanjiNumber } from "utils/toKanjiNumber";

type Props = {
  countdown: number;
};

const CountdownDisplay = ({ countdown }: Props) => {
  const count = toKanjiNumber(countdown);
  return (
    <div className="text-center">
      <Typography variant="title1" className="animate-bounce">
        {count}
      </Typography>
    </div>
  );
};
export default CountdownDisplay;
