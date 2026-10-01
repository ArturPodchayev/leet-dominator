func minLengthAfterRemovals(nums []int) int {
	maxCount, current, l := 0, 0, 0
	for r, num := range nums {
		if current != num {
			current = num
			if maxCount < r-l {
				maxCount = r - l
			}
			l = r
		}
	}
	if maxCount < len(nums)-l-1 {
		maxCount = len(nums) - l
	}
    if maxCount <= len(nums)/2 {
		return len(nums) % 2
	} 
	return 2*maxCount - len(nums)
}
