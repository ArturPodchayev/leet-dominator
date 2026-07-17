/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var gcdValues = function(nums, queries) {
    const maxNum = Math.max(...nums);

    // Frequency of each number
    const freq = new Array(maxNum + 1).fill(0);

    for (const num of nums) {
        freq[num]++;
    }

    // Number of pairs having gcd exactly g
    const gcdCount = new Array(maxNum + 1).fill(0);

    for (let g = maxNum; g >= 1; g--) {

        let divisibleCount = 0;

        // Count numbers divisible by g
        for (let multiple = g; multiple <= maxNum; multiple += g) {
            divisibleCount += freq[multiple];
        }

        // Total possible pairs
        let pairs = divisibleCount * (divisibleCount - 1) / 2;

        // Remove pairs already belonging to larger gcd values
        for (let multiple = g * 2; multiple <= maxNum; multiple += g) {
            pairs -= gcdCount[multiple];
        }

        gcdCount[g] = pairs;
    }

    // Build sorted gcd array positions using prefix sums
    const prefix = [];
    let total = 0;

    for (let g = 1; g <= maxNum; g++) {
        total += gcdCount[g];
        prefix.push([total, g]);
    }

    const result = [];

    for (const q of queries) {

        let left = 0;
        let right = prefix.length - 1;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (prefix[mid][0] > q) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        result.push(prefix[left][1]);
    }

    return result;
};
