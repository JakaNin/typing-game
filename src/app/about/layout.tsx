export const metadata = {
  title: "サイトについて - 万葉タイピング",
  description:
    "万葉タイピングの目的や連絡先、利用規約へのリンクを掲載しています。",
  keywords: ["サイトについて", "万葉タイピング", "目的", "利用規約"],
  openGraph: {
    title: "サイトについて - 万葉タイピング",
    description:
      "万葉タイピングの目的や連絡先、利用規約へのリンクを掲載しています。",
    url: "https://manyo-typing.com/about",
    images: [
      {
        url: "https://manyo-typing.com/ogp-image.png",
        width: 800,
        height: 600,
        alt: "サイトについて",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jakanin_zenji",
    title: "サイトについて - 万葉タイピング",
    description: "万葉タイピングの目的や連絡先を紹介しています。",
    images: ["https://manyo-typing.com/ogp-image.png"],
  },
  alternates: {
    canonical: "https://manyo-typing.com/about",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
