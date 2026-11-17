function minimumChanges(s: string, k: number): number {
    const n = s.length;
    const cost: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

    // Precompute cost[i][j]
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            cost[i][j] = computeCost(s, i, j);
        }
    }

    const dp: number[][] = Array.from({ length: n + 1 }, () => Array(k + 1).fill(Infinity));
    dp[0][0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let part = 1; part <= Math.min(i, k); part++) {
            for (let j = part - 1; j < i; j++) {
                if (cost[j][i - 1] !== Infinity && dp[j][part - 1] !== Infinity) {
                    dp[i][part] = Math.min(dp[i][part], dp[j][part - 1] + cost[j][i - 1]);
                }
            }
        }
    }

    return dp[n][k];
}

function computeCost(s: string, left: number, right: number): number {
    const len = right - left + 1;
    if (len === 1) return Infinity;

    let minCost = Infinity;

    for (let d = 1; d < len; d++) {
        if (len % d !== 0) continue;

        let totalChanges = 0;

        for (let i = 0; i < d; i++) {
            const group: string[] = [];
            for (let j = left + i; j <= right; j += d) {
                group.push(s[j]);
            }

            let l = 0, r = group.length - 1;
            while (l < r) {
                if (group[l] !== group[r]) totalChanges++;
                l++;
                r--;
            }
        }

        minCost = Math.min(minCost, totalChanges);
    }

    return minCost === Infinity ? Infinity : minCost;
}
