import React from "react";

export const metadata = {
  title: "タイピングゲームの遊び方 - 万葉タイピング",
  description:
    "和歌山の万葉集をテーマにしたタイピングゲームのルールと遊び方の説明。初心者でも簡単に楽しめます！",
  keywords: ["遊び方", "タイピングのルール", "初心者向け", "和歌山", "万葉集"],
  openGraph: {
    title: "タイピングゲームの遊び方 - 万葉タイピング",
    description:
      "和歌山や万葉集の魅力を体験できるタイピングゲームの遊び方を紹介します。",
    url: "https://manyo-typing.com/how-to-play",
    images: [
      {
        url: "https://manyo-typing.com/ogp-how-to-play.png",
        width: 800,
        height: 600,
        alt: "タイピングゲームの遊び方",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "タイピングゲームの遊び方",
    description: "初心者でも簡単に楽しめるタイピングゲームのルールと攻略法。",
    images: ["https://manyo-typing.com/ogp-how-to-play.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
