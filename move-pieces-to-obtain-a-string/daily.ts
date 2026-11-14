function minimumSumSubarray(nums: number[], l: number, r: number): number {
    let minSum = Infinity;
    let currentSum = 0;
    const prefixSums: number[] = [0];

    // calculate prefix sum
    for (let num of nums) {
        currentSum += num;
        prefixSums.push(currentSum);
    }

    for (let i = 0; i < nums.length; i++) {
        for (let length = l; length <= r; length++) {
            if (i + length <= nums.length) {
                const subarraySum = prefixSums[i + length] - prefixSums[i];
                if (subarraySum > 0) {
                    minSum = Math.min(minSum, subarraySum);
                }
            }
        }
    }

    return minSum === Infinity ? -1 : minSum;
};
