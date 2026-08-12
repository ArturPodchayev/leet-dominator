func maxSubarrayLength(nums []int, k int) int {
	frequency := make(map[int]int)
	left, maxLength := 0, 0

	for right, value := range nums {
		frequency[value]++

		for frequency[value] > k {
			frequency[nums[left]]--
			left++
		}

		if length := right - left + 1; length > maxLength {
			maxLength = length
		}
	}

	return maxLength
}
