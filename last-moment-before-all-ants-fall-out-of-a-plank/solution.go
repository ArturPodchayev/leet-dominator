func getLastMoment(n int, left []int, right []int) int {
    leftMax, rightMax := 0, 0

    for _, v := range left {
        leftMax = max(leftMax, v)
    }

    for _, v := range right {
        rightMax = max(rightMax, n - v)
    }

    return max(leftMax, rightMax)
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
