func minimumAddedCoins(coins []int, target int) int {
	sort.Ints(coins)
	reach, i, res := 0, 0, 0
	for reach < target {
		if i < len(coins) && coins[i] <= reach+1 {
			reach += coins[i]
			i++
		} else {
			reach += reach + 1
			res++
		}
	}
	return res
}
