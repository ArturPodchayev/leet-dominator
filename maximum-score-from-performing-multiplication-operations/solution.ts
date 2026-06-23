function maximumScore(nums: number[], multipliers: number[]): number {
  const cache = new Map<string, number>();

  const dp = (i: number, leftPos: number): number => {
    if (i === multipliers.length) return 0;

    const rightPos = (nums.length - 1) - (i - leftPos);
    const mul = multipliers[i];

    const key = "i" + i.toString() + "left" + leftPos.toString();

    if (!cache.has(key)) cache.set(key, Math.max(
      mul * nums[leftPos] + dp(i + 1, leftPos + 1),
      mul * nums[rightPos] + dp(i + 1, leftPos)
    ));

    return cache.get(key) || 0;
  }

  return dp(0, 0);
};
