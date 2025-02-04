import BeforeStart from "components/game/BeforeStart";
import Header from "components/layout/Header";

const HomePage = async () => {
  return (
    <div className="flex flex-col">
      <Header />
      <BeforeStart />
    </div>
  );
};

export default HomePage;
