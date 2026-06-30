function transformArray(nums: number[]): number[] {
    let evens = 0;
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] % 2 ===0){
            evens++;
        }
    }

    for(let i=0; i<nums.length; i++){
        if(evens>0) {
            nums[i] = 0;
            evens--;
        } else {
            nums[i] = 1;
        }
    }

    return nums;
};
