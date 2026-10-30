function shortestPath(n: number, edges: number[][], labels: string, k: number): number {
    if (n === 1) return 0;
    const adj: Array<Array<[number, number]>> = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const [u, v, w] = edges[i];
        adj[u].push([v, w]);
    }
    const code = new Uint16Array(n);
    for (let i = 0; i < n; i++) code[i] = labels.charCodeAt(i);

    const stride = k + 1;
    const INF = Number.POSITIVE_INFINITY;
    const dist = new Float64Array(n * stride);
    dist.fill(INF);

    class MinHeap<T> {
        private a: T[] = [];
        private cmp: (x: T, y: T) => boolean;
        constructor(cmp: (x: T, y: T) => boolean) { this.cmp = cmp; }
        size(): number { return this.a.length; }
        peek(): T | undefined { return this.a[0]; }
        push(v: T): void {
            const a = this.a;
            a.push(v);
            let i = a.length - 1;
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (!this.cmp(a[i], a[p])) break;
                [a[i], a[p]] = [a[p], a[i]];
                i = p;
            }
        }
        pop(): T | undefined {
            const a = this.a;
            const n = a.length;
            if (n === 0) return undefined;
            const res = a[0];
            const v = a[n - 1];
            a.pop();
            if (n === 1) return res;
            a[0] = v;
            let i = 0;
            while (true) {
                let l = i * 2 + 1, r = l + 1, best = i;
                if (l < a.length && this.cmp(a[l], a[best])) best = l;
                if (r < a.length && this.cmp(a[r], a[best])) best = r;
                if (best === i) break;
                [a[i], a[best]] = [a[best], a[i]];
                i = best;
            }
            return res;
        }
    }

    const heap = new MinHeap<[number, number, number]>((x, y) => x[0] < y[0]);

    dist[0 * stride + 1] = 0;
    heap.push([0, 0, 1]);

    while (heap.size() > 0) {
        const cur = heap.pop()!;
        const [d, u, c] = cur;
        if (d !== dist[u * stride + c]) continue;
        if (u === n - 1) return d;

        const lu = code[u];
        const out = adj[u];
        for (let i = 0; i < out.length; i++) {
            const [v, w] = out[i];
            const newC = lu === code[v] ? c + 1 : 1;
            if (newC > k) continue;
            const nd = d + w;
            const idx = v * stride + newC;
            if (nd < dist[idx]) {
                dist[idx] = nd;
                heap.push([nd, v, newC]);
            }
        }
    }

    return -1;
}
