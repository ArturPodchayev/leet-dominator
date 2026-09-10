function maximumScore(nums: number[], s: string): number {
  const pq: number[] = [];

  const push = (x: number) => {
    pq.push(x);
    let i = pq.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (pq[p] >= pq[i]) break;
      [pq[p], pq[i]] = [pq[i], pq[p]];
      i = p;
    }
  };

  const pop = (): number => {
    const top = pq[0];
    const last = pq.pop()!;
    if (pq.length) {
      pq[0] = last;
      let i = 0;
      while (true) {
        let l = i * 2 + 1, r = l + 1, m = i;
        if (l < pq.length && pq[l] > pq[m]) m = l;
        if (r < pq.length && pq[r] > pq[m]) m = r;
        if (m === i) break;
        [pq[i], pq[m]] = [pq[m], pq[i]];
        i = m;
      }
    }
    return top;
  };

  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    push(nums[i]);
    if (s[i] === '1') ans += pop();
  }
  return ans;
}
