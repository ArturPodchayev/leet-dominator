func numberWays(hats [][]int) int {
	m, n := len(hats), 41
	modulo := int(1e9 + 7)
	hatsToPeople := make([][]int, n)
	for i := 0; i < len(hats); i++ {
		for _, hat := range hats[i] {
			hatsToPeople[hat] = append(hatsToPeople[hat], i)
		}
	}

	memo := make(map[[2]int]int)
	var recurse func(hatIdx int, peopleWithHat int) int
	recurse = func(hatIdx int, peopleWithHat int) int {
		if peopleWithHat == (1<<m)-1 {
			return 1
		}
		if hatIdx == n {
			return 0
		}
		if val, ok := memo[[2]int{hatIdx, peopleWithHat}]; ok {
			return val
		}

		count := recurse(hatIdx+1, peopleWithHat) % modulo // Skip this hat
		for _, person := range hatsToPeople[hatIdx] {
			mask := 1 << person
			if peopleWithHat&mask == 0 {
				count += recurse(hatIdx+1, peopleWithHat|mask)
				count %= modulo
			}
		}

		memo[[2]int{hatIdx, peopleWithHat}] = count
		return count
	}

	return recurse(1, 0)
}
