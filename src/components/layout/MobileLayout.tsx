import MessagePopup from "components/commons/MessagePopup";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import { SchemaOrgWebsite } from "components/SchemaOrg";

import MobileWarningModal from "./MobileWarningModal";

type Props = {
  children: React.ReactNode;
  showWarning?: boolean;
};

const MobileLayout = ({ children, showWarning }: Props) => {
  return (
    <div className="flex flex-col mx-auto w-full h-full min-h-screen justify-between sm:hidden">
      <SchemaOrgWebsite
        url="https://manyo-typing.com"
        name="万葉タイピング"
        description="和歌山や万葉集をテーマにした、楽しく学べるタイピングゲームサイト。タイピングスキルを身につけながら日本の古典を楽しもう！"
      />
      <Header />
      {showWarning && <MobileWarningModal />}
      <main id="content" role="main">
        <div>{children}</div>
        <MessagePopup />
      </main>
      <Footer />
    </div>
  );
};

export default MobileLayout;
