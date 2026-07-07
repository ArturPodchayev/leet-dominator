let memo;
let split;
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var longestPalindrome = function(word1, word2) {
    memo = Array.from({length: word1.length+word2.length}, () => Array(word1.length+word2.length).fill(0));
    split = word1.length;
    res = 0;
    lps(word1+word2,0,word1.length+word2.length-1);

    return res;
};

const lps = (w,i,j) => {
    if (i > j) return 0;
    if (i === j) return 1;  
    if (memo[i][j] !== 0) return memo[i][j];

    if (w[i] === w[j]) {
        memo[i][j] = 2 + lps(w,i+1,j-1);
        // only update res if wi is from the first word, and j is 
        // from the second one.
        if (i < split && j >= split) res = Math.max(memo[i][j],res);
    } else {
        memo[i][j] = Math.max(lps(w,i+1,j),lps(w,i,j-1));
    }

    return memo[i][j];
}
