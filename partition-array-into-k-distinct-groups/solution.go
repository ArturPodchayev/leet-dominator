func partitionArray(nums []int, k int) bool {
	if len(nums)%k != 0 {
		return false
	}

	g := len(nums) / k
	slices.Sort(nums)
	for i, j, c := 0, 0, 0; i < len(nums); i = j {
		for j, c = i+1, 1; j < len(nums) && nums[j] == nums[i] && c <= g; j++ {
			c++
		}
		if g < c {
			return false
		}
	}

	return true
}```
