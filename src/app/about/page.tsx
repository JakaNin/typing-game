import Line from "components/commons/SeparateLine";
import Typography from "components/commons/Typography";
import Link from "next/link";

const About = async () => {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex flex-col items-start bg-ap-transparentWhite-300 py-8 px-6 gap-6 w-2/3">
        <Typography variant="title1" className="text-4xl">
          サイトについて
        </Typography>
        <div className="flex flex-col gap-2">
          <Typography>
            万葉タイピングは、和歌山ゆかりの万葉集を題材としたタイピングゲームです。楽しくプレイしながら万葉集の世界に触れていただくことを目的としています。
          </Typography>
          <Typography element="span">ご意見やご質問は、</Typography>
          <Link href="/contact">
            <Typography element="span" className="text-ap-blue-800 underline">
              お問い合わせフォーム
            </Typography>
          </Link>
          <Typography element="span">からお寄せください。</Typography>
          <Typography>
            利用規約は
            <Link href="/terms" className="text-ap-blue-800 underline">
              こちら
            </Link>
            をご覧ください。
          </Typography>
        </div>
        <Line />
        <Typography>運営者連絡先: jin.nakamura@kaze.jp</Typography>
      </div>
    </div>
  );
};

export default About;
