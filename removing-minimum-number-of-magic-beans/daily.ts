function maxSelectedElements(nums: number[]): number {
    nums.sort((a, b) => a - b);
        
    const dp1: number[] = new Array(nums.length).fill(1); // where we don't add 1 to last
    const dp2: number[] = new Array(nums.length).fill(1); // where we add 1 to last
    
    let max: number = 1;
        
    for (let i: number = 1; i < nums.length; i++) {  
        // take the 2 numbers a, b where:
        //  a = nums[i - 1]
        //  b = nums[i]

        if (nums[i - 1] + 1 === nums[i])  {
            dp1[i] = dp1[i - 1] + 1; // case 1: [a, b] 
            dp2[i] = dp2[i - 1] + 1; // case 4: [a + 1, b + 1]
        } else if (nums[i] === nums[i - 1]) {
            dp2[i] = Math.max(dp1[i - 1] + 1, dp2[i - 1]); // case 3: [a, b + 1]
        } else if (nums[i - 1] + 2 === nums[i]) {
            dp1[i] = dp2[i - 1] + 1; //case 2: [a + 1, b]
        } 
        
        max = Math.max(max, dp1[i], dp2[i]);
    }
        
    return max;
};
