import { SONGS } from "lib/constants/songs";
import { getAllRanking, getRankingCount } from "lib/fetcher/ranking";

import { getRandomSongs } from "../_lib/utils/getRandomSongs";
import TypingFieldPresentation from "./TypingFieldPresentation";

const TypingField = async () => {
  const songs = getRandomSongs(SONGS);
  const todaysRankingCount = await getRankingCount();
  const allRanking = await getAllRanking();
  return (
    <TypingFieldPresentation
      songs={songs}
      rankingCount={todaysRankingCount}
      ranking={allRanking}
    />
  );
};

export default TypingField;
