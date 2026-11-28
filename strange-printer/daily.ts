function maximumSaleItems(items: number[][], budget: number): number {
    const n = items.length;
    const cnt = new Int32Array(n + 1);
    let minPrice = Infinity;

    for (const [f, p] of items) {
        cnt[f]++;
        if (p < minPrice) minPrice = p;
    }

    const divCnt = new Int32Array(n + 1);

    for (let f = 1; f <= n; f++) {
        for (let m = f; m <= n; m += f) {
            divCnt[f] += cnt[m];
        }
    }

    const map = new Map<number, number>();

    for (const [f, p] of items) {
        const free = divCnt[f] - 1;
        if (free > 0 && p < 2 * minPrice) {
            map.set(p, (map.get(p) ?? 0) + free);
        }
    }

    const offers = [...map.entries()].sort((a, b) => a[0] - b[0]);
    const prices: number[] = [];
    const prefCount: number[] = [0];
    const prefCost: number[] = [0];

    for (const [p, c] of offers) {
        prices.push(p);
        prefCount.push(prefCount[prefCount.length - 1] + c);
        prefCost.push(prefCost[prefCost.length - 1] + p * c);
    }

    const costBundles = (take: number): number => {
        if (take <= 0) return 0;

        let l = 0;
        let r = prices.length;

        while (l < r) {
            const mid = (l + r) >> 1;
            if (prefCount[mid + 1] >= take) r = mid;
            else l = mid + 1;
        }

        return prefCost[l] + (take - prefCount[l]) * prices[l];
    };

    const can = (total: number): boolean => {
        const maxBundles = Math.min(Math.floor(total / 2), prefCount[prefCount.length - 1]);
        const cost = costBundles(maxBundles) + (total - maxBundles * 2) * minPrice;
        return cost <= budget;
    };

    let l = 0;
    let r = budget * 2;

    while (l < r) {
        const mid = Math.floor((l + r + 1) / 2);
        if (can(mid)) l = mid;
        else r = mid - 1;
    }

    return l;
}
