function distinctSubseqII(s: string): number {
    const MOD = 10 ** 9 + 7;
    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    const cache = {};
    dp[0] = 1
    for (let i=1; i<n+1; i++){
        const c = s.charCodeAt(i-1) - 97;
        dp[i] = (2 * dp[i-1]) % MOD;
        if(c in cache){
            dp[i] = (dp[i] - dp[cache[c] - 1] + MOD) % MOD
        }
        cache[c] = i
    }
    return (dp[n] - 1 + MOD) % MOD
};
