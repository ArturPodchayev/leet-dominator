function minLengthAfterRemovals(nums: number[]): number {
    let deletedNumsCount = 0

    for (let i = 0, j = Math.floor(nums.length / 2); j < nums.length; j++) {
        console.log(nums[i], nums[j], j)
        if (nums[i] < nums[j]) {
            deletedNumsCount += 2
            i++
        }
    }

    return Math.abs(nums.length - deletedNumsCount)
};
