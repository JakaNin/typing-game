import { supabase } from "lib/supabase";
import { NextResponse } from "next/server";

const LIMIT = 100;
const SELECT_COLUMNS =
  "name, score, accuracy, key_press_per_second, correct_type_count, typo_count, created_at";

export async function GET(_: Request) {
  try {
    // スコア順で並び替えて上位100件を取得
    const { data, error } = await supabase
      .from("game_scores")
      .select(SELECT_COLUMNS)
      .order("score", { ascending: false })
      .limit(LIMIT); // 上位100件

    if (error) {
      console.error("ランキング取得エラー:", error.message);
      return NextResponse.json(
        { message: "ランキングの取得に失敗しました。", error: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error("サーバーエラー:", err);
    return NextResponse.json(
      { message: "サーバーエラーが発生しました。" },
      { status: 500 },
    );
  }
}
