/**
 * @param {number[]} nums
 * @param {number} m
 * @return {boolean}
 */
var canSplitArray = function(nums, m) {
  if (nums.length <= 2) {
    return true;
  }
  for (let i = 0; i< nums.length - 1; i++) {
    const curr = nums[i];
    const next = nums[i + 1];
    if (curr + next >= m) {
      return true;
    }
  }
  return false;
};
