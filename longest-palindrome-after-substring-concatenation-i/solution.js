/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var longestPalindrome = function(s, t) {

    const isPalindrome = (str) => {
        let l = 0, r = str.length - 1;
        while (l < r) {
            if (str[l] !== str[r]) return false;
            l++;
            r--;
        }
        return true;
    };

    const getSubstrings = (str) => {
        const subs = [];
        for (let i = 0; i < str.length; i++) {
            for (let j = i + 1; j <= str.length; j++) {
                subs.push(str.slice(i, j));
            }
        }
        return subs;
    };

    const sSubs = getSubstrings(s).concat(""); // Include empty
    const tSubs = getSubstrings(t).concat(""); // Include empty

    let maxLen = 0;

    for (const sSub of sSubs) {
        for (const tSub of tSubs) {
            const combined = sSub + tSub;
            if (isPalindrome(combined)) {
                maxLen = Math.max(maxLen, combined.length);
            }
        }
    }

    return maxLen;
};
