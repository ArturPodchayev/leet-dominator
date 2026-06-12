function maxValue(n: number, index: number, maxSum: number): number {
  maxSum -= n;

  let a = index + 1;
  let b = n - index;
  if (a > b) {
    [a, b] = [b, a];
  }

  if (a * a >= maxSum) {
    return 1 + Math.floor(Math.sqrt(maxSum));
  }

  {
    let t = b - a;
    if (b * b - t * (t + 1) / 2 >= maxSum) {
      return 1 + Math.floor(0.5 * Math.sqrt((a * a - a + maxSum) * 8 + 1) - a + 0.5);
    }
  }

  return 1 + Math.floor((a * a - a + b * b - b + 2 * maxSum) / (a + b - 1) / 2);
};
