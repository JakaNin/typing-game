import Typography from "components/commons/Typography";
import GameStartButton from "./GameStartButton";

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
        <div className="flex flex-col gap-2 items-center pt-10">
          <GameStartButton />
          <Typography variant="caption">
            ※スペースかEnterキーを押すと開始します
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default BeforeStart;
