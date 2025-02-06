import Typography from "components/commons/Typography";

type Props = {
  currentScore: number;
};

const CurrentScore = ({ currentScore }: Props) => {
  return (
    <div className="flex items-end gap-3">
      <Typography element="span" variant="body1">
        スコア:
      </Typography>
      <Typography element="span" variant="number1">
        {currentScore}
      </Typography>
    </div>
  );
};

export default CurrentScore;
