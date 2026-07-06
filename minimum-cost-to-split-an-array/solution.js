var minCost = function(nums, k) {
  let n = nums.length, dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < n; i++) {
    let count = new Map(), uniqueCount = 0;
    for (let j = i; j >= 0; j--) {
      let currCount = count.get(nums[j]) || 0;
      if (currCount === 0) {
        uniqueCount++;
      } else if (currCount === 1) {
        uniqueCount--;
      }
      count.set(nums[j], currCount + 1);
      let nonUnique = (i - j + 1) - uniqueCount;
      let cost = k + nonUnique;
      dp[i + 1] = Math.min(dp[i + 1], cost + dp[j]);
    }
  }
  return dp[n];
};
