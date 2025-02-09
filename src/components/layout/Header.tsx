import Typography from "components/commons/Typography";
import Button from "components/commons/Button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-ap-transparentWhite-900 border-b border-b-ap-gray-100 border-t-2 w-full sticky top-0 z-50 shadow">
      <div className="flex px-[1.625rem] flex-row h-full justify-between items-center p-4">
        <Link href="/">
          <Typography element="h1" variant="title1">
            万葉タイピング
          </Typography>
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/ranking">
            <Button variant="text">
              <Typography variant="subtitle1">ランキング</Typography>
            </Button>
          </Link>
          <Link href="/how-to-play">
            <Button variant="text">
              <Typography variant="subtitle1">遊び方</Typography>
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="text">
              <Typography variant="subtitle1">会社概要</Typography>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
