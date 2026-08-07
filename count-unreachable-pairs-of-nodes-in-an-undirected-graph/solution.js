var countPairs = function (n, edges) {
    let arr = new Array(n).fill(-1);
    const find = (a) => {
        return (arr[a] < 0) ? a : find(arr[a]);
    }
    const union = (a, b) => {
        let pa = find(a), pb = find(b);

        if (pa === pb) return;

        if (arr[pa] <= arr[pb]) {
            arr[pa] += arr[pb];
            arr[pb] = pa;
        } else {
            arr[pb] += arr[pa];
            arr[pa] = pb;
        }
    }
    for (let [a, b] of edges) {
        union(a, b);
    }

    let totalCount = 0, res = 0;

    for (let connected of arr) {
        if (connected > -1) continue;
        let countConnected = -1 * connected;
        res += totalCount * countConnected;
        totalCount += countConnected;
    }
    return res;
}
