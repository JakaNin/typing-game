import Button from "components/commons/Button";
import Link from "next/link";

const BeforeStart = () => {
  return (
    <div className="flex mx-20">
      <div className="w-full pl-20 pr-20 pt-10">
        <div className="flex flex-col items-center w-full h-auto bg-[#ffffff40] shadow-m shadow-2xl gap-16">
          <div className=" flex flex-col items-center font-semibold tracking-widest mt-5 text-5xl text-ap-orange-700 pt-5 pb-8">
            今日のランキング
            <div className="w-full"></div>
          </div>
        </div>
        <div className="flex flex-col items-center pt-10">
          <Link href="/game">
            <Button className="px-20 py-5 text-3xl" variant="primary">
              ゲーム開始
            </Button>
          </Link>
          <p className="text-ap-gray-500 text-sm mt-2">
            ※スペースかEnterキーを押すと開始します
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeforeStart;
