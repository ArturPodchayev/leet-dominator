func countElements(nums []int, k int) int {
	// time: O(n log n), space: O(log n) (for sorting)

	if k == 0 {
		return len(nums)
	}

	slices.Sort(nums)
	i := len(nums) - 1 - k
	for i >= 0 && nums[i] == nums[i+1] {
		i--
	}
	return i + 1
}
