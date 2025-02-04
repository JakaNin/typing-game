import Typography from "components/commons/Typography";
import Button from "components/commons/Button";

const Header = () => {
  return (
    <header className="bg-white border-b border-b-ap-gray-100 border-t-2 w-full sticky top-0 z-50 shadow">
      <div className="flex px-[1.625rem] flex-row h-full justify-between items-center p-4">
        <div>
          <Typography element="h1" variant="title1">
            万葉タイピング
          </Typography>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="text">
            <Typography variant="subtitle1">ランキング</Typography>
          </Button>
          <Button variant="text">
            <Typography variant="subtitle1">遊び方</Typography>
          </Button>
          <Button variant="text">
            <Typography variant="subtitle1">会社概要</Typography>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
