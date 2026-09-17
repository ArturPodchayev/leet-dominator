/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var binarySearch = function(nums, index, suffix) {
    let target = nums[index][1];

    let low = index + 1;
    let high = nums.length - 1;
    let min = 1000001;

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);

        if (nums[mid][0] <= target) {
            low = mid + 1;
        } else {
            min = Math.min(
                min,
                nums[index][1] - nums[index][0] + 1 + suffix[mid]
            );

            high = mid - 1;
        }
    }

    return min;
};

var minSumOfLengths = function(nums, target) {
    let prefix = 0;
    let map = {};
    let intervals = [];

    map[0] = -1;

    // Find all subarrays whose sum is equal to target
    for (let i = 0; i < nums.length; i++) {
        prefix += nums[i];

        let needed = prefix - target;

        if (map[needed] !== undefined) {
            intervals.push([map[needed] + 1, i]);
        }

        map[prefix] = i;
    }

    // suffix[i] = minimum length of an interval
    // from i to the end
    let suffix = [];
    let min = Infinity;

    for (let i = intervals.length - 1; i >= 0; i--) {
        min = Math.min(
            min,
            intervals[i][1] - intervals[i][0] + 1
        );

        suffix[i] = min;
    }

    let answer = Infinity;

    // Try every interval as the first subarray
    for (let i = 0; i < intervals.length; i++) {
        answer = Math.min(
            answer,
            binarySearch(intervals, i, suffix)
        );
    }

    return answer > 100000 ? -1 : answer;
};
