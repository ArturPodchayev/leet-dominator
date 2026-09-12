func colorTheArray(n int, queries [][]int) []int {
	res := make([]int, len(queries))
	m := make([]int, n)
	count := 0
	for i, querie := range queries {
		old := m[querie[0]]
		new := querie[1]
		if old != 0 {
			if querie[0]-1 >= 0 && m[querie[0]-1] == old {
				count--
			}

			if querie[0]+1 < n && m[querie[0]+1] == old {
				count--
			}
		}

		m[querie[0]] = new
		if new != 0 {
			if querie[0]-1 >= 0 && m[querie[0]-1] == new {
				count++
			}

			if querie[0]+1 < n && m[querie[0]+1] == new {
				count++
			}
		}

		res[i] = count
	}
	return res
}
