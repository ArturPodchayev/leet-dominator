
func minOperations(nums []int, x int, k int) int64 {
	operations := make([]int64, len(nums)-x+1)
	//init slideWindow calculate operations
	slideWindow := make([]int, x)
	copy(slideWindow, nums[:x])
	sort.Slice(slideWindow, func(i, j int) bool {
		return slideWindow[i] < slideWindow[j]
	})
	var total int64
	for i := range slideWindow {
		total += int64(slideWindow[i])
	}
	dpO, lastIndex, sumLeft := getOperations(slideWindow, total, 0, 0)
	operations[0] = dpO
	for i := 1; i < len(nums)-x+1; i++ {
		//update slide window, insert sort
		slideWindow, lastIndex, sumLeft = addRemove(slideWindow, nums[i-1], nums[i-1+x], lastIndex, sumLeft)
		total += int64(nums[i-1+x] - nums[i-1])
		//get operations of each index
		dpO, lastIndex, sumLeft = getOperations(slideWindow, total, lastIndex, sumLeft)
		operations[i] = dpO
	}
	//DP get min minOperations
	dp := make([][]int64, len(nums))
	for i := range dp {
		dp[i] = make([]int64, k+1)
	}
	for i := len(operations) - (k-1)*x - 1; i >= 0; i-- {
		minOperations0(operations, dp, i, k, x)
	}
	return dp[0][k]
}
func minOperations0(operations []int64, dp [][]int64, start, k, x int) int64 {
	if k == 0 {
		return 0
	}
	if dp[start][k] > 0 {
		return dp[start][k]
	}
	var rs int64 = -1
	for i := start; i <= len(operations)-(k-1)*x-1; i++ {
		if dp[i][k] > 0 {
			if rs == -1 || rs > dp[i][k] {
				rs = dp[i][k]
			}
			break
		}
		dp[i][k] = operations[i] + minOperations0(operations, dp, i+x, k-1, x)
		if rs == -1 || rs > dp[i][k] {
			rs = dp[i][k]
		}
	}
	dp[start][k] = rs
	return rs
}
func addRemove(nums []int, x int, y int, lastIndex int, sumLeft int64) ([]int, int, int64) {
	idx, _ := sort.Find(len(nums), func(i int) int {
		return x - nums[i]
	})
	if idx < lastIndex {
		lastIndex--
		sumLeft -= int64(x)
	}
	copy(nums[idx:len(nums)-1], nums[idx+1:])
	idy, _ := sort.Find(len(nums), func(i int) int {
		return y - nums[i]
	})
	if idy == len(nums) {
		idy--
	} else {
		copy(nums[idy+1:], nums[idy:len(nums)-1])
	}
	nums[idy] = y
	if idy < lastIndex {
		lastIndex++
		sumLeft += int64(y)
	}
	return nums, lastIndex, sumLeft
}
func getOperations(slideWindow []int, total int64, lastIndex int, sumLeft int64) (int64, int, int64) {
	rs := int64(slideWindow[lastIndex])*int64(lastIndex) - 2*sumLeft + total - int64(slideWindow[lastIndex])*int64(len(slideWindow)-lastIndex)
	sumCheck := sumLeft + int64(slideWindow[lastIndex])
	//try from lastIndex -> to len(slideWindow)
	for i := lastIndex + 1; i < len(slideWindow); i++ {
		rsi := int64(slideWindow[i])*int64(i) - 2*sumCheck + total - int64(slideWindow[i])*int64(len(slideWindow)-i)
		if rsi <= rs {
			rs = rsi
			lastIndex = i
			sumLeft, sumCheck = sumCheck, sumCheck+int64(slideWindow[i])
		} else {
			break
		}
	}
	//try from lastIndex -> 0
	for i := lastIndex - 1; i >= 0; i-- {
		sumCheck := sumLeft - int64(slideWindow[i])
		rsi := int64(slideWindow[i])*int64(i) - 2*sumCheck + total - int64(slideWindow[i])*int64(len(slideWindow)-i)
		if rsi <= rs {
			rs = rsi
			lastIndex = i
			sumLeft = sumCheck
		} else {
			break
		}
	}
	return rs, lastIndex, sumLeft
}
