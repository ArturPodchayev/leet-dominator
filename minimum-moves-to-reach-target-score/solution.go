func minMoves(target int, maxDoubles int) int {
	counter := 0
	for target != 1 {
		if maxDoubles == 0 {
			target--
			counter++
			continue
		}

		if target%2 != 0 {
			counter++
		}
		target = target / 2
		maxDoubles--
		counter++
	}

	return counter
}
