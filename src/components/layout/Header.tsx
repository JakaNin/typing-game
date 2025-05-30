import Button from "components/commons/Button";
import Typography from "components/commons/Typography";
import Link from "next/link";

const LEFT_LINKS = [
  { href: "/contact", text: "お問い合わせ" },
  { href: "/about", text: "サイトについて" },
  { href: "/privacy-policy", text: "プライバシーポリシー" },
];
const LINKS = [
  { href: "/", text: "トップ" },
  { href: "/ranking", text: "ランキング" },
  { href: "/how-to-play", text: "遊び方" },
];

const Header = () => {
  return (
    <header className="bg-ap-transparentWhite-900 border-b border-b-ap-gray-100 border-t-2 w-full sticky top-0 z-50 shadow">
      <div className="flex flex-col sm:flex-row px-4 sm:px-[1.625rem] h-full justify-between items-center p-4 gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <Link href="/">
            <Typography element="h1" variant="title1">
              万葉タイピング
            </Typography>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            {LEFT_LINKS.map(({ href, text }) => (
              <Link key={href} href={href}>
                <Button variant="text">
                  <Typography variant="subtitle1">{text}</Typography>
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          {LINKS.map(({ href, text }) => (
            <Link key={href} href={href}>
              <Button variant="text">
                <Typography variant="subtitle1">{text}</Typography>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
