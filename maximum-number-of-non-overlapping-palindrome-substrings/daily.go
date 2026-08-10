func winnerSquareGame(n int) bool {
	squares := make([]int, 0)
	for i := 1; i*i <= n; i++ {
		squares = append(squares, i*i)
	}
	dp := make([]bool, n+1)
	dp[0] = false
	dp[1] = true
	for i := 2; i <= n; i++ {
		for _, square := range squares {
			if square > i {
				break
			}
			if !dp[i-square] {
				dp[i] = true
				break
			}
		}
	}
	return dp[n]
}
