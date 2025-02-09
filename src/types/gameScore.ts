export type GameScore = {
  id: number | string;
  name: string;
  score: number;
  accuracy: number;
  key_press_per_second: number;
  correct_type_count: number;
  typo_count: number;
  created_at: string;
};
