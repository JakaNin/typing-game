import { NextResponse } from "next/server";
import { supabase } from "lib/supabase";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    name,
    score,
    accuracy,
    key_press_per_second,
    correct_type_count,
    typo_count,
  } = body;
  const insertItem = {
    name,
    score,
    accuracy,
    key_press_per_second,
    correct_type_count,
    typo_count,
  };
  const { data, error } = await supabase
    .from("game_scores")
    .insert([insertItem]);

  if (error) {
    return NextResponse.json(
      { message: "登録に失敗しました。", error: error.message },
      { status: 500 },
    );
  }

  return NextResponse.json(
    { message: "スコア登録成功", data },
    { status: 201 },
  );
}
