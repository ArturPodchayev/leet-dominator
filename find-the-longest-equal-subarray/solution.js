function longestEqualSubarray(nums, k) {
  let ans = 0;
  let count = new Map();
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    let num = nums[r];
    if (!count.has(num)) {
      count.set(num, 0);
    }
    count.set(num, count.get(num) + 1);
    ans = Math.max(ans, count.get(num)); 
    while (r - l + 1 - k > ans) {
      count.set(nums[l], count.get(nums[l]) - 1);
      l++;
    }
  }
  return ans;
}
