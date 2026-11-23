function countElements(nums: number[], k: number): number {
    const len = nums.length
    if (k === 0) return len
    nums.sort((a, b) => a - b)
    let count = len - k
    while (count > 0 && nums[count - 1] === nums[count]) 
        count--
    return count
}
