function minOperations(nums: number[], x: number, k: number): number {
    const n = nums.length;
    if (x * k > n) return -1;

    const vals: number[] = [
        ...new Set([...nums].sort((a, b) => a - b))
    ];
    const m = vals.length;

    const index = new Map<number, number>();
    vals.forEach((v, i) => index.set(v, i + 1));

    const cnt = new Float64Array(m + 1);
    const sum = new Float64Array(m + 1);

    function update(p: number, delta: number, value: number): void {
        while (p <= m) {
            cnt[p] += delta;
            sum[p] += delta * value;
            p += p & -p;
        }
    }

    function query(p: number): [number, number] {
        let c = 0, s = 0;

        while (p > 0) {
            c += cnt[p];
            s += sum[p];
            p -= p & -p;
        }

        return [c, s];
    }

    function kth(rank: number): number {
        let p = 0;
        let step = 1;

        while (step * 2 <= m) step *= 2;

        while (step > 0) {
            const np = p + step;

            if (np <= m && cnt[np] < rank) {
                rank -= cnt[np];
                p = np;
            }

            step = Math.floor(step / 2);
        }

        return p + 1;
    }

    const ops: number[] = new Array(n).fill(0);
    let total = 0;

    for (let i = 0; i < n; i++) {
        update(index.get(nums[i])!, 1, nums[i]);
        total += nums[i];

        if (i >= x) {
            update(index.get(nums[i - x])!, -1, nums[i - x]);
            total -= nums[i - x];
        }

        if (i >= x - 1) {
            const midPos = kth(Math.floor((x + 1) / 2));
            const mid = vals[midPos - 1];

            const [lc, ls] = query(midPos);
            const rc = x - lc;
            const rs = total - ls;

            ops[i] = mid * lc - ls + rs - mid * rc;
        }
    }

    let pre: number[] = new Array(n + 1).fill(0);
    let cur: number[] = new Array(n + 1).fill(Infinity);

    for (let j = 1; j <= k; j++) {
        cur.fill(Infinity);

        for (let i = j * x; i <= n; i++) {
            cur[i] = Math.min(
                cur[i - 1],
                pre[i - x] + ops[i - 1]
            );
        }

        [pre, cur] = [cur, pre];
    }

    return pre[n];
};
