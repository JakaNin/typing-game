import BeforeStart from "components/top/BeforeStart";
import { getTodayRanking } from "lib/fetcher/ranking";

const HomePage = async () => {
  const ranking = await getTodayRanking({ limit: 5 });
  return (
    <div className="flex flex-col">
      <BeforeStart ranking={ranking} />
    </div>
  );
};

export default HomePage;
