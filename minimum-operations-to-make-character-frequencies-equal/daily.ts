function maximumSaleItems(items: number[][], budget: number): number {
  const n = items.length;
  const factors = items.map((it) => it[0]);
  const prices = items.map((it) => it[1]);

  const freeCount = new Int32Array(n);
  for (let i = 0; i < n; i++) {
    const fi = factors[i];
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      if (j !== i && factors[j] % fi === 0) cnt++;
    }
    freeCount[i] = cnt;
  }

  const minPrice = Math.min(...prices);

  // dp[b] = max copies obtainable activating a subset of items with total spend exactly <= b,
  // counting (1 purchased + freeCount) per activated item. 0/1 knapsack.
  const NEG = -1;
  const dp = new Int32Array(budget + 1).fill(NEG);
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    const p = prices[i];
    const gain = 1 + freeCount[i];
    for (let b = budget; b >= p; b--) {
      if (dp[b - p] !== NEG) {
        const v = dp[b - p] + gain;
        if (v > dp[b]) dp[b] = v;
      }
    }
  }

  // For each achievable spend, use leftover budget on extra cheapest copies.
  let best = 0;
  for (let b = 0; b <= budget; b++) {
    if (dp[b] === NEG) continue;
    const extra = Math.floor((budget - b) / minPrice);
    const total = dp[b] + extra;
    if (total > best) best = total;
  }

  return best;
}
