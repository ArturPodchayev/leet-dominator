function minimizeSum(nums: number[]): number {
  const sorted = nums.sort((a, b) => a - b);
  
  const n = sorted.length;
  // Firt two taken out
  const one = sorted[n - 1] - sorted[2];
  // Last two taken out
  const two = sorted[n - 3] - sorted[0];
  // First and last taken out
  const thr = sorted[n - 2] - sorted[1];
  
  return Math.min(one, two, thr);
};
