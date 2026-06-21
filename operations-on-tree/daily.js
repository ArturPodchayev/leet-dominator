/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let max = 0;
    for (const cost of costs) {
        max = Math.max(max, cost);
    }

    const freq = new Array(max + 1).fill(0);

    for (const cost of costs) {
        freq[cost]++;
    }

    let ans = 0;

    for (let cost = 1; cost <= max; cost++) {
        if (freq[cost] === 0) continue;
        const canBuy = Math.min(freq[cost], Math.floor(coins / cost));
        ans += canBuy;
        coins -= canBuy * cost;
    }

    return ans;
};
