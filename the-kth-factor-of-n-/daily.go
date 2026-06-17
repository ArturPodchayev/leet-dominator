func processStr(s string, k int64) byte {
	l := int64(0)
	for i := range len(s) {
		switch s[i] {
		case '*':
			l = max(l-1, 0)
		case '#':
			l <<= 1
		case '%':
			// no op
		default:
			l++
		}
	}

	if l <= k {
		return '.'
	}

	for i := len(s) - 1; 0 <= i; i-- {
		switch s[i] {
		case '*':
			l++

		case '#':
			l >>= 1
			if l <= k {
				k -= l
			}

		case '%':
			k = l - k - 1

		default:
			l--
			if l == k {
				return s[i]
			}
		}
	}

	return '.'
}
