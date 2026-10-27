func isSubstringPresent(s string) bool {
	n := len(s)
	reversedStr := reverse(s)

	for i, j := 0, 1; j < n; {
		x, y := s[i], s[j]
		if isExists(x, y, reversedStr) {
			return true
		}
		i++
		j++
	}

	return false
}

func isExists(x, y byte, s string) bool {
	n := len(s)
	for i, j := 0, 1; j < n; {
		xV, yV := s[i], s[j]
		if x == xV && y == yV {
			return true
		}
		i++
		j++
	}

	return false
}

func reverse(s string) string {
	n := len(s)
	results := []byte(s)

	for i := 0; i < n/2; i++ {
		results[i], results[n-1-i] = results[n-1-i], results[i]
	}

	return string(results)
}
