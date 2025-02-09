import { supabase } from "lib/supabase";
import { NextResponse } from "next/server";

export const GET = async (_: Request) => {
  try {
    const { count, error } = await supabase
      .from("game_scores")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("件数取得エラー", error.message);
      return NextResponse.json(
        {
          message: "ランキングの取得に失敗しました。",
          error: error.message,
          count: 0,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ count: count || 0 }, { status: 200 });
  } catch (err) {
    console.error("サーバーエラー:", err);
    return NextResponse.json(
      { message: "ランキングの取得に失敗しました。", count: 0 },
      { status: 500 },
    );
  }
};
