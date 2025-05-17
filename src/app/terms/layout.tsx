export const metadata = {
  title: "利用規約 - 万葉タイピング",
  description: "万葉タイピングの利用規約。サービス利用時のルールをご確認ください。",
  keywords: ["利用規約", "万葉タイピング", "サービスルール"],
  openGraph: {
    title: "利用規約 - 万葉タイピング",
    description: "万葉タイピングの利用規約をご確認ください。",
    url: "https://manyo-typing.com/terms",
    images: [
      {
        url: "https://manyo-typing.com/ogp-image.png",
        width: 800,
        height: 600,
        alt: "利用規約",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jakanin_zenji",
    title: "利用規約 - 万葉タイピング",
    description: "サービス利用時のルールを掲載しています。",
    images: ["https://manyo-typing.com/ogp-image.png"],
  },
  alternates: {
    canonical: "https://manyo-typing.com/terms",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
