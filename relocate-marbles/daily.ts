function resultArray(nums: number[], k: number): number[] {
    const result: number[] = new Array(k).fill(0);
    let dp: number[] = new Array(k).fill(0);

    for (const num of nums) {
        const rem = ((num % k) + k) % k; 
        const next: number[] = new Array(k).fill(0);
        next[rem]++;

        for (let r = 0; r < k; r++) {
            if (dp[r] > 0) {
                const newRem = (r * rem) % k;
                next[newRem] += dp[r];
            }
        }

        dp = next;

        for (let r = 0; r < k; r++) {
            result[r] += dp[r];
        }
    }

    return result;
};
