function shiftDistance(s: string, t: string, nextCost: number[], previousCost: number[]): number {
  const n = s.length;

  /* Prefix Sum */
  const next = new Array<number>(27);
  const prev = new Array<number>(27);
  next[0] = 0;
  prev[0] = 0;
  for (let i = 1; i <= 26; i++) {
    next[i] = next[i - 1] + nextCost[i - 1];
    prev[i] = prev[i - 1] + previousCost[i - 1];
  }

  /* Find answer. */
  let answer = 0;
  for (let i = 0; i < n; i++) {
    const a = s.charCodeAt(i) - 97;
    const b = t.charCodeAt(i) - 97;

    /* We consider two options: rolling a character
     * forward or rolling a character backward. */
    if (a < b) {
      answer += Math.min(
        next[b] - next[a], /* Forward. */
        prev[a + 1] + prev[26] - prev[b + 1], /* Backward. */
      );
    }
    else if (a > b) {
      answer += Math.min(
        next[26] - next[a] + next[b], /* Forward. */
        prev[a + 1] - prev[b + 1], /* Backward. */
      );
    }
  }
  return answer;
};
