/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSelectedElements = function(nums) {
  nums.sort((a,b) => a-b);
  let dp = {};
  let res = 0;

  for(let ele of nums) {
    dp[ele] = 0;
    dp[ele+1] = 0;
    dp[ele+2] = 0;
  }

  for(let i=nums.length-1; i>=0 ; i--) {
    dp[nums[i]] = Math.max(dp[nums[i]], 1 + dp[nums[i] + 1]);
    dp[nums[i]+1] = Math.max(dp[nums[i]+1], 1 + dp[nums[i] + 2]);
  }

  for(let key of Object.keys(dp)) {
    res = Math.max(res, dp[key]);
  }

  return res;
}
