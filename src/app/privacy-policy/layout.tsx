export const metadata = {
  title: "プライバシーポリシー - 万葉タイピング",
  description: "万葉タイピングのプライバシーポリシー。ユーザー情報の収集・利用について詳しく説明しています。",
  keywords: ["プライバシーポリシー", "タイピングゲーム", "和歌山", "万葉集"],
  openGraph: {
    title: "プライバシーポリシー - 万葉タイピング",
    description: "万葉タイピングのプライバシーポリシーをご確認ください。ユーザー情報の取り扱いに関する情報を掲載しています。",
    url: "https://manyo-typing.com/privacy-policy",
    images: [
      {
        url: "https://manyo-typing.com/ogp-image.png",
        width: 800,
        height: 600,
        alt: "プライバシーポリシー",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "プライバシーポリシー - 万葉タイピング",
    description: "ユーザー情報の取り扱い方針についてご確認いただけます。",
    images: ["https://manyo-typing.com/ogp-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

