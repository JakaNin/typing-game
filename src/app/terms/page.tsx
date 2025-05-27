import Line from "components/commons/SeparateLine";
import Typography from "components/commons/Typography";
import React from "react";

const SubTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography variant="title1" className="text-2xl">
      {children}
    </Typography>
  );
};

const Terms = async () => {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex flex-col items-start bg-ap-transparentWhite-300 py-8 px-6 gap-6 w-2/3">
        <Typography variant="title1" className="text-4xl">
          利用規約（Terms of Service）
        </Typography>
        <div className="flex flex-col gap-2">
          <Typography className="font-bold">
            最終更新日: [令和7年05月17日]
          </Typography>
          <Typography>
            この利用規約（以下、「本規約」といいます）は、万葉タイピング（以下、「本サービス」といいます）の利用条件を定めるものです。本サービスをご利用いただく前に、本規約をよくお読みください。
          </Typography>
        </div>
        <Line />
        <SubTitle>1. 適用</SubTitle>
        <Typography>
          本規約は、ユーザーと運営者との間の本サービスの利用に関わる一切の関係に適用されます。
        </Typography>
        <Line />
        <SubTitle>2. 禁止事項</SubTitle>
        <Typography>ユーザーは、以下の行為をしてはなりません：</Typography>
        <ul className="list-disc list-inside pl-4">
          <li>法令または公序良俗に違反する行為</li>
          <li>本サービスのサーバーやネットワークの機能を妨害する行為</li>
          <li>不正アクセスをし、またはこれを試みる行為</li>
        </ul>
        <Line />
        <SubTitle>3. 免責事項</SubTitle>
        <Typography>
          本サービスの利用により生じたあらゆる損害について、運営者は一切の責任を負いません。
        </Typography>
        <Line />
        <SubTitle>4. 規約変更</SubTitle>
        <Typography>
          運営者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができます。
        </Typography>
        <Line />
        <SubTitle>5. お問い合わせ</SubTitle>
        <Typography>
          本規約に関するお問い合わせは、
          <a href="/contact" className="text-ap-blue-800 underline">
            お問い合わせフォーム
          </a>
          または hoge.example@vitalize.co.jp までお願いいたします。
        </Typography>
      </div>
    </div>
  );
};

export default Terms;
