export const checkSmallHira = (yomi: string, i: number, margin: number) => {
  const index: number = i + margin;
  const checkYomi: string | undefined = yomi[index];
  return (
    checkYomi == "ぁ" ||
    checkYomi == "ぃ" ||
    checkYomi == "ぅ" ||
    checkYomi == "ぇ" ||
    checkYomi == "ぉ" ||
    checkYomi == "ゃ" ||
    checkYomi == "ゅ" ||
    checkYomi == "ょ"
  );
};

export const checkAfterN = (yomi: string, i: number) => {
  const index: number = i + 1;
  const checkYomi: string | undefined = yomi[index];
  return (
    checkYomi == "あ" ||
    checkYomi == "い" ||
    checkYomi == "う" ||
    checkYomi == "え" ||
    checkYomi == "お" ||
    checkYomi == "な" ||
    checkYomi == "に" ||
    checkYomi == "ぬ" ||
    checkYomi == "ね" ||
    checkYomi == "の" ||
    checkYomi == "にゃ" ||
    checkYomi == "にゅ" ||
    checkYomi == "にょ" ||
    checkYomi == undefined
  );
};

export const toRoman = (
  phrase: string,
  charMap: { [key: string]: string[] },
): string => {
  let romanPhrase = "";
  let i = 0;

  while (i < phrase.length) {
    let currentChar = phrase[i];
    const nextChar = phrase[i + 1];

    // 拗音や「ん」をチェック
    if (checkSmallHira(phrase, i, 1)) {
      currentChar += nextChar;
      i++;
    } else if (currentChar === "ん" && !checkAfterN(phrase, i)) {
      currentChar = "ン"; // ンを特別扱い
    }

    // 対応するローマ字を取得
    const roman = charMap[currentChar] || [currentChar];
    romanPhrase += roman[0]; // 複数の変換オプションがある場合、最初のものを使用

    i++;
  }

  return romanPhrase;
};
