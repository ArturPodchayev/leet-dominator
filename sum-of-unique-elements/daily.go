var sum [200_001]int

func countMajoritySubarrays(nums []int, target int) int64 {
	idx, cur, r := len(nums), 0, 0
	// sum := make([]int, 2*idx+1)
	clear(sum[:idx*2+1])
	sum[idx] = 1
	for _, v := range nums {
		if v == target {
			cur += sum[idx]
			idx++
		} else {
			idx--
			cur -= sum[idx]
		}
		sum[idx]++
		r += cur
	}
	return int64(r)
}
