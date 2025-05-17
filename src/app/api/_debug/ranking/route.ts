import { supabase } from "lib/supabase";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // シンプルなクエリで最新の10件のデータを取得
    const { data, error } = await supabase
      .from("game_scores")
      .select("name, score, created_at")
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) {
      console.error("デバッグランキング取得エラー:", error);
      return NextResponse.json(
        {
          success: false,
          message: "ランキングの取得に失敗しました",
          error: error.message,
          details: error,
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "ランキングを取得しました",
        count: data.length,
        data,
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("デバッグランキングエラー:", err);
    return NextResponse.json(
      {
        success: false,
        message: "ランキング取得中に予期せぬエラーが発生しました",
        error: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    );
  }
};
