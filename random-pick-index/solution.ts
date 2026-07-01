class Solution {
  nums: number[]
  i: number[]
  constructor(nums: number[]) {
    this.i = _.range(nums.length).sort((i, j) => nums[i] - nums[j]);
    this.nums = nums;
  }

  pick(target: number): number {
    let left = 0;
    let right = this.nums.length - 1;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (this.nums[this.i[mid]] < target) {
        left = mid + 1;
      } else if (target < this.nums[this.i[mid]]) {
        right = mid - 1;
      } else {
        left = mid;
        break;
      }
    }
    right = left;
    while (this.nums[this.i[left]] === target) left--;
    while (this.nums[this.i[right]] === target) right++;
    return this.i[Math.floor(Math.random() * (right - left - 1) + (left + 1))];
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
