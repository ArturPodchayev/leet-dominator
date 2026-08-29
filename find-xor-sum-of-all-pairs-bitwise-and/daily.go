func lexicographicallySmallestArray(nums []int, limit int) []int {
	indexed := make([][2]int, 0, len(nums))
	for i := range nums {
		indexed = append(indexed, [2]int{i, nums[i]})
	}
	sort.Slice(indexed, func(i, j int) bool {
		return indexed[i][1] < indexed[j][1]
	})

	curGroup := 0
	origIdxToGroup := map[int]int{
		indexed[0][0]: curGroup,
	}
	curGroupIdx := map[int]int{
		curGroup: 0,
	}
	for i := 1; i < len(indexed); i++ {
		if indexed[i][1]-limit > indexed[i-1][1] {
			curGroup++
			curGroupIdx[curGroup] = i
		}
		origIdxToGroup[indexed[i][0]] = curGroup
	}

	answ := make([]int, len(nums))
	for i := range nums {
		group := origIdxToGroup[i]
		answ[i] = indexed[curGroupIdx[group]][1]
		curGroupIdx[group]++
	}
	return answ
}
