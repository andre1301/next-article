export interface ArticleCharacteristics {
  /** Article lifetime as specified by the range: short (20), mid (40), or long (60). */
  lifetime: number;
  /** Article hotness on a scale 10-100: 10, 20, 30, 40, 50, 60, 70, 80, 90, or 100. */
  hotness: number;
}
