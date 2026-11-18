function longestSubsequence(nums: number[]): number {
    let M = Math.max(...nums);
    let best = 0;
    // pos[n][d] - best solution ending with value n and last difference d
    let pos = Array(M + 1).fill(0).map(_ => Array(M + 1).fill(0));
    // prefixMax[n][d] = max (d' >= d) pos[n][d']
    let prefixMax = Array(M + 1).fill(0).map(_ => Array(M + 1).fill(0));

    for (let n of nums) {
        for (let d = 0; d <= M; d++) {
            // we can have length 1 irrespective of diff.
            let nVal = 1;
            for (let p of [n - d, n + d]) {
                if (p >= 0 && p <= M) {
                    nVal = Math.max(nVal, 1 + prefixMax[p][d]);
                }
            }
            pos[n][d] = nVal;
        }
        prefixMax[n][M] = pos[n][M];
        for (let d = M - 1; d >= 0; d--) {
            prefixMax[n][d] = Math.max(pos[n][d], prefixMax[n][d + 1]);
        }
        best = Math.max(best, prefixMax[n][0]);
    }
    return best;
};
