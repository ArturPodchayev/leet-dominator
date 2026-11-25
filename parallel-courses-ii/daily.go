func smallestUniqueSubarray(nums []int) int {
	n := len(nums)
	check := func(length int) bool {
		counts := make(map[uint64]uint16, n-length+1)
		unique := 0
		add := func(h uint64) {
			switch counts[h]++; counts[h] {
			case 1:
				unique++
			case 2:
				unique--
			}
		}
		const B = 37
		var h, pow uint64 = 0, 1
		for i := range length {
			pow *= B
			h = h*B + uint64(nums[i])
		}
		add(h)
		for i := length; i < n; i++ {
			h = h*B - uint64(nums[i-length])*pow + uint64(nums[i])
			add(h)
		}
		return unique > 0
	}
	lo, hi := 1, n
	for lo < hi {
		mid := (lo + hi) / 2
		if check(mid) {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}
