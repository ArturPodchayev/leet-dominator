/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let m = s.length;
    let n = t.length;

    // dp[j] = ways to form t[0..j-1]
    let dp = Array(n + 1).fill(0);

    // Empty string can always be formed in 1 way
    dp[0] = 1;

    for (let i = 1; i <= m; i++) {
        for (let j = n; j >= 1; j--) {
            if (s[i - 1] === t[j - 1]) {
                dp[j] += dp[j - 1];
            }
        }
    }

    return dp[n];
};
