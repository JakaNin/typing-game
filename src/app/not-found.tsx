import Button from "components/commons/Button";
import Typography from "components/commons/Typography";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex flex-col items-center py-8 px-6 gap-8 w-2/3">
        <Typography variant="title1" className="text-4xl">
          お探しのページが見つかりませんでした
        </Typography>
        <Link href="/">
          <Button variant="primary" className="py-4 px-6">
            <Typography className="text-white text-3xl">
              トップページに戻る
            </Typography>
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
