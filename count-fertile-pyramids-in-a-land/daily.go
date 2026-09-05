var prefixMin [1_00_001]int

func firstStableIndex(nums []int, k int) int {
	maxi := -1
	n := len(nums)
	prefixMin[n-1] = nums[n-1]

	for i := n - 2; i > -1; i-- {
		prefixMin[i] = min(nums[i], prefixMin[i+1])
	}

	for i, num := range nums {
		maxi = max(maxi, num)
		if maxi-prefixMin[i] <= k {
			return i
		}
	}
	return -1
}
