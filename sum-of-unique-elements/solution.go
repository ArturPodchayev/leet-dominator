func sumOfUnique(nums []int) int {
	sum := 0
	sort.Ints(nums)
	if len(nums) > 2 {
		if nums[0] != nums[1] {
			sum += nums[0]
		}
		if nums[len(nums)-1] != nums[len(nums)-2] {
			sum += nums[len(nums)-1]
		}
	} else if len(nums) == 1 {
		sum += nums[0]
	} else if len(nums) == 2 {
		if nums[0] != nums[1] {
			sum += nums[1] + nums[0]
		}
	}
	
	
	for i := 1; i < len(nums)-1; i++ {
		if nums[i] != nums[i-1] && nums[i] != nums[i+1] {
			sum += nums[i]
		}
	}
	return sum
}
