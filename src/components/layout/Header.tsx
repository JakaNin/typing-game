import Button from "components/commons/Button";
import Typography from "components/commons/Typography";
import Link from "next/link";

const LINKS = [
  { href: "/ranking", text: "ランキング" },
  { href: "/how-to-play", text: "遊び方" },
  { href: "/privacy-policy", text: "プライバシーポリシー" },
];

const Header = () => {
  return (
    <header className="bg-ap-transparentWhite-900 border-b border-b-ap-gray-100 border-t-2 w-full sticky top-0 z-50 shadow">
      <div className="flex px-[1.625rem] flex-row h-full justify-between items-center p-4">
        <Link href="/">
          <Typography element="h1" variant="title1">
            万葉タイピング
          </Typography>
        </Link>
        <div className="flex items-center gap-3">
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
