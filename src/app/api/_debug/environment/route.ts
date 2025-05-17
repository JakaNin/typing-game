import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // 環境変数の状態をチェック（センシティブ情報は一部マスク）
    const envInfo = {
      NODE_ENV: process.env.NODE_ENV,
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL
        ? `${process.env.NEXT_PUBLIC_SUPABASE_URL.substring(0, 15)}...`
        : undefined,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        ? "存在する（セキュリティのため非表示）"
        : undefined,
      // Node.jsのバージョン
      NODE_VERSION: process.version,
      // プロセスID
      PID: process.pid,
    };

    return NextResponse.json(
      {
        success: true,
        message: "環境変数情報",
        envInfo,
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("環境変数確認エラー:", err);
    return NextResponse.json(
      {
        success: false,
        message: "環境変数情報の取得中にエラーが発生しました",
        error: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    );
  }
};
