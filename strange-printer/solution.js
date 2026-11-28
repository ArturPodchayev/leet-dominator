var strangePrinter = function (s) {
    let n = s.length, m = 0;
    let s1 = new Array(n);
    for (let i = 0; i < n; i++) {
        if (i === 0 || s[i] !== s[i - 1]) {
            s1[m++] = s[i];
        }
    }
    let dp = new Array(m).fill(0).map(() => new Array(m).fill(0));
    for (let i = m - 1; i >= 0; i--) {
        dp[i][i] = 1;
        for (let j = i + 1; j < m; j++) {
            if (s1[i] === s1[j]) {
                dp[i][j] = dp[i][j - 1];
            } else {
                let min = Number.MAX_VALUE;
                for (let k = i; k < j; k++) {
                    min = Math.min(min, dp[i][k] + dp[k + 1][j]);
                }
                dp[i][j] = min;
            }
        }
    }
    return dp[0][m - 1];
};
