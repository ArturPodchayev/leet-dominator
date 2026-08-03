func stoneGameVII(stones []int) int {
    n := len(stones)
    prefix, dp := make([]int, n+1), make([][]int, n)
    max2 := func(a, b int) int {if a > b {return a} else {return b}}
    for i:=0; i<n; i++ {
        dp[i] = make([]int, n)
        prefix[i+1] = prefix[i] + stones[i]
    }
    for d:=1; d<n; d++ {
        for i:=0; i+d<n; i++ {
            dp[i][i+d] = max2(prefix[i+d+1]-prefix[i+1] - dp[i+1][i+d], prefix[i+d]-prefix[i] - dp[i][i+d-1])
        }
    }
    return dp[0][n-1]
}
