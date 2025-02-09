import Button from "components/commons/Button";
import Typography from "components/commons/Typography";
import Link from "next/link";

const Thanks = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex flex-col items-center py-8 px-6 gap-8 w-2/3">
        <Typography variant="title1" className="text-4xl">
          お問い合わせありがとうございました!
        </Typography>
        <Typography variant="body3">
          この度はお問い合わせいただき、誠にありがとうございます。
        </Typography>
        <Typography variant="body3">
          ご入力いただいた内容を確認の上、担当者よりご連絡いたします。
        </Typography>
        <Typography variant="body3">
          引き続き万葉タイピングをよろしくお願いいたします。
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
export default Thanks;
