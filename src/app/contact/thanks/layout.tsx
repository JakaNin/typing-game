import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "お問い合わせ - 万葉タイピング",
  description:
    "万葉タイピングに関するご質問やご意見は、こちらからお気軽にお問い合わせください。",
  keywords: [
    "お問い合わせ",
    "万葉タイピング",
    "サポート",
    "和歌山",
    "タイピングゲーム",
  ],
  openGraph: {
    title: "お問い合わせ - 万葉タイピング",
    description:
      "万葉タイピングに関するご質問やご意見は、こちらからお気軽にお問い合わせください。",
    url: "https://manyo-typing.com/contact",
    images: [
      {
        url: "https://manyo-typing.com/ogp-image.png",
        width: 800,
        height: 600,
        alt: "お問い合わせページ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "お問い合わせ - 万葉タイピング",
    description:
      "万葉タイピングに関するご質問やご意見は、こちらからお気軽にお問い合わせください。",
    images: ["https://manyo-typing.com/ogp-image.png"],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
