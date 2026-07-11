func vowelStrings(words []string, left int, right int) int {
	isVowel := map[byte]bool{'a': true, 'e': true, 'i': true, 'o': true, 'u': true}
	res := 0
	for _, s := range words[left : right+1] {
		if isVowel[s[0]] && isVowel[s[len(s)-1]] {
			res++
		}
	}
	return res    
}
