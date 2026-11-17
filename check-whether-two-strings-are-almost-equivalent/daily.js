/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumChanges = function(s, k) {
    
    const n = s.length;
    const INF = 1e9;

    // cost[i][j] = minimum changes to make s[i..j] a semi-palindrome
    const cost = Array.from({ length: n }, () => Array(n).fill(INF) );

    // we precompute semi-palindrome conversion costs
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const len = j - i + 1;

            // we try every valid divisor d
            for (let d = 1; d < len; d++) {
                if (len % d !== 0) continue;

                let changes = 0;

                // we compare mirrored characters in each group
                for (let r = 0; r < d; r++) {
                    let l = i + r;
                    let right = j - ((len - 1 - r) % d);

                    while (l < right) {
                        if (s[l] !== s[right]) {
                            changes++;
                        }

                        l += d;
                        right -= d;
                    }
                }

                cost[i][j] = Math.min(cost[i][j], changes);
            }
        }
    }

    // dp[i][p] = minimum changes to partition
    // first i characters into p semi-palindromes
    const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(INF));

    dp[0][0] = 0;

    for (let p = 1; p <= k; p++) {
        for (let i = 2 * p; i <= n; i++) {
            for (let j = 2 * (p - 1); j <= i - 2; j++) {
                dp[i][p] = Math.min(
                    dp[i][p],
                    dp[j][p - 1] + cost[j][i - 1]
                );
            }
        }
    }

    return dp[n][k];
};
