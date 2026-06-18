const simplifiedFractions = (n: number): string[] => {
  let res: string[] = [];
  if (n == 1) return res;

  let seen = new Set<number>(); // exclusive

  const recur = (denom: number) => {
    if (denom > n) return;

    for (let i = 1; i < denom; i++) {
      const val = i / denom;

      if (!seen.has(val)) {
        res.push(i + "/" + denom);
        seen.add(val);
      }
    }

    recur(denom + 1);
  };
  recur(2);

  return res;
};
