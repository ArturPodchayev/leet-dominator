
func minimumPossibleSum(n int, target int) int64 {
	var min int64
	var targetMinLen int

    lLen = target / 2
	if n <= LMinLen {
		return count(1, n, n)
	}
	min = count(1, lLen, lLen)
	min += count(target, target+n-lLen-1, n-lLen)

	return min
}

func count(min, max, height int) int64 {
	if height == 1 {
		return int64(min)
	}

	return int64((min + max) * height / 2)
}
