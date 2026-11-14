/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
    const n = nums.length;
    let minSum = Infinity;
    
    // we compute prefix sums for O(1) range sum queries
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    // we check all possible subarray lengths from l to r
    for (let len = l; len <= r; len++) {
        for (let i = 0; i <= n - len; i++) {
            const currentSum = prefix[i + len] - prefix[i];
            if (currentSum > 0 && currentSum < minSum) {
                minSum =  currentSum;
            }
        }
    }

    return minSum === Infinity ? -1 : minSum;
};
