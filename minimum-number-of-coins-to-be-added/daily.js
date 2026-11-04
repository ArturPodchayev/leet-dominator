function hpush(h, v) {
    let i = h.length;
    h.push(v);
    while (i > 0) {
        const p = (i - 1) >> 1;
        if (h[p] <= h[i]) break;
        const t = h[p];
        h[p] = h[i];
        h[i] = t;
        i = p;
    }
}

function hpop(h) {
    const top = h[0];
    const last = h.pop();
    const n = h.length;
    if (n > 0) {
        h[0] = last;
        let i = 0;
        while (true) {
            let s = i;
            const l = 2 * i + 1, r = l + 1;
            if (l < n && h[l] < h[s]) s = l;
            if (r < n && h[r] < h[s]) s = r;
            if (s === i) break;
            const t = h[s];
            h[s] = h[i];
            h[i] = t;
            i = s;
        }
    }
    return top;
}

/**
 * @param {number[]} nums
 * @param {number} x
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, x, k) {
    const a = [], b = [];
    const ca = new Map();
    const da = new Map(), db = new Map();
    let na = 0, nb = 0, sa = 0, sb = 0;
    const topA = () => {
        while (a.length > 0 && (da.get(0 - a[0]) || 0) > 0) {
            const v = 0 - hpop(a);
            da.set(v, da.get(v) - 1);
        }
        return 0 - a[0];
    };
    const topB = () => {
        while (b.length > 0 && (db.get(b[0]) || 0) > 0) {
            const v = hpop(b);
            db.set(v, db.get(v) - 1);
        }
        return b[0];
    };
    const addA = (v) => {
        hpush(a, 0 - v);
        ca.set(v, (ca.get(v) || 0) + 1);
        na++;
        sa += v;
    };
    const addB = (v) => {
        hpush(b, v);
        nb++;
        sb += v;
    };
    const remA = (v) => {
        ca.set(v, ca.get(v) - 1);
        da.set(v, (da.get(v) || 0) + 1);
        na--;
        sa -= v;
    };
    const remB = (v) => {
        db.set(v, (db.get(v) || 0) + 1);
        nb--;
        sb -= v;
    };
    const fix = () => {
        while (na > nb + 1) {
            const v = topA();
            remA(v);
            addB(v);
        }
        while (nb > na) {
            const v = topB();
            remB(v);
            addA(v);
        }
    };
    const add = (v) => {
        if (na === 0 || v <= topA()) {
            addA(v);
        } else {
            addB(v);
        }
        fix();
    };
    const del = (v) => {
        if ((ca.get(v) || 0) > 0) {
            remA(v);
        } else {
            remB(v);
        }
        fix();
    };
    const n = nums.length;
    const y = new Array(n - x + 1).fill(0);
    for (let i = 0; i < n; i++) {
        add(nums[i]);
        if (i >= x) del(nums[i - x]);
        if (i >= x - 1) {
            const m = topA();
            y[i - x + 1] = m * na - sa + sb - m * nb;
        }
    }
    const dp = [];
    for (let j = 0; j <= k; j++) dp.push(new Array(n + 1).fill(Infinity));
    for (let i = 0; i <= n; i++) dp[0][i] = 0;
    for (let j = 1; j <= k; j++) {
        for (let i = 1; i <= n; i++) {
            dp[j][i] = dp[j][i - 1];
            if (i >= x && dp[j - 1][i - x] !== Infinity) dp[j][i] = Math.min(dp[j][i], dp[j - 1][i - x] + y[i - x]);
        }
    }
    return dp[k][n];
};
