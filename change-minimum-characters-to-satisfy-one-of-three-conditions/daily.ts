function minOperations(s: string): number {
  const isSorted = [...s].every((c, i) => i === 0 || s[i - 1] <= c);
  if (isSorted) return 0;
  if (s.length === 2) return -1;

  const inner = s.slice(1, -1);
  const minP = inner.split("").reduce((a, b) => (a <= b ? a : b));
  const maxP = inner.split("").reduce((a, b) => (a >= b ? a : b));

  const first = s[0];
  const last = s[s.length - 1];

  if (first <= last && (minP >= first || maxP <= last)) return 1;
  return last < minP && first > maxP ? 3 : 2;
}
