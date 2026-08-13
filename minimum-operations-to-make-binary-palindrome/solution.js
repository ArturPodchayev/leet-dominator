/**
 * @param {number[]} nums
 * @return {number[]}
 */
const cache = [];
var minOperations = function(nums) {
    const n = nums.length;
    const result = new Array(n);

    const isBinPalindrome = num => {
        let str = num.toString(2);
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) return false;
            ++left;
            --right;
        }
        return true; 
    };

    if (cache.length === 0) {
        for (let i = 1; i <= 5000; ++i) {
            if (isBinPalindrome(i)) cache.push(i);
        }
    }

    for (let i = 0; i < n; ++i) {
        let left = 0;
        let right = cache.length - 1;
        let mid;
        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            if (cache[mid] === nums[i]) {
                result[i] = 0;
                break;
            }
            else if (cache[mid] > nums[i]) right = mid - 1;
            else left = mid + 1;
        }
        if (result[i] !== 0) {
            let best = 5000;

            if (right >= 0) best = Math.min(best, Math.abs(cache[right] - nums[i]));
            if (left < cache.length) best = Math.min(best, Math.abs(cache[left] - nums[i]));

            result[i] = best;
        }
    }

    return result;
};
