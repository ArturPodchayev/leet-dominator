function numberWays(hats) {
    // define some variables
    let n = hats.length
    let m = 1 << n
    let ans = new Array(m).fill(0)
    let types = 40
    let dp = new Array(types)
    let MOD = 10 ** 9 + 7

    // first 1
    ans[0] = 1

    // fill empty first
    for(let i = 0; i <= types; i++) {
        dp[i] = []
    }

    // 2d loop
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < hats[i].length; j++) {
            dp[hats[i][j]].push(i)
        }
    }

    // 2d loop, `k` means `key of ans`, as `state`
    for(let i = 1; i <= types; i++) {
        for(let k = m; k--;) {
            for(let j = 0; j < dp[i].length; j++) {
              if((k & (1 << dp[i][j])) > 0) {
                  ans[k] = (ans[k] + ans[k ^ (1 << dp[i][j])]) % MOD
              }
            }
        }
    }
    
    // result
    return ans[m-1]
}
