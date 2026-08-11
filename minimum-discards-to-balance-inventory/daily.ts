function missingInteger(nums: number[]): number {
    let curr: number = nums[0]

    for (let j: number = 1; j < nums.length; j++)
        if (nums[j] == nums[j - 1] + 1) {
            curr += nums[j]
        } else break

    let dp: Set<number> = new Set(nums)

    while (dp.has(curr))
        curr++

    return curr
};
