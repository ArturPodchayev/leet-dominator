func maxScore(grid [][]int) int {
	m, n := len(grid), len(grid[0])
	dp := make([][]int, m)
	res := math.MinInt
	for i := range m {
		dp[i] = make([]int, n)
	}
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			val := math.MaxInt
			if In(grid, i-1, j) {
				val = min(val, dp[i-1][j])
			}
			if In(grid, i, j-1) {
				val = min(val, dp[i][j-1])
			}
			res = max(res, grid[i][j]-val)
			dp[i][j] = min(val, grid[i][j])
		}
	}
	return res
}

func In[T any](mat [][]T, i, j int) bool {
	return i >= 0 && i < len(mat) &&
		j >= 0 && (len(mat) == 0 || j < len(mat[0]))
}
