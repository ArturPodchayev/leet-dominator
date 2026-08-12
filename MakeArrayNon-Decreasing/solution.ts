function maximumPossibleSize(nums: number[]): number {
    let size = 0, prev = -1;
    for(let i=0;i<nums.length;i++) {
        const num = nums[i];
        if(num>= prev) {
            prev = num;
            size++;
        }
    }
    return size;
};
