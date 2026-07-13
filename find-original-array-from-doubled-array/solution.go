func findOriginalArray(changed []int) []int {
	sort.Ints(changed)
	vis := make([]bool, len(changed))
	j := 1
	var res []int
	for i, n := range changed {
		if vis[i] {
			continue
		}
		if j <= i {
			j = i + 1
		}
		for j < len(changed) && changed[j] < 2*n {
			j++
		}
		if j == len(changed) || changed[j] > 2*n {
			return nil
		} else {
			vis[j] = true
			j++
			res = append(res, n)
		}
	}
	return res
}
