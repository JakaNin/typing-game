import Typography from "components/commons/Typography";

const COMPANY_URL = "https://vitalize.co.jp";

const Footer = () => {
  const copyRightYear = "2025";
  return (
    <footer className="text-center py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Typography variant="caption">
          {copyRightYear}{" "}
          <a
            href={COMPANY_URL}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Vitalize.inc
          </a>{" "}
          All rights reserved
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
