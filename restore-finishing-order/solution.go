func findValue(n int, friends []int) bool {
	left, right := 0, len(friends)
	for left < right {
		mid := left + (right-left)/2
		if friends[mid] == n {
			return true
		} else if friends[mid] > n {
			right = mid
		} else {
			left = mid+1
		}
	}
	return false
}

func recoverOrder(order []int, friends []int) []int {
	arr := make([]int, 0)
	for _, v := range order {
		if findValue(v, friends) {
			arr = append(arr, v)
		}
	}
	return arr
}
