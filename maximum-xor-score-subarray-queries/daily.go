func stoneGameIX(stones []int) bool {
	count := [3]int{}

	for _, stone := range stones {
		count[stone%3]++
	}

	if count[0]%2 == 0 {
		return count[1] > 0 && count[2] > 0
	}

	return abs(count[1]-count[2]) > 2
}

func abs(value int) int {
	if value < 0 {
		return -value
	}
	return value
}
