func min(a, b int32) int32 {
	if a <= b {
		return a
	}
	return b
}

func minCost(nums []int, k int) int {
	n := len(nums)
	dp := make([]int32, n)
	dp[0] = int32(k)
	counts := make([]int16, n)
	countsTmp := make([]int16, n)
	counts[nums[0]] = 1
	onceCount := 1
	for i := 1; i < n; i++ {
		num := nums[i]
		switch counts[num] {
		case 0:
			onceCount++
		case 1:
			onceCount--
		}
		counts[num]++
		dp[i] = int32(i + 1 - onceCount + k)
		if onceCount <= i {
			copy(countsTmp, counts)
			onceCountTmp := onceCount
			for j := 0; j < i; j++ {
				num = nums[j]
				switch countsTmp[num] {
				case 1:
					onceCountTmp--
				case 2:
					onceCountTmp++
				}
				countsTmp[num]--
				dp[i] = min(dp[i], dp[j]+int32(i-j-onceCountTmp+k))
			}
		}
	}
	return int(dp[n-1])
}
