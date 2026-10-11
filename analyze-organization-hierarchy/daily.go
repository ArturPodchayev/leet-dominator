func sumOfSquares(nums []int) int {
	sqrSum, i := 0, 1
	for i <= len(nums) {
		if len(nums)%i == 0 {
			sqrSum += nums[i-1] * nums[i-1]
		}
		i++
	}
	return sqrSum
}
