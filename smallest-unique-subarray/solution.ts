function smallestUniqueSubarray(nums: number[]): number {
    const n = nums.length;
    const vals = Array.from(new Set(nums)).sort((a, b) => a - b);
    const id = new Map<number, number>();

    for (let i = 0; i < vals.length; i++) id.set(vals[i], i + 1);

    let sa = Array.from({ length: n }, (_, i) => i);
    let rank = nums.map(x => id.get(x)!);

    for (let k = 1; k < n; k <<= 1) {
        sa.sort((a, b) => {
            if (rank[a] !== rank[b]) return rank[a] - rank[b];
            return (rank[a + k] ?? -1) - (rank[b + k] ?? -1);
        });

        const nextRank = new Array<number>(n);
        nextRank[sa[0]] = 0;

        for (let i = 1; i < n; i++) {
            const a = sa[i - 1];
            const b = sa[i];

            const same =
                rank[a] === rank[b] &&
                (rank[a + k] ?? -1) === (rank[b + k] ?? -1);

            nextRank[b] = nextRank[a] + (same ? 0 : 1);
        }

        rank = nextRank;
        if (rank[sa[n - 1]] === n - 1) break;
    }

    const lcp = new Array<number>(n).fill(0);
    let h = 0;

    for (let i = 0; i < n; i++) {
        const r = rank[i];
        if (r === 0) continue;

        const j = sa[r - 1];

        while (i + h < n && j + h < n && nums[i + h] === nums[j + h]) h++;

        lcp[r] = h;
        if (h > 0) h--;
    }

    let ans = n;

    for (let r = 0; r < n; r++) {
        const start = sa[r];
        const maxSame = Math.max(lcp[r], r + 1 < n ? lcp[r + 1] : 0);
        const len = maxSame + 1;

        if (len <= n - start) ans = Math.min(ans, len);
    }

    return ans;
}
