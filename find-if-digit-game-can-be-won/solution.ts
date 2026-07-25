function canAliceWin(nums: number[]): boolean {
    if(nums.length <= 1) {
        return true;
    }

    let sumS = 0;
    let sumM = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] >= 10) {
            sumM += nums[i];
        } else {
            sumS += nums[i];
        }
    }
    return sumM !== sumS;
};
