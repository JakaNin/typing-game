export const toKanjiNumber = (number: number): string => {
  const kanjiNumbers = [
    "〇",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
  ];
  const numberString = number.toString();
  let kanjiNumber = "";

  for (let i = 0; i < numberString.length; i++) {
    const digit = parseInt(numberString[i]);
    kanjiNumber += kanjiNumbers[digit];
  }

  return kanjiNumber;
};
