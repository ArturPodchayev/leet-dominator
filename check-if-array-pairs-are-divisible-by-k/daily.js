class SparseTable {
    constructor(a) {
        this.n = a.length;
        const maxLog = 32 - Math.clz32(this.n);

        this.mn = Array.from({ length: this.n }, () => Array(maxLog).fill(0));
        this.mx = Array.from({ length: this.n }, () => Array(maxLog).fill(0));
        this.logVal = Array(this.n + 1).fill(0);

        for (let i = 2; i <= this.n; i++) {
            this.logVal[i] = this.logVal[Math.floor(i / 2)] + 1;
        }

        for (let i = 0; i < this.n; i++) {
            this.mx[i][0] = a[i];
            this.mn[i][0] = a[i];
        }

        for (let j = 1; (1 << j) <= this.n; j++) {
            for (let i = 0; i + (1 << j) <= this.n; i++) {
                this.mn[i][j] = Math.min(this.mn[i][j - 1], this.mn[i + (1 << (j - 1))][j - 1]);
            }
        }

        for (let j = 1; (1 << j) <= this.n; j++) {
            for (let i = 0; i + (1 << j) <= this.n; i++) {
                this.mx[i][j] = Math.max(this.mx[i][j - 1], this.mx[i + (1 << (j - 1))][j - 1]);
            }
        }
    }

    queryMin(l, r) {
        const j = this.logVal[r - l + 1];
        return Math.min(this.mn[l][j], this.mn[r - (1 << j) + 1][j]);
    }

    queryMax(l, r) {
        const j = this.logVal[r - l + 1];
        return Math.max(this.mx[l][j], this.mx[r - (1 << j) + 1][j]);
    }
}

class MyMaxHeap {
    constructor(cmp) {
        this.data = [];
        this.cmp = cmp;
    }

    size() {
        return this.data.length;
    }

    push(val) {
        this.data.push(val);
        this.bubbleUp(this.data.length - 1);
    }

    pop() {
        if (this.data.length === 0) return undefined;

        const top = this.data[0];
        const last = this.data.pop();

        if (this.data.length > 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }

        return top;
    }

    bubbleUp(i) {
        while (i > 0) {
            const p = (i - 1) >> 1;

            if (this.cmp(this.data[i], this.data[p]) <= 0) break;

            [this.data[i], this.data[p]] = [this.data[p], this.data[i]];
            i = p;
        }
    }

    bubbleDown(i) {
        const n = this.data.length;

        while (true) {
            let largest = i;
            const l = (i << 1) + 1;
            const r = (i << 1) + 2;

            if (l < n && this.cmp(this.data[l], this.data[largest]) > 0) largest = l;
            if (r < n && this.cmp(this.data[r], this.data[largest]) > 0) largest = r;
            if (largest === i) break;

            [this.data[i], this.data[largest]] = [this.data[largest], this.data[i]];
            i = largest;
        }
    }
}

function maxTotalValue(a, k) {
    let ans = 0;
    const st = new SparseTable(a);
    const n = a.length;
    const heap = new MyMaxHeap((x, y) => x[0] - y[0]);

    for (let i = 0; i < n; i++) {
        const val = st.queryMax(0, i) - st.queryMin(0, i);
        heap.push([val, 0, i]);
    }

    while (k-- > 0 && heap.size() > 0) {
        const [x, l, r] = heap.pop();
        ans += x;

        if (l + 1 <= r) {
            const newVal = st.queryMax(l + 1, r) - st.queryMin(l + 1, r);
            heap.push([newVal, l + 1, r]);
        }
    }

    return ans;
}
