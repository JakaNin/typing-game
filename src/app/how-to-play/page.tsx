import Typography from "components/commons/Typography";
import GameStartButton from "components/top/GameStartButton";

const HowToPlay = async () => {
  return (
    <div className="flex flex-col items-center gap-10 py-8">
      <div className="flex flex-col items-center p-6 sm:p-10 bg-ap-transparentWhite-300 shadow-m w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] shadow-2xl gap-8 sm:gap-16 pb-16 sm:pb-24 rounded-3xl mx-4 sm:mx-0">
        <div>
          <Typography
            variant="title1"
            className="text-3xl sm:text-4xl bg-gradient-to-r from-ap-orange-700 to-ap-orange-500 bg-clip-text text-transparent"
          >
            遊び方
          </Typography>
        </div>
        <div className="flex flex-col gap-2 justify-start w-full px-4 sm:px-8">
          <Typography
            variant="body2"
            className="text-xl sm:text-2xl bg-gradient-to-r from-ap-orange-700 to-ap-orange-500 bg-clip-text text-transparent"
          >
            はじめに
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant="body2" className="break-words">
              ・
              和歌山にゆかりのある万葉集を題材にたのしくタイピングをしましょう
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-start w-full px-4 sm:px-8">
          <Typography
            variant="body2"
            className="text-xl sm:text-2xl bg-gradient-to-r from-ap-orange-700 to-ap-orange-500 bg-clip-text text-transparent"
          >
            ルール
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant="body2">・ 時間制限は６０秒</Typography>
            <Typography variant="body2" className="break-words">
              ・ 連続正解が続くと残り秒数が追加されます
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-start w-full px-4 sm:px-8">
          <Typography
            variant="body2"
            className="text-xl sm:text-2xl bg-gradient-to-r from-ap-orange-700 to-ap-orange-500 bg-clip-text text-transparent"
          >
            打ち方
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant="body2" className="break-words">
              ・ 表示されているキー以外にもお好みの打ち方でタイピングが可能です
            </Typography>
            <Typography variant="body2" className="break-words">
              例：「し」→「si」、「shi」、「ci」のどれでも可
            </Typography>
          </div>
        </div>
      </div>
      <GameStartButton />
    </div>
  );
};

export default HowToPlay;
