type Pair = { value: number; index: number };

function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
    const n = nums.length;
    const arr: Pair[] = nums.map((num, index) => ({ value: num, index }));
    arr.sort((a, b) => a.value - b.value);

    // Groups with 'limit' difference
    const groupedPairs: Pair[][] = [];
    groupedPairs.push([arr[0]]);
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i].value - arr[i - 1].value <= limit) {
            groupedPairs[groupedPairs.length - 1].push(arr[i]);
        } else {
            groupedPairs.push([arr[i]]);
        }
    }

    //Reconstruct the array based on groupings
    for (let group of groupedPairs) {
        const indices = group.map((item) => item.index).sort((a, b) => a - b);
        for (let i = 0; i < indices.length; i++) {
            nums[indices[i]] = group[i].value;
        }
    }

    return nums;
}
