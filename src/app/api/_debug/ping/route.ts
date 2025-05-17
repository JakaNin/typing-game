import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // 単純なネットワーク接続チェック
    const urls = [
      "https://hwsumbfhvrcuetoiujpo.supabase.co",
      "https://sgjzybrodvnkzlfcebkd.supabase.co",
      "https://google.com",
    ];

    const results = await Promise.all(
      urls.map(async (url) => {
        try {
          const start = Date.now();
          const response = await fetch(url, { method: "HEAD" });
          const duration = Date.now() - start;
          return {
            url,
            success: response.ok,
            status: response.status,
            statusText: response.statusText,
            duration: `${duration}ms`,
          };
        } catch (err) {
          return {
            url,
            success: false,
            error: err instanceof Error ? err.message : String(err),
          };
        }
      }),
    );

    return NextResponse.json(
      {
        success: true,
        message: "ネットワーク接続テスト",
        results,
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("ネットワークテストエラー:", err);
    return NextResponse.json(
      {
        success: false,
        message: "ネットワークテスト中にエラーが発生しました",
        error: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    );
  }
};
