import { supabase } from "lib/supabase";
import { NextResponse } from "next/server";

export const GET = async (_: Request) => {
  try {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    const { count, error } = await supabase
      .from("game_scores")
      .select("*", { count: "exact", head: true })
      .gte("created_at", todayStart.toISOString())
      .lte("created_at", todayEnd.toISOString());

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
