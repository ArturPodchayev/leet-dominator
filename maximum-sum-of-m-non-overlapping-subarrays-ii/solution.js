function maximumSum(nums: number[], m: number, l: number, r: number): number {
    const n = nums.length;
    const prefix = new Float64Array(n + 1);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];

    m = Math.min(m, Math.floor(n / l));

    const val = new Float64Array(n + 1);
    const cnt = new Int32Array(n + 1);
    const deque = new Int32Array(n + 2);

    // g(λ) = max(сумма − λ·count) без ограничения на count; tie-break — минимальный count
    const solve = (lambda: number): [number, number] => {
        val[0] = 0;
        cnt[0] = 0;
        let head = 0, tail = 0;
        for (let i = 1; i <= n; i++) {
            let bv = val[i - 1], bc = cnt[i - 1];
            const kIn = i - l;
            if (kIn >= 0) {
                const key = val[kIn] - prefix[kIn];
                while (tail > head) {
                    const b = deque[tail - 1];
                    const bk = val[b] - prefix[b];
                    if (bk < key || (bk === key && cnt[b] >= cnt[kIn])) tail--;
                    else break;
                }
                deque[tail++] = kIn;
            }
            const low = i - r;
            while (tail > head && deque[head] < low) head++;
            if (tail > head) {
                const k = deque[head];
                const cv = val[k] - prefix[k] + prefix[i] - lambda;
                const cc = cnt[k] + 1;
                if (cv > bv || (cv === bv && cc < bc)) { bv = cv; bc = cc; }
            }
            val[i] = bv;
            cnt[i] = bc;
        }
        return [val[n], cnt[n]];
    };

    // f(1): лучший одиночный подмассив длины [l, r]
    let f1 = -Infinity;
    {
        let head = 0, tail = 0;
        for (let i = l; i <= n; i++) {
            const kIn = i - l;
            while (tail > head && prefix[deque[tail - 1]] >= prefix[kIn]) tail--;
            deque[tail++] = kIn;
            while (tail > head && deque[head] < i - r) head++;
            const v = prefix[i] - prefix[deque[head]];
            if (v > f1) f1 = v;
        }
    }

    const [g0, c0] = solve(0);
    if (c0 === 0) return f1;   // все варианты убыточны, но минимум один брать обязаны
    if (c0 <= m) return g0;    // безштрафный оптимум уже укладывается в лимит

    // cnt(0) > m ≥ 1 ⇒ s_{m+1} > 0; ищем минимальный λ с cnt(λ) ≤ m
    let lo = 1, hi = 1e10;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        const [, c] = solve(mid);
        if (c <= m) hi = mid;
        else lo = mid + 1;
    }
    const [g] = solve(lo);
    return g + lo * m;
}
