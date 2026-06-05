func totalWaviness(num1 int64, num2 int64) int64 {
	return count(num2) - count(num1-1)
}

func count(n int64) int64 {
	if n < 100 {
		return 0
	}

	var ans int64

	for p := 0; p < 1000; p++ {
		r, m, l := p%10, p/10%10, p/100

		if !((m > l && m > r) || (m < l && m < r)) {
			continue
		}

		blockedLeadingZero := int64(0)
		if p < 100 {
			blockedLeadingZero = 1
		}

		for mult := int64(1); mult*100 <= n; mult *= 10 {
            if n < 100 {
                return 0
            }
            
			pre := n / (mult * 1000)
			cur := (n / mult) % 1000
			suf := n % mult

			if cur > int64(p) {
				ans += (pre - blockedLeadingZero + 1) * mult
			} else if cur == int64(p) {
				if pre >= blockedLeadingZero {
					ans += max(int64(0), pre-blockedLeadingZero)*mult + suf + 1
				}
			} else {
				ans += max(int64(0), pre-blockedLeadingZero) * mult
			}
		}
	}

	return ans
}
