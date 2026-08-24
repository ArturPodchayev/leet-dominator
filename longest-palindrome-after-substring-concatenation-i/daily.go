func stoneGameVIII(stones []int) int {
	px := make([]int, len(stones))
	px[0] = stones[0]
	for i := 1; i < len(px); i++ {
		px[i] = stones[i] + px[i-1]
	}
	cache := make([]int, len(stones))
	cache[len(px)-1] = px[len(px)-1]
	ans := cache[len(px)-1] 
	for i := len(px) - 2; i >= 1; i-- {
		cache[i] = max(cache[i+1], px[i]-cache[i+1])
		ans = max(ans, cache[i])
	}
	return ans
}
