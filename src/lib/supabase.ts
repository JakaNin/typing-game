import { createClient } from "@supabase/supabase-js";

// サーバーサイド専用のSupabaseクライアント
// サーバーサイドでのみ使用するため、NEXT_PUBLIC接頭辞なしの環境変数を使用
export const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_KEY || "",
  { auth: { persistSession: false } },
);
