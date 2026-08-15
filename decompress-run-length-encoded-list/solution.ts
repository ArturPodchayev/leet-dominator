function decompressRLElist(nums: number[]): number[] {
    const res: number[] = [];
    for(let i = 0; i < nums.length; i += 2) {
        const times = nums[i], val = nums[i+1];
        res.push(...Array(times).fill(val));
    }

    return res;
};
