function wordSquares(words: string[]): string[][] {
  // Sort words first, so we don't have to sort the answer.
  words.sort();

  const groups: Record<string, string[]> = {};

  for (const w of words) {
    (groups[w[0]] ??= []).push(w);
  }

  const ans: string[][] = [];

  for (const t of words) {
    const lefts = groups[t[0]];
    if (lefts === undefined) continue;

    const rights = groups[t[3]];
    if (rights === undefined) continue;

    for (const l of lefts) {
      if (l === t) continue;

      const bottoms = groups[l[3]];
      if (bottoms === undefined) continue;

      for (const r of rights) {
        if (r === t || r === l) continue;

        for (const b of bottoms) {
          if (b === t || b === l || b === r) continue;
          if (b[3] !== r[3]) continue;

          ans.push([t, l, r, b]);
        }
      }
    }
  }
  return ans;
}
