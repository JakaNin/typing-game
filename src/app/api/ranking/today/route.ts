import { supabase } from "lib/supabase";
import { NextResponse } from "next/server";

const DEFAULT_LIMIT = 100;
const MAX_LIMIT = DEFAULT_LIMIT;
const SELECT_COLUMNS =
  "name, score, accuracy, key_press_per_second, correct_type_count, typo_count, created_at";

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    let limit = parseInt(searchParams.get("limit") || `${DEFAULT_LIMIT}`, 10);

    // 制限チェック（0以上、最大制限以下）
    if (isNaN(limit) || limit <= 0) {
      limit = DEFAULT_LIMIT;
    } else if (limit > MAX_LIMIT) {
      limit = MAX_LIMIT;
    }

    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    const { data, error } = await supabase
      .from("game_scores")
      .select(SELECT_COLUMNS)
      .gte("created_at", todayStart.toISOString())
      .lte("created_at", todayEnd.toISOString())
      .order("score", { ascending: false })
      .limit(limit);

    if (error) {
      console.error("ランキング取得エラー:", error);
      console.error("エラー詳細:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        {
          message: "ランキングの取得に失敗しました。",
          error: error.message,
          details: error,
        },
        { status: 500 },
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error("サーバーエラー:", err);
    console.error("エラータイプ:", typeof err);
    console.error(
      "エラースタック:",
      err instanceof Error ? err.stack : "スタックなし",
    );
    return NextResponse.json(
      {
        message: "サーバーエラーが発生しました。",
        error: err instanceof Error ? err.message : String(err),
        stack: err instanceof Error ? err.stack : undefined,
      },
      { status: 500 },
    );
  }
};
