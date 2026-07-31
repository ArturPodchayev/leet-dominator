func minimumPushes(word string) (res int) {
    var freq [27]uint32
	for i := range len(word) {
		freq[word[i]-'a']++
	}
	// insertion sort
	for i := 1; i < 26; i++ {
		for j := i; j > 0 && freq[j] > freq[j-1]; j-- {
			freq[j], freq[j-1] = freq[j-1], freq[j]
		}
	}
	for i := 0; freq[i] != 0; i++ {
		res += int(freq[i]) * ((i / 8) + 1)
	}
	return res
}
