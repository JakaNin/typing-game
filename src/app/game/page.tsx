import { SchemaOrgBreadcrumb, SchemaOrgGame } from "components/SchemaOrg";

import GameContent from "./_components/GameContent";
import TypingField from "./_components/TypingField";

const Game = async () => {
  return (
    <>
      <SchemaOrgGame
        name="万葉タイピング"
        description="和歌山の万葉集をテーマにした楽しく学べるタイピングゲーム"
        image="https://manyo-typing.com/ogp-image.png"
        url="https://manyo-typing.com/game"
      />
      <SchemaOrgBreadcrumb
        items={[
          { name: "ホーム", url: "https://manyo-typing.com" },
          { name: "ゲーム", url: "https://manyo-typing.com/game" },
        ]}
      />
      <GameContent>
        <TypingField />
      </GameContent>
    </>
  );
};

export default Game;
