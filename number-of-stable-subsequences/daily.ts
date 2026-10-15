function sumCounts(nums: number[]): number {
    const counts: number[] = [];
    for(let i=0; i<nums.length; i++){
        const u = new Set([nums[i]]);
        for(let j=i; j<nums.length; j++){
            u.add(nums[j]);
            counts.push(u.size ** 2);
        }
    }
    return counts.reduce((acc, crr) => acc += crr);
};
