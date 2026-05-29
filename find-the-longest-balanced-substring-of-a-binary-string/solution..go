func findTheLongestBalancedSubstring(s string) int {
	zero, one := 0, 0 // current count on 0 and 1
	var prev rune
	res := 0
	for _, ch := range s {
		if ch == '0' { 
			if prev == '1' { // 10 = reset counters
				zero = 0
			    one = 0                
			}
			zero++
		} else {
			one++
			if 2*min(one, zero) > res {
				res = 2 * min(one, zero)
			}
		}
		prev = ch
	}
	return res
}
