import Button from "components/commons/Button";
import Typography from "components/commons/Typography";
import ReloadIcon from "components/images/ReloadIcon";
import Link from "next/link";

const Ranking = async () => {
  return (
    <div className="self-end justify-end">
      <Link href="/">
        <Button variant="primary" className="flex items-center gap-1">
          <ReloadIcon className="w-5 h-5" fill="white" />
          <Typography variant="subtitle1" className="text-xl text-white">
            ゲーム開始
          </Typography>
        </Button>
      </Link>
    </div>
  );
};

export default Ranking;
