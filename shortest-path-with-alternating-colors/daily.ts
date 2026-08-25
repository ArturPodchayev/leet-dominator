function missingMultiple(nums: number[], k: number): number {
    let set = new Set<number>(nums);
    let res: number = k;

    while (set.has(res)) {
        res = res + k;
    };

    return res;
};
