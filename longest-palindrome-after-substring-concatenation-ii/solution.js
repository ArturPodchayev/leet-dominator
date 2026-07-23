/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var longestPalindrome = function(s, t) {
    const n = s.length;
    const m = t.length;

    t = t.split('').reverse().join('');

    // Create and populate dp table for s
    const dp = Array.from({ length: n }, () => Array(n).fill(false));
    for (let i = 0; i < n; i++) dp[i][i] = true;
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) dp[i][i + 1] = true;
    }
    for (let gap = 2; gap < n; gap++) {
        for (let i = 0; i < n - gap; i++) {
            const j = i + gap;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
            }
        }
    }

    // Create and populate dp table for reversed t
    const dpt = Array.from({ length: m }, () => Array(m).fill(false));
    for (let i = 0; i < m; i++) dpt[i][i] = true;
    for (let i = 0; i < m - 1; i++) {
        if (t[i] === t[i + 1]) dpt[i][i + 1] = true;
    }
    for (let gap = 2; gap < m; gap++) {
        for (let i = 0; i < m - gap; i++) {
            const j = i + gap;
            if (t[i] === t[j] && dpt[i + 1][j - 1]) {
                dpt[i][j] = true;
            }
        }
    }

    // Longest palindromes starting at each index
    const ls = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = n - 1; j >= i; j--) {
            if (dp[i][j]) {
                ls[i] = j - i + 1;
                break;
            }
        }
    }

    const lt = Array(m).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = m - 1; j >= i; j--) {
            if (dpt[i][j]) {
                lt[i] = j - i + 1;
                break;
            }
        }
    }

    // Longest common substrings ending at i in s and j in t
    const dpp = Array.from({ length: n }, () => Array(m).fill(0));
    for (let i = 0; i < n; i++) dpp[i][0] = s[i] === t[0] ? 1 : 0;
    for (let j = 0; j < m; j++) dpp[0][j] = s[0] === t[j] ? 1 : 0;
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dpp[i][j] = (s[i] === t[j]) ? dpp[i - 1][j - 1] + 1 : 0;
        }
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i < n - 1 && j < m - 1) {
                ans = Math.max(ans, dpp[i][j] * 2 + ls[i + 1], dpp[i][j] * 2 + lt[j + 1]);
            } else if (i < n - 1) {
                ans = Math.max(ans, dpp[i][j] * 2 + ls[i + 1], dpp[i][j] * 2);
            } else if (j < m - 1) {
                ans = Math.max(ans, dpp[i][j] * 2, dpp[i][j] * 2 + lt[j + 1]);
            } else {
                ans = Math.max(ans, dpp[i][j] * 2);
            }
        }
    }

    ans = Math.max(ans, ls[0], lt[0]);
    return ans;
};
