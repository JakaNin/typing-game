import type { Metadata } from "next";
import Image from "next/legacy/image";
import "./globals.css";
import Footer from "components/layout/Footer";

export const metadata: Metadata = {
  title: "万葉タイピング",
  description: "タイピング",
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
        <div className="flex flex-col mx-auto w-full h-full">
          <main id="content" role="main">
            <div>{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
