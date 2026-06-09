function maxTotalValue(nums: number[], k: number): number {
    let min = nums[0];
    let max = nums.at(-1);

    for(const num of nums){
        min = Math.min(min, num);
        max = Math.max(max, num);
    }
    const diff = max - min;
    return diff * k;
};
