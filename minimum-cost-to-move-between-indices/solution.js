function minCost(nums: number[], queries: number[][]): number[] {
    const n = nums.length;
    const closest = new Int32Array(n);
    closest[0] = 1;
    closest[n - 1] = n - 2;
    for (let i = 1; i < n - 1; i++) {
        const dl = nums[i] - nums[i - 1];
        const dr = nums[i + 1] - nums[i];
        closest[i] = dl <= dr ? i - 1 : i + 1;
    }

    const fwd = new Array<number>(n).fill(0);
    const bwd = new Array<number>(n).fill(0);

    for (let i = 0; i < n - 1; i++) {
        const cost = closest[i] === i + 1 ? 1 : nums[i + 1] - nums[i];
        fwd[i + 1] = fwd[i] + cost;
    }
    for (let i = 1; i < n; i++) {
        const cost = closest[i] === i - 1 ? 1 : nums[i] - nums[i - 1];
        bwd[i] = bwd[i - 1] + cost;
    }

    const ans = new Array<number>(queries.length);
    for (let i = 0; i < queries.length; i++) {
        const [l, r] = queries[i];
        if (l === r) ans[i] = 0;
        else if (l < r) ans[i] = fwd[r] - fwd[l];
        else ans[i] = bwd[l] - bwd[r];
    }
    return ans;
}
