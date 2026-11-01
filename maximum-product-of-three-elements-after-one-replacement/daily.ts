function minMoves(nums: number[]): number {
    let minValue: number = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (minValue > nums[i]) {
            minValue = nums[i]
        }
    }

    let minMoves: number = 0
    for (let i = 0; i < nums.length; i++) {
        minMoves = minMoves + (nums[i] - minValue)
    }

    return minMoves
};
