function maxActiveSectionsAfterTrade(s: string): number {
  if (s.length === 0) return 0;

  const summary: Array<{ count: number; value: number }> = [];

  const zero = '0'.charCodeAt(0);
  const one = '1'.charCodeAt(0);

  let initial = 0;

  let value = s.charCodeAt(0);
  let count = 0;
  let max = 0;

  let prev0Count = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    if (c === one) initial++;
    if (c === value) count++;
    else {
      if (value === zero) {
        if (prev0Count > 0) {
          max = Math.max(max, count + prev0Count);
        }
        prev0Count = count;
      }

      value = c;
      count = 1;
    }
  }

  if (initial === s.length) return s.length;

  if (initial === 0) return 0;

  if (value === zero && prev0Count > 0) {
    max = Math.max(max, count + prev0Count);
  }

  return initial + max;
}
