function minOperations(nums: number[], x: number): number {
    /* Lets find the largest subarray that needs to be removed instead */
    const targetSum = nums.reduce((sum, num) => sum + num, 0) - x;

    let max = -1;
    let left = 0
    let sum = 0

    for(let right = 0; right < nums.length; right++){
        sum += nums[right]

        while(sum > targetSum) sum -= nums[left++]

        if(sum == targetSum) max = Math.max(max, right - left + 1)
    }

    return max === -1 ? max : nums.length - max
};
