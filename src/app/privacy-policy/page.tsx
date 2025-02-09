import Line from "components/commons/SeparateLine";
import Typography from "components/commons/Typography";
import Link from "next/link";
import React from "react";

const SubTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography variant="title1" className="text-2xl">
      {children}
    </Typography>
  );
};

const PrivacyPolicy = async () => {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex flex-col items-start bg-ap-transparentWhite-300 py-8 px-6 gap-6 w-2/3">
        <Typography variant="title1" className="text-4xl">
          プライバシーポリシー（Privacy Policy）
        </Typography>
        <div className="flex flex-col gap-2">
          <Typography className="font-bold">
            最終更新日: [令和7年02月09日]
          </Typography>
          <Typography>
            このプライバシーポリシーは、[万葉タイピング]（以下、「本サービス」といいます）がユーザーからどのように情報を収集し、使用し、保護するかについて説明します。
          </Typography>
        </div>

        <Line />

        <SubTitle>1. 収集する情報</SubTitle>
        <Typography>
          本サービスでは、以下の情報を収集する場合があります：
        </Typography>
        <ul className="list-disc list-inside pl-4">
          <li>
            IPアドレス、デバイス情報、ブラウザ情報、訪問日時など、サービス提供のために必要な技術的な情報
          </li>
          <li>Google 広告の表示や効果測定に関連する情報</li>
          <li>ユーザーが提供するゲームスコアやランキングデータなどの情報</li>
        </ul>

        <Line />

        <SubTitle>2. 情報の利用目的</SubTitle>
        <Typography>
          本サービスでは、収集した情報を以下の目的で利用します：
        </Typography>
        <ul className="list-disc list-inside pl-4">
          <li>サービスの提供および維持</li>
          <li>ユーザー体験の向上</li>
          <li>サービスの分析と改善</li>
          <li>広告のパーソナライズおよび広告効果の測定（Google 広告）</li>
        </ul>

        <Line />

        <SubTitle>3. 情報の共有</SubTitle>
        <Typography>
          本サービスでは、以下の場合を除き、収集した情報を第三者に共有することはありません：
        </Typography>
        <ul className="list-disc list-inside pl-4">
          <li>法律に基づく要請があった場合</li>
          <li>サービス提供に必要な外部サービス（例：Google 広告）との連携時</li>
        </ul>
        <Typography>
          Google 広告の仕組みについて詳しく知りたい場合は、{" "}
          <a
            href="https://policies.google.com/technologies/ads?hl=ja"
            target="_blank"
            className="text-ap-blue-800 underline"
            rel="noreferrer"
          >
            Google 広告に関するプライバシーポリシー
          </a>{" "}
          をご確認ください。
        </Typography>

        <Line />

        <SubTitle>4. クッキーおよびトラッキング技術</SubTitle>
        <Typography>
          本サービスでは、Cookie
          や類似のトラッキング技術を使用してサービスを改善し、広告のパーソナライズを行います。Cookie
          を無効にするには、ユーザーのブラウザ設定から行ってください。
        </Typography>

        <Line />

        <SubTitle>5. セキュリティ</SubTitle>
        <Typography>
          本サービスは、ユーザーの情報を保護するために適切なセキュリティ対策を講じていますが、インターネット上の完全な安全性を保証するものではありません。
        </Typography>

        <Line />

        <SubTitle>6. ユーザーの権利</SubTitle>
        <div>
          <Typography element="span">
            ユーザーは、収集された情報へのアクセス、訂正、削除を要求する権利があります。これに関するお問い合わせは、
          </Typography>
          <Link href="/contact">
            <Typography className="text-ap-blue-800 underline" element="span">
              お問い合わせフォーム
            </Typography>
          </Link>
          <Typography element="span">
            {" "}
            または、admin@nanimiru.jpまでご連絡ください。
          </Typography>
        </div>

        <Line />

        <SubTitle>7. 他のサイトへのリンク</SubTitle>
        <Typography>
          本サービスには、外部サイトへのリンクが含まれる場合があります。これらの外部サイトのプライバシーポリシーについては責任を負いませんのでご注意ください。
        </Typography>

        <Line />

        <SubTitle>8. プライバシーポリシーの変更</SubTitle>
        <Typography>
          本プライバシーポリシーは随時更新されることがあります。変更があった場合は、本ページにて通知します。
        </Typography>

        <Line />

        <SubTitle>9. お問い合わせ</SubTitle>
        <div>
          <Typography element="span">
            プライバシーに関するご質問やリクエストは、
          </Typography>
          <Link href="/contact">
            <Typography className="text-ap-blue-800 underline" element="span">
              お問い合わせフォーム
            </Typography>
          </Link>
          <Typography element="span">
            {" "}
            または、以下の連絡先までお問い合わせください：
          </Typography>
        </div>
        <ul className="list-disc list-inside pl-4">
          <li>メールアドレス: admin@nanimiru.jp</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
