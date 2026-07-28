func smallestPalindrome(s string) string {
	freq := make([]int, 26)

	for i := 0; i < len(s); i++ {
		freq[s[i]-'a']++
	}

	result := make([]byte, len(s))

	left, right := 0, len(s)-1

	for i := 0; i < 26; i++ {
		ch := byte('a' + i)

		for pairs := freq[i] / 2; pairs > 0; pairs-- {
			result[left] = ch
			result[right] = ch

			left++
			right--
		}

		if freq[i]%2 == 1 {
			result[len(s)/2] = ch
		}
	}

	return string(result)
}
