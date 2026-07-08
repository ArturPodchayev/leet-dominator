func sumAndMultiply(s string, queries [][]int) []int {
	const mod int = 1e9 + 7
	sLen := len(s)
	hashes := make([]int, sLen+1)
	digitSums := make([]int, sLen+1)
	digitCounts := make([]int, sLen+1)
	pows10 := make([]int, sLen+1)
	pows10[0] = 1
	for i := range s {
		digit := int(s[i] - '0')
		if digit != 0 {
			hashes[i+1] = (hashes[i]*10 + digit) % mod
			digitSums[i+1] = digitSums[i] + digit
			digitCounts[i+1] = digitCounts[i] + 1
		} else {
			hashes[i+1] = hashes[i]
			digitSums[i+1] = digitSums[i]
			digitCounts[i+1] = digitCounts[i]
		}
		pows10[i+1] = (pows10[i] * 10) % mod
	}

	answers := make([]int, len(queries))
	for i, query := range queries {
		left, right := query[0], query[1]+1
		digitCount := digitCounts[right] - digitCounts[left]
		pow := pows10[digitCount]
		x := (hashes[right] - (hashes[left]*pow)%mod + mod) % mod
		xDigitSum := digitSums[right] - digitSums[left]
		answers[i] = (x * xDigitSum) % mod
	}
	return answers
}
