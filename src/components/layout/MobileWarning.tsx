import Line from "components/commons/SeparateLine";
import Typography from "components/commons/Typography";

const MobileWarning = async () => {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex flex-col items-start bg-ap-transparentWhite-300 py-8 px-6 gap-6 w-[90%]">
        <Typography variant="title1" className="text-xl text-ap-orange-800">
          万葉タイピング
        </Typography>

        <Line />

        <Typography variant="body2" className="text-md">
          万葉タイピングにアクセスいただきありがとうございます。
        </Typography>
        <div className="flex flex-col">
          <Typography variant="body2" className="text-md">
            このサイトはモバイル端末に対応していません。
          </Typography>
          <Typography variant="body2" className="text-md">
            PC端末からアクセスしてください。
          </Typography>
        </div>
        <div className="pt-2">
          <Typography variant="body2" className="text-md">
            お問い合わせについては、admin@nanimiru.jpまでお気軽にメールにてご連絡ください
          </Typography>
        </div>
        <Typography variant="body2" className="text-md">
          引き続き万葉タイピングをよろしくお願いいたします。
        </Typography>
      </div>
    </div>
  );
};

export default MobileWarning;
