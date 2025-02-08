import Typography from "components/commons/Typography";

type Props = {
  lastSecond: number;
};

const LastSecond = ({ lastSecond }: Props) => {
  return (
    <div className="flex items-end gap-3">
      <Typography element="span" variant="body1">
        残り
      </Typography>
      <Typography element="span" variant="number1">
        {lastSecond}
      </Typography>
      <Typography element="span" variant="body1">
        秒
      </Typography>
    </div>
  );
};

export default LastSecond;
