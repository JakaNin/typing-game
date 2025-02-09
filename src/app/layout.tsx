import "./globals.css";

import MessagePopup from "components/commons/MessagePopup";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import type { Metadata } from "next";
import Image from "next/legacy/image";

export const metadata: Metadata = {
  title: "和歌山と万葉集のタイピングゲーム",
  description:
    "和歌山や万葉集をテーマにした、楽しく学べるタイピングゲームサイト。タイピングスキルを身につけながら日本の古典を楽しもう！",
  keywords: [
    "和歌山",
    "万葉集",
    "タイピング",
    "タイピングゲーム",
    "日本の古典",
  ],
  openGraph: {
    title: "和歌山と万葉集のタイピングゲーム",
    description: "和歌山の歴史と万葉集を楽しく学べるタイピングゲームサイト",
    url: "https://manyo-typing.com",
    siteName: "万葉タイピング",
    images: [
      {
        url: "https://manyo-typing.com/ogp-image.png",
        width: 800,
        height: 600,
        alt: "和歌山と万葉集のタイピングゲーム",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "和歌山と万葉集のタイピングゲーム",
    description: "和歌山の歴史と万葉集を楽しく学べるタイピングゲームサイト",
    images: ["https://manyo-typing.com/ogp-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full">
      <body className="flex h-full">
        <div className="fixed top-0 left-0 w-full h-screen z-[-99]">
          <Image
            src="/background-manyo.png"
            layout="fill"
            objectFit="cover"
            alt="Background Image"
          />
        </div>
        <div className="flex flex-col mx-auto w-full h-full min-h-screen justify-between">
          <Header />
          <main id="content" role="main">
            <div>{children}</div>
            <MessagePopup />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
