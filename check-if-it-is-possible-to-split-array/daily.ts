function minimizeSum(nums: number[]): number {
    let max = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;
    let min = Infinity;
    let min2 = Infinity;
    let min3 = Infinity;
    for (const num of nums) {
        if (num <= min) {
            min3 = min2;
            min2 = min;
            min = num;
        } else if (num <= min2) {
            min3 = min2;
            min2 = num;
        } else if (num <= min3) {
            min3 = num;
        }

        if (num >= max) {
            max3 = max2;
            max2 = max;
            max = num;
        } else if (num >= max2) {
            max3 = max2;
            max2 = num;
        } else if (num >= max3) {
            max3 = num;
        }
    }

    const diff1 = max - min3;
    const diff2 = max3 - min;
    const diff3 = max2 - min2;

    return Math.min(diff1, diff2, diff3);
};
