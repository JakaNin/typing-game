import { SchemaOrgBreadcrumb } from "components/SchemaOrg";
import BeforeStart from "components/top/BeforeStart";
import { supabase } from "lib/supabase";
import { type GameScore } from "types/gameScore";

const HomePage = async () => {
  // APIを介さずに直接Supabaseからデータを取得
  let ranking: GameScore[] = [];
  try {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    const { data, error } = await supabase
      .from("game_scores")
      .select(
        "id, name, score, accuracy, key_press_per_second, correct_type_count, typo_count, created_at",
      )
      .gte("created_at", todayStart.toISOString())
      .lte("created_at", todayEnd.toISOString())
      .order("score", { ascending: false })
      .limit(5);

    if (error) {
      console.error("ホームページでのランキング取得エラー:", error);
    } else if (data) {
      ranking = data;
    }
  } catch (err) {
    console.error("ホームページでのSupabase直接アクセスエラー:", err);
  }

  return (
    <>
      <SchemaOrgBreadcrumb
        items={[{ name: "ホーム", url: "https://manyo-typing.com" }]}
      />
      <div className="flex flex-col">
        <BeforeStart ranking={ranking} />
      </div>
    </>
  );
};

export default HomePage;
