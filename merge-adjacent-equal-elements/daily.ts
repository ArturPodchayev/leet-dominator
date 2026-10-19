function targetIndices(nums: number[], target: number): number[] {
    let firstIndex: number = 0; 
    let total: number = 0;

    nums.forEach((num) => {
        if(num < target) firstIndex += 1;
        if(num === target) total += 1;
    })
    
    return Array.from({length: total}, (_, index) => {
        return firstIndex + index
    })
};
