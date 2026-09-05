function firstStableIndex(nums: number[], k: number): number {
    const minNumsPrefix = Array.from({ length: nums.length }, () => 0);
    let min = nums.at(-1);
    for (let i = nums.length - 1; i >= 0; i--) {
        min = Math.min(min, nums[i]);
        minNumsPrefix[i] = min;
    }

    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
        min = minNumsPrefix[i];

        if (max - min <= k) {
            return i;
        }
    }

    return -1;
};
