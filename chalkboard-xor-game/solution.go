func xorGame(nums []int) bool {
	cumul:= 0
	odds := make([]bool, 16)
	var drawers, ones int
	for _, v := range nums {
		cumul^=v
		ones = 0
		for i := 0; i < 16; i++ {
			if v%2 == 1 {
				odds[i] = !odds[i]
				ones++
			}
			v = v >> 1
			if v == 0 {
				break
			}
		}
		if ones%2 == 0 {
			drawers++
		}
	}
	cnt := 0
	odpos := make([]int, 0)
	for i, v := range odds {
		if v {
			cnt++
		}
		odpos = append(odpos, i)
	}

	if cumul==0 || cnt%2 == 0 && drawers%2 == 0 || cnt%2 == 1 && drawers%2 == 1 {
		return true
	}
	return false
}
