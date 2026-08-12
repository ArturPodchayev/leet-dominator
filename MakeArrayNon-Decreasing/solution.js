/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPossibleSize = function(nums) {
    let counter = nums.length;
    let currMax = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= currMax) {
            currMax = nums[i];
        } else if (nums[i] < currMax) {
            counter--;
        }
    }

    return counter;
};
