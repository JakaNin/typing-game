import Typography from "components/commons/Typography";
import GameStartButton from "components/top/GameStartButton";

const HowToPlay = async () => {
  return (
    <div className="flex flex-col items-center gap-10 py-8">
      <div className="flex flex-col items-center p-10 bg-ap-transparentWhite-300 shadow-m w-[60%] shadow-2xl gap-16 pb-24">
        <div>
          <Typography variant="title1" className="text-4xl text-ap-orange-800">
            遊び方
          </Typography>
        </div>
        <div className="flex flex-col gap-2 justify-start w-full px-8">
          <Typography variant="body2" className="text-2xl text-ap-orange-800">
            はじめに
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant="body2">
              ・
              和歌山にゆかりのある万葉集を題材にたのしくタイピングをしましょう
            </Typography>
            <Typography variant="body2">
              ・ゲームの特性上PC端末からのアクセスのみを想定しています
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-start w-full px-8">
          <Typography variant="body2" className="text-2xl text-ap-orange-800">
            ルール
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant="body2">・ 時間制限は６０秒</Typography>
            <Typography variant="body2">
              ・ 連続正解が続くと残り秒数が追加されます
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-start w-full px-8">
          <Typography variant="body2" className="text-2xl text-ap-orange-800">
            打ち方
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant="body2">
              ・ 表示されているキー以外にもお好みの打ち方でタイピングが可能です
            </Typography>
            <Typography variant="body2">
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
