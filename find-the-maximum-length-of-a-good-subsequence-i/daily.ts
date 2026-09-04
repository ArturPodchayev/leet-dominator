function firstStableIndex(nums: number[], k: number): number {
    const mxs: number[] = [nums[0]];
    for (let i = 1; i < nums.length; i++)
        mxs.push(Math.max(nums[i], mxs[i - 1]));
    let [min, idx] = [nums.at(-1), -1];
    for (let i = nums.length - 1; i >= 0; i--)
        if (mxs[i] - (min = Math.min(min, nums[i])) <= k)
            idx = i;
    return idx;
};
