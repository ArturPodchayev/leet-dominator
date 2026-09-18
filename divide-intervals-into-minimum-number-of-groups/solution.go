
func minGroups(intervals [][]int) int {
	return countGroups(
		sortTimes(extractTimes(intervals)),
	)
}

func extractTimes(intervals [][]int) ([]int, []int) {
	startTimes := make([]int, len(intervals))
	endTimes := make([]int, len(intervals))
	
	for i, interval := range intervals {
		startTimes[i] = interval[0]
		endTimes[i] = interval[1]
	}
	
	return startTimes, endTimes
}

func sortTimes(startTimes, endTimes []int) ([]int, []int) {
	sort.Ints(startTimes)
	sort.Ints(endTimes)
	return startTimes, endTimes
}

func countGroups(startTimes, endTimes []int) int {
	endPtr, groupCount := 0, 0
	
	for _, start := range startTimes {
		if start > endTimes[endPtr] {
			endPtr++
		} else {
			groupCount++
		}
	}
	
	return groupCount
}
