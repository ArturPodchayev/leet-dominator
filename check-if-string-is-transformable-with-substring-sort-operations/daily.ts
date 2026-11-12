function longestMonotonicSubarray(nums: number[]): number {
    let longestIncreasing = 1
    let longestDecreasing = 1

    let currIncreaing = 1
    let currDecreasing = 1 
    for (let i = 1; i< nums.length; i++) {
        if (nums[i-1] < nums[i]) {
            currIncreaing += 1
            currDecreasing = 1 
        } else if (nums[i-1] > nums[i]) {
            currIncreaing = 1
            currDecreasing += 1 
        } else {
            currIncreaing = 1
            currDecreasing = 1 
        }

        longestIncreasing = Math.max(longestIncreasing, currIncreaing)
        longestDecreasing = Math.max(longestDecreasing, currDecreasing)
    }

    return Math.max(longestIncreasing, longestDecreasing)
};
