function DJSet(n) {
    let p = Array(n).fill(-1);
    return { find, union, count, equiv, par, grp }
    function find(x) {
        return p[x] < 0 ? x : p[x] = find(p[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x == y) return false;
        if (p[x] < p[y]) [x, y] = [y, x];
        p[x] += p[y];
        p[y] = x;
        return true;
    }
    function count() { // total groups
        return p.filter(v => v < 0).length;
    }
    function equiv(x, y) { // isConnected
        return find(x) == find(y);
    }
    function par() {
        return p;
    }
    function grp() { // generate all groups (nlogn)
        let g = [];
        for (let i = 0; i < n; i++) g.push([]);
        for (let i = 0; i < n; i++) g[find(i)].push(i); // sorted and unique
        return g;
    }
}

const numberOfComponents = (p, k) => {
    let n = p.length, m = p[0].length, ds = new DJSet(n);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let cnt = intersect(p[i], p[j]);
            if (cnt >= k) ds.union(i, j);
        }
    }
    return ds.count();
};

const intersect = (a, b) => {
    let res = 0;
    a = new Set(a), b = new Set(b);
    for (const x of a) {
        if (b.has(x)) res++;
    }
    return res;
};
