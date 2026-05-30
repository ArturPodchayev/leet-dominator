class Fenwick {
    tree: number[];

    constructor(n: number) {
        this.tree = Array(n + 1).fill(0);
    }

    add(i: number, v: number): void {
        for (i++; i < this.tree.length; i += i & -i) this.tree[i] += v;
    }

    sum(i: number): number {
        let res = 0;
        for (i++; i > 0; i -= i & -i) res += this.tree[i];
        return res;
    }

    lowerBound(k: number): number {
        let idx = 0;
        let bit = 1;

        while (bit < this.tree.length) bit <<= 1;

        for (let step = bit; step > 0; step >>= 1) {
            const next = idx + step;
            if (next < this.tree.length && this.tree[next] < k) {
                idx = next;
                k -= this.tree[next];
            }
        }

        return idx;
    }
}

class SegmentTree {
    n: number;
    tree: number[];

    constructor(size: number) {
        this.n = 1;
        while (this.n < size) this.n <<= 1;
        this.tree = Array(this.n * 2).fill(0);
    }

    set(i: number, v: number): void {
        i += this.n;
        this.tree[i] = v;

        for (i >>= 1; i > 0; i >>= 1) {
            this.tree[i] = Math.max(this.tree[i * 2], this.tree[i * 2 + 1]);
        }
    }

    query(l: number, r: number): number {
        let res = 0;
        l += this.n;
        r += this.n;

        while (l <= r) {
            if (l & 1) res = Math.max(res, this.tree[l++]);
            if (!(r & 1)) res = Math.max(res, this.tree[r--]);
            l >>= 1;
            r >>= 1;
        }

        return res;
    }
}

function upperBound(arr: number[], value: number): number {
    let l = 0;
    let r = arr.length;

    while (l < r) {
        const m = (l + r) >> 1;
        if (arr[m] <= value) l = m + 1;
        else r = m;
    }

    return l;
}

function getResults(queries: number[][]): boolean[] {
    const coords = [...new Set([0, ...queries.filter(q => q[0] === 1).map(q => q[1])])].sort((a, b) => a - b);

    const index = new Map<number, number>();
    coords.forEach((v, i) => index.set(v, i));

    const bit = new Fenwick(coords.length);
    const seg = new SegmentTree(coords.length);
    const ans: boolean[] = [];

    bit.add(0, 1);

    for (const q of queries) {
        if (q[0] === 1) {
            const x = q[1];
            const i = index.get(x)!;

            const before = bit.sum(i);
            const pred = bit.lowerBound(before);
            const total = bit.sum(coords.length - 1);

            bit.add(i, 1);
            seg.set(i, x - coords[pred]);

            if (before < total) {
                const succ = bit.lowerBound(before + 2);
                seg.set(succ, coords[succ] - x);
            }
        } else {
            const x = q[1];
            const size = q[2];

            const pos = upperBound(coords, x) - 1;
            const count = bit.sum(pos);
            const pred = bit.lowerBound(count);

            const maxGap = Math.max(seg.query(0, pred), x - coords[pred]);
            ans.push(maxGap >= size);
        }
    }

    return ans;
}
