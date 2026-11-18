/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
  const mx = Math.max(...nums);
  const dp = Array.from({ length: mx + 1 },
                        () => new Array(mx + 1).fill(0));
  let ans = 1;

  for (const num of nums) {
    for (let prev = 1; prev <= mx; ++prev) {
      const diff = Math.abs(num - prev);
      dp[num][diff] = Math.max(dp[num][diff], dp[prev][diff] + 1);
    }
    for (let d = mx - 1; d >= 0; --d) {
      dp[num][d] = Math.max(dp[num][d], dp[num][d + 1]);
    }
    ans = Math.max(ans, dp[num][0]);
  }

  return ans;
};
