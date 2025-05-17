export const metadata = {
  title: "和歌山の万葉集で遊ぶタイピングゲーム - 万葉タイピング",
  description:
    "和歌山の歴史や万葉集を楽しみながら、タイピングスキルを向上させることができるゲーム。今すぐ挑戦してみよう！",
  keywords: ["タイピングゲーム", "和歌山", "万葉集", "日本の古典"],
  openGraph: {
    title: "和歌山の万葉集で遊ぶタイピングゲーム",
    description:
      "和歌山の魅力と万葉集の和歌をタイピングしながら楽しく学べるゲームです。",
    url: "https://manyo-typing.com/game",
    images: [
      {
        url: "https://manyo-typing.com/ogp-image.png",
        width: 800,
        height: 600,
        alt: "タイピングゲームの画面",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jakanin_zenji",
    title: "和歌山の万葉集で遊ぶタイピングゲーム",
    description: "和歌山と日本の古典を学びながら楽しめるタイピングゲーム。",
    images: ["https://manyo-typing.com/ogp-image.png"],
  },
  alternates: {
    canonical: "https://manyo-typing.com/game",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
