
func minInt(i, j int) int {
	if i > j {
		return j
	}
	return i
}

var memo [][][]int
var m, n int
var houses []int
var cost [][]int

func dp(lastHouseColor, target int, idx int) int {
	if idx == m && target == 0 {
		return 0
	}
	if idx == m && target != 0 {
		// invalid result
		return math.MaxInt32
	}
	if target < 0 {
		return math.MaxInt32
	}
	// base case
	res := math.MaxInt32
	if idx == 0 {
		// the first house already painted
		if houses[idx] != 0 {
			res = minInt(res, dp(houses[idx], target, idx+1))
		} else {
			// not painted, then we try to paint it
			for j := 0; j < n; j++ {
				res = minInt(res, dp(j+1, target, idx+1)+cost[0][j])
			}
		}
		return res
	}

	if memo[idx][lastHouseColor][target] != -1 {
		return memo[idx][lastHouseColor][target]
	}

	// house painted case, no need to increase the cost
	if houses[idx] != 0 {
		for j := 0; j < n; j++ {
			if lastHouseColor == houses[idx] {
				res = minInt(res, dp(houses[idx], target, idx+1))
			} else {
				// different color
				res = minInt(res, dp(houses[idx], target-1, idx+1))
			}
		}
		memo[idx][lastHouseColor][target] = res
		return res
	}

	// ok now we need to paint the house
	for j := 0; j < n; j++ {
		if lastHouseColor == j+1 {
			// same color
			res = minInt(res, dp(j+1, target, idx+1)+cost[idx][j])
		} else {
			// different color
			res = minInt(res, dp(j+1, target-1, idx+1)+cost[idx][j])
		}
	}
	memo[idx][lastHouseColor][target] = res
	return res
}

func minCost(h []int, c [][]int, a int, b int, target int) int {
	m = a
	n = b
	houses = h
	cost = c
	memo = make([][][]int, m)
	for i := 0; i < m; i++ {
		memo[i] = make([][]int, n+1)
		for j := 0; j < n+1; j++ {
			memo[i][j] = make([]int, target)
			for k := 0; k < target; k++ {
				memo[i][j][k] = -1
			}
		}
	}
	res := dp(0, target-1, 0)
	if res >= math.MaxInt32 {
		return -1
	}
	return res
}
