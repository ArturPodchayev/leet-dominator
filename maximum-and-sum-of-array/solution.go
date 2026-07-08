func maximumANDSum(A []int, ns int) int {
	mask := int(math.Pow(3, float64(ns))) - 1
	memo := make([]int, mask+1)
	return dp(len(A)-1, mask, ns, memo, A)
}

func dp(i, mask, ns int, memo []int, A []int) int {
	if memo[mask] > 0 {
		return memo[mask]
	}
	if i < 0 {
		return 0
	}
	for slot, bit := 1, 1; slot <= ns; slot, bit = slot+1, bit*3 {
		if mask/bit%3 > 0 {
			memo[mask] = max(memo[mask], (A[i]&slot)+dp(i-1, mask-bit, ns, memo, A))
		}
	}
	return memo[mask]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
