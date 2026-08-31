function partitionDisjoint(nums: number[]): number {
    let max = nums[0]
    let partition = 0
    let maxBehindPartition = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i])
        
        if (nums[i] < maxBehindPartition) {
            partition = i
            maxBehindPartition = max
        }
    }
    return partition + 1
};
