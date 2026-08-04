function findMissingElements(nums: number[]): number[] {
    let sorted = nums.sort((a,b) => a-b);
    let min = sorted[0];
    let max = sorted[nums.length - 1];
    let set = new Set(nums);
    let res = [];
    for(let i = min; i < max; i++)
        if(!set.has(i))
            res.push(i);
    return res;
};
