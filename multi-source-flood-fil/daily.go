func closedIsland(grid [][]int) int {
	islands := 0
	m, n := len(grid), len(grid[0])
	directions := [][]int{{-1, 0}, {0, -1}, {1, 0}, {0, 1}}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] != 0 {
				continue
			}
			level := [][]int{{i, j}}
			border := false
			for len(level) > 0 {
				var tmp [][]int
				for _, point := range level {
					if point[0] == 0 || point[0] == m-1 || point[1] == 0 || point[1] == n-1 {
						border = true
					}
					for _, dir := range directions {
						ni, nj := point[0]+dir[0], point[1]+dir[1]
						if !(ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] == 0) {
							continue
						}
						grid[ni][nj] = 2
						tmp = append(tmp, []int{ni, nj})
					}
				}
				level = tmp
			}
			if !border {
				islands++
			}
		}
	}
	return islands
}
