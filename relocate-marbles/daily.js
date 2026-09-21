/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultArray = function(nums, k) {

    const result = new Array(k).fill(0);
    let dp = new Array(k).fill(0);

    for (const num of nums) {
        const newDp = new Array(k).fill(0);

        // we start a new subarray [num]
        newDp[num % k]++;

        // we extend previous subarrays
        for (let r = 0; r < k; r++) {
            if (dp[r] > 0) {
                const newRemainder = (r * (num % k)) % k;
                newDp[newRemainder] += dp[r];
            }
        }

        dp = newDp;

        // All subarrays ending here contribute to result
        for (let r = 0; r < k; r++) {
            result[r] += dp[r];
        }
    }

    return result;
};
