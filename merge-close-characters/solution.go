func mergeCharacters(s string, k int) string {
	last := make([]int, 26)
	init := -(k + 10)
	for i := 0; i < 26; i++ {
		last[i] = init
	}
	res := make([]byte, 0, len(s))
	for i := 0; i < len(s); i++ {
		ch := s[i]
		ci := int(ch - 'a')
		if len(res)-last[ci] > k {
			last[ci] = len(res)
			res = append(res, ch)
		}
	}
	return string(res)
}
