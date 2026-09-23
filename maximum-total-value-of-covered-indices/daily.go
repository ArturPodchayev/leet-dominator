package main

func minOperations(nums []int, x int) int {
	sum := sum(nums)
	target := sum - x
	if target == 0 {
		return len(nums)
	}
	if target < 0 {
		return -1
	}
	currentSum := 0
	result := 0
	l := 0
	for r := 0; r < len(nums); r++ {
		currentSum += nums[r]

		for l <= r && currentSum > target {
			currentSum -= nums[l]
			l++
		}

		if currentSum == target {
			result = max(result, r-l+1)
		}
	}
	if result == 0 {
		return -1
	}
	return len(nums) - result
}

func sum(nums []int) int {
	sum := 0
	for _, n := range nums {
		sum += n
	}
	return sum
}
