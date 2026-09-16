func numberOfSets(n int, k int) int {

	if n == k+1 {
		return 1
	}
	n--
	dp := make([][]int, n+1)
	for i := range dp {
		dp[i] = make([]int, k+1)
	}
	return dfs(n, k, dp)
}
func dfs(n, k int, dp [][]int) int {
	if n == k {
		return 1
	}
	if k == 1 {
		return n * (n + 1) / 2
	}
	if dp[n][k] > 0 {
		return dp[n][k]
	}
	dp[n][k] = dfs(n-1, k, dp)
	for i := k - 1; i < n; i++ {
		dp[n][k] += dfs(i, k-1, dp)
		dp[n][k] %= 1_000_000_007
	}
	return dp[n][k]
}
