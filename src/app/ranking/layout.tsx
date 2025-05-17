export const metadata = {
  title: "和歌山のタイピングランキング - 万葉タイピング",
  description:
    "和歌山や万葉集に関連したタイピングゲームの最新ランキング。トッププレイヤーたちのスコアを確認し、競争しよう！",
  keywords: ["タイピングランキング", "和歌山", "万葉集", "ゲームランキング"],
  openGraph: {
    title: "和歌山のタイピングランキング",
    description:
      "和歌山や万葉集に関するタイピングゲームでトップを目指そう！最新のランキングはこちら。",
    url: "https://manyo-typing.com/ranking",
    images: [
      {
        url: "https://manyo-typing.com/ogp-image.png",
        width: 800,
        height: 600,
        alt: "和歌山タイピングランキング",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jakanin_zenji",
    title: "和歌山のタイピングランキング",
    description: "タイピングゲームのランキングをチェックして挑戦しよう！",
    images: ["https://manyo-typing.com/ogp-image.png"],
  },
  alternates: {
    canonical: "https://manyo-typing.com/ranking",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
