/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var minimumNumbers = function(num, k) {
    if (num === 0) return 0;
    let combinations = [];
    for (let i = 1; i <= num; i++) {
        if (String(i)[String(i).length - 1] === String(k)) {
            combinations.push(i);
        }
    }
    if (combinations.length === 0) return -1;
    let dp = new Array(num + 1).fill(Infinity);
    dp[0] = 0;

    for (let number of combinations) {
        for (let j = number; j <= num; j++) {
            dp[j] = Math.min(dp[j], dp[j - number] + 1);
        }
    }

    return dp[num] === Infinity ? -1 : dp[num];
};
