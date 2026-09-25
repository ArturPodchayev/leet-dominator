func maximumTastiness(price []int, k int) int {
	n := len(price)
	sort.Ints(price)
	maxDiff := price[n-1] - price[0]
	if maxDiff == 0 {
		return 0
	}
	return sort.Search(maxDiff, func(tastiness int) bool {
		minNextCandy := price[0] + tastiness
		for j, jEnd := 1, n-k+1; j <= jEnd; j++ {
			if price[j] > minNextCandy {
				minNextCandy = price[j] + tastiness
				jEnd++
				if jEnd == n {
					return false
				}
			}
		}
		return true
	})
}
