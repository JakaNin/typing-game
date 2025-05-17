import { supabase } from "lib/supabase";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // Supabaseの接続状態をチェック
    const { data, error } = await supabase
      .from("game_scores")
      .select("count(*)", { count: "exact" })
      .limit(0);

    if (error) {
      console.error("Supabase接続エラー:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Supabaseへの接続に失敗しました",
          error: error.message,
          details: error,
          env: {
            url: process.env.SUPABASE_URL ? "設定あり" : "未設定",
            key: process.env.SUPABASE_SERVICE_KEY ? "設定あり" : "未設定",
            base_url: process.env.NEXT_PUBLIC_BASE_URL,
          },
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Supabaseに正常に接続できました",
        data,
        env: {
          url: process.env.SUPABASE_URL ? "設定あり" : "未設定",
          key: process.env.SUPABASE_SERVICE_KEY ? "設定あり" : "未設定",
          base_url: process.env.NEXT_PUBLIC_BASE_URL,
        },
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("デバッグエンドポイントエラー:", err);
    return NextResponse.json(
      {
        success: false,
        message: "予期せぬエラーが発生しました",
        error: err instanceof Error ? err.message : String(err),
        stack: err instanceof Error ? err.stack : undefined,
        env: {
          url: process.env.SUPABASE_URL ? "設定あり" : "未設定",
          key: process.env.SUPABASE_SERVICE_KEY ? "設定あり" : "未設定",
          base_url: process.env.NEXT_PUBLIC_BASE_URL,
        },
      },
      { status: 500 },
    );
  }
};
