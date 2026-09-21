function relocateMarbles(nums: number[], moveFrom: number[], moveTo: number[]): number[] {
    const map = new Map();

    for (let i = 0; i <= nums.length - 1; i++) {
        map.set(nums[i], '1')
    }

    for (let i = 0; i <= moveFrom.length - 1; i++) {
        map.delete(moveFrom[i]);
        map.set(moveTo[i], '1');
    }
    let result = Array.from(map.keys());
    return result.sort(function (a, b) { return a - b });
};
