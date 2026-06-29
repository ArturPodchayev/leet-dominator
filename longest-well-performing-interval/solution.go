func longestWPI(hours []int) int {
	n := len(hours)
	if n == 0 {
		return 0
	}

	dp := make(map[int]int)
	sum := 0
	max := 0
	for i := 0; i < n; i++ {
		if hours[i] > 8 {
			sum = sum + 1
		} else {
			sum = sum - 1
		}
		if sum > 0 {
			max = i + 1
		} else {
			_, ok := dp[sum]
			if !ok {
				dp[sum] = i
			}
			if index, yes := dp[sum-1]; yes {
				max = Max(max, i-index)
			}
		}
	}
	return max
}

func Max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
