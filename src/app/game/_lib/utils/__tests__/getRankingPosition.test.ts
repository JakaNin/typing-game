import type { GameScore } from "types/gameScore";
import { describe, expect, it } from "vitest";

import { getRankingPosition } from "../getRankingPosition";

const createScore = (score: number): GameScore => ({
  id: score,
  name: "",
  score,
  accuracy: 0,
  key_press_per_second: 0,
  correct_type_count: 0,
  typo_count: 0,
  created_at: "",
});

describe("getRankingPosition", () => {
  it("returns correct rank for given score", () => {
    const ranking: GameScore[] = [
      createScore(200),
      createScore(180),
      createScore(160),
    ];
    const result = getRankingPosition(ranking, 170);
    expect(result).toBe(3);
  });

  it("returns null when rank is below 100", () => {
    const ranking: GameScore[] = Array.from({ length: 100 }, (_, i) =>
      createScore(199 - i),
    );
    const result = getRankingPosition(ranking, 50);
    expect(result).toBeNull();
  });

  it("calculates rank correctly with an empty array", () => {
    const ranking: GameScore[] = [];
    const result = getRankingPosition(ranking, 100);
    expect(result).toBe(1);
  });
});
