import Typography from "components/commons/Typography";

const Footer = () => {
  const copyRight = "2025 Nanimiru All rights reserved";
  return (
    <footer className="text-center py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Typography variant="caption">{copyRight}</Typography>
      </div>
    </footer>
  );
};

export default Footer;
