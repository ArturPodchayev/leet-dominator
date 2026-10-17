const MOD = 1000000007n;

function sumRange(a, b) {
    return ((a + b) * (b - a + 1n)) / 2n; // sum from a to b
}

var minimumPossibleSum = function(n, target) {
    n = BigInt(n);
    target = BigInt(target);
    const mid = target / 2n;

    if (n <= mid) {
        // Case 1: Just take [1..n]
        return Number(sumRange(1n, n) % MOD);
    } else {
        // Case 2: Take [1..mid] + [target.. target+(n-mid-1)]
        let part1 = sumRange(1n, mid) % MOD;
        let part2 = sumRange(target, target + (n - mid - 1n)) % MOD;
        return Number((part1 + part2) % MOD);
    }
};
