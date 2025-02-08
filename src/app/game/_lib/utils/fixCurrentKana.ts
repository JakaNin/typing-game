import { checkSmallHira, checkAfterN } from "utils/typing";

export const fixCurrentKana = (kanaPart: string, index: number) => {
  let currentKana = kanaPart[index];
  const nextChar = kanaPart[index + 1];

  // 拗音や「ん」をチェック
  if (checkSmallHira(kanaPart, index)) {
    currentKana += nextChar;
  } else if (currentKana === "ん" && !checkAfterN(kanaPart, index)) {
    currentKana = "ン"; // ンを特別扱い
  }
  return currentKana;
};
