func maximumLength(s string) int {
	s = s + "#"
	magic := make([][]int, 26)
	for i := range magic {
		magic[i] = make([]int, 0, 3)
	}
	for l, r := 0, 0; r < len(s); r++ {
		if s[l] == s[r] {
			continue
		}
		currSize := r-l
		if len(magic[int(s[l]-'a')]) < 3 {
			magic[int(s[l]-'a')] = append(magic[int(s[l]-'a')], currSize)
		} else if currSize > magic[int(s[l]-'a')][0] {
			magic[int(s[l]-'a')][0] = currSize
		}
		sort.Ints(magic[int(s[l]-'a')])
        l = r
	}
	maximum := -1
	for _, ss := range magic {
		hash := make(map[int]int, 3)
		for _, size := range ss {
			hash[size]++
		}
		maxSize, maxCount := 0, 0
		for size, count := range hash {
			if size > maxSize {
				maxSize = size
				maxCount = count
			}
		}
		current := 0
		if maxSize > 0 {
			if maxCount >= 3 {
				current = maxSize
			} else if maxCount == 2 {
				current = maxSize-1
			} else {
				current = maxSize-2
				if hash[maxSize-1] > 0 {
					current = maxSize-1
				}
			}
		}
		if current > 0 && current > maximum {
			maximum = current
		}
	}
	return maximum
}
