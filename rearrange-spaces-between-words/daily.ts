function pivotArray(nums: number[], pivot: number): number[] {
    const less = [];
    const equals = [];
    const greater = [];

    for (const num of nums) {
        if (num === pivot) {
            equals.push(num);
        } else if (num > pivot) {
            greater.push(num);
        } else {
            less.push(num);
        }
    }

    return [...less, ...equals, ...greater];
};
