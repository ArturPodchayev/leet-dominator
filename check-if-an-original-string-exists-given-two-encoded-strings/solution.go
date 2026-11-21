func isDigit(c byte) bool {
	return c >= '0' && c <= '9'
}

func possibleLens(s string) []int {
	ret := []int{}
	if len(s) == 1 {
		ret = append(ret, int(s[0]-'0'))
	} else if len(s) == 2 {
		ret = append(ret, int(s[0]-'0')+int(s[1]-'0'))
		ret = append(ret, int(s[0]-'0')*10+int(s[1]-'0'))
	} else {
		ret = append(ret, int(s[0]-'0')+int(s[1]-'0')+int(s[2]-'0'))
		ret = append(ret, int(s[0]-'0')*10+int(s[1]-'0')+int(s[2]-'0'))
		ret = append(ret, int(s[0]-'0')+int(s[1]-'0')*10+int(s[2]-'0'))
		ret = append(ret, int(s[0]-'0')*100+int(s[1]-'0')*10+int(s[2]-'0'))
	}
	return ret
}

func possiblyEquals(s1 string, s2 string) bool {
	cache := map[[3]int]bool{}
	var fn func(i, j, diff int) bool
	fn = func(i, j, diff int) bool {
		key := [3]int{i, j, diff}
		ret, ok := cache[key]
		if ok {
			return ret
		}
		if i == len(s1) && j == len(s2) {
			ret = diff == 0
			cache[key] = ret
			return ret
		}

		if i < len(s1) && isDigit(s1[i]) {
			ii := i
			for ii < len(s1) && isDigit(s1[ii]) {
				ii++
			}
			for _, x := range possibleLens(s1[i:ii]) {
				if fn(ii, j, diff-x) {
					ret = true
					cache[key] = ret
					return ret
				}
			}
		} else if j < len(s2) && isDigit(s2[j]) {
			jj := j
			for jj < len(s2) && isDigit(s2[jj]) {
				jj++
			}
			for _, x := range possibleLens(s2[j:jj]) {
				if fn(i, jj, diff+x) {
					ret = true
					cache[key] = ret
					return ret
				}
			}
		} else if diff == 0 {
			if i < len(s1) && j < len(s2) && s1[i] == s2[j] {
				ret = fn(i+1, j+1, 0)
				cache[key] = ret
				return ret
			}
		} else if diff > 0 {
			if i < len(s1) {
				ret = fn(i+1, j, diff-1)
				cache[key] = ret
				return ret
			}
		} else {
			if j < len(s2) {
				ret = fn(i, j+1, diff+1)
				cache[key] = ret
				return ret
			}
		}
		ret = false
		cache[key] = ret
		return ret
	}
	return fn(0, 0, 0)
}
