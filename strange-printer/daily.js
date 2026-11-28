/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
var maximumSaleItems = function(items, budget) {

    let cheapest = Infinity;
    let maxFactor = 0;

    // 1. Find cheapest price and maximum factor
    for (const [f, p] of items) {
        cheapest = Math.min(cheapest, p);
        maxFactor = Math.max(maxFactor, f);
    }

    // 2. Count factor frequencies
    const freq = Array(maxFactor + 1).fill(0);

    for (const [f] of items) {
        freq[f]++;
    }

    // 3. Sieve: accumulate frequencies of multiples
    for (let f = 1; f <= maxFactor; f++) {
        if (freq[f] === 0) continue;

        for (let j = 2 * f; j <= maxFactor; j += f) {
            freq[f] += freq[j];
        }
    }

    // 4. Group boosted purchases by price
    const groups = new Map();

    for (const [f, p] of items) {
        const gain = freq[f] - 1;

        if (gain > 0 && p <= 2 * cheapest) {
            groups.set(p, (groups.get(p) || 0) + gain);
        }
    }

    // 5. Greedy: cheapest boosted units first
    const prices = [...groups.keys()].sort((a, b) => a - b);

    let answer = 0;

    for (const p of prices) {
        const count = groups.get(p);
        const take = Math.min(count, Math.floor(budget / p));

        answer += 2 * take;
        budget -= take * p;
    }

    // 6. Buy regular copies at the cheapest price
    answer += Math.floor(budget / cheapest);

    return answer;
};
