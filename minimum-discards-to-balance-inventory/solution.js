let minArrivalsToDiscard = function (arrivals, w, m) {
    let ans = 0, map = new Map();
    let i = 0, j = 0, n = arrivals.length;

    while (i < n) {
        if (i >= w) {
            map.set(arrivals[j], map.get(arrivals[j]) - 1);
            j++;
        }

        map.set(arrivals[i], (map.get(arrivals[i]) || 0) + 1);

        if (map.get(arrivals[i]) > m) {
            ans++;
            map.set(arrivals[i], map.get(arrivals[i]) - 1);
            arrivals[i] = -1;
        }

        i++;
    }

    return ans;
}
