function sortPermutation(nums: number[]): number {
    const n: number = nums.length;
    let mask: number = Number.MAX_SAFE_INTEGER;
    for (let i: number = 0; i < n; i++) {
        if (nums[i] !== i) mask &= nums[i];
    }
    return mask === Number.MAX_SAFE_INTEGER ? 0 : mask;
}
