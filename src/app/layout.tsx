import "./globals.css";

import MessagePopup from "components/commons/MessagePopup";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import MobileLayout from "components/layout/MobileLayout";
import { SchemaOrgWebsite } from "components/SchemaOrg";
import type { Metadata } from "next";
import Image from "next/image";
import { isMobile } from "utils/media";

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
    site: "@jakanin_zenji",
    title: "和歌山と万葉集のタイピングゲーム",
    description: "和歌山の歴史と万葉集を楽しく学べるタイピングゲームサイト",
    images: ["https://manyo-typing.com/ogp-image.png"],
  },
  alternates: {
    canonical: "https://manyo-typing.com",
  },
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const mobile = await isMobile();
  return (
    <html className="h-full">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1397258117233887"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="flex h-full">
        <div className="fixed top-0 left-0 w-full h-screen z-[-99]">
          <Image
            src="/background-manyo.png"
            fill
            style={{ objectFit: "cover" }}
            alt="和歌山の風景をモチーフにした背景画像"
          />
        </div>
        <div className="hidden sm:flex flex-col mx-auto w-full h-full min-h-screen justify-between">
          <SchemaOrgWebsite
            url="https://manyo-typing.com"
            name="万葉タイピング"
            description="和歌山や万葉集をテーマにした、楽しく学べるタイピングゲームサイト。タイピングスキルを身につけながら日本の古典を楽しもう！"
          />
          <Header />
          <main id="content" role="main">
            <div>{children}</div>
            <MessagePopup />
          </main>
          <Footer />
        </div>
        <MobileLayout showWarning={mobile}>{children}</MobileLayout>
      </body>
    </html>
  );
};

export default RootLayout;
