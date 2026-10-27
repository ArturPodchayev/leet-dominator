func createGrid(rows, cols int) []string {
	a := make([]string, rows)
	for r := range rows - 1 {
		a[r] = "." + strings.Repeat("#", cols-1)
	}
	a[rows-1] = strings.Repeat(".", cols)
	return a
}
