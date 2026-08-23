func stableMountains(height []int, threshold int) (r []int) {
	for i := 1; i < len(height); i++{
		if height[i - 1] > threshold {
			r = append(r, i)
		}
	}
	return
}
