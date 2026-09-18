
func maxNumOfSubstrings(s string) []string {
	ans := []string{}
	dp := make([]int, 26)
	for i := range s {
		dp[s[i]-'a']++
	}
    //Trim head and surfix
	for len(s) > 1 && s[0] == s[len(s)-1] {
		if dp[s[0]-'a'] == len(s) {
			ans = append(ans, s)
			return ans
		}
		left := 1
		right := 1
		for i := 1; i < len(s); i++ {
			if s[i] != s[i-1] {
				break
			}
			left++
		}
		for j := len(s) - 2; j >= 0; j-- {
			if s[j] != s[j+1] {
				break
			}
			right++
		}
		if dp[s[0]-'a'] == left+right {
			dp[s[0]-'a'] = 0
			s = s[left : len(s)-right]
		} else {
			break
		}
	}
	last := 0
	dpPrev := make([]int, 26)
	dpPrev[s[0]-'a']++
	for i := 1; i < len(s); i++ {
		if s[i] != s[i-1] {
			validFirst := true
			for j := range dp {
				if dp[j] != dpPrev[j] && dpPrev[j] > 0 {
					validFirst = false
					break
				}
			}
            //Checking the posibility of cutting first
			if validFirst && len(ans) == 0 {
				for j := range dp {
					dp[j] -= dpPrev[j]
				}
				ans = append(ans, s[:i])
				ans = append(ans, maxNum(dp, s[i:])...)
				break
			} else {
                //Checking the posibility from last -> i
				if i-last == dp[s[i-1]-'a'] {
					ans = append(ans, s[last:i])
				}
			}

			last = i
		}
		dpPrev[s[i]-'a']++
	}
	if len(s)-last == dp[s[len(s)-1]-'a'] {
		ans = append(ans, s[last:])
	}
	if len(ans) == 0 {
		ans = append(ans, s)
	}
	return ans
}
func maxNum(dp []int, s string) []string {
	ans := []string{}
	last := 0
	dpPrev := make([]int, 26)
	dpPrev[s[0]-'a']++
	for i := 1; i < len(s); i++ {
		if s[i] != s[i-1] {
			validFirst := true
			for j := range dp {
				if dp[j] != dpPrev[j] && dpPrev[j] > 0 {
					validFirst = false
					break
				}
			}
            //Checking the posibility of cutting first
			if validFirst && len(ans) == 0 {
				for j := range dp {
					dp[j] -= dpPrev[j]
				}
				ans = append(ans, s[:i])
				ans = append(ans, maxNum(dp, s[i:])...)
				break
			} else {
                //Checking the posibility from last -> i
				if i-last == dp[s[i-1]-'a'] {
					ans = append(ans, s[last:i])
				}
			}

			last = i
		}
		dpPrev[s[i]-'a']++
	}
	if len(s)-last == dp[s[len(s)-1]-'a'] {
		ans = append(ans, s[last:])
	}
	if len(ans) == 0 {
		ans = append(ans, s)
	}
	return ans
}
