func minScore(n int, roads [][]int) (ans int) {
	ans = math.MaxInt
	s := make(map[int]struct{}, n)
	s[0] = struct{}{}
	s[n] = struct{}{}
	size := len(s)
	for {
		for _, road := range roads {
			if _, ok := s[road[0]]; ok {
				s[road[1]] = struct{}{}
				ans = min(ans, road[2])
			}
			if _, ok := s[road[1]]; ok {
				s[road[0]] = struct{}{}
				ans = min(ans, road[2])
			}
		}
		if size == len(s) {
			break
		}
		size = len(s)
	}
	return ans
}
