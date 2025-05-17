import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // 環境変数を直接取得して表示（マスクあり）
    const envInfo = {
      SUPABASE_URL: process.env.SUPABASE_URL
        ? `${process.env.SUPABASE_URL.substring(0, 15)}...`
        : undefined,
      SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY
        ? "存在する（セキュリティのため非表示）"
        : undefined,
    };

    // 直接クライアントを作成
    const supabaseUrl = process.env.SUPABASE_URL || "";
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || "";

    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json(
        {
          success: false,
          message: "Supabase環境変数が設定されていません",
          envInfo,
        },
        { status: 500 },
      );
    }

    // 新しいクライアントを作成（インポートしたsupabaseを使わない）
    const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);

    // テーブル一覧を取得
    const { data: tables, error: tablesError } = await supabaseClient
      .from("_tables")
      .select("*");

    if (tablesError) {
      return NextResponse.json(
        {
          success: false,
          message: "テーブル一覧の取得に失敗しました",
          error: tablesError.message,
          details: tablesError,
          envInfo,
        },
        { status: 500 },
      );
    }

    // シンプルなクエリを試行
    const { data, error } = await supabaseClient
      .from("game_scores")
      .select("count(*)", { count: "exact" })
      .limit(1);

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: "ゲームスコアの取得に失敗しました",
          error: error.message,
          details: error,
          tables: tables || [],
          envInfo,
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Supabaseに正常に接続できました",
        data,
        tables: tables || [],
        envInfo,
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("Supabase直接接続エラー:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Supabase接続中に予期せぬエラーが発生しました",
        error: err instanceof Error ? err.message : String(err),
        stack: err instanceof Error ? err.stack : undefined,
      },
      { status: 500 },
    );
  }
};
