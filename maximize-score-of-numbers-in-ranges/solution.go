func ok(start []int, mid, d int) bool {
	prev := start[0]
	for i, v := range start {
		if i == 0 {
			continue
		}
		if v - prev + d < mid {
			return false
		}
		if v - prev < mid {
			prev = prev + mid
		} else {
			prev = v
		}
	}
	return true
}

func maxPossibleScore(start []int, d int) int {
	sort.Ints(start)
	// binary search
	l := len(start)
	left := 0
	right := start[l - 1] - start[0] + d + 1
	for {
		if left > right {
			break;
		}
		mid := (left + right) / 2
		if ok(start, mid, d) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return left - 1
}
