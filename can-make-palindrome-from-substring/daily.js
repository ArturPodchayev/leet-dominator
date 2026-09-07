/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(S) {
    const MOD = Math.pow(10, 9)  + 7;
    let dp = new Array(S.length + 1);
  

    for (let i = 0; i <= S.length; i++) {
        dp[i] = 0;
    }
    
    dp[0] = 1;  // Initialize the first element for the empty subsequence

    let lastOccurrence = {};

    for (let i = 0; i < S.length; i++) {
    
        dp[i + 1] = (2 * dp[i]) % MOD;
   
        if (S[i] in lastOccurrence) {
            // Correct the subtraction for duplicate subsequences
            dp[i + 1] = ((dp[i + 1] - dp[lastOccurrence[S[i]] - 1]) + MOD) % MOD;
           
        }
     

        lastOccurrence[S[i]] = i + 1;

    }

    // Subtract 1 to exclude the empty subsequence, then take modulo
    return ((dp[S.length] - 1) + MOD) % MOD;
};
