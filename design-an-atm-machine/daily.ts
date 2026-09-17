function minSumOfLengths(a: number[], t: number): number {
    let n = a.length;

    // create intervals
    let i = 0;
    let sum = 0;
    let intervals = []
    for (let j = 0; j < n; j++) {
        sum += a[j];
        while (sum > t) {
            sum -= a[i++];
        }
        if (sum === t) {
            intervals.push([i, j, j - i + 1]);
            sum -= a[i++];
        }
    }

    // sort ascending: from to, len
    intervals.sort((a, b) =>
        a[0] - b[0] ||
        a[1] - b[1] ||
        a[2] - b[2]
    );

    // suffix min
    let suffixMins = []
    let min = Infinity
    for (let i = intervals.length - 1; i >= 0; i--) {
        min = Math.min(min, intervals[i][2])
        suffixMins.unshift(min)
    }

    // binary search
    let res = Infinity;
    for (let i = 0; i < intervals.length; i++) {
        let a1 = intervals[i]
        let j = upperBound(intervals, a1[1], i + 1)
        if (j === intervals.length) continue
        res = Math.min(res, a1[2] + suffixMins[j])
    }

    return res === Infinity ? -1 : res;
};

function upperBound(nums, target,
    left = 0, right = nums.length) {

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid][0] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return right
}
