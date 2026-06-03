function runningSum(nums: number[]): number[] {
    let runningTotal = 0;
    return nums.map(value => {
        runningTotal += value;
        return runningTotal;
    })
};
